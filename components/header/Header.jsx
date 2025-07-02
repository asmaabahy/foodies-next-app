import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import classes from "./Header.module.css";
import NavLink from "./NavLink";
import Link from "next/link";

function Header() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logo} alt="logo" priority />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink link={"/meals"}>Browse Meals</NavLink>
            <NavLink link={"/community"}>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
