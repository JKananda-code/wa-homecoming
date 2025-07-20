'use client';
import React from 'react'
import {useState} from 'react';
import {FiMenu, FiX} from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Introduction', path: '/' },
  { name: 'Family Photos', path: '/family' },
  { name: 'Vision Photos', path: '/vision-group' },
  { name: 'Celebrations', path: '/celebrations' },
  { name: 'Contact Us', path: '/contact-us' },
];

export default function Navbar() {
  const pathname = usePathname();
 const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-emerald-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-yellow-300">Homecoming Ceremony ={'>'}</span>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className="hidden md:flex space-x-6">
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

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 bg-emerald-700">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`block py-2 ${
                  pathname === item.path ? 'underline font-semibold' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

