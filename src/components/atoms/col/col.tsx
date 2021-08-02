// Import plugin
import React from "react";

// import settings style
import settings from "layout/settings";

// Import style
import Col from "./style/style";

// TypeScript for Props
interface Props {
  children: JSX.Element | JSX.Element[];
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

// create new component
const ColComponent = ({ children, xs, sm, md, lg, xl, xxl }: Props) => {
  return (
    <>
      <Col theme={settings} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
        {children}
      </Col>
    </>
  );
};

// export new component
export default ColComponent;
