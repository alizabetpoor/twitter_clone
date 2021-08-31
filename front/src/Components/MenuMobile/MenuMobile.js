import { BiHomeCircle, BiBell, BiEnvelope, BiSearch } from "react-icons/bi";
import "./MenuMobile.css";
const MenuMobile = () => {
  return (
    <div className="menu-mobile fixed bottom-0 z-10 right-0 h-14 w-full sm:hidden border-t border-gray-300">
      <ul className="flex items-center h-full">
        <li className="">
          <BiHomeCircle />
        </li>
        <li className="">
          <BiSearch />
        </li>
        <li className="">
          <BiBell />
        </li>
        <li className="">
          <BiEnvelope />
        </li>
      </ul>
    </div>
  );
};

export default MenuMobile;
