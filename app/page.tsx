
import Image from "next/image";

export default function Home() {
  return (
   <>
    <div className="flex justify-center items-center h-screen sm:flex-row">    
      <div>
      <Image
        src="/wa-Wanjiku.jpeg"
        alt="Wanjiku Elijah"
        width={800}
        height={600}
      />
      <h1 className="text-3xl font-bold text-center text-emerald-700 mb-4">Welcome to Wanjiku Homecoming</h1>
      <p className="text-center text-gray-700 mb-4">
        Celebrating the rich cultural heritage of the Kikuyu community through the Kamweretho ceremony.
      </p>
    </div> 
    </div>   
    <section className="bg-white text-gray-900 py-4 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-yellow-300">Wanjiku Homecoming</h1>
        <h2 className="text-lg leading-relaxed">
          <strong>Wanjiku Elijah’s Homecoming Ceremony</strong> is rooted in the rich cultural traditions of the Kikuyu community. The event, known as <em>Kamweretho</em> in Nyeri, honors parents and reconnects generations in a deeply meaningful way.
        </h2>
        <h2 className="text-lg leading-relaxed">
          In Kikuyu tradition, married daughters become part of their husbands lineage and are not typically considered heirs of their own parents property. However, daughters who remain unmarried or are single parents may inherit equally alongside their brothers.
        </h2>
        <h2 className="text-lg leading-relaxed">
          <strong>Kamweretho</strong> ceremonies are organized by daughters to appreciate and celebrate their upbringing. In regions like Nyeri, this tradition is embraced, while in others like Kiambu and Murang’a—where PCEA Church influence is strong—it has been met with opposition. Nonetheless, many still honor the practice as a vital expression of cultural identity.
        </h2>
         <div className="border-l-4 border-emerald-500 pl-4 text-gray-700 italic">
          “On June 28th, 2025, Wanjiku Elijah returned home to honor her beloved parents, Elijah and Gathigia Kimotho. She and her son, Elijah Kimotho, extended this love which has persisted across generations in Kikuyu community. She is especially grateful to those who came in person and to those who could not make it, she invites them to watch the pictures and videos found in this website and they will feel part of this ceremony.”
        </div>
      </div>
    </section>  
     
       <div className="flex justify-center items-center">
         <div className="border-l-4 border-emerald-500 pl-4 text-gray-700 italic text-bold bg-yellow-200">
          This celebration of family, tradition, and legacy brings the community together and ensures that younger generations connect with their heritage meaningfully and respectfully.
        </div>       
      </div> 
    </>
  );
}
