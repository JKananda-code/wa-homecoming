
import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';

export default function VisionGroupPage() {
  const coreMembers = [
    { src: '/images/chairman.jpg', caption: 'Chairman' },
    { src: '/images/vice-chair.jpg', caption: 'Vice Chair' },
    { src: '/images/secretary.jpg', caption: 'Secretary' },
    { src: '/images/treasurer.jpg', caption: 'Treasurer' },
    { src: '/images/wa-Vision-Group.jpg', caption: 'Vision Group Members'},
  ];
  const members = Array.from({ length: 10 }, (_, i) => ({
    src: `/images/member${i + 1}.jpg`,
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