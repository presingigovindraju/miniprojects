import React from "react";
import smile from "../Images/smile.png"
import laptopSeeing from "../Images/laptopSeeing.png"
import yes from "../Images/yes.png"
import coding from "../Images/coding.png"


const SmallDiv = () => {
  return (
    <div className="w-[100vw] pt-[65px] pb-[65px]  bg-[#faf9ff] flex flex-wrap items-center justify-center ">
        <div className="m-[10px] overflow-hidden w-[230.63px] h-[177.39px]  rounded-xl flex flex-col items-center">
          <img className="h-[125.79px] w-[100%]" src={smile} alt="smileImg"/>
          <h1 className="text-[#1d2231] font-bold text-[14px]">Web Design</h1>
          <h4 className="text-[#73788a]">Web App Application</h4>
        </div>
        <div className="m-[10px] overflow-hidden w-[230.63px] h-[177.39px]  rounded-xl flex flex-col items-center">
          <img className="h-[125.79px] w-[100%]" src={yes} alt="yesImg"/>
          <h1 className="text-[#1d2231] font-bold text-[14px]">Web Design</h1>
          <h4 className="text-[#73788a]">Web App Application</h4>
        </div>
        <div className="m-[10px] overflow-hidden w-[230.63px] h-[177.39px]  rounded-xl flex flex-col items-center">
          <img className="h-[125.79px] w-[100%]" src={laptopSeeing} alt="laptopSeeingImg"/>
          <h1 className="text-[#1d2231] font-bold text-[14px]">Web Design</h1>
          <h4 className="text-[#73788a]">Web App Application</h4>
        </div>
        <div className="m-[10px] overflow-hidden w-[230.63px] h-[177.39px]  rounded-xl flex flex-col items-center">
          <img className="h-[125.79px] w-[100%]" src={coding} alt="codingImg"/>
          <h1 className="text-[#1d2231] font-bold text-[14px]">Web Design</h1>
          <h4 className="text-[#73788a]">Web App Application</h4>
        </div>
    </div>
  );
};

export default SmallDiv;
