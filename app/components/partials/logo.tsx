import { cn } from "~/lib/utils";

export default function Logo() {
    return <h3 className={cn("capitalize text-[1.5rem] font-[700] font-Arimo leading-[120%] -tracking-[0.0063rem]")}>
         <span className={cn("text-primary")}>haat</span> <span className="text-container-foreground">bazar</span>
    </h3>
}