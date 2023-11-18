export const getFirstItemDynamicStyles = (
  quantityOfSections: number,
  itemWidth: number,
) => {
  const contentWidth = quantityOfSections * itemWidth;
  const borderBottomLeftRadius = contentWidth / 7;
  const borderTopLeftRadius = contentWidth / 7;
  return {
    borderBottomLeftRadius,
    borderTopLeftRadius,
  };
};
