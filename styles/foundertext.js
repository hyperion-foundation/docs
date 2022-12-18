import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export default function TextGradientComponent() {
  return (
    <>
      <AnimatedGradientText>Founder, Owner & Project Author</AnimatedGradientText>
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
  animation: ${gradient} 8s ease-in-out infinite;
  background: linear-gradient(to left, #7400B8, #6930C3, #5E60CE, #5390D9, #4EA8DE, #48BFE3, #56CFE1, #64DFDF, #72EFDD, #80FFDB);
  background-size: 300%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;