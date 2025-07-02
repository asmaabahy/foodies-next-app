"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Header.module.css";

function NavLink({ link, children }) {
  const path = usePathname();

  return (
    <Link
      href={link}
      className={
        path.startsWith(link) ? `${classes.link} ${classes.active}` : classes.link
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
