
import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';

export default function CelebrationsPage() {
  const images = [
    { src: '/Celeb-one.jpeg', caption: 'Traditional Music & Dance' },
    { src: '/Celeb-two.jpeg', caption: 'Celeb Activities caught on camera' },
    { src: '/Celeb-three.jpeg', caption: 'More Celeb Activities on camera' },
    { src: '/Celeb-four.jpeg', caption: 'Celeb Activities on camera' },
    { src: '/Celeb-five.jpeg', caption: 'More Celeb Activities on camera' },
    { src: '/Celeb-six.jpeg', caption: 'More Celeb activities on camera' },
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