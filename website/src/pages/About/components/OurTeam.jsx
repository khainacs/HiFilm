import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
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
                className="relative min-w-[70px] h-full rounded-[30px] flex items-end flex-grow transition-all duration-500 ease-in-out hover:flex-grow-[7]">
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-[30px]"
                    src={member.imgSrc}
                    alt={member.name}
                />
                <div className='hover:bg-black opacity-80 w-full rounded-bl-[30px] rounded-br-[30px]'>
                    <div className="relative flex items-end p-4 group">
                        <FontAwesomeIcon icon={faUserTie} size="2x" className='text-white'/>
                        <div className="ml-2 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                            <h2 className="ml-2 transform translate-y-full opacity-0 transition-opacity transition-transform duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 text-dark font-bold text-2xl text-Gray-Black-100">
                                {member.position} - {member.name}
                            </h2>
                        </div>
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
