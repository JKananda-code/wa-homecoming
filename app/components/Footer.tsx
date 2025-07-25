
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white text-center py-8 px-6 mt-16">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-lg font-semibold">Join Us in Honoring Legacy</p>
        <p className="text-sm">
          This cultural homecoming is more than a celebration—its a living connection across generations.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded hover:bg-emerald-100 transition"
        >
          <button>WaitList: Contact Vision Chairman</button>

        </Link>
        <p className="text-xs text-gray-200 mt-6">© {new Date().getFullYear()} Wanjiku Homecoming. By WebCatchup Design. All rights reserved.</p>
      </div>
    </footer>
  );
}