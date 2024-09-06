"use client";

import HeaderLogo from "./logo";
import HeaderNav from "./nav";
import PersonalNav from "./personal-nav";

export default function Header() {
  return (
    <header className="max-w-main relative px-4 lg:px-0 mx-auto mt-4 flex items-center justify-between z-[10]">
      <HeaderLogo />

      <HeaderNav className="hidden lg:flex absolute left-[50%] translate-x-[-50%]" />

      <PersonalNav />
    </header>
  );
}
