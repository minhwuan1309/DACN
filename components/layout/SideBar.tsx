"use client"
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { navLinks } from "@/lib/constants";
import { usePathname } from 'next/navigation';

const SideBar = () => {
  const pathName = usePathname();
  return (
    <div className="h-full left-0 top-0 sticky p-10 flex flex-col gap-16 bg-red-500 shadow-xl max-lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={70} className='rounded-md'/>
      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${
              pathName === link.url ? "text-white" : "text-gray-1"
            }`}
          >
            {link.icon}
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 text-body-medium items-center">
        <UserButton />
        <span>Edit Profile</span>
      </div>
    </div>
  );
}

export default SideBar