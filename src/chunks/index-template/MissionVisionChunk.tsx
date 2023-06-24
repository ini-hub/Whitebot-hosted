import {
  IM_BackgroundSkinTwo,
  IM_Binoculars,
  IM_MissionTarget,
} from "../../assets/images/images.index";
import HighlightedText from "../../components/typography/HighlightedText";

export default function MissionVisionChunk() {
  return (
    <section className="py-24 relative">
      <img
        src={IM_BackgroundSkinTwo}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="max-w-screen-xl mx-auto w-11/12">
        <div className="max-w-max sm:flex items-start gap-10 text-center sm:text-left mx-auto sm:mx-0">
          <img src={IM_MissionTarget} className="mx-auto" />
          <div className="mt-10 sm:mt-0">
            <h2 className="text-3xl font-bold">
              Our <HighlightedText> Vision </HighlightedText>
            </h2>
            <p className="max-w-[500px] mt-5">
              To provide an intelligent device that can aid the movement of the
              visually impaired, and get to their destination with a better
              chance at eliminating getting in contact with any fixed or moving
              object
            </p>
          </div>
        </div>
        <div className="max-w-max items-start gap-10 mt-20 sm:flex text-center sm:text-left mx-auto sm:mx-0 sm:ml-auto">
          <img src={IM_Binoculars} className="mx-auto" />
          <div className="mt-10 sm:mt-0">
            <h2 className="text-3xl font-bold">
              Our <HighlightedText> Vision </HighlightedText>
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
