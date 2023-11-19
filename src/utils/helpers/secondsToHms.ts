export const secondsToHms = (d: number): string => {
  d = Number(d);
  const h = Math.floor(d / 3600);
  const m = Math.floor((d % 3600) / 60);

  const hDisplay = h + "h ";
  const mDisplay = m + "m";

  return hDisplay + mDisplay;
};
