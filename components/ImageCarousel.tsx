"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ImageCarouselProps = {
  images: string[];
  alt: string;
  className?: string;
};

export function ImageCarousel({ images, alt, className = "" }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageRatios, setImageRatios] = useState<Record<string, number>>({});

  useEffect(() => {
    if (images.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  const previous = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const activeImage = images[activeIndex];
  const activeRatio = imageRatios[activeImage] ?? 16 / 9;

  return (
    <div className={`image-carousel ${className}`}>
      <div className="image-carousel__viewport" style={{ aspectRatio: activeRatio }}>
        {images.map((image, index) => (
          <div
            key={image}
            className={`image-carousel__slide ${index === activeIndex ? "is-active" : ""}`}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={image}
              alt={`${alt} documentation ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-contain"
              priority={index === 0}
              onLoad={(event) => {
                const { naturalWidth, naturalHeight } = event.currentTarget;
                setImageRatios((ratios) => ({
                  ...ratios,
                  [image]: naturalWidth / naturalHeight,
                }));
              }}
            />
          </div>
        ))}

        {images.length > 1 ? (
          <>
            <button type="button" className="image-carousel__arrow image-carousel__arrow--previous" onClick={previous} aria-label="Previous image">
              ‹
            </button>
            <button type="button" className="image-carousel__arrow image-carousel__arrow--next" onClick={next} aria-label="Next image">
              ›
            </button>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="image-carousel__dots" aria-label="Image slides">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={`image-carousel__dot ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
