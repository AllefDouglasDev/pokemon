import "styled-components";

import theme from "./theme";

export type LibTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends LibTheme {}
}
