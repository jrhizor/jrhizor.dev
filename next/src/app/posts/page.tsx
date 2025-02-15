import { getAllPosts } from "~/lib/api";
import Link from "next/link";
import { PostHeader } from "~/app/posts/_components/post-header";
import { Metadata } from "next";

const title = "Blog";
export const metadata: Metadata = {
  title: title,
  description: `Blog posts written by Jared Rhizor.`,
  openGraph: {
    images: [`/api/og?text=${encodeURIComponent(title)}`],
  },
};

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="grid max-w-2xl grid-cols-1 gap-4">
      {allPosts.map((post) => (
        <Link href={`/posts/${post.slug}`} key={post.slug} className="group">
          <PostHeader title={post.title} date={post.date} />
        </Link>
      ))}
    </main>
  );
}
