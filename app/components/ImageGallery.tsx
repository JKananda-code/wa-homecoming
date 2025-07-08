import Image from "next/image";
export default function ImageGallery({ images }: { images: { src: string; caption: string }[] }) {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((img, index) => (
        <div key={index} className="rounded overflow-hidden shadow-md">
          <img src={img.src} alt={img.caption} className="w-full h-64 object-cover" />
          <p className="text-center text-sm text-gray-600 p-2">{img.caption}</p>
        </div>
      ))}
    </div>
  );
}