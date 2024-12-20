import PropTypes from 'prop-types';

const LineUnder = ({ children }) => {
  return (
    <div className="relative inline-flex flex-col items-center" >
      <span className="text-white text-4xl font-sans">{children}</span>      
      <div className="relative w-full h-3">
        <div  className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-Bright-Pink-500 rounded-b-full"></div>
        <div  className="absolute w-8 bottom-[-4px] left-[45%] right-[45%] h-2 bg-Bright-Pink-500 rounded-b-2xl"></div>
      </div>
    </div>
  );
};

LineUnder.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LineUnder;