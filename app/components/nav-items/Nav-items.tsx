"use client";

import Button from "../button/Button";
import { FaWallet } from "react-icons/fa";

export default function Navitems() {
  return (
    <ul className="nav-items">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Auctions</a>
      </li>
      <li>
        <a href="#">Marketplace</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <Button name="Connect Wallet" icon={<FaWallet />} />
    </ul>
  );
}
