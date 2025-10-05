import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">PortfolioMaker</h1>
        <nav>
          <a href="#" className="text-gray-600 hover:text-gray-800">Sign In</a>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="text-center py-20 bg-white">
          <h2 className="text-5xl font-bold text-gray-900">Create a Stunning Portfolio in Minutes</h2>
          <p className="mt-4 text-lg text-gray-600">Showcase your work, skills, and projects with our intuitive and powerful portfolio builder.</p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started for Free <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-800">Why Choose PortfolioMaker?</h3>
              <p className="text-gray-600 mt-2">Everything you need to create a professional online presence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold text-gray-800">Easy to Use</h4>
                <p className="mt-2 text-gray-600">Our drag-and-drop editor makes it simple to build a beautiful portfolio without any coding knowledge.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold text-gray-800">Customizable Templates</h4>
                <p className="mt-2 text-gray-600">Choose from a variety of professionally designed templates and customize them to match your personal brand.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold text-gray-800">Share with a Link</h4>
                <p className="mt-2 text-gray-600">Easily share your portfolio with potential employers and clients with a single, shareable link.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white">
        <div className="container mx-auto px-6 py-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} PortfolioMaker. All rights reserved.
        </div>
      </footer>
    </div>
  );
}