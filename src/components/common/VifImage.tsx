import styled, { StyledComponentProps } from "styled-components";

interface PropsType extends StyledComponentProps<"img", any, {}, never> {
  avif?: string;
  webp?: string;
}

export const Img = ({ avif, webp, ...args }: PropsType) => {
  return (
    <picture>
      {avif && <source type="image/avif" srcSet={avif} />}
      {webp && <source type="image/webp" srcSet={webp} />}
      <source type="image/png" srcSet={args.src} />
      <_Img {...args} />
    </picture>
  );
};

const _Img = styled.img`
  object-fit: cover;
`;
