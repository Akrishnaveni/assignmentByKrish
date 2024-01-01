import { HiViewList } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { IoHelpBuoySharp } from "react-icons/io5";
import { HiComputerDesktop } from "react-icons/hi2";

import "./index.css";

const Header = () => (
  <div className="header">
    <div className="h-1">
      <p>
        <span className="span">
          {"  "}
          <HiViewList />
        </span>
        <IoSearchOutline />
        {"  "}
        <span className="span">Search</span>
      </p>
    </div>
    <div className="h-2">
      <p>
        <IoHelpBuoySharp />
        {"     "}
        <span>Help</span>
      </p>
      <p>
        <HiComputerDesktop />
        {"     "}
        <span>Tour</span>
      </p>
      <p className="p">k</p>
    </div>
  </div>
);

export default Header;
