// Import plugin
import styled from "styled-components";

// Create new style
export const Box = styled.div`
  width: 100%;
  display: block;
  padding: 3rem 0;
  min-height: 100vh;
  position: relative;
`;

export const Title = styled.div`
  font-weight: bold;
  padding: 2rem 1rem;
  text-align: center;
  margin: 0.5rem 1rem;
  color: ${(p) => `${p.theme.secondary}`};
  background-color: ${(p) => `${p.theme.light}`};
`;

export const Cell = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 2rem 1rem;
  margin: 0.5rem 1rem;
  text-align: center;
  height: calc(100% - 1rem);
  color: ${(p) => `${p.theme.primary}`};
  border: 2px solid ${(p) => `${p.theme.light}`};

  p {
    flex: 100%;
    width: 100%;
    display: block;
  }
`;

export const Loading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 3rem;
  font-size: 2rem;
  margin-top: 3rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  color: ${(p) => `${p.theme.secondary}`};
  background-color: ${(p) => `${p.theme.light}`};
`;
