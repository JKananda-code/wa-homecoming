
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Family', path: '/family' },
  { name: 'Vision Group', path: '/vision-group' },
  { name: 'Celebrations', path: '/celebrations' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-emerald-700 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-base">Homecoming</span>
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