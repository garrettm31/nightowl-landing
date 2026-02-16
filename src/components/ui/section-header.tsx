interface Props {
  label: string;
  heading: string;
  centered?: boolean;
  subtext?: string;
}

export function SectionHeader({ label, heading, centered = false, subtext }: Props) {
  return (
    <div className={centered ? "text-center" : "max-w-2xl"}>
      <p className="text-owl-400 text-[15px] font-medium mb-3">{label}</p>
      <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-tight">
        {heading}
      </h2>
      {subtext && (
        <p className="mt-4 text-night-400 text-[17px]">{subtext}</p>
      )}
    </div>
  );
}
