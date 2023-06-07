export const randomBGColor = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bg_color = `rgb(${x},${y},${z})`;
  const brightness = Math.round(
    (parseInt(x) * 299 + parseInt(y) * 587 + parseInt(z) * 114) / 1000
  );
  const text_color = brightness > 125 ? "black" : "white";
  return [bg_color, text_color];
};
