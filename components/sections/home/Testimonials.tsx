import { TESTIMONIALS } from "@/lib/data";
import { User } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">
                    What Our Clients Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                        <div key={testimonial.id} className="bg-background p-8 rounded-none shadow-sm border border-border/50 flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 text-primary mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-lg italic text-muted-foreground leading-relaxed mb-6">
                                    "{testimonial.content}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="size-10 rounded-none bg-muted flex items-center justify-center">
                                    <User className="size-6 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="font-semibold">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
