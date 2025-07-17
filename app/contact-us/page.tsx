import PageTransition from '../components/PageTransition';
import SectionHeader from '../components/SectionHeader';

export default function WaitlistPage() {
  return (
    <PageTransition>
      <section className="px-6 py-12 md:px-16 bg-white text-gray-900">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-yellow-300 p-4 rounded-lg">
            Waitlist for Women who want to join the Next Circle
          </h1>
          <p className="text-lg md:text-xl">
            A Circle Group is a sisterhood dedicated to celebrating and supporting each other through life’s milestones.
            When we formed our Circle we named it Vision.  We have been receiving enquiries by persons who want to join Vision Group. Unfortunately Vision,
            in its present Constitution, is a fixed group of 24 members who will complete the final homestead visit when the last person is visited.
            If you’re interested in being part of a future Vision Group or joining a circle similar to ours, please submit your details below.
          </p>
        <SectionHeader title="Please Complete the attached Form" />
        </div>
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg leading-relaxed">
            </p>
            Our Vision Circle has been a transformative journey, and we’re excited to see it inspire others. While Vision itself is closed to new members, we are committed to fostering new circles that carry forward the spirit of sisterhood and celebration.
            If you’re interested in joining a future circle, we invite you to fill out the form below. We’ll keep your information on file and reach out when a new circle is ready to form.
          
          <p className="text-lg leading-relaxed">
            Some people have also been asking the criteria for joining a group like Vision. Whether you’re married, a single mother, or simply seeking connection, the Circle model is open to all women with hearts ready to celebrate, support, and grow together.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-semibold text-emerald-800"> What You will Need</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>A willing heart and commitment to shared celebration</li>
              <li>The ability to contribute a set amount bi-monthly</li>
              <li>A homestead or shared space to host your future turn</li>
            </ul>
          </div>

          <div className="mt-8 space-y-3">
            <h3 className="text-xl font-semibold">Join the Waitlist</h3>
            <form
              action="https://your-form-handler.com" // Replace with actual backend or form service
              method="POST"
              className="grid gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="border border-gray-300 rounded px-4 py-3 w-full focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="border border-gray-300 rounded px-4 py-3 w-full focus:ring-2 focus:ring-emerald-500"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us why you'd love to join Vision"
                className="border border-gray-300 rounded px-4 py-3 w-full focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="bg-emerald-700 text-white font-semibold px-6 py-3 rounded hover:bg-emerald-800 transition"
              >
                Submit Interest
              </button>
            </form>
            <p className="text-sm text-gray-500">
              We shall review applications on a rolling basis and follow you up when a new circle forms.
            </p>
          </div>
        </div>
        </div>
        </section>
    </PageTransition>
  );
}