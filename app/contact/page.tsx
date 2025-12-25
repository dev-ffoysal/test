import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
    return (
        <div className="bg-background">
            <section className="py-20 lg:py-32 bg-muted/30">
                <div className="container px-4 mx-auto text-center max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something Great</h1>
                    <p className="text-xl text-muted-foreground">
                        Whether you have a specific project in mind or just want to explore a new idea, we're here to help.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-none border border-border shadow-sm">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Work Email</Label>
                                <Input id="email" type="email" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="type">Inquiry Type</Label>
                                <select className="flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                    <option>General Inquiry</option>
                                    <option>New Project</option>
                                    <option>Partnership</option>
                                    <option>Career</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Tell us about your project goals, timeline, and budget..." className="min-h-[150px]" />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input id="nda" type="checkbox" className="h-4 w-4 rounded border-primary text-primary focus:ring-primary" />
                                <label
                                    htmlFor="nda"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Request NDA before discussion
                                </label>
                            </div>

                            <Button size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <MapPin className="size-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Headquarters</p>
                                        <p className="text-muted-foreground">{SITE_CONFIG.contact.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <Phone className="size-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Phone</p>
                                        <p className="text-muted-foreground">{SITE_CONFIG.contact.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <Mail className="size-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Email</p>
                                        <p className="text-muted-foreground">{SITE_CONFIG.contact.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-none">
                                        <Clock className="size-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Business Hours</p>
                                        <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM (PST)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-muted px-6 py-8 rounded-none border border-primary/20 bg-primary/5">
                            <h3 className="font-bold mb-2">Our Promise</h3>
                            <p className="text-sm opacity-80">
                                We respect your privacy. All information shared is kept strictly confidential. We are happy to sign an NDA before our first call.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
