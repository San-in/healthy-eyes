export const getContainerDynamicDashedStyle = (
  accentColor: string,
  radius: number,
) => {
  const borderColor = accentColor;
  const borderWidth = radius / 50;
  const borderRadius = radius;
  const containerWidth = radius * 2;
  const containerHeight = radius * 2;
  const sizeDifference = radius / 10;
  const width = containerWidth - sizeDifference;
  const height = containerHeight - sizeDifference;

  return {
    borderColor,
    width,
    height,
    borderRadius,
    borderWidth,
  };
};
