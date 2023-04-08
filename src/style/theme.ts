export const theme = {
  color: {
    red: "#FF0000",
    blue: "#1400FF",
    green: "#00FF19",
    black: "#000000",
    gray100: "#858585",
    gray50: "#E4E4E4",
    gray10: "#F1F1F1",
    white: "#FFFFFF",
  },
  radius: {
    small: "4px",
    medium: "8px",
    large: "100%",
  },
  shadow: {
    item: "0 0 10px 0 rgba(0, 0, 0, 0.25)",
  },
} as const;

type theme = typeof theme;
export type keyOfColor = keyof theme["color"];
export type keyofRadius = keyof theme["radius"];
export type keyofShadow = keyof theme["shadow"];
