import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col p-4 md:p-0 h-screen w-full overflow-hidden">

      <div className="fixed top-0 w-[32%] -left-[3%] h-[120vh] bottom-0 md:w-[28%] bg-gradient-to-b from-[#7a9fa1] to-[#29506b] text-white p-6"></div>

      <div className="md:w-[40%] sm:w-[20%] relative -left-20 top-28 md:top-28 md:-left-20 scale-125">
      </div>

    {/* floating hero image */}
    <div className="absolute top-1/2 left-[25%] -translate-y-1/2 -translate-x-1/2 w-[150px] h-[150px] md:w-[300px] lg:w-[500px] aspect-square md:h-auto overflow-hidden rounded-full md:rounded-none z-10">
      <div className="absolute aspect-square inset-0 w-full h-full rounded-full">
        <Image src="/images/hero.png"
          alt="Team working together"
          fill
          className="object-cover rounded-full aspect-square p-2 md:p-3 lg:p-3 bg-white"
          priority
        />
      </div>
    </div>

      <div className="lg:w-[60%] md:w-[70%] sm:w-[80%] w-[80%] self-end pt-28 pr-4 lg:pr-20 md:pr-20 pl-20 md:pl-28 lg:pl-32 flex flex-col items-start overflow-y-auto h-full">
        <h1 className="mb-6 lg:text-5xl md:text-5xl sm:text-4xl text-3xl tracking-wide">Welcome To DiveInDigital</h1>

        <p className="mb-6 text-sm lg:text-lg md:text-sm sm:text-xs">
          At Dive In Digital, we help businesses of all sizes make their mark with expert digital marketing, website
          design & development, branding, and content creation services. Whether you're a startup building your brand or
          an established business aiming for growth, we provide tailored solutions that bring real results.
        </p>

        <p className="mb-6 text-sm lg:text-lg md:text-sm sm:text-xs">
          We don't just market; we create experiences. From designing stunning websites to executing powerful marketing
          campaigns, our team ensures every aspect of your digital journey is optimized for success. Our expertise in
          SEO, social media marketing, PPC, and data-driven strategies helps businesses connect with the right audience,
          generate leads, and build lasting customer relationships.
        </p>

        <p className="text-sm lg:text-lg md:text-sm sm:text-xs">
          At the heart of our work is a passion for creativity, innovation, and measurable impact. We believe in turning
          clicks into loyal customers and brands into industry leaders—all while keeping authenticity and storytelling
          at the core of our approach.
        </p>

      </div>

      <div className="fixed bottom-0 right-0 w-32 h-32 bg-teal-500 rounded-full opacity-20 -mr-10 -mb-10"></div>
    </div>
  )
}
