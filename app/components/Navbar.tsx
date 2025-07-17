'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
 
  { name: 'Intro', path: '/' },
  { name: 'Family', path: '/family' },
  { name: 'Vision', path: '/vision-group' },
  { name: 'Celebrations', path: '/celebrations'},
  { name: 'Contact', path: '/contact-us' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-emerald-700 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/wa-logo.jpg"
            alt="Logo"
            width={75}
            height={75}
            className="rounded-full mr-2"
          />
        </Link>
        <div className="font-bold text-sm mr-3">
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`hover:underline ${
                  pathname === item.path ? 'underline font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}