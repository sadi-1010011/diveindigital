import type React from "react"
import { MapPin, Phone, Mail, Instagram } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-0h-screen w-full overflow-x-hidden">
      
      <div className="absolute top-0 -left-[3%] w-[30%] md:h-[10%] h-[10%] md:w-[35%] bg-gradient-to-b from-[#7a9fa1] to-[#29506b] text-white p-6"></div>
      
      <div className="md:w-[60%] flex">
        <div className="relative w-full h-auto md:h-[500px] rounded-2xl overflow-hidden m-2">
          <Image src="/images/43.jpg" alt="Laptop and phone" fill className="object-cover p-2 rounded-[18px] bg-white" />
        </div>
        <div className="relative w-full h-auto md:h-[500px] rounded-2xl overflow-hidden m-2">
          <Image src="/images/44.jpg" alt="Tablet with coffee" fill className="object-cover p-2 rounded-[18px] bg-white" />
        </div>
      </div>

      <div className="md:w-[40%] p-4 md:p-12 flex flex-col justify-center">
        <h1 className="mb-12">Contact Us</h1>

        <div className="space-y-8">
          <ContactItem icon={<Phone className="w-6 h-6 text-teal-700" />} text="+91 9895998640" link="tel:+919895998640" />

          <ContactItem icon={<Mail className="w-6 h-6 text-teal-700" />} text="diveindigital7@gmail.com" link="mailto:diveindigital7@gmail.com" />

          <ContactItem
            icon={<MapPin className="w-6 h-6 text-teal-700" />}
            text="Kaligraph Arcade, 1626/A, IMA Hall Road"
            link="https://maps.google.com/maps/dir//Kaligraph+Info+Systems+-+Konica+Minolta+Color+Laser+Printer+Supplier+in+Calicut+1st+Floor,+Kaligraph+Arcade+1626%2FA,+IMA+Hall+Road,+Nadakkave+Kozhikode,+Kerala+673011/@11.2657788,75.7755973,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3ba6593654f6ec7b:0x8c63b1e0018b9b30"
          />

          <ContactItem icon={<Instagram className="w-6 h-6 text-teal-700" />} text="dive_in_digital_" link="https://www.instagram.com/dive_in_digital_/" />
        </div>
      </div>

      <div className="fixed bottom-0 right-0 w-32 h-32 bg-teal-500 rounded-full opacity-20 -mr-10 -mb-10"></div>
    </div>
  )
}

function ContactItem({ icon, text, link }: { icon: React.ReactNode; text: string, link: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">{icon}</div>
      <a href={link} className="text-lg text-gray-700">{text}</a>
      {/* <a href={link} className="text-teal-700 hover:underline">{text}</a> */}
    </div>
  )
}
