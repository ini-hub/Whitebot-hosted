import {
  IM_BenefitsIllustration,
  IM_BenefitsMobileIllustration,
} from "../../assets/images/images.index";

export default function BenefitsChunk() {
  return (
    <div id="about.benefits" className="bg-[#FCF9FF] py-32">
      <div className="max-w-screen-xl mx-auto w-10/12">
        <h5 className="font-semibold text-xl mb-10">Benefits</h5>
        <img src={IM_BenefitsIllustration} className="w-full hidden md:block" />
        <img
          src={IM_BenefitsMobileIllustration}
          className="w-full md:hidden max-w-[350px]"
        />
      </div>
    </div>
  );
}
