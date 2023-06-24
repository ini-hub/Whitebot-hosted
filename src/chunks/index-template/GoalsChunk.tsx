import {
  IM_GoalsDesktopIllustration,
  IM_GoalsMobileIllustration,
} from "../../assets/images/images.index";
import HighlightedText from "../../components/typography/HighlightedText";

export default function GoalsChunk() {
  return (
    <section className="">
      <div className="max-w-screen-xl w-11/12 mx-auto py-24">
        <h1 className="text-3xl font-bold">
          Goals of <HighlightedText>Walk It</HighlightedText>{" "}
        </h1>

        <div className="mt-10">
          <img
            src={IM_GoalsDesktopIllustration}
            alt=""
            className="w-full hidden md:block h-[250px] object-left object-contain"
          />
          <img
            src={IM_GoalsMobileIllustration}
            alt=""
            className="w-full md:hidden max-w-[350px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
