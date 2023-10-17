import { MenuRounded } from "@material-ui/icons";
import React from "react";

const Header = () => {
  return (
    <nav className="flex px-3 py-3 text-white">
      <div className="flex gap-2">
        <MenuRounded />
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="logo"
          width={30}
        />
        <h1 className="text-lg">Keep</h1>
      </div>
    </nav>
  );
};

export default Header;
