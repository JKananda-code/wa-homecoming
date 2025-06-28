
import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';

export default function FamilyPage() {
  const images = [
    { src: '/images/wanjiku.jpg', caption: 'Wanjiku Elijah' },
    { src: '/images/elijah-son.jpg', caption: 'Her son, Elijah Kimotho Jr.' },
    { src: '/images/parents.jpg', caption: 'Parents: Elijah & Gathigia Kimotho' },
    ...Array.from({ length: 10 }, (_, i) => ({
      src: `/images/sibling${i + 1}.jpg`,
      caption: `Sibling ${i + 1}`
    }))
  ];

  return (
    <section className="p-6 md:p-12 bg-white text-gray-800">
      <SectionHeader title="Family Moments" />
      <p className="mb-6 max-w-3xl text-lg">
        The heart of Kamweretho lies in honoring one's roots. Here, Wanjiku and her son return home to celebrate their lineage. These images reflect the warmth, connection, and love that binds generations together.
      </p>
      <ImageGallery images={images} />
    </section>
  );
}