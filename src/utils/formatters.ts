const priceFormatter = Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 0,
});

export const formatPrice = (price: number | null | undefined): string => {
  if (!price) return "₹0";
  return priceFormatter.format(price);
};
