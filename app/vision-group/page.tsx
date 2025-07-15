import PageTransition from '../components/PageTransition';
import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';
import VideoPlayer from '../videos/page';

export default function VisionGroupPage() {
  const coreMembers = [
    { src: '/VG-Chairman.jpeg', caption: 'VG Group Chairman?Chairman' },
    { src: '/VG-MC.jpeg', caption: 'VG Master of Celemonies?' },
    { src: '/VG-theCake.jpeg', caption: 'VG Cake presentation' },
    { src: '/VG-two.jpeg', caption: 'VG Group Members' },
    { src: '/VG-three.jpeg', caption: 'VG Group Members'},
    { src: '/VG-four.jpeg', caption: 'VG Group Members' }, 
    { src: '/Wanjiku-Elijah-Caption.jpeg', caption: 'VG Group Member' },
    { src: '/Mumbi-1-Vg.jpeg', caption: 'Photo of VG Group Member' },
    { src: '/Mumbi-2-Vg.jpeg', caption: 'Photo of VG Group Member' },
    { src: '/Mumbi-3-Vg.jpeg', caption: 'Photo of VG Group Member' },
    { src: '/Mumbi-4-Vg.jpeg', caption: 'Photo of VG Group Member' },
    { src: '/Mumbi-5-Vg.jpeg', caption: 'Photo of VG Group Member' },
    { src: '/Mumbi-6-Vg.jpeg', caption: 'Photo of VG Group Member' },];
  const members = Array.from({ length: 0 }, (_, i) => ({    
  src: `/members${i + 1}.jpeg`,
 caption: `Members${i + 1}`
 }));
 const images = [...coreMembers, ...members];
  return (
  <PageTransition>
    <section className="p-6 md:p-12 bg-white text-gray-800">
      <div className="justify justify-center items-center text-center">
        <h1 className="text-3xl bg-yellow-300 md:text-4xl font-bold mb-4">Kamweretho In Action</h1>
        <p className="text-lg md:text-xl mb-6">
          A community is held together by those who lead with heart. Here we honor Vision Group members whose support brought Kamweretho to life, alongside cherished friends of the family.
        </p> 
        <p className="text-lg md:text-xl mb-2">
            <VideoPlayer />
        </p>
             <SectionHeader title="Vision Group & Friends" />
      </div>
             <ImageGallery images={images} />
    </section>
  </PageTransition>
  );
}