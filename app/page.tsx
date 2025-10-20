import {
  ArrowRight,
  Settings2,
  LayoutTemplate,
  Globe,
  Building2,
  Cloud,
  Server,
} from "lucide-react";
import AnimatedContent from "../components/animated/animatedcontent";
import FadeContent from "../components/animated/fadecontent";
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
            delay={0}
          >
            <div className="mt-8 flex justify-center">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md btn-primary transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/40 hover:scale-105"
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
          <AnimatedContent distance={50} delay={0.1} threshold={0.1}>
            <div className="group h-64 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 p-8 bg-nav-bg/40 border border-gray-700 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 text-primary bg-btn-primary rounded-full">
                      <Settings2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Easy Customization</h3>
                  </div>
                  <p className="text-gray-400">
                    Tailor your portfolio with our simple yet powerful tools.
                  </p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-lg">
                      Change colors, fonts, and layouts in just a few clicks.
                    </p>
                    <a
                      href="/signup"
                      className="mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
          {/* Card 2 */}
          <AnimatedContent distance={50} delay={0.2} threshold={0.1}>
            <div className="group h-64 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 p-8 bg-nav-bg/40 border border-gray-700 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 text-primary bg-primary/10 rounded-full">
                      <LayoutTemplate className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Beautiful Templates</h3>
                  </div>
                  <p className="text-gray-400">
                    Make your work shine with professionally designed templates.
                  </p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-lg">
                      From minimalist to expressive, find your perfect match.
                    </p>
                    <a
                      href="/signup"
                      className="mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
          {/* Card 3 */}
          <AnimatedContent distance={50} delay={0.3} threshold={0.1}>
            <div className="group h-64 [perspective:1000px]">
              <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 p-8 bg-nav-bg/40 border border-gray-700 rounded-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 text-primary bg-primary/10 rounded-full">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">Share with the World</h3>
                  </div>
                  <p className="text-gray-400">
                    Easily publish and share your portfolio on your own domain.
                  </p>
                </div>
                {/* Back */}
                <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <p className="text-lg">
                      Go live in minutes and get seen by a global audience.
                    </p>
                    <a
                      href="/signup"
                      className="mt-4 text-sm font-medium text-primary hover:underline"
                    >
                      Learn More &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* Featured In Logo Cloud
      <section className="py-20 sm:py-24 border-t border-gray-700">
        <AnimatedContent distance={50} delay={0.2} threshold={0.1}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-lg font-semibold text-gray-400">
              Trusted by the world's most innovative teams
            </h3>
            <div className="mt-12">
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 sm:gap-x-10 lg:gap-x-16">
                <div className="flex items-center justify-center text-gray-500 transition duration-300 hover:text-white">
                  <Building2 className="h-10 w-auto" />
                  <span className="ml-2 text-2xl font-medium">
                    Innovate Inc
                  </span>
                </div>
                <div className="flex items-center justify-center text-gray-500 transition duration-300 hover:text-white">
                  <Cloud className="h-10 w-auto" />
                  <span className="ml-2 text-2xl font-medium">CloudCorp</span>
                </div>
                <div className="flex items-center justify-center text-gray-500 transition duration-300 hover:text-white">
                  <Server className="h-10 w-auto" />
                  <span className="ml-2 text-2xl font-medium">Server Co.</span>
                </div>
                <div className="flex items-center justify-center text-gray-500 transition duration-300 hover:text-white">
                  <Globe className="h-10 w-auto" />
                  <span className="ml-2 text-2xl font-medium">Global Tech</span>
                </div>
                <div className="flex items-center justify-center text-gray-500 transition duration-300 hover:text-white">
                  <LayoutTemplate className="h-10 w-auto" />
                  <span className="ml-2 text-2xl font-medium">Design Firm</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section> */}

      {/* Popular Portfolios Section */}
      <section className="py-20 sm:py-24 lg:py-32 border-t border-gray-700 overflow-hidden">
        <Templates />
      </section>

      {/* Call to Action Section */}
      <section className="py-20 sm:py-24 border-t border-gray-700">
        <AnimatedContent distance={50} delay={0.2} threshold={0.1}>
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Build Your Masterpiece?
            </h2>
            <p className="mt-6 text-xl text-gray-400">
              Join thousands of creators who trust our platform to showcase
              their best work. It's fast, easy, and free to get started.
            </p>
            <div className="mt-10">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md btn-primary transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/40 hover:scale-105"
              >
                Start Your Free Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </AnimatedContent>
      </section>
    </div>
  );
}
