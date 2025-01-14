import Link from "next/link";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "~/components/ui/card"

export default function ProjectsPage() {
    return (
        <main>
            <h1 className="text-3xl md:text-4xl leading-tight font-light">Projects</h1>
            <h2 className="uppercase text-sm text-neutral-500 font-normal">Current Focus</h2>
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
