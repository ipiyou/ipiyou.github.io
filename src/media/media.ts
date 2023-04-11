import { css } from "styled-components";

export const skillMedia = (media: string) => css`
  @media screen and (max-width: 600px), screen and (max-height: 600px) {
    ${media}
  }
`;

export const projectMedia = (media: string) => css`
  @media screen and (max-height: 600px) {
    ${media}
  }
`;

export const finalMedia = (media: string) => css`
  @media screen and (max-width: 600px) {
    ${media}
  }
`;
