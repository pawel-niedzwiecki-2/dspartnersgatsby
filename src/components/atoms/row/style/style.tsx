// Import plugin
import styled from "styled-components";

// TypeScript for Props
interface Props {
  theme: {
    break: [{ main: string }];
  };
}

// Create new style
const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  flex-direction: row;
  box-sizing: border-box;
  margin-left: ${(p) => `-${p.theme.break[0].main}`};
  margin-right: ${(p) => `-${p.theme.break[0].main}`};
`;

// Export new style
export default Row;
