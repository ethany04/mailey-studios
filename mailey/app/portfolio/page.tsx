import { getCutoutSlides } from "@/lib/getCutoutSlides";
import PortfolioClient from "./PortfolioClient";

export default async function PhotographyPortfolioPage() {
  const slides = await getCutoutSlides(); // reads /public/Cutouts/*.png

  return <PortfolioClient slides={slides} />;
}
