import styled from "styled-components";

export const _SectionWrapper = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.gray10};
`;
