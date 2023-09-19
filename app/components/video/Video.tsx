"use client";

import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Video() {
  const video = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    //Targe the element we want to track
    target: video,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0]
  );

  return (
    <VideoStyled>
      <motion.div className="video" ref={video} style={{ opacity, scale }}>
        <iframe
          src="https://youtu.be/xQPW6RzI7Q8"
          title="Youtube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </motion.div>
    </VideoStyled>
  );
}

const VideoStyled = styled.div`
  .video {
    padding: 2rem;
    background-color: #161616;
    border-radius: 1rem;
    iframe {
      border: none;
      width: 100%;
      height: 52rem;
    }
  }
`;
