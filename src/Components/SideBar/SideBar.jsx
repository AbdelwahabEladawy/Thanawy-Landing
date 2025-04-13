import React, { useState } from "react";
import { Menu } from "lucide-react";
import home from "../../assets/icons/home.svg";
import rank from "../../assets/icons/rank.svg";
import settings from "../../assets/icons/settings.svg";
import statistics from "../../assets/icons/statistics.svg";
import subscribtion from "../../assets/icons/subscribtion.svg";
import task from "../../assets/icons/task.svg";
import logOut from "../../assets/icons/logOut.svg";
import robot from "../../assets/images/robot.svg";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`hidden  h-screen xl:flex flex-col justify-center bg-white ${
        isOpen ? "w-64 md:me-0" : "w-24 md:me-48"
      } px-2 transition-all duration-300 border-l border-gray-200 `}
    >
      {/* Header */}
      <div className="flex items-center justify-center py-4   ">
        <div className="flex flex-row-reverse justify-center  w-full items-center">
          <button
            onClick={toggleSidebar}
            className="text-primary font-bold text-[32px] rtl"
          >
            ثانوي
          </button>
          {isOpen && (
            <button
              onClick={toggleSidebar}
              className="text-gray-700 mr-2 w-full"
            >
              <Menu size={24} />
            </button>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="flex-grow">
        <ul className="space-y-2 text-center">
          {/* Academic Materials */}
          <li>
            <div
              className={`flex items-center justify-center flex-row-reverse py-3 bg-primary ${
                isOpen
                  ? " justify-center bg-primary rounded-lg  ps-2  gap-4"
                  : " justify-center rounded-lg  "
              }`}
            >
              <span className={`text-white ${isOpen ? "block" : "hidden"}`}>
                المواد الدراسية
              </span>
              <div className=" rounded">
                <img src={home} alt="homeIcon" className="" />
              </div>
            </div>
          </li>

          {/* Statistics */}
          <li>
            <div
              className={`flex items-center justify-end gap-2 flex-row-reverse p-3 ${
                isOpen ? "" : ""
              }`}
            >
              <span className={`text-primary ${isOpen ? "block" : "hidden"}`}>
                الإحصائيات
              </span>
              <img src={statistics} alt="homeIcon" className="" />
            </div>
          </li>

          {/* Tests */}
          <li>
            <div
              className={`flex items-center justify-end gap-2 flex-row-reverse p-3 ${
                isOpen ? "" : ""
              }`}
            >
              <span className={`text-primary ${isOpen ? "block" : "hidden"}`}>
                اختباراتك
              </span>
              <img src={task} alt="homeIcon" className="" />
            </div>
          </li>

          {/* Rankings */}
          <li>
            <div
              className={`flex items-center justify-end gap-2 flex-row-reverse p-3 ${
                isOpen ? "" : ""
              }`}
            >
              <span className={`text-primary ${isOpen ? "block" : "hidden"}`}>
                ترتيبك
              </span>
              <img src={rank} alt="homeIcon" className="" />
            </div>
          </li>

          {/* Subscriptions */}
          <li>
            <div
              className={`flex items-center justify-end gap-2 flex-row-reverse p-3 ${
                isOpen ? "" : ""
              }`}
            >
              <span className={`text-primary ${isOpen ? "block" : "hidden"}`}>
                الاشتراكات
              </span>
              <img src={subscribtion} alt="homeIcon" className="" />
            </div>
          </li>

          {/* Settings */}
          <li>
            <div
              className={`flex items-center justify-end gap-2 flex-row-reverse p-3 ${
                isOpen ? "" : ""
              }`}
            >
              <span className={`text-primary ${isOpen ? "block" : "hidden"}`}>
                الإعدادات
              </span>
              <img src={settings} alt="homeIcon" className="" />
            </div>
          </li>
        </ul>
      </div>

      {/* Mascot Section */}
      {isOpen && (
        <div className="mx-2 mb-4 bg-gradient-to-t from-[#4806C8] to-[#8D55F9] rounded-[24px] p-4 text-center  overflow-hidden">
       

<div className="robot w-full justify-center items-center flex">
  <img src={robot} alt="robot" />
</div>
  <div className="cardContent">
         
  <div className="text-white text-right mb-2 pt-2">
            رحلتك نحو التفوق تبدأ بخطوة
          </div>
          <button className="bg-white text-primary rounded-md py-2 px-4 w-full mt-4">
            اشترك الآن
          </button>
  </div>
        </div>
      )}

      {/* Logout Button */}
      <div className="p-4 flex justify-start items-center">
        <div className="flex items-center gap-2 text-red-500">
          {isOpen && <span>تسجيل خروج</span>}
          <img src={logOut} alt="homeIcon" className="" />
        </div>
      </div>
    </div>
  );
}
