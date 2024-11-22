import  { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const DropdownMenu = ({ items }) => {
    const [selectedTitle, setSelectedTitle] = useState('');

    // Set default selected item to first item when component mounts
    useEffect(() => {
        if (items && items.length > 0) {
            setSelectedTitle(items[0].name);
        }
    }, [items]);

    const handleItemClick = (item) => {
        setSelectedTitle(item.name);
    };

    return (
        <div className="group relative inline-block w-full text-[10px]">
            <button className="w-full text-white hover:text-Soft-Purple-500 flex items-center justify-between p-0.5">
                <span>{selectedTitle}</span>
                <FontAwesomeIcon 
                    icon={faAngleDown} 
                    className="w-2 h-2 transform transition-transform duration-300 ease-in-out
                             group-hover:rotate-180"
                />
            </button>
            <div className="absolute left-0 right-0 mt-0.5 rounded-sm shadow-lg bg-Gray-Black-500 opacity-0 invisible 
                          group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="rounded-sm ring-1 ring-black ring-opacity-5">
                    <div className="py-0.5 max-h-32 overflow-y-auto">
                        {items?.map((item, index) => (
                            <a
                                key={index}
                                href={item.path}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleItemClick(item);
                                }}
                                className={`block px-1 py-0.5 text-white hover:bg-Soft-Purple-500 
                                         hover:text-white transition-colors duration-150
                                         ${selectedTitle === item.name ? 'bg-Soft-Purple-500' : ''}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

DropdownMenu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired
        })
    ).isRequired
};
export default DropdownMenu;