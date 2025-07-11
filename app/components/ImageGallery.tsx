'use client';

import Image from 'next/image';

export default function ImageGallery({ images }: { images: { src: string; caption: string }[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, index) => (
        <div
          key={index}
          className="group rounded-lg overflow-hidden shadow-md bg-white transition-transform hover:scale-105 hover:shadow-lg"
        >
          <div className="relative w-full h-64">
            <Image
              src={img.src}
              alt={img.caption}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-90 transition-opacity"
              priority={index < 3}
            />
          </div>
          <p className="text-center text-sm text-gray-700 p-3 font-medium group-hover:text-emerald-700 transition-colors">
            {img.caption}
          </p>
        </div>
      ))}
    </div>
  );
}