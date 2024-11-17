import os
import subprocess
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS

# Khởi tạo Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
def create_master_playlist(output_folder):
    """Tạo master playlist cho HLS"""
    master_playlist = os.path.join(output_folder, "master.m3u8")
    with open(master_playlist, "w") as file:
        file.write("#EXTM3U\n")
        file.write("#EXT-X-STREAM-INF:BANDWIDTH=1000000,RESOLUTION=1280x720\n")
        file.write("output_1280x720.m3u8\n")
        file.write("#EXT-X-STREAM-INF:BANDWIDTH=500000,RESOLUTION=854x480\n")
        file.write("output_854x480.m3u8\n")
        file.write("#EXT-X-STREAM-INF:BANDWIDTH=300000,RESOLUTION=640x360\n")
        file.write("output_640x360.m3u8\n")
    print(f"Master playlist created at: {master_playlist}")
    return master_playlist

def choose_video_quality(bandwidth):
    """Chọn luồng video phù hợp dựa trên băng thông"""
    if bandwidth < 2:
        return '360p'
    elif bandwidth < 4:
        return '480p'
    else:
        return '720p'

def get_bandwidth(video_url):
    """Tính toán băng thông bằng cách tải một phần video từ URL"""
    start_time = time.time()
    response = requests.get(video_url, stream=True, timeout=10)
    
    # Tải một phần nhỏ của video (ví dụ: 1MB)
    total_downloaded = 0
    for chunk in response.iter_content(chunk_size=1024):
        total_downloaded += len(chunk)
        if total_downloaded >= 1024 * 1024:  # Chỉ tải 1MB
            break

    end_time = time.time()
    download_time = end_time - start_time  # Thời gian tải

    # Tính toán băng thông (Mbps)
    bandwidth = (total_downloaded * 8) / (download_time * 1000000)
    print(f"Estimated bandwidth: {bandwidth:.2f} Mbps")
    return bandwidth

def encode_video_multiple_resolutions(input_file):
    """Mã hóa video với nhiều độ phân giải và tạo HLS segments cho từng độ phân giải"""
    resolutions = [(1280, 720), (854, 480), (640, 360)]  # Các độ phân giải khác nhau
    output_folder = os.path.join(UPLOAD_FOLDER, f"{os.path.splitext(os.path.basename(input_file))[0]}_multi_res")
    os.makedirs(output_folder, exist_ok=True)

    # Lệnh ffmpeg để mã hóa video cho mỗi độ phân giải
    commands = []
    for width, height in resolutions:
        resolution_output_playlist = os.path.join(output_folder, f"output_{width}x{height}.m3u8")
        segment_pattern = os.path.join(output_folder, f"segment_{width}x{height}_%03d.ts")
        command = [
            "ffmpeg", "-i", input_file,
            "-c:v", "libx264", "-c:a", "aac",
            "-b:v", "1000k", "-b:a", "128k",
            "-s", f"{width}x{height}",
            "-hls_time", "10", "-hls_list_size", "0",
            "-hls_segment_filename", segment_pattern,
            resolution_output_playlist
        ]
        commands.append(command)

    # Thực thi các lệnh mã hóa
    try:
        for command in commands:
            subprocess.run(command, check=True)
        print(f"Encoding complete for multiple resolutions: {output_folder}")
        return output_folder
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        return None

def encode_and_segment_video(input_file):
    """Mã hóa và chia video thành HLS segments"""
    # Lấy tên file mà không có phần mở rộng
    filename = os.path.splitext(os.path.basename(input_file))[0]

    # Tạo tên thư mục con với thời gian hiện tại
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_folder = os.path.join(UPLOAD_FOLDER, f"{filename}_{timestamp}")

    # Tạo thư mục nếu chưa tồn tại
    os.makedirs(output_folder, exist_ok=True)

    # Đường dẫn cho file playlist và segment
    output_playlist = os.path.join(output_folder, "output.m3u8")
    segment_pattern = os.path.join(output_folder, "segment_%03d.ts")

    # Lệnh ffmpeg để mã hóa và chia segment
    command = [
        "ffmpeg", "-i", input_file,
        "-c:v", "libx264", "-c:a", "aac",
        "-b:v", "1000k", "-b:a", "128k",
        "-hls_time", "10", "-hls_list_size", "0",
        "-hls_segment_filename", segment_pattern,
        output_playlist
    ]

    try:
        subprocess.run(command, check=True)
        print(f"Encoding complete: {output_playlist}")
        return output_folder, "output.m3u8"
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        return None, None

@app.route('/api/upload', methods=['POST'])
def upload_video():
    """API để upload video và mã hóa thành HLS"""
    file = request.files.get('file')
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    # Lưu file vào thư mục uploads
    input_file = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(input_file)

    # Mã hóa video và tạo HLS segments
    output_folder = encode_video_multiple_resolutions(input_file)

    if not output_folder:
        return jsonify({"error": "Encoding failed"}), 500

    # Tạo master playlist
    master_playlist = create_master_playlist(output_folder)

    # Trả về đường dẫn đến master.m3u8 cho frontend
    return jsonify({
        "url": f"/video/{os.path.basename(output_folder)}/master.m3u8"
    })


@app.route('/video/<path:filename>')
def stream_video(filename):
    """Phục vụ các file .m3u8 và .ts từ thư mục uploads"""
    return send_from_directory(UPLOAD_FOLDER, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
