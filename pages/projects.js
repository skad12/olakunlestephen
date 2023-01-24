import ProjectGrid1 from "../components/ProjectGrid1";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="pt-16">
        <ProjectGrid1 />
      </div>
      <Link href="https://github.com/skad12">
        <div className="flex justify-center pt-5 pb-36 ">
          <button className="items-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md hover:bg-gray-800 hover:text-white bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            More Projects on Github
          </button>
        </div>
      </Link>
    </>
  );
}
