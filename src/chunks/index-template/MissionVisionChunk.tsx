import {
  IM_BackgroundSkinTwo,
  IM_Binoculars,
  IM_MissionTarget,
} from "../../assets/images/images.index";
import HighlightedText from "../../components/typography/HighlightedText";

export default function MissionVisionChunk() {
  return (
    <section id="about.vision" className="py-24 relative">
      <img
      alt="Background"
        src={IM_BackgroundSkinTwo}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="max-w-screen-xl mx-auto w-11/12">
        <div className="max-w-max sm:flex items-start gap-10 text-center sm:text-left mx-auto sm:mx-0">
          <img src={IM_MissionTarget} alt="WalkIT | Walk mobility Mission"className="mx-auto" />
          <div className="mt-10 sm:mt-0">
            <h2 className="text-3xl font-bold">
              Our <HighlightedText><span className="text-app-purple font-bold">Mission</span></HighlightedText>
            </h2>
            <p className="max-w-[500px] mt-5">
              To eliminate stigma, insecurity and also
              create artificial perception of their environment
              to the visually impaired
            </p>
          </div>
        </div>
        <div className="max-w-max items-start gap-10 mt-20 sm:flex text-center sm:text-left mx-auto sm:mx-0 sm:ml-auto">
          <img src={IM_Binoculars} alt="WalkIT | Walk mobility Vision" className="mx-auto" />
          <div className="mt-10 sm:mt-0">
            <h2 className="text-3xl font-bold">
              Our <HighlightedText><span className="text-app-purple font-bold">Vision</span></HighlightedText>
            </h2>
            <p className="max-w-[500px] mt-5">
              To provide an intelligent device that can aid the movement of the
              visually impaired, and get to their destination with a better
              chance at eliminating getting in contact with any fixed or moving
              object
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
