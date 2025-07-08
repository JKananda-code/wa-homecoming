import Image from 'next/image';
import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';

export default function FamilyPage() {
  const Images = [
    { src: '/wa-Wanjiku.jpeg', caption: 'Wanjiku Elijah Kimotho' },
    { src: '/wa-son.jpeg', caption: 'Wanjiku son, Elijah Kimotho Jr.' },
    { src: '/wa-parents.jpeg', caption: 'Parents: Elijah & Gathigia Kimotho' },
    { src: '/wa-sisters-one.jpeg', caption: 'Wanjiku sisters: Wandia, Njeri, and Ngima' },
    { src: '/wa-sisters-two.jpeg', caption: 'Wanjiku sisters together' },
    { src: '/wa-Friends2.jpeg', caption: 'wanjiku friends: Mary & Mwihaki together' },
    { src: '/wa-brothers-two.jpeg', caption: 'another pictures of brothers' },
    { src: '/wa-brothers-three.jpeg', caption: 'another picture of brothers' },
    { src: '/wa-brothers-three.jpeg', caption: 'another picture of brothers' },
    ...Array.from({ length: 3 }, (_, i) => ({
      src: `/sibling${i + 1}.jpg`, caption: `Sibling ${i + 1}`
    }))
  ];

  return (
    <section className="p-6 md:p-12 bg-white text-gray-800">
      <SectionHeader title="Family Moments" />
      <p className="mb-6 max-w-3xl text-lg items-center">
        The heart of Kamweretho lies in honoring ones roots. Here, Wanjiku and her son return home to celebrate their lineage. These images reflect the warmth, connection, and love that binds generations together.
      </p>
      <ImageGallery images={Images} />
    </section>
  );
}