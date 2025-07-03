import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="w-full -top-10 md:w-[25%] bg-gradient-to-b from-[#7a9fa1] to-[#29506b] text-white p-6">
      <Link href="/" className="block">
        <div className="flex items-center">
          
          {/* <div>
            <div className="text-xs uppercase tracking-wider">DIVE IN</div>
            <div className="text-xl font-bold">Digital</div>
          </div> */}
        </div>
      </Link>
    </div>
  )
}
