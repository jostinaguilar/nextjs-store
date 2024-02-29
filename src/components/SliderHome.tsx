'use client';

import clsx from 'clsx';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { DotButton, useDotButton } from './ui/DotButtonCarousel';
import { ChevronLeftIcon, ChevronRightIcon } from './ui/Icons';

export function SliderHome() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

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
    <div className="overflow-hidden lg:rounded-md relative" ref={emblaRef}>
      <div className="flex">
        <div className="flex-0 min-w-0 bg-gray-300 h-80 lg:rounded-md text-center">
          Slide 1
        </div>
        <div className="flex-0 min-w-0 bg-gray-300 h-80 lg:rounded-md text-center">
          Slide 2
        </div>
        <div className="flex-0 min-w-0 bg-gray-300 h-80 lg:rounded-md text-center">
          Slide 3
        </div>
      </div>
      <button
        type="button"
        onClick={scrollPrev}
        className="bg-primary p-1 rounded-full text-white top-1/2 -translate-y-1/2 left-2 absolute"
      >
        <ChevronLeftIcon />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="bg-primary p-1 rounded-full text-white top-1/2 -translate-y-1/2 right-2 absolute"
      >
        <ChevronRightIcon />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-row gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => {
              onDotButtonClick(index);
            }}
            className={clsx('w-3 h-3 rounded-full bg-gray-600', {
              'bg-blue-600': index === selectedIndex,
            })}
          />
        ))}
      </div>
    </div>
  );
}
