import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import SideBar from '@/components/layout/SideBar';
import Topbar from '@/components/layout/Topbar';


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "GearTech's Dashboard",
  description: "Admin Dashboard to manage GearTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex max-lg:flex-col text-gray-900">
            <SideBar />
            <Topbar/>
            <div className='flex-1 '>{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
