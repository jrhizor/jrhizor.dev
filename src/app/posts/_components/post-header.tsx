import DateFormatter from "./date-formatter";
import { PostTitle } from "~/app/posts/_components/post-title";

type Props = {
  title: string;
  date: string;
  name?: string;
};

export function PostHeader({ title, date, name }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="font-light text-neutral-500">
        posted on <DateFormatter dateString={date} />
        {name && ` by ${name}`}
      </div>
    </>
  );
}
