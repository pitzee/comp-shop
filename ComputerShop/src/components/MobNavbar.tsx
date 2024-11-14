import { IoIosMenu } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";
import NavBar from "./NavBar";

interface props {
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  openmenu: boolean;
  closemenu: boolean;
}

const MobNavbar = ({ onOpenMenu, onCloseMenu, openmenu, closemenu }: props) => {
  return (
    <div className=" top-0 ">
      {openmenu && <IoIosMenu size={30} onClick={onOpenMenu} />}
      {closemenu && <RiCloseLargeFill size={25} onClick={onCloseMenu} />}
    </div>
  );
};

export default MobNavbar;
