import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-background">
            <section className="bg-muted/30 py-12 border-b border-border">
                <div className="container px-4 mx-auto">
                    <Link href="/work" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
                        <ArrowLeft className="mr-2 size-4" /> Back to Work
                    </Link>
                    <div className="max-w-4xl">
                        <Badge className="mb-4">{project.category}</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                        <p className="text-xl text-muted-foreground">{project.summary}</p>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                        <div className="bg-muted p-6 rounded-none">
                            <h3 className="font-bold mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="outline" className="bg-background">{tag}</Badge>
                                ))}
                            </div>
                        </div>

                        <div className="bg-muted p-6 rounded-none">
                            <h3 className="font-bold mb-4">Key Results</h3>
                            <ul className="space-y-4">
                                {project.results.map((result, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="size-2 mt-2 rounded-none bg-primary shrink-0" />
                                        <span className="font-medium">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 border rounded-none bg-primary/5 text-center">
                            <h3 className="font-bold mb-2">Build Something Similar</h3>
                            <p className="text-sm text-muted-foreground mb-4">Like what you see? Let's discuss how we can help you.</p>
                            <Button className="w-full" asChild>
                                <Link href="/contact">Start Project</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12 order-1 lg:order-2">
                        <div className="aspect-video bg-muted rounded-none flex items-center justify-center text-muted-foreground">
                            [Hero Image for {project.title}]
                        </div>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <h2>The Challenge</h2>
                            <p>
                                Detailed description of the problem the client was facing...
                                (This would be dynamic text in a real CMS)
                            </p>

                            <h2>Our Solution</h2>
                            <p>
                                How we approached the problem, the architecture choices we made, and the design philosophy...
                            </p>

                            <h3>Key Features Implemented</h3>
                            <ul>
                                <li>Feature 1: Description</li>
                                <li>Feature 2: Description</li>
                                <li>Feature 3: Description</li>
                            </ul>
                        </div>

                        {/* Gallery */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-muted rounded-none" />
                            <div className="aspect-square bg-muted rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
