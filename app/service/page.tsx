import Image from "next/image"

export default function ServicePage() {
  return (
    <div className="bg-[#f0f4f5] min-h-screen">
        <Service1 />
        <Service2 />
        <Service3 />
        <Service4 />
        <OurClients />
    </div>
  )
}

export function Service1() {
  return (
    <div className="p-4 md:p-12 relative">
      <h1 className="text-center mb-12">Our Services</h1>

      <div className="absolute w-full h-1/3 bottom-0 left-0 right-0 bg-gradient-to-b from-[#7a9fa1] to-[#29506b] text-white p-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8 mb-12 px-4">
        <ServiceCard
          number="01"
          title="Digital Marketing"
          content="At Dive In Digital, we believe that digital marketing is more than just promotion; it's about creating meaningful connections between brands and their audiences. Our digital marketing strategies are built on data-driven insights and tailored to meet your business goals. Whether it's boosting visibility through SEO, driving engagement through social media marketing, or delivering targeted ads via PPC, we craft campaigns that not only reach the right audience but also convert them into loyal customers."
        />

        <ServiceCard
          number="02"
          title="Website Design and Development"
          content="Your website is the digital storefront of your brand, and we treat it with the utmost care and attention. At Dive In Digital, we design and develop stunning, user-friendly websites that reflect your brand's identity and engage visitors from the moment they land on your page. Our team focuses on intuitive user experience (UX) and responsive design, ensuring your site looks great and functions seamlessly across all devices. Whether you need a simple landing page or a complex e-commerce platform, we use the latest web technologies and development practices to bring your vision to life, while ensuring your website is optimized for speed, SEO, and performance."
        />

        <ServiceCard
          number="03"
          title="Branding"
          content="At Dive In Digital, we understand that your brand is much more than a logo—it's the essence of your business. We help businesses create a compelling and consistent brand identity that resonates with their audience and differentiates them from the competition. From logo design and visual elements to tone of voice and messaging, we ensure your brand tells a cohesive story across all platforms. Our strategic approach to branding helps build trust, evoke emotion, and create lasting impressions, giving your business a strong foundation for growth in the competitive digital landscape."
        />

        <ServiceCard
          number="04"
          title="Content Creation"
          content="In the digital age, content is king, and Dive In Digital excels at crafting content that speaks to your audience. Our content creation services include everything from blog posts, articles, and social media content to video production and infographics. We ensure that every piece of content is aligned with your brand's voice and designed to engage, inform, and inspire action. Whether you need captivating visuals for social media or in-depth articles for your website, our creative team brings your ideas to life with compelling narratives and high-quality visuals that drive traffic and increase conversions."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div className="relative h-[50vh] overflow-hidden">
          <Image src="/images/6.jpg" alt="Digital Marketing Service" fill className="object-cover p-2 bg-white rounded-[18px]" />
        </div>
        <div className="relative h-[50vh] overflow-hidden">
          <Image src="/images/7.jpg" alt="Website Design Service" fill className="object-cover p-2 bg-white rounded-[18px]" />
        </div>
        <div className="relative h-[50vh] overflow-hidden">
          <Image src="/images/8.jpg" alt="Branding Service" fill className="object-cover p-2 bg-white rounded-[18px]" />
        </div>
        <div className="relative h-[50vh] overflow-hidden">
          <Image src="/images/9.jpg" alt="Content Creation Service" fill className="object-cover p-2 bg-white rounded-[18px]" />
        </div>
      </div>

      <div className="fixed bottom-0 right-0 w-32 h-32 bg-teal-500 rounded-full opacity-20 -mr-10 -mb-10"></div>
    </div>
  )
}

export function Service2() {
  return (
    <div className="p-4 md:p-12 relative min-h-screen bg-white">
      {/* <h1 className="text-center mb-12">Our Service</h1> */}

      <div className="absolute w-full h-1/2 bottom-0 left-0 right-0 bg-gradient-to-b from-[#7a9fa1] to-[#29506b] text-white p-6"></div>

      <div>
        <h2 className="text-[#29506b]">Lead generation</h2>
        <p className="text-[#29506b] text-xl py-4">
          At Dive In Digital, we understand that lead generation is the lifeblood of any business. Our tailored strategies focus on attracting high-quality leads who are genuinely interested in your products or services. We leverage a mix of SEO, content marketing, PPC campaigns,
and social media to generate and nurture leads at every stage of the sales funnel. By using data-driven insights and advanced targeting
techniques, we ensure that your business gets in front of the right people at the right time, turning them into potential customers. With a
focus on quality over quantity, we optimize lead generation campaigns to maximize conversion rates and grow your business sustainably.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative overflow-hidden">
          <Image src="/images/10.jpg" alt="Digital Marketing Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/11.jpg" alt="Website Design Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/12.jpg" alt="Branding Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/13.jpg" alt="Content Creation Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/14.jpg" alt="Digital Marketing Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/15.jpg" alt="Website Design Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/16.jpg" alt="Branding Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/17.jpg" alt="Content Creation Service" fill className="object-cover" />
        </div>
      </div>

    </div>
  )
}

