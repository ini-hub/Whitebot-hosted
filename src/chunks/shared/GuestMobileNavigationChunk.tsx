import {
  IC_ChevronDownDark,
  IC_ChevronDownLight,
} from "../../assets/icons/icons.index";
import { IM_BackgroundSkinTwo } from "../../assets/images/images.index";
import BaseButton from "../../components/buttons/BaseButton";
import type { useGuestNavigationChunk } from "./GuestNavigationChunk";

export default function GuestMobileNavigationChunk(
  props: ReturnType<typeof useGuestNavigationChunk>
) {
  return (
    <aside className="fixed bg-app-purple h-[calc(100vh-68px)] top-[68px] left-0 w-full lg:hidden">
      <img
        src={IM_BackgroundSkinTwo}
        className="absolute h-screen w-full object-cover"
      />
      <nav className="py-10 pl-14">
        <ul className="w-full mb-10">
          {props.navigation.map((item, i) => (
            <li
              key={i}
              tabIndex={0}
              className="text-sm cursor-pointer relative text-white border-b border-white border-opacity-40 text-[24px] py-6"
              onClick={() =>
                !item.children
                  ? props.handleToggleIsActionViewOurStory()
                  : props.handleMouseEnter(item.id)
              }
            >
              <p className="flex gap-6 items-center">
                {item.name}
                {item.children && (
                  <img src={IC_ChevronDownLight} className="h-[35px]" />
                )}
              </p>
              {props.activeNavigationId === item.id && (
                <ul className="cursor-default pt-5 bg-transparent w-10/12 px-5 rounded-lg z-50">
                  {item.children?.map((child, i) => (
                    <li key={i} className="text-xs font-medium text-white py-3">
                      <a
                        href={child.id}
                        className="flex items-center gap-4"
                        tabIndex={0}
                        onClick={() => props.handleMouseOut()}
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
          <div className="grid h-[50px] max-w-[150px] mt-10 relative z-[1]">
            <BaseButton activeHover onClick={props.handleToggleIsActionViewFAQ}>
              FAQs
            </BaseButton>
          </div>
        </ul>
      </nav>
    </aside>
  );
}
