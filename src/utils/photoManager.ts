import { useState, useEffect } from 'react';

export interface PhotoPreset {
  id: string;
  name: string;
  heroUrl: string;
  portraitUrl: string;
}

export const DEFAULT_HERO_CUTOUT = '/images/govinda_user_hero_cutout.png';
export const DEFAULT_PORTRAIT_CUTOUT = '/images/profile_photo.jpg';
export const DEFAULT_PRESET_ID = 'original-user';

export const PHOTO_PRESETS: PhotoPreset[] = [
  {
    id: 'original-user',
    name: 'Govind K T Profile',
    heroUrl: DEFAULT_HERO_CUTOUT,
    portraitUrl: DEFAULT_PORTRAIT_CUTOUT,
  },
];

export function getSavedHeroPhoto(): string {
  return DEFAULT_HERO_CUTOUT;
}

export function getSavedPortraitPhoto(): string {
  return DEFAULT_PORTRAIT_CUTOUT;
}

export function getSavedPresetId(): string {
  return DEFAULT_PRESET_ID;
}

export function usePortfolioPhoto() {
  return {
    heroPhoto: DEFAULT_HERO_CUTOUT,
    portraitPhoto: DEFAULT_PORTRAIT_CUTOUT,
    activePresetId: DEFAULT_PRESET_ID,
  };
}

/**
 * Automatically removes white or light background in the browser with feathering
 */
export async function removeWhiteBackgroundClientSide(imageSrc: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageSrc);
        return;
      }
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      // Sample corners to check background color
      const sampleIndices = [0, (canvas.width - 1) * 4];
      let bgR = 255;
      let bgG = 255;
      let bgB = 255;
      if (data.length > 4) {
        bgR = data[sampleIndices[0]];
        bgG = data[sampleIndices[0] + 1];
        bgB = data[sampleIndices[0] + 2];
      }

      // Check if corners are near white (>220) or near black (<25)
      const isLightBg = bgR > 215 && bgG > 215 && bgB > 215;
      const isDarkBg = bgR < 35 && bgG < 35 && bgB < 35;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (isLightBg) {
          const minVal = Math.min(r, g, b);
          if (minVal > 240) {
            data[i + 3] = 0;
          } else if (minVal > 220) {
            const factor = (240 - minVal) / 20;
            data[i + 3] = Math.floor(data[i + 3] * factor);
          }
        } else if (isDarkBg) {
          const maxVal = Math.max(r, g, b);
          if (maxVal < 22) {
            data[i + 3] = 0;
          } else if (maxVal < 42) {
            const factor = (maxVal - 22) / 20;
            data[i + 3] = Math.floor(data[i + 3] * factor);
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => resolve(imageSrc);
    img.src = imageSrc;
  });
}

/**
 * Crops upper 42% of a full-body cutout for the avatar / portrait card
 */
export async function cropPortraitClientSide(imageSrc: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const w = img.naturalWidth || img.width;
      const h = img.naturalHeight || img.height;
      const cropHeight = Math.floor(h * 0.42);
      canvas.width = w;
      canvas.height = cropHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(imageSrc);
        return;
      }
      ctx.drawImage(img, 0, 0, w, cropHeight, 0, 0, w, cropHeight);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => resolve(imageSrc);
    img.src = imageSrc;
  });
}
