import { notFound } from "next/navigation";
import Image from "next/image";
import { getShootImages, getAllShootSlugs } from "@/lib/getShootImages";

// 👇 params is a Promise now — type it accordingly
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PhotographyStudio({ params }: PageProps) {
  // 👇 await params before using properties
  const { slug } = await params;

  const photos = await getShootImages(slug);
  if (photos.length === 0) notFound();

  const title = slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-black">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Description for now.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo) => (
            <div key={photo.src} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 ">
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

// (unchanged)
export async function generateStaticParams() {
  const slugs = await getAllShootSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 60;
