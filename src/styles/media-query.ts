export const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth})`;

export const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};