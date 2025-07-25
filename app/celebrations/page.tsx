
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
      <div className="justify justify-center items-center text-center">
        <h1 className="text-3xl bg-yellow-300 md:text-4xl font-bold mb-4">Celebrations</h1>
        <p className="text-lg md:text-xl mb-6">
          Celebrating the rich traditions and joyous moments that define our community.
        </p>
       <div>   
        <video width="1200" height="400" controls className="mx-auto mb-4">
            <source src="/videos/VID-20250630-WA0013-1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <p>VG Group Members Coming Home</p>
        </div>
      <SectionHeader title="Celebration Highlights" />
      </div>
      <ImageGallery images={images} />
    </section>
  );
}