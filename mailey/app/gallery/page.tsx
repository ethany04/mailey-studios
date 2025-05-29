import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#BAC3FF] pt-10">
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#3C3883] mb-16">
            Our Gallery
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Seniors Category */}
            <Link href="/gallery/seniors" className="block group">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about/senior1.jpg"
                  alt="Senior photography"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C3883]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Seniors
                  </h2>
                  <p className="text-white/90">
                    Celebrating achievements and milestones with professional
                    senior portraits.
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#3C3883]/0 group-hover:bg-[#3C3883]/20 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-white/80 text-[#3C3883] font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Gallery
                  </span>
                </div>
              </div>
            </Link>

            {/* Editorials Category */}
            <Link href="/gallery/editorials" className="block group">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about/editorial1.jpg"
                  alt="Editorial photography"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C3883]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Editorials
                  </h2>
                  <p className="text-white/90">
                    Creative and artistic editorial photography for magazines
                    and publications.
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#3C3883]/0 group-hover:bg-[#3C3883]/20 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-white/80 text-[#3C3883] font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Gallery
                  </span>
                </div>
              </div>
            </Link>

            {/* Lifestyle Category */}
            <Link href="/gallery/lifestyle" className="block group">
              <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about/lifestyle1.jpg"
                  alt="Lifestyle photography"
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3C3883]/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    Lifestyle
                  </h2>
                  <p className="text-white/90">
                    Authentic moments captured in natural settings that tell
                    your unique story.
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#3C3883]/0 group-hover:bg-[#3C3883]/20 transition-all duration-300 flex items-center justify-center">
                  <span className="bg-white/80 text-[#3C3883] font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Gallery
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
