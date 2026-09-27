export default function Eyebrow({
  children,
  tone = "indigo",
}: {
  children: React.ReactNode;
  tone?: "indigo" | "stone" | "cream";
}) {
  const toneClass = {
    indigo: "text-indigo",
    stone: "text-stone",
    cream: "text-cream-dim",
  }[tone];

  return <span className={`eyebrow ${toneClass}`}>{children}</span>;
}
