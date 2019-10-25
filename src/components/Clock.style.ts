import styled, { keyframes } from 'styled-components';

const SIZE = 150;

export const Styled = styled.div`
  display: block;
  position: fixed;
  top: -20px;
  right: -20px;
  height: $size;
  width: $size;
  z-index: 999999;
  text-align: center;
  color: #fff;
  transform: scale(0.75);

  @media screen and (min-width: 720px) {
    top: 20px;
    right: 30px;
    transform: scale(1);
  }
`;

export const clockKeyframes = keyframes`
  0% {
    opacity: 0.75;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.75;
    transform: scale(1);
  }
`;

export const ClockStyled = styled.svg`
  height: ${SIZE}px;
  width: ${SIZE}px;
  fill: transparent;
  stroke: #fff;
  stroke-width: 1.5px;
  stroke-dasharray: 156 156;
  transform: rotate(0);
  cursor: pointer;
  user-select: none;
  transition: 150ms;
  animation: 2300ms ease-in-out infinite both ${clockKeyframes};
`;

export const Hour = styled.svg`
  display: block;
  top: 0;
  position: absolute;
  line-height: ${SIZE + 6}px;
  width: ${SIZE};
  text-align: center;
  font-size: 28px;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  animation: 2300ms ease-in-out infinite both ${clockKeyframes};
`;
