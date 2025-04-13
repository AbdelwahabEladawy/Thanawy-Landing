"use client";
import React from "react";
import SubjectsSlider from "../SubjectsSlider/SubjectsSlider";
import UnitIntro from "../UnitIntro/UnitIntro";
import Accordion from "../Accordion/Accordion";

export default function HomeContent() {
  return (
    <>
      <div className="xl:w-[70%] w-full">
       <UnitIntro/>
        <SubjectsSlider />
        <Accordion />
      </div>
    </>
  );
}
