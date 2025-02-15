import RSS from "rss";
import { getAllPosts } from "~/lib/api";

export async function GET() {
  const posts = getAllPosts();

  const feed = new RSS({
    title: "Jared Rhizor",
    description:
      "Jared Rhizor is  a maker, founder, and software dev. This is his blog.",
    site_url: "https://www.jrhizor.dev",
    feed_url: `https://www.jrhizor.dev/rss.xml`,
    copyright: `${new Date().getFullYear()} Jared Rhizor`,
    language: "en",
    pubDate: new Date(),
  });

  posts.map((post) => {
    feed.item({
      title: post.title,
      guid: `https://www.jrhizor.dev/posts/${post.slug}`,
      url: `https://www.jrhizor.dev/posts/${post.slug}`,
      date: post.date,
      description: post.description,
      author: post.name,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}
