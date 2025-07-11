
import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';

export default function CelebrationsPage() {
  const images = [
    { src: '/images/music.jpg', caption: 'Traditional Music & Dance' },
    { src: '/images/cake-cutting.jpg', caption: 'Cutting the Celebration Cake' },
    { src: '/images/leso-girls.jpg', caption: 'Lesos for the Sisters' },
    { src: '/images/shirts-boys.jpg', caption: 'Shirts for the Brothers' },
    { src: '/images/presenting-parents.jpg', caption: 'Presents to the Parents' },
  ];

  return (
    <section className="p-6 md:p-12 bg-white text-gray-800">
      <SectionHeader title="Celebration Highlights" />
      <p className="mb-6 max-w-3xl text-lg">
        The joy of Kamweretho radiates through these vibrant moments of celebration—dance, laughter, gifting, and shared memories. It’s a collective embrace of culture and continuity.
      </p>
      <ImageGallery images={images} />
    </section>
  );
}