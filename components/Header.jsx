import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import classes from "./Header.module.css";

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
            <Link href={"/meals"}>Meals</Link>
            <Link href={"/community"}>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
