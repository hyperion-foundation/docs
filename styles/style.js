import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export default function TextGradientComponent() {
  return (
    <>
      <AnimatedGradientText>Hyperion Foundation</AnimatedGradientText>
    </>
  );
}

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0 50%;
}}
`;
const AnimatedGradientText = styled.span`
  animation: ${gradient} 5s ease-in-out infinite;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
<<<<<<< HEAD
  -webkit-background-clip: text;
=======
>>>>>>> master
`;