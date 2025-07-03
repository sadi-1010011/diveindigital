import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-0 h-screen w-full overflow-hidden">

      <div className="absolute top-0 -left-[3%] -z-10 w-[40%] h-[120vh] bottom-0 md:w-[37%] bg-gradient-to-b from-[#7a9fa1] to-[#29506b] text-white p-6"></div>

      <div className="md:w-[60%] flex mt-8 -ml-12">
        <div className="relative w-full h-[300px] md:h-[550px] m-2">
          <Image src="/images/4.jpg" alt="Digital workspace" fill className="object-cover p-2 bg-white rounded-[32px]" />
        </div>
        <div className="relative w-full h-[300px] md:h-[550px] m-2">
          <Image src="/images/5.jpg" alt="Digital design workspace" fill className="object-cover p-2 bg-white rounded-[32px]" />
        </div>
      </div>

      <div className="md:w-[40%] p-4 md:p-12">
        <h1 className="mb-12">Our Vision</h1>

        <div className="vision-item">
          <div className="rounded-full bg-[#29506b] p-3 self-start font-bold text-lg inline-flex items-center justify-center text-white">01</div>
          <div>
            <h3 className="text-xl font-bold text-[#29506b] mb-2">Innovation & Growth Focus:</h3>
            <p className="text-gray-700">
              To be a leading digital solutions partner, empowering businesses with innovative marketing, branding, and
              web solutions that drive sustainable growth in the digital era.
            </p>
          </div>
        </div>

        <div className="vision-item">
          <div className="rounded-full bg-[#29506b] p-3 self-start font-bold text-lg inline-flex items-center justify-center text-white">02</div>
          <div>
            <h3 className="text-xl font-bold text-[#29506b] mb-2">Customer-Centric Focus</h3>
            <p className="text-gray-700">
              To help businesses of all sizes establish a powerful digital presence by delivering customized,
              data-driven, and creative solutions that inspire engagement and build lasting connections.
            </p>
          </div>
        </div>

        <div className="vision-item">
          <div className="rounded-full bg-[#29506b] p-3 self-start font-bold text-lg inline-flex items-center justify-center text-white">03</div>
          <div>
            <h3 className="text-xl font-bold text-[#29506b] mb-2">Industry Leadership Focus</h3>
            <p className="text-gray-700">
              To set new standards in digital marketing, branding, and web development by blending creativity,
              technology, and strategy—transforming brands into market leaders.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-500 rounded-full opacity-20 -mr-10 -mb-10"></div>
    </div>
  )
}
