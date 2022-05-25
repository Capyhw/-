let s = "a good   example";
return s
  .trim()
  .split(" ")
  .reverse()
  .filter((item) => item !== "")
  .join(" ");
