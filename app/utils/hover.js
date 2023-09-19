"use client";

import React, { useEffect, useState } from "react";

export default function hover3d(ref, { x = 0, y = 0, z = 0 }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMovement = (e) => {
    const { offsetWidth: width, offsetHeight: height } = ref.current; // getting the width and height of the item.
    const { clientX, clientY } = e; // getting the mouse position

    const x = (clientX - width / 2) / width;
    const y = (clientY - height / 2) / height;

    //setting the coordinates
    setCoords({ x, y });
  };
  // handle when the mouse enters/leave the div
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  //End

  useEffect(() => {
    const { current } = ref;

    current.addEventListener("mousemove", handleMouseMovement);
    current.addEventListener("mouseenter", handleMouseEnter);
    current.addEventListener("mouseleave", handleMouseLeave);

    // Removing the event listeners
    return () => {
      current.addEventListener("mousemove", handleMouseMovement);
      current.addEventListener("mouseenter", handleMouseEnter);
      current.addEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  // Animations
  const { x: xCoord, y: yCoord } = coords;

  const xTransform = isHovered ? xCoord * x : 0;
  const yTransform = isHovered ? yCoord * y : 0;
  const zTransform = isHovered ? z : 0;

  const transform = `perspective(1000px) rotateX(${xTransform}deg) rotateY(${yTransform}deg) translateZ(${zTransform}px)`;
  const transition = isHovered ? "all 0.3s ease-in-out" : "";

  return { transform, transition };
}
