interface MainSettingsTemplate {
  primary: string
  secondary: string
  success: string
  danger: string
  light: string
  break: {}[]
  breakPoint: {}[]
  gridCol: number
  max_width: string
}

const settings: MainSettingsTemplate = {
  // settings color
  primary: "#000",
  secondary: "#fff",
  success: "#198754",
  danger: "#dc3545",
  light: "#6c757d",

  // settings break
  break: [{ main: "1rem" }],

  // settings breakpoint
  breakPoint: [
    { type: "xs", break: "0px" },
    { type: "sm", break: "540px" },
    { type: "md", break: "768px" },
    { type: "lg", break: "960px" },
    { type: "xl", break: "1140px" },
    { type: "xxl", break: "1320px" },
  ],

  gridCol: 12,

  // settings max width
  max_width: "128rem",
}

export default settings
