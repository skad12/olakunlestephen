import Link from "next/link";

export default function Navbar() {
    return (
      <div className="flex justify-end pt-4 pb-2 pr-8 space-x-10 font-semibold text-gray-300 bg-black lg:text-xl">
        <Link href="/">
          <a>
            <div className="hover:text-blue-500 ">Home</div>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <div className="hover:text-blue-500 ">About</div>
          </a>
        </Link>
        <Link href="/project">
          <a>
            <div className="hover:text-blue-500 ">Projects</div>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <div className="hover:text-blue-500 ">Contact</div>
          </a>
        </Link>
      </div>
    );
}