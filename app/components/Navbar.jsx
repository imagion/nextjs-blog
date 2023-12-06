import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex h-16 w-full items-center bg-white px-6 shadow">
      <nav className=" m-auto flex w-[min(100%,1400px)] items-center">
        <div className="w-full">
          <Link href="/" className="p-2">
            Personal Site
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/projects" className="p-2">
            Projects
          </Link>
          <Link href="/contact" className="p-2">
            Contract
          </Link>
        </div>
      </nav>
    </header>
  );
}
