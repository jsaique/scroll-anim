"use client";

import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
import Navitems from "../nav-items/Nav-items";
import styled from "styled-components";
import { Abril_Fatface } from "next/font/google";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  return (
    <HeaderStyled>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={36} height={36} />
          <h2>Logo</h2>
        </div>
        <div className="input">
          <input type="text" placeholder="Search" />
        </div>
        <Navitems />
      </nav>
      <div className="header-content">
        <div>
          <h1 className={abril.className}>
            Buy, collect, and sell extraordinary NTFs
          </h1>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }
`;
