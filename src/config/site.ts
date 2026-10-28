/** Replace the identity here when the final name and contact details are ready. */
export const site = {
  name: "Pashmina",
  brandFirst: "PASH",
  brandLast: "MINA",
  contact: {
    // Add Pashmina's own details here to enable these two placeholder icons.
    email: "",
    linkedin: "",
    upwork: "https://www.upwork.com/freelancers/~01de153e8ce8e49ba2?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01de153e8ce8e49ba2%2Fprofile",
  },
  title: "Video Editor & Creative Producer",
  description: "Explore Pashmina's video editing and creative production portfolio, from short-form videos and AI UGC to talking-head content and brand videos.",
};

/** Keeps the original copy while consistently replacing the portfolio name. */
export function personalize(value: string) {
  return value
    .replaceAll("Jaspal", site.name)
    .replaceAll("JASPAL", site.name.toUpperCase());
}
