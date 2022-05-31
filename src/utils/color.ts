export function readableColor(color: string) {
  const lightColors = ["white", "yellow"];
  return lightColors.includes(color) ? "black" : "white";
}
