import { useState } from "react";
import {
  IC_ChevronDownDark,
  IC_Community,
  IC_Flag,
  IC_FontSizeDecrease,
  IC_FontSizeIncrease,
  IC_Gift,
  IC_Hamburger,
  IC_Handshake,
  IC_Target,
  IC_TextToSpeech,
  IC_Translate,
  IC_Volunteer,
} from "../../assets/icons/icons.index";
import { IM_CompanyLogo } from "../../assets/images/images.index";
import BaseButton from "../../components/buttons/BaseButton";

function useGuestNavigationChunk() {
  const [activeNavigationId, setActiveNavigationId] = useState<string | null>(
    null
  );
  const navigationItems = [
    { id: "#our-story", name: "Our Story" },
    {
      id: "#about",
      name: "About us",
      children: [
        {
          id: "#about.users",
          icon: IC_Target,
          name: "Targeted Users",
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
        { id: "#join.partner", icon: IC_Handshake, name: "As a partner" },
        { id: "#join.community", icon: IC_Community, name: "Community" },
        { id: "#join.volunteer", icon: IC_Volunteer, name: "Volunteer" },
      ],
    },
  ];
  function handleMouseEnter(id: string) {
    setActiveNavigationId(id);
  }

  function handleMouseOut() {
    setActiveNavigationId(null);
  }
  return {
    navigation: navigationItems,
    activeNavigationId,
    handleMouseEnter,
    handleMouseOut,
  };
}

export default function GuestNavigationChunk() {
  const { navigation, activeNavigationId, handleMouseEnter, handleMouseOut } =
    useGuestNavigationChunk();
  return (
    <header className="bg-white drop-shadow-xl py-3 relative z-10">
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
              >
                {item.name}
                {item.children && (
                  <img src={IC_ChevronDownDark} className="h-[15px]" />
                )}
                {activeNavigationId === item.id && (
                  <ul className="absolute cursor-default top-full pt-5 shadow-xl bg-white min-w-[200px] px-5 rounded-lg z-50">
                    {item.children?.map((child) => (
                      <li
                        key={child.id}
                        className="border-b border-gray-100 text-xs font-medium text-gray-600 py-3"
                      >
                        <a
                          href={child.id}
                          className="flex items-center gap-4"
                          tabIndex={0}
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
            <BaseButton onClick={() => console.log("clIKEC")}>FAQ</BaseButton>
          </div>
          <div className="lg:hidden">
            <img src={IC_Hamburger} className="w-[25px]" />
          </div>
        </div>
      </div>
    </header>
  );
}
