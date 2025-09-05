// components/EmblaCarousel.tsx
import React, {
  useCallback,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import "./styles/embla.css";

const TWEEN_FACTOR_BASE = 0.52;

const numberWithinRange = (n: number, min: number, max: number) =>
  Math.min(Math.max(n, min), max);

type PortfolioItem = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export type EmblaHandle = {
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  selectedIndex: () => number;
  scrollSnaps: () => number[];
};

type PropType = {
  slides: PortfolioItem[];
  currentIndex: number; // used for grayscale, etc.
  onInit?: (api: EmblaCarouselType) => void;
  onSelect?: (index: number) => void;
};

const EmblaCarousel = forwardRef<EmblaHandle, PropType>(
  ({ slides, currentIndex, onInit, onSelect }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
      loop: true,
      align: "center",
      skipSnaps: false,
      containScroll: "trimSnaps",
    });

    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    // ---- expose controls to parent
    useImperativeHandle(
      ref,
      () => ({
        scrollPrev: () => emblaApi?.scrollPrev(),
        scrollNext: () => emblaApi?.scrollNext(),
        scrollTo: (i: number) => emblaApi?.scrollTo(i),
        selectedIndex: () => emblaApi?.selectedScrollSnap() ?? 0,
        scrollSnaps: () => emblaApi?.scrollSnapList() ?? [],
      }),
      [emblaApi]
    );

    const setTweenNodes = useCallback((api: EmblaCarouselType) => {
      tweenNodes.current = api.slideNodes().map((slideNode) => {
        return slideNode.querySelector(".embla__slide__number") as HTMLElement;
      });
    }, []);

    const setTweenFactor = useCallback((api: EmblaCarouselType) => {
      tweenFactor.current = TWEEN_FACTOR_BASE * api.scrollSnapList().length;
    }, []);

    const tweenScale = useCallback(
      (api: EmblaCarouselType, eventName?: EmblaEventType) => {
        const engine = api.internalEngine();
        const scrollProgress = api.scrollProgress();
        const slidesInView = api.slidesInView();
        const isScrollEvent = eventName === "scroll";

        api.scrollSnapList().forEach((scrollSnap, snapIndex) => {
          let diffToTarget = scrollSnap - scrollProgress;
          const slidesInSnap = engine.slideRegistry[snapIndex];

          slidesInSnap.forEach((slideIndex) => {
            if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

            if (engine.options.loop) {
              engine.slideLooper.loopPoints.forEach((loopItem) => {
                const target = loopItem.target();
                if (slideIndex === loopItem.index && target !== 0) {
                  const sign = Math.sign(target);
                  if (sign === -1)
                    diffToTarget = scrollSnap - (1 + scrollProgress);
                  if (sign === 1)
                    diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              });
            }

            const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
            const scale = numberWithinRange(tweenValue, 0, 1).toString();
            const tweenNode = tweenNodes.current[slideIndex];
            if (tweenNode) tweenNode.style.transform = `scale(${scale})`;
          });
        });
      },
      []
    );

    useEffect(() => {
      if (!emblaApi) return;

      // parent notifications
      onInit?.(emblaApi);
      const handleSelect = () => onSelect?.(emblaApi.selectedScrollSnap());

      setTweenNodes(emblaApi);
      setTweenFactor(emblaApi);
      tweenScale(emblaApi);
      handleSelect();

      emblaApi
        .on("reInit", () => {
          setTweenNodes(emblaApi);
          setTweenFactor(emblaApi);
          tweenScale(emblaApi);
          handleSelect();
        })
        .on("select", handleSelect)
        .on("scroll", tweenScale)
        .on("slideFocus", tweenScale);
    }, [emblaApi, onInit, onSelect, setTweenNodes, setTweenFactor, tweenScale]);

    return (
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((item, index) => {
              const isActive = index === currentIndex; // optional grayscale hook
              return (
                <div className="embla__slide" key={item.id}>
                  <div className="embla__slide__number">
                    <Link
                      href={`/portfolio/${item.link}`}
                      className="absolute transition-all duration-700 ease-out cursor-pointer group"
                    >
                      <div
                        className={`relative w-64 h-112 overflow-visible rounded-lg transition-all duration-700 ${
                          isActive ? "grayscale-0" : "grayscale"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain group-hover:scale-105"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

EmblaCarousel.displayName = "EmblaCarousel";
export default EmblaCarousel;
