'use client'
import Image from 'next/image';

export default function Introduction() {
  return (
  <>
  <div className="grid place-items-center" >
        <h1 className="flex justify-center text-4xl bg-cyan-200"> Wanjiku Elijah Kimotho</h1>
        <div className="relative h-screen">
         <Image
          src="/Wanjiku-Elijah-Caption.jpeg"
          alt="Wanjiku Photo"
          width={800}
          height={400}
          priority
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
       </div>
  </div>
  <section className="bg-white text-gray-900 py-12 px-6 md:px-16">

      <div className="max-w-4xl mx-auto space-y-6">

        <p className="text-lg leading-relaxed">
          <strong>Wanjiku Elijah’s Homecoming Ceremony</strong> is rooted in the rich cultural traditions of the Kikuyu community. The event, known as <em>Kamweretho</em> in Nyeri, honors parents and reconnects generations in a deeply meaningful way.
        </p>

        <p className="text-lg leading-relaxed">
          In Kikuyu tradition, married daughters become part of their husbands lineage and are not typically considered heirs of their own parents property. However, daughters who remain unmarried or are single parents may inherit equally alongside their brothers.
        </p>

        <p className="text-lg leading-relaxed">
          <strong>Kamweretho</strong> ceremonies are organized by daughters to appreciate and celebrate their upbringing. In regions like Nyeri, this tradition is embraced, while in others like Kiambu and Murang’a—where PCEA Church influence is strong—it has been met with opposition. Nonetheless, many still honor the practice as a vital expression of cultural identity.
        </p>

        <div className="border-l-4 border-emerald-500 pl-4 text-gray-700 italic">
          “On June 28th, 2025, I returned home to honor my beloved parents, Elijah and Gathigia Kimotho. Both my son, Elijah Kimotho, and I extended this love which has persisted across generations in our community. I am especially grateful to those of you who came in person and to those who could not make it, I invite you to watch the pictures and videos found in this website to feel as part of this process.”
        </div>

        <p className="text-lg leading-relaxed">
          This celebration of family, tradition, and legacy brings the community together and ensures that younger generations connect with their heritage meaningfully and respectfully.
        </p>
      </div>
    </section>
  </>
  );
}