// Import plugin
import React from "react";

// import settings style
import settings from "layout/settings";

// Import style
import Row from "./style/style";

// TypeScript for Props
type Props = {
  children: JSX.Element | JSX.Element[] | any;
};

// create new component
const RowComponent = ({ children }: Props) => {
  return <Row theme={settings}>{children}</Row>;
};

// export new component
export default RowComponent;
