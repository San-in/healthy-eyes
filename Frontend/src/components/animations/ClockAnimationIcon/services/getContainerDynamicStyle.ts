export const getContainerDynamicStyle = (mainColor: string, radius: number) => {
  const borderWidth = radius / 10;
  const width = radius * 2;
  const height = radius * 2;
  const borderRadius = radius;
  const borderColor = mainColor;
  return {
    borderColor,
    width,
    height,
    borderRadius,
    borderWidth,
  };
};
