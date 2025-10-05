import { Github, Linkedin, Facebook, Instagram, Sun, Search, Menu, ChevronsUp } from 'lucide-react';
import TemplateSlider from './components/TemplateSlider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <header className="container mx-auto px-6 py-4 flex justify-between items-center" style={{ backgroundColor: '#343a40', color: '#f5ebe0' }}>
        <h1 className="text-3xl font-bold">PORTFOLIO</h1>
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="search"
              id="template-search"
              placeholder="Search Templates..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <a href="#about" className="hover:text-yellow-400">ABOUT</a>
          <a href="#contact" className="hover:text-yellow-400">CONTACT</a>
          <a href="#" className="hover:text-yellow-400">LOGIN</a>
          <a href="#" className="hover:text-yellow-400">SIGNUP</a>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <Sun className="text-yellow-300" />
          </div>
        </nav>
        <button className="md:hidden">
          <Menu />
        </button>
      </header>

      <main className="flex-grow">
        <section
          className="text-center py-20 text-white"
          style={{
            backgroundImage: "url('https://atakhatri.github.io/Portfolio-/pics/Black%20Gray%20Abstract%20Wallpaper.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="bg-black bg-opacity-50 p-10 rounded-lg inline-block">
            <h2 className="text-5xl font-bold">Hello There, Mate!</h2>
            <p className="mt-4 text-lg">Welcome to my collection of portfolio templates.</p>
            <p className="mt-2 text-lg">Explore the designs below and find the perfect one to showcase your skills and projects.</p>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>TEMPLATES</h3>
            </div>
            <TemplateSlider />
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>ABOUT</h3>
              <p style={{ color: 'var(--text-secondary)' }}>PortfolioMaker is a modern, intuitive platform designed to help you create and share your professional portfolio with ease.</p>
              <p style={{ color: 'var(--text-secondary)' }}>Whether you&apos;re a designer, developer, or photographer, our tools make it simple to showcase your work beautifully.</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>CONTACT</h3>
              <div className="flex gap-4">
                <a href="mailto:atakhatri905@gmail.com" className="flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold" style={{backgroundColor: 'var(--accent-primary)'}}>Email Me</a>
                <a href="https://wa.me/919624632115" className="flex items-center justify-center px-6 py-3 rounded-full text-white font-semibold" style={{backgroundColor: 'var(--accent-primary)'}}>WhatsApp Me</a>
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