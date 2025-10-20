import { ArrowRight, Settings2, LayoutTemplate, Globe } from "lucide-react";
import AnimatedContent from "../components/animated/animatedcontent";
import FadeContent from "@/components/animated/fadecontent";
import Templates from "@/components/cards/templates";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Create Your Stunning Portfolio in Minutes
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-400">
            Showcase your work with our intuitive and customizable portfolio
            builder. No coding required.
          </p>
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={true}
            duration={1}
            ease="bounce.out"
            initialOpacity={0}
            animateOpacity
            scale={1.2}
            threshold={0}
            delay={0.3}
          >
            <div className="mt-8 flex justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md btn-primary"
              >
                Get Started for Free
              </a>
            </div>
          </AnimatedContent>
        </FadeContent>
      </section>

      {/* App Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-400">
            Everything you need to create the perfect portfolio.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <AnimatedContent distance={50} delay={0.1} threshold={0.2}>
            <div className="group p-8 bg-nav-bg/20 border border-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-primary bg-btn-primary rounded-full transition-transform duration-500 group-hover:rotate-180 group-hover:bg-primary">
                  <Settings2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Easy Customization</h3>
              </div>
              <p className="text-gray-400">
                Tailor your portfolio with our simple yet powerful customization
                tools.
              </p>
            </div>
          </AnimatedContent>
          {/* Card 2 */}
          <AnimatedContent distance={50} delay={0.2} threshold={0.2}>
            <div className="group p-8 bg-nav-bg/20 border border-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-primary bg-primary/10 rounded-full transition-transform duration-500 group-hover:rotate-180 group-hover:bg-primary">
                  <LayoutTemplate className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Beautiful Templates</h3>
              </div>
              <p className="text-gray-400">
                Choose from a variety of professionally designed templates to
                make your work shine.
              </p>
            </div>
          </AnimatedContent>
          {/* Card 3 */}
          <AnimatedContent distance={50} delay={0.3} threshold={0.2}>
            <div className="group p-8 bg-nav-bg/20 border border-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-primary bg-primary/10 rounded-full transition-transform duration-500 group-hover:rotate-180 group-hover:bg-primary ">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Share with the World</h3>
              </div>
              <p className="text-gray-400">
                Easily publish and share your portfolio on your own domain or a
                free one.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Popular Portfolios Section */}
      <section className="py-20 sm:py-24 lg:py-32 border-t border-gray-700 overflow-hidden">
        <Templates />
      </section>
    </div>
  );
}
