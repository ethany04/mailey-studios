import fs from "fs/promises";
import path from "path";

export type ShootImage = {
  src: string; // e.g. /Shoots/<slug>/foo.jpg
  filename: string; // "foo.jpg"
};

const IMAGE_EXTS = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"];

export async function getShootImages(slug: string): Promise<ShootImage[]> {
  const shootDir = path.join(process.cwd(), "public", "Shoots", slug);

  let files: string[];
  try {
    files = await fs.readdir(shootDir);
  } catch {
    // Folder doesn't exist
    return [];
  }

  const images = files
    .filter((f) => IMAGE_EXTS.some((ext) => f.toLowerCase().endsWith(ext)))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    )
    .map((file) => ({
      src: `/Shoots/${slug}/${file}`,
      filename: file,
    }));

  return images;
}

/** Optional: discover available slugs by folders in /public/Shoots */
export async function getAllShootSlugs(): Promise<string[]> {
  const shootsRoot = path.join(process.cwd(), "public", "Shoots");
  let entries: string[] = [];
  try {
    entries = await fs.readdir(shootsRoot);
  } catch {
    return [];
  }

  const dirs: string[] = [];
  for (const name of entries) {
    const full = path.join(shootsRoot, name);
    try {
      const stat = await fs.stat(full);
      if (stat.isDirectory()) dirs.push(name);
    } catch {}
  }
  return dirs.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
  );
}
