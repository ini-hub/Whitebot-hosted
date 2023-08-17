import {
  IM_GoalsDesktopIllustration,
  IM_GoalsMobileIllustration,
} from "../../assets/images/images.index";
import HighlightedText from "../../components/typography/HighlightedText";

export default function GoalsChunk() {
  return (
    <section>
      <div className="max-w-screen-xl w-11/12 mx-auto py-24">
        <h1 className="text-3xl font-semibold">
          Goals of <HighlightedText><span className="text-app-purple font-bold">WalkIT</span></HighlightedText>
        </h1>

        <div className="mt-10">
          <img
            src={IM_GoalsDesktopIllustration}
            alt="WalkIT | Walk mobility Goal"
            className="w-full hidden md:block h-[250px] object-center object-contain"
          />
          <img
            src={IM_GoalsMobileIllustration}
            alt="WalkIT | Walk mobility Goal"
            className="w-full md:hidden max-w-[350px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
