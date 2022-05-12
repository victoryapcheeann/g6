import G6 from "@antv/g6";

const colors = [
  "#5F95FF", // blue
  "#61DDAA",
  "#65789B",
  "#F6BD16",
  "#7262FD",
  "#78D3F8",
  "#9661BC",
  "#F6903D",
  "#008685",
  "#F08BB4"
];

const backColor = "#fff";
const theme = "default";
const disableColor = "#777";
const colorSets = G6.Util.getColorSetsBySubjectColors(
  colors,
  backColor,
  theme,
  disableColor
);

export { colors, colorSets };
