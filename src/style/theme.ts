export const theme = {
  color: {
    red: "#FF0000",
    blue: "#1400FF",
    green: "#00FF19",
  },
  radius: {
    small: "4px",
    medium: "8px",
    large: "100px",
  },
  shadow: {
    item: "0 0 10px 0 rgba(0, 0, 0, 0.25)",
  },
};

type theme = typeof theme;
export type keyOfColor = theme["color"];
export type keyofRadius = theme["radius"];
export type keyofShadow = theme["shadow"];
