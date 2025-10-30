import Link from "next/link";
import { LoaderPinwheel } from "lucide-react";
import FadeContent from "../animated/fadecontent";

export default function Footer() {
  return (
    <FadeContent blur={true} duration={800} threshold={0.2}>
      <footer className=" bg-nav-bg overflow-hidden">
        <div className="container mx-auto pb-4 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between">
            <Link href="/" className="flex items-center gap-2 mb-2">
              <LoaderPinwheel className="footerwheel h-36 w-36 text-primary " />
            </Link>
            <h3 className=" text-3xl text-amber-400 ">
              Thnx for stopping by✌️
            </h3>
          </div>
        </div>
      </footer>
    </FadeContent>
  );
}
