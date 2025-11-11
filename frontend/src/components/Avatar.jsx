export default function Avatar(props) {
  const colorMap = {
    gold: "#D4AF37",
    silver: "#C0C0C0",
    bronze: "#CD7F32",
  };

  const borderColor =
    colorMap[props.tierColor] || props.tierColor?.toLowerCase() || "transparent";
  const textColor =
    colorMap[props.tierColor] || props.tierColor?.toLowerCase() || "transparent";

    const avatarSize = props.variant ? "w-40 h-40 sm:w-30 sm:h-30 md:w-62 md:h-62" : "w-18 h-18 sm:w-16 sm:h-16 md:w-24 md:h-24"

  return (
    <div
      className={`flex flex-col items-center ${props.className}`}
      style={{ ["--avatar-border"]: borderColor }}
    >
      <img
        src={props.src}
        alt={props.name}
        loading="lazy"
        className={`rounded-full object-cover border-4 border-(--avatar-border) shadow-[4px_4px_8px_-3px_var(--orange-dark)] ${avatarSize}`}
      />
      <p
        style={{ ["--avatar-border"]: textColor }}
        className="text-center font-bold mt-2 text-sm text-(--avatar-border)"
      >
        {props.name}
      </p>
    </div>
  );
}
