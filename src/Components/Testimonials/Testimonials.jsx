import React from "react";
import userProgress from "../../assets/images/userProgress.png";
import topUser from "../../assets/images/topUser.png";
import num2 from "../../assets/images/num-2.svg";
import num3 from "../../assets/images/num-3.svg";
import num4 from "../../assets/images/num-4.svg";
import right from "../../assets/icons/right.svg";
import i13 from "../../assets/icons/i13.svg";
import i14 from "../../assets/icons/i14.svg";
import estTime from "../../assets/icons/estTime.svg";
import correct from "../../assets/icons/correct.svg";
import lamb from "../../assets/icons/lamb.svg";
import performance from "../../assets/icons/performance.svg";

function TestCard({ children }) {
  return (
    <div className="w-full flex flex-col justify-center relative items-center shadow-lg bg-white rounded-[16px]">
      {children}
    </div>
  );
}


const CalendarSlider = () => {
  const days = [
    { day: "أ", date: 16, status: "inactive" },
    { day: "ح", date: 15, status: "inactive" },
    { day: "س", date: "", status: "selected" },
    { day: "ج", date: "", status: "disabled" },
    { day: "خ", date: "", status: "completed" },
    { day: "أ", date: "", status: "completed" },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-4 font-bold pb-6 pt-3">
      <div className="flex items-center justify-evenly  w-full gap-4 text-lg">
        <button className="text-xl text-gray-600">{"‹"}</button>
        <div className="text-black flex  flex-row-reverse items-center gap-2">
          <span>يناير</span>
          <span className="bg-green-600 text-white text-sm px-2 py-0.5 rounded-full">
            10
          </span>
        </div>
        <button className="text-xl text-gray-600">{"›"}</button>
      </div>

      {/* Days Slider */}
      <div className="flex w-[98%] gap-[4px] justify-center 2xl:gap-4">
        {days.map((d, i) => {
          let base =
            "flex flex-col items-center justify-center w-12 h-20 rounded-3xl text-sm transition-all gap-2 font-bold";
          let styles = "";

          if (d.status === "completed") {
            styles = "bg-green-50 text-green-700 ";
          } else if (d.status === "selected") {
            styles = "bg-[#A67AFA] text-white";
          } else if (d.status === "disabled") {
            styles = "bg-gray-200 text-gray-400";
          } else if (d.status === "inactive") {
            styles = "gap-6 bg-gray-100";
          } else if (d.status === "today") {
            styles = "bg-green-100 text-black";
          }

          return (
            <div key={i} className={`${base} ${styles} `}>
              <div>{d.day}</div>
              <div
                className={`mt-1 text-sm ${d.textStyle}  ${
                  d.status === "selected" ? "text-white" : ""
                }`}
              >
                {d.date}
              </div>
              {d.status === "completed" && (
                <div className="">
                  <img src={right} alt="" />
                </div>
              )}
              {d.status === "disabled" && (
                <div className="">
                  <img src={i13} alt="icon-number-13" className="size-8" />
                </div>
              )}
              {d.status === "selected" && (
                <div className="">
                  <img src={i14} alt="icon-number-13" className="size-8" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="xl:w-[30%] flex flex-col justify-center items-center">
      <div className="first w-full mb-10">
        <TestCard>
          <div className="imageAndInfo">
            {" "}
            <img
              src={userProgress}
              alt="userProgress-image"
              className="size-32  "
            />
            <div className=" bg-red-500">
              <p className=" absolute  text-center top-[36%] md:right-[28%] 2xl:right-[35%] object-center objext-fit text-[10px] font-[500] z-10 text-[#AD46FF] border border-[#AD46FF] h-4 w-8 rounded-full bg-white">
                96%
              </p>
            </div>
          </div>
          <p className="font-bold">
            <span className="text-primary">أهلا</span> كريم محمد
          </p>
          <p className="pb-4 text-[14px] text-medGray">أكمل مسيرتك نحو هدفك</p>
        </TestCard>
      </div>

      <div className="second w-full">
        <TestCard>
          <div className="cardHeader flex justify-between items-center mt-3 w-full px-6 mb-3">
            <div className="headerCont ">
              <p className="font-bold leading-[16px] mb-2 text-[12px]">متميزون في القمة</p>
              <p className="leading-[12px] mb-2 text-[10px] text-medGray">إنجاز يستحق الإشادة</p>
            </div>
            <div className="filter relative">
              <select className="py-2 px-3 pl-8 appearance-none border border-[#A3A3A3] rounded-xl">
                <option value="">يومياً</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="topStudent-imageAndInfo flex-col flex justify-center items-center">
            {" "}
            <img src={topUser} alt="topUser-image" className="size-12  " />
            <div className=" bg-red-500">
              <p className=" absolute bg-[#AD46FF]  text-center top-[22%] right-[37%] 2xl:right-[42%]  object-center objext-fit text-[10px]  z-10 text-white border border-[#AD46FF] h-4 w-8 rounded-full ">
                99.8%
              </p>
            </div>
            <p className="text-primary font-bold text-[12px]">كريم حسن</p>
          </div>

          <div className="Ranking flex flex-col w-[90%] mt-4 gap-2 mb-2">
            <div className="rank-2 bg-[#F1F1F1] flex justify-between py-2 px-4 rounded-lg items-center w-full">
              <div className="user flex justify-center  ms-2 items-center gap-2">
                <img src={num2} alt="number 2" className="size-5" />
                <img src={topUser} alt="second Rank" className="size-5" />
                <p>عبدالرحمن حسين</p>
              </div>
              <div className="score">
                <p className="text-[#065DFF] font-bold">96%</p>
              </div>
            </div>

            <div className="rank-3 bg-[#F1F1F1] flex justify-between py-2 px-4 rounded-lg items-center w-full">
              <div className="user flex justify-center  ms-2 items-center gap-2">
                <img src={num3} alt="number 2" className="size-5" />
                <img src={topUser} alt="second Rank" className="size-5" />
                <p>مني إكرام</p>
              </div>
              <div className="score">
                <p className="text-[#1298B2] font-bold">98%</p>
              </div>
            </div>
            <div className="rank-4 bg-[#F1F1F1] flex justify-between py-2 px-4 rounded-lg items-center w-full">
              <div className="user flex justify-center  ms-2 items-center gap-2">
                <img src={num4} alt="number 2" className="size-5" />
                <img src={topUser} alt="second Rank" className="size-5" />
                <p>علي حسين </p>
              </div>
              <div className="score">
                <p className="text-[#607D26] font-bold">97.5%</p>
              </div>
            </div>
          </div>

          <div className="allResults mb-3 mt-3">
            <button className="border-primary font-bold text-[#712BF8] border-2 py-2 2xl:px-40  md:px-20 px-8 rounded-[45px] text-lg ">
              عرض التفاصيل
            </button>
          </div>
        </TestCard>
      </div>

      <div className="third mt-10  w-full">
        <TestCard>
          <CalendarSlider />
        </TestCard>
      </div>

      <div className="fourth mt-10 w-full">
        <TestCard>
          <div className="cardHeader flex justify-between items-center mt-3 w-full px-6">
            <div className="headerCont ">
              <p className="text-[12px] font-bold leading-[16px] ">تعرف على أدائك اليومي!</p>
              <p className="text-[10px] text-secondary leading-[12px]">نتائجك اليوم هي بداية نجاح الغد</p>
            </div>
            <div className="filter relative">
              <select className="py-2 px-3 pl-8 appearance-none border border-[#A3A3A3] rounded-xl">
                <option value="">يومياً</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="userPerformanceInfo flex flex-col w-[90%] mt-3 gap-2 pb-6">
            <div className="1st bg-[#EBE1FE] flex justify-between py-2 px-4 rounded-lg items-center w-full">
              <div className="user flex justify-center  ms-2 items-center gap-2">
                <img src={correct} alt="number 2" className="size-8" />
                <p>إجابات الصحيحة</p>
              </div>
              <div className="score">
                <p className="bg-white size-8 rounded-lg flex justify-center items-center text-[#712BF8] font-bold">23</p>
              </div>
            </div>

            <div className="2nd bg-[#E5FBFF] flex justify-between py-2 px-4 rounded-lg items-center w-full">
              <div className="user flex justify-center  ms-2 items-center gap-2">
                <img src={lamb} alt="number 2" className="size-8" />
                <p> عدد الاسئله المحلوله</p>
              </div>
              <div className="score">
              <p className="bg-white size-8 rounded-lg flex justify-center items-center text-[#1298B2] font-bold">23</p>
              </div>
            </div>

            <div className="3rd bg-[#FFF7E5] flex justify-between py-2 px-4 rounded-lg items-center w-full">
              <div className="user flex justify-center  ms-2 items-center gap-2">
                <img src={estTime} alt="number 2" className="size-5" />
                <p>الوقت المستهلك للحل</p>
              </div>
              <div className="score">
              <p className="bg-white size-8 rounded-lg flex justify-center items-center text-[#B28416] font-bold">23</p>
              </div>
            </div>

            <div className="4th bg-[#E9FDC4] flex justify-between py-2 px-4 rounded-lg items-center w-full">
              <div className="user flex justify-center  ms-2 items-center gap-2">
                <img src={performance} alt="number 2" className="size-5" />
                <p>ادائك بين الطلابه</p>
              </div>
              <div className="score">
              <p className="bg-white h-12 w-12 rounded-lg flex justify-center items-center text-[#607D26] font-bold">عالي</p>
              </div>
            </div>
          </div>
        </TestCard>
      </div>
    </div>
  );
}