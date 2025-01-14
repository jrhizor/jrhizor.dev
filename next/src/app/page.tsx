import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <Image src="/me.png" alt="Jared Rhizor" width={256} height={256} className="size-48 md:size-64 mb-4" />
      <div className="main grid grid-cols-1 gap-8 py-4 text-balance text-3xl md:text-4xl leading-tight font-light max-w-[900px]">
        <p>
          Hello, I'm <strong>Jared Rhizor</strong>.
        </p>

        <p>I'm the founder of <a href="https://www.bluewhale.dev/" className="font-bold decoration-neutral-400 hover:underline hover:underline-offset-2">Blue Whale Software</a>, where I'm making SEO keyword research easy with <Link href="https://www.keywordgems.com/" className="font-bold decoration-neutral-400 hover:underline hover:underline-offset-2">KeywordGems</Link>.</p>

        <p>Previously, I was a tech lead at <Link href="https://liveramp.com/" rel="nofollow" className="font-bold decoration-neutral-400 hover:underline hover:underline-offset-2">LiveRamp</Link> and a founding engineer at <Link href="https://airbyte.com"  rel="nofollow" className="font-bold decoration-neutral-400 hover:underline hover:underline-offset-2">Airbyte</Link>.</p>
      </div>
    </main>
  );
}
