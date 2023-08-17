import {
  IM_AffordabilityIllustration,
  IM_BackgroundSkin,
  IM_ImmobilityIllustration,
  IM_InsecurityIllustration,
  IM_StigmatizationIllustration,
} from "../../assets/images/images.index";
import HighlightedText from "../../components/typography/HighlightedText";

export function useIssuesChunk() {
  const targetedIssues = [
    {
      name: "Affordability",
      image: IM_AffordabilityIllustration,
      explainerText:
        "Many Electronic traveling aid devices designed for the visually impaired are relatively costly.",
    },
    {
      name: "Stigmatization",
      image: IM_StigmatizationIllustration,
      explainerText:
        "There is a stigma attached to the use of white cane in the society",
    },
    {
      name: "Insecurity",
      image: IM_InsecurityIllustration,
      explainerText:
        "The visually impaired are susceptible to harm in the society",
    },
    {
      name: "Immobility",
      image: IM_ImmobilityIllustration,
      explainerText: "The visually impaired cannot move around with ease",
    },
  ];

  return { targetedIssues };
}

export default function IssuesChunk() {
  const { targetedIssues } = useIssuesChunk();
  return (
    <section id="about.issues" className="relative bg-[#FCF9FF]">
      <div
        className=" bg-app-yellow h-full w-full absolute -top-5"
        style={{
          clipPath: "polygon(70% 13%, 100% 0, 100% 100%, 0 100%, 0 9%)",
        }}
      />
      <div
        className="relative bg-app-purple min-h-[500px] z-[1]"
        style={{
          clipPath: "polygon(70% 13%, 100% 0, 100% 100%, 0 100%, 0 9%)",
        }}
      >
        <img
        alt="WalkIT | Walk Mobility Targeted Issues"
          src={IM_BackgroundSkin}
          className="absolute w-full h-full object-cover -z-[1]"
        />
        <div className="pt-64 pb-20 max-w-screen-xl mx-auto w-11/12">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Issues we are <HighlightedText> targeting</HighlightedText>
            </h2>
            <p className="text-m text-white mt-5 leading-6">
              Statistics have shown that 30% of the world population are
              visually impaired. <span className="font-bold">Nigerians</span> take <span className="font-bold">2%</span> of this fraction making it
              about <span className="font-bold">4 million</span> people which translates to the fact that <span className="font-bold">1 to 53
              people in Nigeria are visually impaired</span> and the following are the
              common issues we are targeting
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-10 mt-14">
            {targetedIssues.map((iss) => (
              <div
                key={iss.name}
                className="bg-white rounded-lg py-8 px-5 md:px-10"
              >
                <img src={iss.image} className="h-[50px]" />
                <h3 className="text-xl mt-4 mb-1 font-semibold text-[#111111]">
                  {iss.name}
                </h3>
                <p className="text-xs md:text-sm max-w-sm">
                  {iss.explainerText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
