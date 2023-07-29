import { useState } from "react";
import {
  IC_ChevronDownDark,
  IC_Community,
  IC_Flag,
  IC_FontSizeDecrease,
  IC_FontSizeIncrease,
  IC_Gift,
  IC_HamClose,
  IC_Hamburger,
  IC_Handshake,
  IC_Target,
  IC_TextToSpeech,
  IC_Translate,
  IC_Volunteer,
} from "../../assets/icons/icons.index";
import { IM_CompanyLogo } from "../../assets/images/images.index";
import BaseButton from "../../components/buttons/BaseButton";
import OurStoryFragment from "../../fragments/index-template/OurStoryFragment";
import FAQFragment from "../../fragments/index-template/FAQFragment";
import GuestMobileNavigationChunk from "./GuestMobileNavigationChunk";

export function useGuestNavigationChunk() {
  const [activeNavigationId, setActiveNavigationId] = useState<string | null>(
    null
  );
  const [isActionViewOurStory, setIsActionViewOurStory] = useState(false);
  const [isActionViewFAQ, setIsActionViewFAQ] = useState(false);
  const [isActionOpenMobileMenu, setIsActionOpenMobileMenu] = useState(false);

  function handleToggleIsActionViewOurStory() {
    setIsActionViewOurStory(!isActionViewOurStory);
  }

  function handleToggleIsActionViewFAQ() {
    setIsActionViewFAQ(!isActionViewFAQ);
  }

  function toggleActionOpenMobileMenu() {
    setIsActionOpenMobileMenu(!isActionOpenMobileMenu);
  }

  const navigationItems = [
    { id: "#our-story", name: "Our Story" },
    {
      id: "#about",
      name: "About us",
      children: [
        {
          id: "#about.issues",
          icon: IC_Target,
          name: "Targeted Issues",
        },
        { id: "#about.benefits", icon: IC_Gift, name: "Benefits" },
        {
          id: "#about.vision",
          icon: IC_Flag,
          name: "Vision & Mission",
        },
      ],
    },
    {
      id: "#join",
      name: "Join us",
      children: [
        { id: "#join", icon: IC_Handshake, name: "As a partner" },
        { id: "#join", icon: IC_Community, name: "Community" },
        { id: "#join", icon: IC_Volunteer, name: "Volunteer" },
      ],
    },
  ];

  const LearnMore = [
    { id: "#our-story", name: "Our Story" },
  ];

  function handleMouseEnter(id: string) {
    setActiveNavigationId(id);
  }

  function handleMouseOut() {
    toggleActionOpenMobileMenu();
    setActiveNavigationId(null);
  }
  return {
    handleMouseOut,
    isActionViewFAQ,
    handleMouseEnter,
    activeNavigationId,
    isActionViewOurStory,
    isActionOpenMobileMenu,
    toggleActionOpenMobileMenu,
    navigation: navigationItems,
    handleToggleIsActionViewFAQ,
    handleToggleIsActionViewOurStory,
  };
}

export default function GuestNavigationChunk() {
  const {
    navigation,
    handleMouseOut,
    isActionViewFAQ,
    handleMouseEnter,
    activeNavigationId,
    isActionViewOurStory,
    isActionOpenMobileMenu,
    toggleActionOpenMobileMenu,
    handleToggleIsActionViewFAQ,
    handleToggleIsActionViewOurStory,
  } = useGuestNavigationChunk();

  return (
    <header className="bg-white drop-shadow-xl py-3 sticky top-0 z-10">
      <div className="w-11/12 max-w-screen-xl mx-auto flex items-center justify-between gap-10">
        <nav className="flex items-center flex-grow gap-20">
          <img src={IM_CompanyLogo} className="h-[30px]" />
          <ul className="items-center gap-8 hidden lg:flex">
            {navigation.map((item, i) => (
              <li
                key={i}
                tabIndex={0}
                className="text-sm flex cursor-pointer items-center gap-1.5 relative"
                onFocus={() => item.children && handleMouseEnter(item.id)}
                onMouseEnter={() => item.children && handleMouseEnter(item.id)}
                onBlur={() => item.children && handleMouseOut()}
                onMouseLeave={() => item.children && handleMouseOut()}
                onClick={() =>
                  !item.children && handleToggleIsActionViewOurStory()
                }
              >
                {item.name}
                {item.children && (
                  <img src={IC_ChevronDownDark} className="h-[15px]" />
                )}
                {activeNavigationId === item.id && (
                  <ul className="absolute cursor-default top-full pt-5 shadow-xl bg-white min-w-[200px] px-5 rounded-lg z-50">
                    {item.children?.map((child, i) => (
                      <li
                        key={i}
                        className="border-b border-gray-100 text-xs font-medium text-gray-600 py-3"
                      >
                        <a
                          href={child.id}
                          className="flex items-center gap-4"
                          tabIndex={0}
                          onClick={() => handleMouseOut()}
                        >
                          <img src={child.icon} className="w-[20px]" />
                          {child.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-5 lg:gap-10">
          <div className="flex items-center gap-4">
            <img src={IC_Translate} alt="" className="h-[24px]" />
            <img src={IC_TextToSpeech} alt="" className="h-[24px]" />
            <img src={IC_FontSizeIncrease} alt="" className="h-[45px]" />
            <img src={IC_FontSizeDecrease} alt="" className="h-[30px]" />
          </div>
          <div className="hidden lg:block">
            <BaseButton onClick={handleToggleIsActionViewFAQ}>FAQ</BaseButton>
          </div>
          <div className="lg:hidden" onClick={toggleActionOpenMobileMenu}>
            <img
              src={isActionOpenMobileMenu ? IC_HamClose : IC_Hamburger}
              className="w-[25px]"
            />
          </div>
        </div>
      </div>
      {isActionOpenMobileMenu && (
        <GuestMobileNavigationChunk
          {...{
            activeNavigationId,
            handleMouseEnter,
            handleMouseOut,
            handleToggleIsActionViewFAQ,
            handleToggleIsActionViewOurStory,
            isActionViewFAQ,
            isActionViewOurStory,
            navigation,
            isActionOpenMobileMenu,
            toggleActionOpenMobileMenu,
          }}
        />
      )}
      {isActionViewFAQ && <FAQFragment onClose={handleToggleIsActionViewFAQ} />}
      {isActionViewOurStory && (
        <OurStoryFragment onClose={handleToggleIsActionViewOurStory} />
      )}
    </header>
  );
}
