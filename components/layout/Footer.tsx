import Link from "next/link";
import { Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-nav-bg">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg text-foreground">Portify</span>
          </div>
          <p className="mt-4 text-sm text-gray-400 md:mt-0">
            &copy; {new Date().getFullYear()} Portify. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link
              href="/terms"
              className="text-sm text-gray-400 hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-400 hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
