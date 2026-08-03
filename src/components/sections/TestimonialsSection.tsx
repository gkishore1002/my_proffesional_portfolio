import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { TESTIMONIALS } from "@/data/agency";
import SectionHeader from "@/components/ui/SectionHeader";

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <SectionHeader
          label="Testimonials"
          title="Trusted by founders who value craft and speed."
          description="Our clients stay with us because the work feels premium, the process is calm, and the outcomes are measurable."
          className="mb-14"
        />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.name}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <motion.blockquote
                    whileHover={{ y: -4 }}
                    className="glass-card flex h-full flex-col rounded-2xl p-7"
                  >
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <FiStar key={i} className="h-4 w-4 fill-brand-light text-brand-light" />
                      ))}
                    </div>
                    <p className="flex-1 text-base leading-relaxed text-foreground lg:text-lg">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <footer className="mt-6 flex items-center gap-4 border-t border-white/[0.08] pt-6">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        loading="lazy"
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-brand/20"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.role}, {item.company}
                        </p>
                      </div>
                    </footer>
                  </motion.blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === selectedIndex ? "w-8 bg-brand" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground transition hover:border-brand/30 hover:bg-brand/10"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground transition hover:border-brand/30 hover:bg-brand/10"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
