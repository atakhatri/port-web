import { Users, Zap, Gem } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#212529] text-[#f5ebe0]">
      {/* Page Header */}
      <section className="text-center py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-700">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          About Us
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-400">
          We believe that everyone has a story to tell. Our mission is to
          provide the tools for creators to share their work with the world,
          beautifully and effortlessly.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Our Core Values</h2>
          <p className="mt-4 text-lg text-gray-400">
            The principles that guide our work.
          </p>
        </div>
        <div className="mt-12 max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#ffb703] text-black mx-auto">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Simplicity</h3>
            <p className="mt-2 text-gray-400">
              We focus on creating an intuitive experience that gets out of your
              way.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#ffb703] text-black mx-auto">
              <Gem className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Quality</h3>
            <p className="mt-2 text-gray-400">
              From templates to performance, we're committed to the highest
              standards.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#ffb703] text-black mx-auto">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold">Community</h3>
            <p className="mt-2 text-gray-400">
              We're building a community where creators can inspire and support
              one another.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
