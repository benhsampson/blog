export const LanguageIcon = ({ icon }: { icon: "🐍" | "🦀" }) => (
  <div
    className="inline w-10 h-10 rounded-md"
    title={icon === "🐍" ? "Python" : icon === "🦀" ? "Rust" : ""}
  >
    {icon}
  </div>
);
