import { IC_Play } from "../../assets/icons/icons.index";
import { useState } from "react";
import {
  IM_CompanyLogo,
  IM_HeroVideoThumbnail,
  IM_JonapLogo,
  IM_NCCLogo,
} from "../../assets/images/images.index";
import BaseButton from "../../components/buttons/BaseButton";

export function useHeroChunk() {
  const [isActionPlayVideo, setIsActionPlayVideo] = useState(false);

  function handleTogglePlaybackState() {
    setIsActionPlayVideo(!isActionPlayVideo);
  }

  return { isActionPlayVideo, handleTogglePlaybackState };
}

export default function HeroChunk() {
  const { handleTogglePlaybackState, isActionPlayVideo } = useHeroChunk();
  return (
    <section className="bg-[#FCF9FF] py-20">
      <div className="max-w-screen-xl w-11/12 mx-auto grid lg:grid-cols-2 gap-10">
        <div className="lg:max-w-lg max-w-2xl">
          <h1
            className="text-4xl font-bold leading-snug"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            The future of{" "}
            <span className="relative z-[1]">
              automated{" "}
              <hr className="h-2 absolute bottom-2 left-0 bg-app-yellow border-none w-full z-[-1]" />
            </span>
            <span className="relative z-[1]">
              mobility
              <hr className="h-2 absolute bottom-2 left-0 bg-app-yellow border-none w-full z-[-1]" />
            </span>{" "}
            for the visually impaired.
          </h1>

          <p className="text-sm mt-5 mb-10">
            We are building a revolutionary device called{" "}
            <span className="text-app-purple font-semibold"> “White Bot” </span>{" "}
            designed to help visually impaired individuals navigate the world
            around them with ease and confidence
          </p>

          <div className="flex lg:block items-center gap-8">
            <BaseButton>Learn more</BaseButton>

            <div className="lg:mt-10">
              <h5 className="text-xs mb-1 text-gray-800 font-medium lg:block hidden">
                Partners
              </h5>
              <div className="flex items-center">
                <img src={IM_NCCLogo} className="h-[35px] lg:h-[50px]" />
                <img src={IM_JonapLogo} className="h-[40px] lg:h-[50px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className={`bg-black bg-opacity-40 inset-0 m-auto absolute grid place-items-center rounded-xl z-10 transition-opacity duration-300 ${
              isActionPlayVideo ? "opacity-0 hover:opacity-100" : ""
            }`}
          >
            <img
              src={
                !isActionPlayVideo
                  ? IC_Play
                  : "https://img.icons8.com/sf-black/64/ffffff/pause.png"
              }
              className={`w-[50px] transform hover:scale-150 cursor-pointer transition-transform ${
                isActionPlayVideo ? "scale-150" : ""
              }`}
              onClick={handleTogglePlaybackState}
            />
          </div>
          {!isActionPlayVideo ? (
            <img
              src={IM_HeroVideoThumbnail}
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <video
              src={
                "https://res.cloudinary.com/devtenotea/video/upload/v1688388925/a9ffwyahqqtk83grjchn.mp4"
              }
              className="w-full h-full object-cover rounded-xl"
              autoPlay={isActionPlayVideo}
              controls={false}
              onEnded={handleTogglePlaybackState}
            />
          )}
        </div>
      </div>
    </section>
  );
}
