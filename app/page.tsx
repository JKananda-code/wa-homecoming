import Image from "next/image";

export default function Home() {
  return (
    <div className="grid place-items-center" >
      <main>
        <h1 className="flex justify-center text-4xl bg-cyan-200"> Wanjiku Elijah Kimotho</h1>
        <Image
          src="/Wanjiku-Elijah-Caption.jpeg"
          alt="Wanjiku Photo"
          width={800}
          height={300}
          priority
        />
       <div className="flex gap-4 items-center flex-col sm:flex-row">        
         <section className="bg-white text-gray-900 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-emerald-700">Wanjiku Homecoming</h1>
        <p className="text-lg leading-relaxed">
          <strong>Wanjiku Elijah’s Homecoming Ceremony</strong> is rooted in the rich cultural traditions of the Kikuyu community. The event, known as <em>Kamweretho</em> in Nyeri, honors parents and reconnects generations in a deeply meaningful way.
        </p>

        <p className="text-lg leading-relaxed">
          In Kikuyu tradition, married daughters become part of their husbands lineage and are not typically considered heirs of their own parents property. However, daughters who remain unmarried or are single parents may inherit equally alongside their brothers.
        </p>

        <p className="text-lg leading-relaxed">
          <strong>Kamweretho</strong> ceremonies are organized by daughters to appreciate and celebrate their upbringing. In regions like Nyeri, this tradition is embraced, while in others like Kiambu and Murang’a—where PCEA Church influence is strong—it has been met with opposition. Nonetheless, many still honor the practice as a vital expression of cultural identity.
        </p>

        <div className="border-l-4 border-emerald-500 pl-4 text-gray-700 italic text-bold bg-cyan-200">
          “On June 28th, 2025, I, Wanjiku Elijah, returned home to honor my beloved parents, Elijah and Gathigia Kimotho. My son, Elijah Kimotho, and I extended this love which has been repeated across generations. I thank all of you who came in person and to those who could not, you are most welcome to feel part of the celebration by watching the pictures included here.
          Thank you again for being a part of this journey.”
        </div>

        <p className="text-lg leading-relaxed text-bold bg-yellow-200">
          This celebration of family, tradition, and legacy brings the community together and ensures that younger generations connect with their heritage meaningfully and respectfully.
        </p>
      </div>
    </section>
       </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
