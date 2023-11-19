export const getLastItemDynamicStyles = (
  quantityOfSections: number,
  itemWidth: number,
) => {
  const contentWidth = quantityOfSections * itemWidth;
  const borderBottomRightRadius = contentWidth / 7;
  const borderTopRightRadius = contentWidth / 7;
  return {
    borderBottomRightRadius,
    borderTopRightRadius,
  };
};
