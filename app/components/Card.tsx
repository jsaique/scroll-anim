"use client";

import Image from "next/image";
import styled from "styled-components";

interface CardProps {
  title: string;
  description?: string;
  image?: any;
}

export default function Card({ title, description, image }: CardProps) {
  return (
    <CardStyled>
      <div className="image" style={{ height: "100%", width: "100%" }}>
        <p className="new">New</p>
        <div className="text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Image
          src={image}
          alt="image"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="overlay"></div>
    </CardStyled>
  );
}

const CardStyled = styled.div``;