export function Service3() {
  return (
    <div className="p-4 md:p-12 relative min-h-screen bg-white">
      {/* <h1 className="text-center mb-12">Our Service</h1> */}

      <div className="absolute w-full h-1/3 bottom-0 left-0 right-0 bg-gradient-to-b from-[#7a9fa1] to-[#29506b] text-white p-6"></div>

      <div>
        <h2 className="text-[#29506b]">Social Media Management</h2>
        <p className="text-[#29506b] text-xl py-4">
          Social media is a powerful tool for businesses to connect with their audience, and Dive In Digital specializes in creating and managing
engaging social media strategies that build brand awareness and drive customer engagement. From content creation to community
management, we handle every aspect of your social media presence across platforms like Facebook, Instagram, LinkedIn, and Twitter.
Our approach focuses on delivering consistent, valuable, and relevant content that resonates with your target audience while aligning
with your brand voice. We monitor performance, analyze engagement, and optimize campaigns to ensure your business stands out in a
crowded digital space and builds meaningful relationships with followers.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <div className="relative h-[60vh] overflow-hidden">
          <Image src="/images/18.jpg" alt="Digital Marketing Service" fill className="object-cover" />
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <Image src="/images/19.jpg" alt="Website Design Service" fill className="object-cover" />
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <Image src="/images/20.jpg" alt="Branding Service" fill className="object-cover" />
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <Image src="/images/21.jpg" alt="Content Creation Service" fill className="object-cover" />
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <Image src="/images/22.jpg" alt="Digital Marketing Service" fill className="object-cover" />
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <Image src="/images/23.jpg" alt="Website Design Service" fill className="object-cover" />
        </div>
      </div>

    </div>
  )
}

export function Service4() {
  return (
    <div className="p-4 md:p-12 relative min-h-screen bg-white">
      {/* <h1 className="text-center mb-12">Our Service</h1> */}

      <div className="absolute w-full h-1/3 bottom-0 left-0 right-0 bg-gradient-to-b from-[#7a9fa1] to-[#29506b] text-white p-6"></div>

      <div>
        <h2 className="text-[#29506b]">Website SEO</h2>
        <p className="text-[#29506b] text-xl py-4">
A great website is only valuable if your audience can find it. At Dive In Digital, our SEO services are designed to help your website rank
higher on search engines and attract organic traffic. Our SEO experts work on both on-page and off-page optimization, including keyword
research, content creation, technical SEO, link building, and performance monitoring. We ensure that your website is not only userfriendly and visually appealing but also optimized for search engines to drive more qualified visitors to your site. With a focus on longterm results, our SEO strategies help improve your site’s visibility, increase organic traffic, and ultimately enhance your brand’s online
presence.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8">
        <div className="relative overflow-hidden">
          <Image src="/images/24.jpg" alt="Digital Marketing Service" fill className="object-cover" />
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <Image src="/images/25.jpg" alt="Website Design Service" fill className="object-cover" />
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <Image src="/images/26.jpg" alt="Branding Service" fill className="object-cover" />
        </div>
        <div className="relative h-[60vh] overflow-hidden">
          <Image src="/images/27.jpg" alt="Content Creation Service" fill className="object-cover" />
        </div>
        {/* <div className="mini-w-12"></div> */}
      </div>

    </div>
  )
}

export function OurClients() {
  return (
    <div className="p-4 md:p-12 relative min-h-screen bg-white">
      <h1 className="text-center mb-12">Our Clients</h1>

      <div className="absolute w-full h-1/3 bottom-0 left-0 right-0 bg-gradient-to-b from-[#7a9fa1] to-[#29506b] text-white p-6"></div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-12">
        <div className="relative overflow-hidden">
          <Image src="/images/31.jpg" alt="Digital Marketing Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/32.jpg" alt="Website Design Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/33.jpg" alt="Branding Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/34.jpg" alt="Content Creation Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/35.jpg" alt="Branding Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/36.jpg" alt="Content Creation Service" fill className="object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-2 my-4 sm:grid-cols-3 md:grid-cols-6 gap-8">
        <div className="relative overflow-hidden">
          <Image src="/images/37.jpg" alt="Digital Marketing Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/38.jpg" alt="Website Design Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/39.png" alt="Branding Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/40.jpg" alt="Content Creation Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/41.jpg" alt="Branding Service" fill className="object-cover" />
        </div>
        <div className="relative h-[30vh] overflow-hidden">
          <Image src="/images/42.jpg" alt="Content Creation Service" fill className="object-cover" />
        </div>
      </div>

    </div>
  )
}

function ServiceCard({ number, title, content }: { number: string; title: string; content: string }) {
  return (
    <div className="service-card">
      <div className="numbered-circle shrink-0">{number}</div>
      <div className="service-content">
        <h3 className="text-xl font-bold text-[#29506b] mb-2">{title}</h3>
        <p className="text-[#29506b] text-xs">{content}</p>
      </div>
    </div>
  )
}
