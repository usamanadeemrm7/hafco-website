import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 shrink-0"
      aria-label="HAFCO home"
    >
      <span
        className={`relative block h-10 w-[9.5rem] sm:h-11 sm:w-40 ${
          light ? "brightness-0 invert" : ""
        }`}
      >
        <Image
          src="/logo.png"
          alt="HAFCO logo"
          fill
          priority
          className="object-contain object-left"
          sizes="160px"
        />
      </span>
    </Link>
  );
}
