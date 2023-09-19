"use client";

import Image from "next/image";
import React, { useRef } from "react";
import logo from "../../../public/logo.png";
import Navitems from "../nav-items/Nav-items";
import styled from "styled-components";
import { Abril_Fatface } from "next/font/google";
import Button from "../button/Button";
import { FaRocket } from "react-icons/fa";
import hover3d from "../../utils/hover";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  // Mouse movement
  const hero = useRef<HTMLDivElement>(null);
  // Animation
  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  return (
    <HeaderStyled ref={hero}>
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
        <div className="text-content">
          <h1 className={abril.className}>
            Buy, collect, and sell extraordinary NTFs
          </h1>
          <p>
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
            style={{
              transform: hoverHero.transform,
            }}
          >
            <Image
              src="/images/monkey.png"
              width={600}
              height={600}
              alt="hero"
            />
          </div>
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

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);
    padding: 0 10rem 5rem 10rem;

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
`;
