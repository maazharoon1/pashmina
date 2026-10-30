import { portfolioProjects } from "./portfolio";

/** Replace source with a Cloudinary delivery URL, OR set cloudinaryPublicId + the cloud name in .env.local. */
export type MediaItem = { source: string; poster: string; cloudinaryPublicId: string };
export const videos: Record<string, MediaItem> = {
  "2004": {
    "source": "/videos/2004.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  },
  "hyper-editz-reel": {
    "source": "/videos/hyper-editz-reel.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  },
  "commercial-tech-reel": {
    "source": "/videos/commercial-tech-reel.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  },
  "ugc-product-ad": {
    "source": "/videos/ugc-product-ad.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  },
  "talking-head-premium-edit": {
    "source": "/videos/talking-head-premium-edit.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  },
  "documentary-and-motion-graphics": {
    "source": "/videos/documentary-and-motion-graphics.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  },
  "focusing-on-your-brand": {
    "source": "/videos/focusing-on-your-brand.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  },
  "beauty-skincare-promotional-ad": {
    "source": "/videos/beauty-skincare-promotional-ad.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  },
  "fashion-apparel-promotional-ad": {
    "source": "/videos/fashion-apparel-promotional-ad.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  },
  "car-edit": {
    "source": "/videos/car-edit.mp4",
    "poster": "",
    "cloudinaryPublicId": ""
  }
};
export const images: Record<string, string> = {
  "illinois-location": "/illinois-location-burgundy.webp",
  "profile-hero.jpg": "/hero.jpeg",
  "lifeoz.webp": "/lifeoz.webp",
  "samridhi-organic.webp": "/samridhi-organic.webp",
  "5ive-minutes-of-beauty.webp": "/5ive-minutes-of-beauty.webp",
  "bislova.webp": "/bislova.webp",
  "healthy-jeena-sikho.webp": "/healthy-jeena-sikho.webp",
  "study-abroad-campus.webp": "/study-abroad-campus.webp",
  "bringle-tech.webp": "/bringle-tech.webp",
  "brand-x.webp": "/brand-x.webp"
};
export function imageSource(key: string) { return images[key] || key; }
export function videoSource(key: string) {
  const project = portfolioProjects.find(project => project.key === key);
  if (project) return project.source;
  const item = videos[key];
  if (!item) return '';
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return cloud && item.cloudinaryPublicId
    ? 'https://res.cloudinary.com/' + encodeURIComponent(cloud) + '/video/upload/f_auto,q_auto/' + item.cloudinaryPublicId.split('/').map(encodeURIComponent).join('/')
    : item.source;
}
export function videoPoster(key: string) {
  const item = videos[key];
  if (item?.poster) return item.poster;
  const src = videoSource(key);
  return src.includes('res.cloudinary.com/') && src.includes('/video/upload/')
    ? src.replace('/video/upload/', '/video/upload/so_0/').replace(/\.[a-z0-9]+(?:\?.*)?$/i, '') + '.jpg'
    : undefined;
}
