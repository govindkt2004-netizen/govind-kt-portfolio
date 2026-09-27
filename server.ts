import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { execSync } from "child_process";
import { createServer as createViteServer } from "vite";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: string;
}

interface ActivePhotoConfig {
  heroUrl: string;
  portraitUrl: string;
  presetId?: string;
  name?: string;
  updatedAt: string;
}

const MESSAGES_FILE = path.join(process.cwd(), "contact_messages.json");
const ACTIVE_PHOTO_FILE = path.join(process.cwd(), "active_photo.json");

const DEFAULT_ACTIVE_PHOTO: ActivePhotoConfig = {
  heroUrl: "/images/govinda_user_hero_cutout.png",
  portraitUrl: "/images/profile_photo.jpg",
  presetId: "original-user",
  name: "Govind K T Profile Photo",
  updatedAt: new Date().toISOString(),
};

function loadActivePhoto(): ActivePhotoConfig {
  try {
    if (fs.existsSync(ACTIVE_PHOTO_FILE)) {
      const data = fs.readFileSync(ACTIVE_PHOTO_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn("Could not read active photo file:", err);
  }
  return DEFAULT_ACTIVE_PHOTO;
}

function saveActivePhoto(config: ActivePhotoConfig) {
  try {
    fs.writeFileSync(ACTIVE_PHOTO_FILE, JSON.stringify(config, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not save active photo file:", err);
  }
}

function loadSubmissions(): ContactSubmission[] {
  try {
    if (fs.existsSync(MESSAGES_FILE)) {
      const data = fs.readFileSync(MESSAGES_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn("Could not read contact messages file:", err);
  }
  return [];
}

function saveSubmissions(submissions: ContactSubmission[]) {
  try {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify(submissions, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not save contact messages file:", err);
  }
}

let contactSubmissions: ContactSubmission[] = loadSubmissions();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // Photo API endpoints
  app.get("/api/active-photo", (_req: Request, res: Response) => {
    const config = loadActivePhoto();
    res.json(config);
  });

  app.post("/api/active-photo", (req: Request, res: Response) => {
    try {
      const { heroUrl, portraitUrl, presetId, name } = req.body;
      if (!heroUrl) {
        return res.status(400).json({ error: "heroUrl is required" });
      }
      const newConfig: ActivePhotoConfig = {
        heroUrl,
        portraitUrl: portraitUrl || heroUrl,
        presetId: presetId || "custom",
        name: name || "Selected Photo",
        updatedAt: new Date().toISOString(),
      };
      saveActivePhoto(newConfig);
      return res.json({ success: true, activePhoto: newConfig });
    } catch (err: any) {
      console.error("[ActivePhoto] Error saving active photo:", err);
      return res.status(500).json({ error: err?.message || "Failed to update active photo" });
    }
  });

  app.post("/api/upload-photo", (req: Request, res: Response) => {
    try {
      const {
        imageBase64,
        heroBase64,
        portraitBase64,
        removeHeroBg = true,
        removePortraitBg = false,
        slot,
      } = req.body;

      const publicDir = path.join(process.cwd(), "public", "images");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      const activeConfig = loadActivePhoto();
      let updatedHeroUrl = activeConfig.heroUrl;
      let updatedPortraitUrl = activeConfig.portraitUrl;

      const saveBuffer = (dataUrl: string, filename: string): string => {
        const matches = dataUrl.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        const buffer = matches && matches[2]
          ? Buffer.from(matches[2], "base64")
          : Buffer.from(dataUrl, "base64");
        const filePath = path.join(publicDir, filename);
        fs.writeFileSync(filePath, buffer);
        return filePath;
      };

      // 1. Process Hero Image (Full body standing shot, e.g. ChatGPT photo)
      const effectiveHeroData = heroBase64 || (slot === 'hero' ? imageBase64 : null);
      if (effectiveHeroData && typeof effectiveHeroData === "string") {
        const rawHeroPath = saveBuffer(effectiveHeroData, "govinda_user_hero_raw.png");
        const transparentHeroPath = path.join(publicDir, "govinda_user_hero_cutout.png");

        // Check if image already has transparent alpha channels
        let alreadyHasAlpha = false;
        try {
          const channels = execSync(`identify -format "%[channels]" "${rawHeroPath}"`).toString();
          if (channels.includes("srgba") || channels.includes("rgba") || channels.includes("a")) {
            const cornerMean = execSync(`convert "${rawHeroPath}" -crop 10x10+0+0 -format "%[mean]" info:`).toString();
            if (parseFloat(cornerMean) < 100) {
              alreadyHasAlpha = true;
            }
          }
        } catch (checkErr) {
          console.warn("[Upload] Alpha channel inspection notice:", checkErr);
        }

        if (alreadyHasAlpha) {
          // Keep pristine cutout without punching holes into clothes or highlights
          fs.copyFileSync(rawHeroPath, transparentHeroPath);
        } else if (removeHeroBg) {
          try {
            // Remove white/light backgrounds with conservative fuzz factor
            execSync(`convert "${rawHeroPath}" -fuzz 15% -transparent white "${transparentHeroPath}"`);
          } catch (convErr) {
            console.warn("[Upload] ImageMagick hero cutout warning:", convErr);
            fs.copyFileSync(rawHeroPath, transparentHeroPath);
          }
        } else {
          fs.copyFileSync(rawHeroPath, transparentHeroPath);
        }
        updatedHeroUrl = `/images/govinda_user_hero_cutout.png?t=${Date.now()}`;
      }

      // 2. Process Portrait Image (Headshot / Profile photo, e.g. profile_photo.jpg)
      const effectivePortraitData = portraitBase64 || (slot === 'portrait' ? imageBase64 : null);
      if (effectivePortraitData && typeof effectivePortraitData === "string") {
        const rawPortraitPath = saveBuffer(effectivePortraitData, "govinda_user_portrait.png");
        fs.copyFileSync(rawPortraitPath, path.join(publicDir, "profile_photo.jpg"));
        updatedPortraitUrl = `/images/profile_photo.jpg?t=${Date.now()}`;
      }

      // 3. Fallback for single imageBase64 if neither slot was explicitly targeted
      if (!effectiveHeroData && !effectivePortraitData && imageBase64) {
        const rawFilePath = saveBuffer(imageBase64, "govinda_exact.png");
        const transparentFilePath = path.join(publicDir, "govinda_cutout_transparent.png");
        const portraitFilePath = path.join(publicDir, "govinda_portrait_transparent.png");

        try {
          execSync(`convert "${rawFilePath}" -fuzz 20% -transparent white "${transparentFilePath}"`);
          execSync(`convert "${rawFilePath}" -gravity north -crop 100%x45%+0+0 +repage "${portraitFilePath}"`);
        } catch (convErr) {
          console.warn("[Upload] ImageMagick fallback warning:", convErr);
          fs.copyFileSync(rawFilePath, transparentFilePath);
          fs.copyFileSync(rawFilePath, portraitFilePath);
        }

        updatedHeroUrl = `/images/govinda_cutout_transparent.png?t=${Date.now()}`;
        updatedPortraitUrl = `/images/govinda_portrait_transparent.png?t=${Date.now()}`;
      }

      const newConfig: ActivePhotoConfig = {
        heroUrl: updatedHeroUrl,
        portraitUrl: updatedPortraitUrl,
        presetId: "custom-user-photos",
        name: "Your Uploaded Photos",
        updatedAt: new Date().toISOString(),
      };

      saveActivePhoto(newConfig);

      return res.status(200).json({
        success: true,
        message: "Your photos were uploaded and processed successfully!",
        heroUrl: updatedHeroUrl,
        portraitUrl: updatedPortraitUrl,
        activePhoto: newConfig,
      });
    } catch (err: any) {
      console.error("[Upload] Error uploading photo:", err);
      return res.status(500).json({ error: err?.message || "Failed to upload photo" });
    }
  });

  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      developer: "Govind K T",
    });
  });

  app.post("/api/contact", (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return res.status(400).json({ error: "Name is required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: "A valid email address is required" });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return res.status(400).json({ error: "Message must be at least 5 characters long" });
    }

    const newSubmission: ContactSubmission = {
      id: `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? String(subject).trim() : "Portfolio Contact Inquiry",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    contactSubmissions.unshift(newSubmission);
    saveSubmissions(contactSubmissions);

    console.log(`[Contact] New inquiry received from ${newSubmission.name} (${newSubmission.email})`);

    return res.status(200).json({
      success: true,
      message: "Message received successfully! Govind K T will get back to you shortly.",
      inquiryId: newSubmission.id,
    });
  });

  app.get("/api/contact-messages", (_req: Request, res: Response) => {
    res.json({
      success: true,
      messages: contactSubmissions,
      count: contactSubmissions.length,
    });
  });

  app.delete("/api/contact-messages/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    contactSubmissions = contactSubmissions.filter((item) => item.id !== id);
    saveSubmissions(contactSubmissions);
    res.json({ success: true, message: "Inquiry deleted" });
  });

  // Vite middleware for dev or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Govind K T Portfolio server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
