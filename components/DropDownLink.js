import Link from "next/link";
import React from "react";

export default function DropDownLink({ href, children, ...rest }) {
  return (
    <Link legacyBehavior href={href}>
      <a className="hover:text-bold" {...rest}>
        {children}
      </a>
    </Link>
  );
}
