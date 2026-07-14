import { ownershipLabels, type Ownership } from "@/lib/projects";

type OwnershipBadgeProps = {
  ownership: Ownership;
  /**
   * "overlay" sits on top of a project image (opaque, blurred backdrop);
   * "inline" sits on the page background alongside other eyebrow text.
   */
  variant?: "overlay" | "inline";
  className?: string;
};

const toneStyles: Record<Ownership, string> = {
  own: "text-emerald-300 border-emerald-400/30 bg-emerald-500/10",
  client: "text-sky-300 border-sky-400/30 bg-sky-500/10",
};

export default function OwnershipBadge({
  ownership,
  variant = "inline",
  className = "",
}: OwnershipBadgeProps) {
  const overlay = variant === "overlay" ? "backdrop-blur-md bg-bg/60" : "";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-2xs uppercase tracking-[0.18em] whitespace-nowrap ${toneStyles[ownership]} ${overlay} ${className}`}
    >
      {ownershipLabels[ownership]}
    </span>
  );
}
