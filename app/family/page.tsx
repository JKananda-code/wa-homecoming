import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';

export default function FamilyPage() {
  const images = [
    { src: '/wa-Wanjiku.jpeg', caption: 'Wanjiku Elijah' },
    { src: '/wa-son.jpeg', caption: 'Son of Wanjiku: Elijah Kimotho Jr.' },
    { src: '/wa-parents.jpeg', caption: 'Parents: Elijah & Gathigia Kimotho' },
    { src: '/wa-Friends2.jpeg', caption: 'Friends: Mary & Mwuihaki' },
    { src: '/wa-brothers-one.jpeg', caption: 'Siblings: Wanjiku brothers' },
    { src: '/wa-brothers-two.jpeg', caption: 'Siblings: Another view of brothers' },
    { src: '/wa-brothers-three.jpeg', caption: 'A third view of brothers' },
    { src: '/wa-sisters-one.jpeg', caption: 'Siblings: Wanjiku Sisters' },
    { src: '/wa-sisters-two.jpeg', caption: 'Siblings: Another view of Sisters' },
    ...Array.from({ length: 3 }, (_, i) => ({
      src: `/images/sibling${i + 1}.jpg`,
      caption: `Sibling ${i + 1}`
    }))
  ];

  return (
    <section className="p-6 md:p-12 bg-white text-gray-800">
      <SectionHeader title="Family Moments" />
      <p className="mb-6 max-w-3xl text-lg">
        The heart of Kamweretho lies in honoring ones roots. Here, Wanjiku and her son return home to celebrate their lineage. These images reflect the warmth, connection, and love that binds generations together.
      </p>
      <ImageGallery images={images} />
    </section>
  );
}