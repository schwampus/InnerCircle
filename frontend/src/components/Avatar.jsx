export default function Avatar({
  src = "https://i.imgur.com/1bX5QH6.jpg",
  alt = "Avatar",
  className = "",
  tierColor = "transparent",
}) {
  
  const colorMap = {
    gold: "#D4AF37",
    silver: "#C0C0C0",
    bronze: "#CD7F32",
  };

 
  const borderColor = colorMap[tierColor] || tierColor || "transparent";

  return (
    <div
      className={`inline-flex flex-col items-center ${className}`}
      style={{ ["--avatar-border"]: borderColor }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="rounded-full object-cover border-4 border-(--avatar-border) w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24"
      />
      <p className="text-center mt-2 text-sm">Candide</p> 
    </div>
  );
}