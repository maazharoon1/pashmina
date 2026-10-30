/** Edit this file to add videos or categories. IDs must match Cloudinary exactly. */
export const portfolioCloudName = "ivxpjqou";

// Increase the count when uploading more numbered videos (e.g. ugc11).
const numbered = (prefix: string, count: number) =>
  Array.from({ length: count }, (_, index) => `${prefix}${String(index + 1).padStart(2, "0")}`);

export const portfolioCategories = [
  { name: "UGC Content", publicIds: numbered("ugc", 10) },
  { name: "Beauty & Skincare Promotional Ads", publicIds: numbered("basc", 10) },
  { name: "Car Edit", publicIds: numbered("ce", 10) },
  { name: "Commercial Tech Reel", publicIds: numbered("ctr", 10) },
  { name: "Documentary and Motion Graphics", publicIds: numbered("damg", 10) },
  { name: "Fashion & Apparel Promotional Ads", publicIds: numbered("fnapa", 10) },
  // Assumes the same foyb prefix throughout; change any individual ID if needed.
  { name: "Focusing On Your Brand", publicIds: numbered("foyb", 10) },
  { name: "Talking Head Premium Edit", publicIds: numbered("thpe", 9).filter(id => id !== "thpe05") },
];

// For non-numbered uploads, use: publicIds: ["ugc01", "ugc02", "my-new-video"]
// Full Cloudinary URLs can also be used in publicIds.
export const portfolioProjects = portfolioCategories.flatMap(category =>
  category.publicIds.map((publicId, index) => ({
    key: `portfolio:${publicId}`,
    category: category.name,
    title: `${category.name} ${String(index + 1).padStart(2, "0")}`,
    source: publicId.startsWith("https://") ? publicId :
      `https://res.cloudinary.com/${portfolioCloudName}/video/upload/${publicId.split("/").map(encodeURIComponent).join("/")}.mp4`,
  }))
);
