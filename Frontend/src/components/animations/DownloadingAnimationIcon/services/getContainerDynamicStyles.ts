export const getContainerDynamicStyles = (
  quantityOfSections: number,
  itemWidth: number,
  itemHeight: number,
  backgroundColor: string,
) => {
  const gap = itemWidth / 20;
  const padding = itemHeight / 7;
  const contentWidth = quantityOfSections * itemWidth;
  const borderRadius = contentWidth / 9;
  const width = contentWidth + padding * 2 + gap * (quantityOfSections - 1);

  return {
    width,
    borderRadius,
    padding,
    gap,
    backgroundColor,
  };
};
