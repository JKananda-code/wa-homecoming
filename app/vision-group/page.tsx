
import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';

export default function VisionGroupPage() {
  const coreMembers = [
    { src: '/VG-chairman.jpeg', caption: 'VG Group Chairman?Chairman' },
    { src: '/VG-MC.jpeg', caption: 'VG Master of Celemonies?' },
    { src: '/VG-theCake.jpeg', caption: 'VG Cake presentation' },
    { src: '/VG-two.jpeg', caption: 'VG Group Members' },
    { src: '/VG-three.jpeg', caption: 'VG Group Members'},
    { src: '/VG-four.jpeg', caption: 'VG Group Members' },  ];
  const members = Array.from({ length: 6 }, (_, i) => ({
    src: `/member${i + 1}.jpeg`,
    caption: `Member ${i + 1}`
  }));

  return (
    <section className="p-6 md:p-12 bg-white text-gray-800">
      <SectionHeader title="Vision Group & Friends" />
      <p className="mb-6 max-w-3xl text-lg">
        A community is held together by those who lead with heart. Here we honor Vision Group members whose support brought Kamweretho to life, alongside cherished friends of the family.
      </p>
      <ImageGallery images={[...coreMembers, ...members]} />
    </section>
  );
}