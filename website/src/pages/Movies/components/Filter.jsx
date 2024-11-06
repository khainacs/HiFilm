import Dropdown from "./Dropdown";

const  dropdown_update = [
    { name: "Năm Sản Xuất"},
    { name: "Mới Cập Nhật"},
    { name: "Lượt Xem"},
   
];

const dropdown_categories = [
    { name: "Thể Loại" },
    { name: "Hành Động" },
    { name: "Hài Hước" },
    { name: "Kinh Dị" },
    { name: "Tâm Lý" },
    { name: "Phiêu Lưu" },
    { name: "Khoa Học Viễn Tưởng" },
    { name: "Lãng Mạn" },
    { name: "Hoạt Hình" },
    { name: "Tài Liệu" },
    { name: "Drama" },
];

const dropdown_year = [
    { name: "Năm Sản Xuất" },
    { name: "2024" },
    { name: "2023" },
    { name: "2022" },
    { name: "2021" },
    { name: "2020" },
    { name: "2019" },
    { name: "2018" },
    { name: "2017" },
    { name: "2016" },
];
const dropdown_country = [
    { name: "Quốc Gia" },
    { name: "Việt Nam" },
    { name: "Mỹ" },
    { name: "Hàn Quốc" },
    { name: "Nhật Bản" },
    { name: "Trung Quốc" },
    { name: "Ấn Độ" },
    { name: "Pháp" },
    { name: "Đức" },
    { name: "Anh" },
    { name: "Ý" },
];

const dropdown_products = [
    {name: "Phim Bộ/Lẻ"},
    {name: "Phim Bộ"},
    {name: "Phim Lẻ"},
    {name: "TV Show"},
    {name: "Hoạt Hình"},
];
export default function Filter(){
    return (
        <div className='w-full bg-Gray-Black-800 text-white p-4 pr-7'>
          <div className="flex flex-col gap-3 border-b-[1px]">
            {/* Row 1 - Filters */}
            <div className='grid grid-cols-4 gap-1.5'>
              <div className="text-[4px] border border-white rounded-md p-1">
                <Dropdown items={dropdown_update}/>
              </div>
              <div className="text-[4px] border border-white rounded-md p-1">
                <Dropdown items={dropdown_categories}/>
              </div>
              <div className="text-[4px] border border-white rounded-md p-1">
                <Dropdown items={dropdown_year}/>
              </div>
              <div className="text-[4px] border border-white rounded-md p-1">
                <Dropdown items={dropdown_country}/>
              </div>
            </div>
    
            {/* Row 2 - Product Dropdown and Search */}
            <div className='grid grid-cols-4 gap-1.5'>
              <div className="text-[10px] border border-white rounded-md p-1">
                <Dropdown items={dropdown_products}/>
              </div>
              <div className="col-span-3">
                <input 
                  type="text"  
                  className='bg-transparent w-1/2 px-1.5 text-[10px] py-1.5 border rounded-md
                    focus:outline-none focus:border-Light-Cream-500 hover:border-Light-Cream-500' 
                  placeholder='Từ khóa...'
                />               
              </div>
            </div>
    
            {/* Row 3 - Search Button */}
            <div className='w-full flex justify-center mb-2'>
              <button className='w-1/5 rounded-md border py-2 text-[8px] hover:bg-white hover:text-Gray-Black-800 transition-colors'>
                Tìm Kiếm
              </button>
            </div>
          </div>
        </div>
      );
}