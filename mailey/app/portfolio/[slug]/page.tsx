import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getShootImages, getAllShootSlugs } from "@/lib/getShootImages";
import { portfolioData } from "@/lib/portfolioData";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PhotographyStudio({ params }: PageProps) {
  const { slug } = await params;

  // Normalize/Decode slug
  const decodedSlug = decodeURIComponent(slug.replace(/^\/+/, "")).toLowerCase();

  // 🔎 Look up the item in the shared DB by its slug
  const item = portfolioData.find(
    (p) => p.link.replace(/^\/+/, "").toLowerCase() === decodedSlug
  );

  // Fetch images using the slug used for folders
  const photos = await getShootImages(decodedSlug);
  if (!photos.length) notFound();

  // Title: prefer DB title, fallback to prettified slug
  const fallbackTitle = decodedSlug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
  const displayTitle = item?.title ?? fallbackTitle;

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="fixed left-6 top-16 z-30">
        <Link
          href="/portfolio"
          className="inline-block px-6 py-3 bg-black text-white shadow hover:bg-gray-800 transition-colors duration-300"
        >
          ← Return to Portfolio
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-6 pt-28 pb-10">
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
            {displayTitle}
          </h2>

          {/* Optional: show metadata from DB if present */}
          {item?.meta && (
            <p className="text-sm text-gray-500 tracking-widest">
              {[
                item.meta.date && `DATE: ${item.meta.date}`,
                item.meta.location && `LOCATION: ${item.meta.location}`,
                item.meta.model && `MODEL: ${item.meta.model}`,
                item.meta.shootType && `SHOOT TYPE: ${item.meta.shootType}`,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}

          {!item?.meta && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Description for now.
            </p>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.src} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={photo.src}
                  alt={photo.filename}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllShootSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 60;
