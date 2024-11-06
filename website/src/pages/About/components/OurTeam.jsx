
export default function OurTeam() {
    const teamMembers = [
        {
            name: "Khải",
            position: "Team Leader",
            imgSrc: "./src/assets/img/About/khai.jpg",
        },
        {
            name: "Phước",
            position: "Member",
            imgSrc: "./src/assets/img/About/phuoc.jpg",
        },
        { name: "Vũ", position: "Member", imgSrc: "./src/assets/img/About/vu.jpg" },
    ];

    const renderTeamMember = () => {
        return teamMembers.map((member, index) => (
            <div
                key={index}
                className="relative min-w-[70px] h-full rounded-[30px] flex items-end flex-grow transition-all duration-500 ease-in-out hover:flex-grow-[7]"
            >
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                    src={member.imgSrc}
                    alt={member.name}
                />
                <div className="relative flex items-end p-4 group">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="20"
                        height="20">
                        <path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM48 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 240l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm368-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM48 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L64 96c-8.8 0-16 7.2-16 16zM416 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM160 128l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L192 96c-17.7 0-32 14.3-32 32zm32 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0z" />
                    </svg>
                    <div className="ml-2 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                        <h2 className="ml-2 transform translate-y-full opacity-0 transition-opacity transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 text-dark font-bold">
                            {member.position}
                        </h2>
                        <h3 className="ml-2 transform translate-y-full opacity-0 transition-opacity transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 text-dark font-bold">
                            {member.name}
                        </h3>
                    </div>
                </div>
            </div>
        ));
    };
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white mb-6">
                Meet Our Team
            </h1>
            <div className="w-full max-w-[1024px] h-[400px] flex gap-4">
                {renderTeamMember()}
            </div>
        </div>
    )
}
