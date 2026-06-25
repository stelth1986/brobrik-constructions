import Image from "next/image";

/**
 * Brand divider — the trowel mark flanked by two hairlines.
 * Designed to sit under a title (its intended use on inner-page heroes).
 * tone="light" renders it white for dark backgrounds; "dark" keeps the
 * original colours for light backgrounds.
 */
export function BrandDivider({
  className = "",
  align = "center",
  tone = "dark",
}: {
  className?: string;
  align?: "center" | "start";
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`flex ${align === "start" ? "justify-start" : "justify-center"} ${className}`}
      aria-hidden
    >
      <Image
        src="/media/title-divider.png"
        alt=""
        width={177}
        height={26}
        className={`h-auto w-[180px] ${tone === "light" ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}
