import React from "react";
import Link from "next/link";

type Props = {
  mobile?: boolean;
};

export default function NavItem({ mobile }: Props) {
  return (
    <ul className={`text-md justify-center flex gap-4 w-full items-center ${mobile && "flex-col h-full"}`}>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/">Admin</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/">User</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/">Signout</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/">Signin</Link>
      </li>
    </ul>
  );
}
