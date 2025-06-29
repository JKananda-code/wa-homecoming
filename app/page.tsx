import Image from "next/image";

export default function Home() {
  return (
    <div className="grid place-items-center" >
      <main>
        <h1 className="flex justify-center text-4xl bg-cyan-500"> Wanjiku Elijah Kimotho</h1>
        <Image
          src="/Wanjiku.jpg"
          alt="Wanjiku Photo"
          width={800}
          height={300}
          priority
        />
       <div className="flex gap-4 items-center flex-col sm:flex-row">        
        
       </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
