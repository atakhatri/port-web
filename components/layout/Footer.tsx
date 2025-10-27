import Link from "next/link";
import { LoaderPinwheel } from "lucide-react";
import FadeContent from "../animated/fadecontent";

export default function Footer() {
  return (
    <FadeContent>
      <footer className="border-t border-gray-700 bg-nav-bg">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <LoaderPinwheel className="h-36 w-36 text-primary transition-all duration-300 ease-in-out hover:rotate-180 hover:text-amber-500" />
            </Link>
            <p className="mt-4 text-3xl text-amber-400 ">
              Thanks for stopping by! ✌️
            </p>
          </div>
        </div>
      </footer>
    </FadeContent>
  );
}
