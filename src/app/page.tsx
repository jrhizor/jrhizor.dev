import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

const title = "Jared Rhizor";

export const metadata: Metadata = {
  title: title,
  openGraph: {
    images: [`/api/og?text=${encodeURIComponent(title)}`],
  },
};

export default function HomePage() {
  return (
    <main>
      <Image
        src="/me.png"
        alt="Jared Rhizor"
        width={256}
        height={256}
        className="mb-4 size-48 md:size-64"
      />
      <div className="main grid max-w-[900px] grid-cols-1 gap-8 text-balance py-4 text-3xl font-light leading-tight md:text-4xl">
        <p>Hello, I&apos;m Jared Rhizor.</p>

        <p>
          I&apos;m making SEO keyword research easy with{" "}
          <Link
            href="https://www.keywordgems.com/"
            className="font-normal decoration-neutral-400 hover:underline hover:underline-offset-2"
          >
            KeywordGems
          </Link>
          .
        </p>

        <p>
          Previously, I was a tech lead at{" "}
          <Link
            href="https://liveramp.com/"
            rel="nofollow"
            className="font-normal decoration-neutral-400 hover:underline hover:underline-offset-2"
          >
            LiveRamp
          </Link>{" "}
          and a founding engineer at{" "}
          <Link
            href="https://airbyte.com"
            rel="nofollow"
            className="font-normal decoration-neutral-400 hover:underline hover:underline-offset-2"
          >
            Airbyte
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
