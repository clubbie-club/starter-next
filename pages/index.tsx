import Link from "next/link";

export default function Index() {
  return (
    <Link href={{ pathname: "/" }} passHref>
      <a href="replaced" className="text-3xl font-bold underline">
        Index
      </a>
    </Link>
  );
}
