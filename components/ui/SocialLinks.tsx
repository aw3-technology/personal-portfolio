import Link from "next/link";

type SocialLink = { name: string; href: string };

const defaultLinks: SocialLink[] = [
  { name: "X", href: "https://x.com/aw3_xyz" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/will-schulz/" },
  { name: "GitHub", href: "https://github.com/aw3-technology" },
  { name: "Instagram", href: "https://www.instagram.com/will_parkerr/" },
  { name: "Calendly", href: "https://calendly.com/will-schulz-aw3/30min" },
];

type SocialLinksProps = {
  links?: SocialLink[];
  className?: string;
};

export default function SocialLinks({
  links = defaultLinks,
  className = "flex flex-wrap items-center gap-6 md:gap-8",
}: SocialLinksProps) {
  return (
    <div className={className}>
      {links.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200 focus-ring rounded"
        >
          {social.name}
        </Link>
      ))}
    </div>
  );
}
