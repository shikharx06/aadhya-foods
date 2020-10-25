import React from "react";
import "./home.css";
import FirstSection from "./section/firstSection";
import SecondSection from "./section/secondSection";
import ThirdSection from "./section/thirdSection";
import FourthSection from "./section/fourthSection";
export default function Home() {
  const state = {
    title_1: "Black Wheat Grain",
    paragraph_1:
      "Black wheat has been patented after 7 years of research by the National Agri-Food Biotechnology Institute (NABI) Mohali.While anthocyanin is available 5 to 15 passes per million in common wheat, 40 to 140 passes per million found in black wheat. Anthocyanin provides health benefits like fruits like blueberry. It removes free radicals from the body and prevents heart, cancer, diabetes, obesity, and other diseases. The amount of zinc is also high in this new type of wheat.",
    title_2: "Health Benefits",
    paragraph_2:
      "This wheat is much more nutritious than ordinary wheat and in terms of quality, it is kept equal to the fruit called Blueberries. Let’s know about the benefits of consuming it",
  };
  return (
    <>
      <div>
        <FirstSection title={state.title_1} paragraph={state.paragraph_1} />
        <SecondSection title={state.title_2} paragraph={state.paragraph_2} />
        <ThirdSection />
        <FourthSection />
      </div>
    </>
  );
}
