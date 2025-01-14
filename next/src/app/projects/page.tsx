import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

// todo: metadata

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-3xl font-light leading-tight md:text-4xl">
        Projects
      </h1>
      <h2 className="text-sm font-normal uppercase text-neutral-500">
        Current Focus
      </h2>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </main>
  );
}
