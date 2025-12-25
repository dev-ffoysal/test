"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Contexts ---
const AccordionContext = React.createContext<{
    activeItem: string | null;
    setActiveItem: (value: string | null) => void;
}>({ activeItem: null, setActiveItem: () => { } });

const AccordionItemContext = React.createContext<{
    value: string;
    isOpen: boolean;
}>({ value: "", isOpen: false });

// --- Components ---

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { type?: "single" | "multiple"; collapsible?: boolean }
>(({ className, type, collapsible, children, ...props }, ref) => {
    const [activeItem, setActiveItem] = React.useState<string | null>(null);

    return (
        <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
            <div ref={ref} className={cn("space-y-2", className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className, value, children, ...props }, ref) => {
    const { activeItem } = React.useContext(AccordionContext);
    const isOpen = activeItem === value;

    return (
        <AccordionItemContext.Provider value={{ value, isOpen }}>
            <div ref={ref} className={cn("border-b", className)} {...props}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
    const { setActiveItem, activeItem } = React.useContext(AccordionContext);
    const { value, isOpen } = React.useContext(AccordionItemContext);

    return (
        <button
            ref={ref}
            onClick={() => setActiveItem(isOpen ? null : value)}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 w-full text-left",
                className
            )}
            data-state={isOpen ? "open" : "closed"}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
    );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
    const { isOpen } = React.useContext(AccordionItemContext);

    if (!isOpen) return null;

    return (
        <div
            ref={ref}
            className={cn(
                "overflow-hidden text-sm transition-all animate-accordion-down mb-4",
                className
            )}
            {...props}
        >
            <div className="pb-4 pt-0">{children}</div>
        </div>
    );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
