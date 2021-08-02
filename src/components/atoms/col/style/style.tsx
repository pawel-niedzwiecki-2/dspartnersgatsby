// Import plugin
import styled, { css } from "styled-components";

// TypeScript for Props
interface Props {
  theme: {
    gridCol: number;
    breakPoint: {}[];
    break: [{ main: string }];
  };
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

// Create new style
const Col = styled.div<Props>`
  width: 100%;
  position: relative;
  padding-left: ${(p) => p.theme.break[0].main};
  padding-right: ${(p) => p.theme.break[0].main};

  ${(p) =>
    p.xs &&
    css`
      flex: ${(100 * p.xs) / p.theme.gridCol}%;
      max-width: ${(100 * p.xs) / p.theme.gridCol}%;
    `}

  ${(p) =>
    p.sm &&
    css`
      @media (min-width: ${p.theme.breakPoint[p.theme.breakPoint.indexOf({ type: "sm" })]}) {
      flex: ${(100 * p.sm) / p.theme.gridCol}%;
      max-width: ${(100 * p.sm) / p.theme.gridCol}%;
    `}

    ${(p) =>
    p.md &&
    css`
      @media (min-width: ${p.theme.breakPoint[p.theme.breakPoint.indexOf({ type: "md" })]}) {
      flex: ${(100 * p.md) / p.theme.gridCol}%;
      max-width: ${(100 * p.md) / p.theme.gridCol}%;
    `}

    ${(p) =>
    p.lg &&
    css`
      @media (min-width: ${p.theme.breakPoint[p.theme.breakPoint.indexOf({ type: "lg" })]}) {
      flex: ${(100 * p.lg) / p.theme.gridCol}%;
      max-width: ${(100 * p.lg) / p.theme.gridCol}%;
    `}

    ${(p) =>
    p.xl &&
    css`
      @media (min-width: ${p.theme.breakPoint[p.theme.breakPoint.indexOf({ type: "xl" })]}) {
      flex: ${(100 * p.xl) / p.theme.gridCol}%;
      max-width: ${(100 * p.xl) / p.theme.gridCol}%;
    `}

    ${(p) =>
    p.xxl &&
    css`
      @media (min-width: ${p.theme.breakPoint[p.theme.breakPoint.indexOf({ type: "xxl" })]}) {
      flex: ${(100 * p.xxl) / p.theme.gridCol}%;
      max-width: ${(100 * p.xxl) / p.theme.gridCol}%;
    `}
`;

// Export new style
export default Col;
