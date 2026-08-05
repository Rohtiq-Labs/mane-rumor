const BASE = "/assets/mane-rumor-images";

export const salonImage = (n: number): string =>
  `${BASE}/img-${String(n).padStart(2, "0")}.jpg`;
