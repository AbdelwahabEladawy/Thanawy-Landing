import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUnits } from "../../Helper/helper";
import chemist from "../../assets/icons/chemist.svg";
import { Play } from "lucide-react";

export default function UnitIntro() {
  const { data: units } = useQuery({
    queryKey: ["units"],
    queryFn: getUnits,
  });
  console.log(units);

  return (
    <div className="mb-4">
      {units && units.length > 0 && (
        <div className="w-full flex lg:flex-row flex-col gap-6 lg:gap-0 py-6 justify-between items-center border-primary border-2 rounded-xl  lg:py-6 lg:px-6">
          <div className="flex justify-start items-center gap-4">
            <img src={chemist} alt="chemist" />
            <div className="flex-col ">
              <p className="font-bold mb-2">{units[0].name}</p>
              <p className="text-secondary">
                لا تدع التقدم الذي حققته يضيع. أنهي ما بدأت.
              </p>
              <div className="w-[95%] bg-gray-200 rounded-full  mt-4">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '48%' }}></div>
                  </div>
            </div>
          </div>
          <div className="btnn">
            <button
              className="flex-1 bg-primary gap-2 text-white rounded-lg py-2 flex justify-center items-center pe-4"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-sm lg:text-[16px] px-4 py-2">
                أكمل التحدي
              </span>
              <Play size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
