"use client";
import Image from "next/image";
import logo from "../../public/logo1.jpg";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-3">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="ShadCN UI logo" className="w-6 h-10 bg-white rounded-full" />
          <span className="ml-2 text-xl font-bold">shadcn/ui</span>
        </Link>
        <nav className="hidden md:flex space-x-2">
        </nav>
        <div className="flex space-x-2">
          <Link href="/FAQ">
            <button className="relative inline-flex items-center py-2 px-2 text-base font-medium text-white bg-gray-900 border border-transparent rounded-full transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg sparkle-button">
              FAQ
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-2 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
          <Link href="https://ui.shadcn.com/docs">
            <button className="relative inline-flex items-center py-2 px-2 text-base font-medium text-white bg-gray-900 border border-transparent rounded-full transition duration-300 ease-in-out hover:bg-gray-800 hover:shadow-lg sparkle-button">
              Documentation
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-2 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .sparkle-button {
          position: relative;
          overflow: hidden;
        }
        .sparkle-button::before {
          content: '';
          position: absolute;
          width: 200%;
          height: 200%;
          top: -30%;
          left: -30%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%);
          animation: sparkle 1.5s infinite;
          opacity: 0;
        }
        @keyframes sparkle {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(0.8);
            opacity: 1;
          }
        }
      `}</style>
    </header>
  );
}