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
import {Indie_Flower} from "next/font/google";
import {cn} from "~/lib/utils";

// todo: metadata

const granny = Indie_Flower({
    subsets: ["latin"],
    display: 'swap',
    weight: "400",
    variable: "--font-granny",
})

export default function RecipesPage() {
    return (
        <main>
            <h1 className="text-3xl font-light leading-tight md:text-4xl">
                Recipes
            </h1>

            <Card className={cn("parchment uppercase", granny.className)}>
                <CardHeader>
                    <CardTitle>Schnecken</CardTitle>
                    <CardDescription>from the kitchen of Mom Kozak</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Place in large bowl -</p>
                    <p>4 cups flour</p>
                    <p>1 1/2 cups margarine</p>
                </CardContent>
            </Card>
        </main>
    );
}
