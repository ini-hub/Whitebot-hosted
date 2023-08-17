import { useState } from "react";
import {
  IC_ArrowUpCircle,
  IC_Facebook,
  IC_Instagram,
  IC_Twitter,
  IC_Youtube,
} from "../../assets/icons/icons.index";
import { IM_CompanyLogo } from "../../assets/images/images.index";
import OurStoryFragment from "../../fragments/index-template/OurStoryFragment";
import FAQFragment from "../../fragments/index-template/FAQFragment";

function useFooterChunk() {
  const socialMediaLinks = [
    { id: 1, icon: IC_Instagram, link: "https://instagram.com/be_inioluwa" },
    { id: 2, icon: IC_Twitter, link: "https://twitter.com/etz_ini" },
    { id: 3, icon: IC_Youtube, link: "https://youtube.com" },
    { id: 4, icon: IC_Facebook, link: "https://facebook.com" },
  ];

  const [isActionViewOurStory, setIsActionViewOurStory] = useState(false);
  
  function handleToggleIsActionViewOurStory() {
    setIsActionViewOurStory(!isActionViewOurStory);
  }
  
  const [isActionViewFAQ, setIsActionViewFAQ] = useState(false);
  function handleToggleIsActionViewFAQ() {
    setIsActionViewFAQ(!isActionViewFAQ);
  }

  return {
    socialMediaLinks,
    isActionViewFAQ,
    isActionViewOurStory,
    handleToggleIsActionViewFAQ,
    handleToggleIsActionViewOurStory,
  };
}

export default function FooterChunk() {
  const {
    socialMediaLinks,
    handleToggleIsActionViewFAQ,
    handleToggleIsActionViewOurStory,
    isActionViewFAQ,
    isActionViewOurStory,
  } = useFooterChunk();
  return (
    <footer className="bg-white">
      {isActionViewOurStory && (
        <OurStoryFragment onClose={handleToggleIsActionViewOurStory} />
      )}
      {isActionViewFAQ && <FAQFragment onClose={handleToggleIsActionViewFAQ} />}
      <div className="max-w-screen-xl mx-auto w-11/12 pt-14 pb-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 mb-8 gap-y-10">
          <div>
            <h5 className="font-semibold text-lg">Company</h5>
            <div className="grid gap-3 mt-3">
              <span
                className="text-sm text-gray-500 block max-w-max"
                onClick={handleToggleIsActionViewOurStory}
              >
                Our Story
              </span>
              <span
                onClick={handleToggleIsActionViewFAQ}
                className="text-sm text-gray-500 block max-w-max"
              >
                FAQ
              </span>
              <a href="https://wc43jyypl50.typeform.com/to/tfJHulbf" className="text-sm text-gray-500 block max-w-max">
                Careers
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Products</h5>
            <div className="grid gap-3 mt-3">
              <a href="" className="text-sm text-gray-500 block max-w-max">
                White Bot
              </a>
              <a href="" className="text-sm text-gray-500 block max-w-max">
                CamBot
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Contact Us</h5>
            <div className="grid gap-3 mt-3">
              <a
                href="tel:+2348138303956"
                className="text-sm text-gray-500 block max-w-max"
              >
                0813 830 3956
              </a>

              <a
                href="mailto:excellent@walkmobility.com"
                className="text-sm text-gray-500 block max-w-max"
              >
                excellent@walkmobility.com
              </a>
            </div>
          </div>
          <div className="lg:hidden">
            <span> Follow us</span>
            <div className="flex items-center gap-2">
              {socialMediaLinks.map((link) => (
                <a href={link.link} key={link.id}>
                  <img src={link.icon} className="h-[30px]" />
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-semibold text-lg">Got Questions?</h5>
                  <p className="text-xs text-gray-500">We have an answer</p>
                </div>
                <button
                  className="block lg:hidden"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img src={IC_ArrowUpCircle} className="h-[40px]" />
                </button>
              </div>
              <div className="grid gap-3 mt-5">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="bg-[#F3F3F3] rounded-md text-sm py-3 px-5"
                />
                <textarea
                  required
                  placeholder="Enter your message"
                  className="bg-[#F3F3F3] rounded-md text-sm py-3 px-5 resize-none h-[80px]"
                />
                <button className="bg-[#FAF4FF] py-3 rounded-md text-center block text-sm font-medium text-app-purple">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="hidden lg:block mx-auto"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={IC_ArrowUpCircle} className="h-[40px]" />
        </button>
        <div className="mt-4">
          <div className="flex items-start justify-between border-b py-5">
            <img src={IM_CompanyLogo} />
            <div className="hidden lg:block">
              <span> Follow us</span>
              <div className="flex items-center gap-2">
                {socialMediaLinks.map((link) => (
                  <a href={link.link} key={link.id}>
                    <img src={link.icon} className="h-[30px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-y-4 justify-between mt-3">
            <p>
              <a className="text-xs">Privacy Policy</a>&nbsp;&nbsp;|&nbsp;&nbsp;
              <a className="text-xs">Terms of Services</a>
            </p>
            <p className="text-xs">© 2023 Walk IT, all rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
