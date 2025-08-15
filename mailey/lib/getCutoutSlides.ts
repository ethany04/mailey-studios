import fs from "fs/promises";
import path from "path";

export type Slide = {
  id: number;
  title: string; // filename without extension
  image: string; // e.g. /Cutouts/Foo.png
  link: string; // e.g. /portfolio/Foo (no extension)
};

export async function getCutoutSlides(): Promise<Slide[]> {
  const cutoutsDir = path.join(process.cwd(), "public", "Cutouts");
  const files = await fs.readdir(cutoutsDir);

  // Only .png files (case-insensitive), sorted for stable order
  const pngs = files
    .filter((f) => f.toLowerCase().endsWith(".png"))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" })
    );

  return pngs.map((file, idx) => {
    const base = file.replace(/\.png$/i, ""); // title & link segment
    return {
      id: idx + 1,
      title: base,
      image: `/Cutouts/${file}`,
      link: `/portfolio/${base}`,
    };
  });
}
