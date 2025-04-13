import React from "react";
import user from "../../assets/images/user.png";
import home from "../../assets/icons/home.svg";
import rank from "../../assets/icons/rank.svg";
import settings from "../../assets/icons/settings.svg";
import statistics from "../../assets/icons/statistics.svg";
import subscribtion from "../../assets/icons/subscribtion.svg";
import task from "../../assets/icons/task.svg";
import logOut from "../../assets/icons/logOut.svg";

export default function Navbar() {
  return (
    <>
      <div className="w-full ">
        <div className="navbar bg-base-100 shadow-sm ">
          <div className="dropdown block lg:hidden">
            <div tabIndex={0} role="button" className="btn border-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="  h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-lg z-1 mt-2 w-96 h-screen p-2 gap-6 shadow"
            >
              <li>
                <div
                  className={`flex items-center justify-end gap-2 flex-row-reverse p-3 bg-primary rounded-lg`}
                >
                  <span className={`text-white font-bold `}>
                    المواد الدراسية
                  </span>
                  <img src={home} alt="homeIcon" className="" />
                </div>
              </li>
              <li>
                <div
                  className={`flex items-center justify-end gap-2 flex-row-reverse p-3`}
                >
                  <span className={`text-primary font-bold `}>الإحصائيات</span>
                  <img src={statistics} alt="homeIcon" className="" />
                </div>
              </li>
              <li>
                <div
                  className={`flex items-center justify-end gap-2 flex-row-reverse p-3`}
                >
                  <span className={`text-primary font-bold `}>اختباراتك</span>
                  <img src={task} alt="homeIcon" className="" />
                </div>
              </li>
              <li>
                <div
                  className={`flex items-center justify-end gap-2 flex-row-reverse p-3`}
                >
                  <span className={`text-primary font-bold `}>ترتيبك</span>
                  <img src={rank} alt="homeIcon" className="" />
                </div>
              </li>
              <li>
                <div
                  className={`flex items-center justify-end gap-2 flex-row-reverse p-3`}
                >
                  <span className={`text-primary font-bold `}>الاشتراكات</span>
                  <img src={subscribtion} alt="homeIcon" className="" />
                </div>
              </li>
              <li>
                <div
                  className={`flex items-center justify-end gap-2 flex-row-reverse p-3`}
                >
                  <span className={`text-primary font-bold `}>الاعدادات </span>
                  <img src={settings} alt="homeIcon" className="" />
                </div>
              </li>
              <li>
                <div
                  className={`flex items-center justify-end gap-2 flex-row-reverse p-3`}
                >
                  <span className={`text-primary font-bold `}>تسجيل الخروج </span>
                  <img src={logOut} alt="homeIcon" className="" />
                </div>
              </li>

            </ul>
          </div>

          <div className="navbar-start">
            <p className="font-bold hidden xl:block md:text-[24px] leading-[32px] text-[#0B011E]">
              المواد الدراسية{" "}
            </p>

            <p className="block xl:hidden text-primary font-bold">ثانوي </p>
          </div>

          <div className="navbar-end">
            <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" hidden sm:block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />{" "}
              </svg>
            </button>
            <button className="btn border-none cursor-pointer">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="  hidden sm:block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />{" "}
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <div className="flex user  justify-center items-center gap-3">
              <img src={user} alt="user-image w-full " />
              <div className="flex-col flex ">
                <p className="text-primary font-bold leading-[16px]">
                  كريم احمد
                </p>
                <p className="text-[10px] leading-[12px] text-[#0B011E] mt-1">
                  الصف الثالث الثانوي
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
