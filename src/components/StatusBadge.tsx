import { cn } from "@/lib/utils";

type Tone = "red" | "amber" | "green" | "blue" | "gray";

const styles: Record<Tone, string> = {
  red: "bg-destructive/10 text-destructive border-destructive/20",
  amber: "bg-warning/10 text-warning border-warning/20",
  green: "bg-success/10 text-success border-success/20",
  blue: "bg-info/10 text-info border-info/20",
  gray: "bg-muted text-muted-foreground border-border",
};

export function StatusBadge({
  tone,
  children,
  className,
}: {
  tone: Tone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        styles[tone],
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", {
        "bg-destructive": tone === "red",
        "bg-warning": tone === "amber",
        "bg-success": tone === "green",
        "bg-info": tone === "blue",
        "bg-muted-foreground": tone === "gray",
      })} />
      {children}
    </span>
  );
}
