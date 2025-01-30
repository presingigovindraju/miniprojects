import React from "react";
import smile from "../Images/smile.png";
import laptopSeeing from "../Images/laptopSeeing.png";
import yes from "../Images/yes.png";
import coding from "../Images/coding.png";
import spectsBoy from "../Images/spectsBoy.png";
import walkingGirl from "../Images/walkingGirl.png";
import explainingGirl from "../Images/explainingGirl.png";

const SmallDiv = () => {
  return (
    <div>
      <div className="w-[100vw] pt-[65px] pb-[65px]  bg-[#faf9ff] flex flex-wrap items-center justify-center">
        <div className="m-[10px] overflow-hidden w-[230.63px] h-[177.39px]  rounded-xl flex flex-col items-center">
          <img className="h-[125.79px] w-[100%]" src={smile} alt="smileImg" />
          <h1 className="text-[#1d2231] font-bold text-[14px]">Web Design</h1>
          <h4 className="text-[#73788a]">Web App Application</h4>
        </div>
        <div className="m-[10px] overflow-hidden w-[230.63px] h-[177.39px]  rounded-xl flex flex-col items-center">
          <img className="h-[125.79px] w-[100%]" src={yes} alt="yesImg" />
          <h1 className="text-[#1d2231] font-bold text-[14px]">Web Design</h1>
          <h4 className="text-[#73788a]">Web App Application</h4>
        </div>
        <div className="m-[10px] overflow-hidden w-[230.63px] h-[177.39px]  rounded-xl flex flex-col items-center">
          <img
            className="h-[125.79px] w-[100%]"
            src={laptopSeeing}
            alt="laptopSeeingImg"
          />
          <h1 className="text-[#1d2231] font-bold text-[14px]">Web Design</h1>
          <h4 className="text-[#73788a]">Web App Application</h4>
        </div>
        <div className="m-[10px] overflow-hidden w-[230.63px] h-[177.39px]  rounded-xl flex flex-col items-center">
          <img className="h-[125.79px] w-[100%]" src={coding} alt="codingImg" />
          <h1 className="text-[#1d2231] font-bold text-[14px]">Web Design</h1>
          <h4 className="text-[#73788a]">Web App Application</h4>
        </div>
      </div>

      <div className=" w-[100vw] pt-[65px] pb-[65px]  flex flex-wrap items-center justify-center">
        {/* <div className="w-[75vw]  border-red-700 border-2 flex"> */}
          <div className="w-[41vw]    flex relative items-center justify-center h-[700px] overflow-hidden">
            <img className="absolute w-[300px] h-[367.5px] top-[0px] left-[0px]" src={walkingGirl} alt="walkingGirlImg"/>
            <img className="absolute w-[210px] h-[187.5px] top-[100px] left-[340px]" src={spectsBoy} alt="spectsBoyImg"/>
            <img className="w-[367.5px] h-[375px] absolute top-[325px] left-[185px]" src={explainingGirl} alt="explainingGirlImg"/>
          </div>


          <div className="w-[27vw] ">
            <button type="button" className="w-[118.14px] h-[26.25px]  rounded-xl text-[11px] text-[#e49c82] bg-[#fcf1ef] ">KNOW ABOUT US</button>
            <h2 className="mt-[5px] text-[30px] font-bold text-[#1a2235]">know About Histudy Learning Platform</h2>
            <p className="text-[13.5px] mt-[18px] text-[#6c7384]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>


            <div className="mt-[35px]  flex items-start justify-normal">
              <div className=" w-[13%] flex items-start justify-center">
                <div className=" w-[40px] bg-[#fcf1ef] rounded-[50%] h-[40px]"></div>
              </div>
              <div className="w-[87%]  flex">
                <div >
                <h3 className="text-[14.5px] font-medium text-[#6B7385]">Flexible Classes</h3>
                <p className="text-[11.5px] text-[#6B7385] mt-[8px] font-semibold">
                  It is a long established fact that a reader will be distracted
                  by this on readable content of when looking at its layout.
                </p>
                </div>
              </div>
            </div>

            <div className="mt-[35px]  flex items-start justify-normal">
              <div className=" w-[13%] flex items-start justify-center">
                <div className="w-[40px] bg-[#e4e9fd] rounded-[50%] h-[40px]"></div>
              </div>
              <div className="w-[87%] flex">
                <div >
                <h3 className="text-[14.5px] font-medium text-[#6B7385]">Learn From Anywhere</h3>
                <p className="text-[11.5px] text-[#6B7385] mt-[8px] font-semibold">Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.</p>
                </div>
              </div>
            </div>


            
            <button className="bg-blue-600 mt-[65px] w-[145.79px] text-[#fffdff] h-[45px] border-red-400 rounded-xl" type="button">
              More About Us
              </button>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SmallDiv;
