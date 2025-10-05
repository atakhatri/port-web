import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">PortfolioMaker</h1>
        <nav>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Sign In
          </a>
        </nav>
        <button className="md:hidden">
          <Menu />
        </button>
      </header>

      <main className="flex-grow">
        <section className="text-center py-20 bg-white">
          <h2 className="text-5xl font-bold text-gray-900">
            Create a Stunning Portfolio in Minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Showcase your work, skills, and projects with our intuitive and
            powerful portfolio builder.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started for Free <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </section>

        <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-gray-800">
                Why Choose PortfolioMaker?
              </h3>
              <p className="text-gray-600 mt-2">
                Everything you need to create a professional online presence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold text-gray-800">
                  Easy to Use
                </h4>
                <p className="mt-2 text-gray-600">
                  Our drag-and-drop editor makes it simple to build a beautiful
                  portfolio without any coding knowledge.
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold text-gray-800">
                  Customizable Templates
                </h4>
                <p className="mt-2 text-gray-600">
                  Choose from a variety of professionally designed templates and
                  customize them to match your personal brand.
                </p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold text-gray-800">
                  Share with a Link
                </h4>
                <p className="mt-2 text-gray-600">
                  Easily share your portfolio with potential employers and
                  clients with a single, shareable link.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: '#343a40', color: '#f5ebe0' }}>
        <div className="container mx-auto px-6 py-8 text-center">
          <h3 className="text-2xl font-bold mb-4">OTHER LINKS</h3>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="Github"><Github /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="Facebook"><Facebook /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} Ata Khatri. All rights reserved.</p>
        </div>
      </footer>
      <a href="#" className="fixed bottom-8 right-8 p-3 rounded-full" style={{backgroundColor: 'var(--accent-primary)'}}>
        <ChevronsUp className="text-white" />
      </a>
    </div>
  );
}
