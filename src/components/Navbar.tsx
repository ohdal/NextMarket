"use client";

import { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((v) => !v);
  };

  return (
    <nav className="relative z-10 w-full bg-orange-500 text-white">
      <div className="flex items-center justify-between mx-5 sm:mx-10 lg:mx-20">
        <div className="flex items-center text-2xl">
          <Link href="/">LOGO</Link>
        </div>
        <div className="text-2xl sm:hidden">
          {menu === false ? <button onClick={handleMenu}>+</button> : <button onClick={handleMenu}>-</button>}
        </div>

        <div className="hidden sm:block">
          <NavItem />
        </div>
      </div>
      <div className="block sm:hidden">{menu === false ? null : <NavItem mobile />}</div>
    </nav>
  );
}
