'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

export function SliderHome() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-0 min-w-0 bg-gray-300 h-80">Slide 1</div>
        <div className="flex-0 min-w-0 bg-gray-300 h-80">Slide 2</div>
        <div className="flex-0 min-w-0 bg-gray-300 h-80">Slide 3</div>
      </div>
      <button type="button" onClick={scrollPrev}>
        Prev
      </button>
      <button type="button" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
}
