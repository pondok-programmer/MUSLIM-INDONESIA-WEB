import React from "react";

const InputLanding = ({type, placeholder}) => {
  return (
      <input type={type} placeholder={placeholder} className="w-[300px] md:w-[400px] lg:w-[300px] border-b pt-3 md:pt-10 border-b-white bg-inherit outline-none text-[20px] text-white placeholder:text-white"/>
  );
};

export default InputLanding;
