import {
  IM_CommunityIllustration,
  IM_PartnerIllustration,
  IM_VolunteerIllustration,
} from "../../assets/images/images.index";
import BaseButton from "../../components/buttons/BaseButton";

export default function JoinUsChunk() {
  return (
    <section id="join" className="bg-black py-20 text-white">
      <div className="max-w-screen-xl mx-auto w-11/12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center max-w-xl mx-auto md:leading-snug">
          <span className="text-app-yellow">Join us</span> in shaping the future
          of visual impaired technology
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mt-10">
          <div className="text-center">
            <img src={IM_PartnerIllustration} className="mx-auto" />
            <h6 className="text-xl">
              <span className="font-bold">Partner</span> with us
            </h6>
            <p className="text-sm text-gray-300 mb-4">
              Invest in our community
            </p>
            <a href="https://wc43jyypl50.typeform.com/to/tfJHulbf">
            <BaseButton>Partner</BaseButton>
            </a>
          </div>

          <div className="text-center mt-10 md:mt-20 border-y border-[#343434] md:border-0 py-16">
            <img src={IM_VolunteerIllustration} className="mx-auto" />
            <h6 className="text-xl">
              <span className="font-bold">Volunteer</span> to our movement
            </h6>
            <p className="text-sm text-gray-300 mb-4">Make change happen</p>
            <a href="https://wc43jyypl50.typeform.com/to/tfJHulbf">
            <BaseButton>Volunteer</BaseButton>
            </a>
          </div>

          <div className="text-center">
            <img src={IM_CommunityIllustration} className="mx-auto" />
            <h6 className="text-xl">
              <span className="font-bold">Join</span> our community
            </h6>
            <p className="text-sm text-gray-300 mb-4">
              Share your expertise, values and ideas
            </p>
            <a href="https://wc43jyypl50.typeform.com/to/tfJHulbf">
            <BaseButton>Join us</BaseButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
