import { PostBody } from "~/app/posts/_components/post-body";
import { PostHeader } from "~/app/posts/_components/post-header";
import DateFormatter from "~/app/posts/_components/date-formatter";
import { PostTitle } from "~/app/posts/_components/post-title";

export default function NotFound() {
  return (
    <main className="max-w-2xl">
      <article>
        <PostTitle>404 Not Found</PostTitle>
        <div className="font-light text-neutral-500">
          Looks like some things are meant to stay a mystery, like where this
          page wandered off to. You can head back home, keep exploring, or
          simply let the mystery be...
        </div>
      </article>
    </main>
  );
}
