import PageTransition from '../components/PageTransition';
import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';

export default function FamilyPage() {
  const images = [
    { src: '/wa-Wanjiku.jpeg', caption: 'Wanjiku Elijah' },
    { src: '/wa-son.jpeg', caption: 'Son of Wanjiku: Elijah Kimotho Jr.' },
    { src: '/wa-parents.jpeg', caption: 'Parents: Elijah & Gathigia Kimotho' },
    { src: '/wa-Friends2.jpeg', caption: 'Friends: Mary & Mwihaki' },
    { src: '/wa-brothers-one.jpeg', caption: 'Relatives: Wanjiku uncles' },
    { src: '/wa-brothers-two.jpeg', caption: 'Relatives: Another view of relatives' },
    { src: '/wa-brothers-three.jpeg', caption: 'A third view of relatives' },
    { src: '/wa-sisters-one.jpeg', caption: 'Siblings: Wanjiku Sisters' },
    { src: '/wa-BrothersTwo.jpeg', caption: 'Siblings: Wanjiku Brothers' },
    { src: '/wa-CakeInBasket.jpeg', caption: 'The Cake: Sharable Gift for the Parents.' },
    { src: '/wa-CuttingOfCake.jpeg', caption: 'Cake cut and shared on behalf of the Parents' },
    { src: '/wa-Bishop-Kariuki.jpeg', caption: 'Distingished Guest: Bishop Kariuki from Thika graced the occasion' },
    { src: '/Father-Grandfather.jpg', caption: 'Father and Grandfather: Elijah Kimotho Sr..' },
    { src: '/Mother-Grandmother.jpg', caption: 'Mother and Grandmother: Gathigia Kimotho.' },
    { src: '/Mwangi.jpeg', caption: 'Mum youngest brother: Wanjiku Uncle' },
    { src: '/Mureithi.jpeg', caption: 'Mureithi: Elijah Wanjiku Brother' },
    { src: '/Kinyua.jpeg', caption: 'Kinyua:Wanjiku Brother' },
    { src: '/Maina.jpeg', caption: 'Maina: Wanjiku Wanjiku Brother' },
        ...Array.from({ length: 0 }, (_, i) => ({
     src: `/images/siblings${i + 1}.jpeg`,
      caption: `/siblings${i + 1}`,
    }))
  ]

  return (
    <PageTransition>
      <section className="p-6 md:p-12 bg-white text-gray-800">
        <div className="justify justify-center items-center text-center">
          <h1 className="text-3xl bg-yellow-300 md:text-4xl font-bold mb-4">Family Moments In Pictures</h1>
          <p className="text-lg md:text-xl mb-6">
            A collection of cherished family moments, celebrating the bonds that bring us together.
          </p>
          <SectionHeader title="Family Moments" />
        </div>
        <ImageGallery images={images} />
      </section>
       </PageTransition>
  );
}