import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CareersPage() {
    return (
        <div className="py-32 text-center bg-background">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-muted-foreground mb-8">We are always looking for exceptional talent.</p>
            <div className="p-12 border border-dashed rounded-lg max-w-2xl mx-auto bg-muted/20">
                <p className="mb-4">No open positions at the moment, but feel free to send us your resume.</p>
                <Button asChild>
                    <Link href="/contact">Contact HR</Link>
                </Button>
            </div>
        </div>
    );
}
