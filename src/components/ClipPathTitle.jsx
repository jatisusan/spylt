const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  return (
    <div className="general-title">
      <div
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
        style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)", borderColor: borderColor }}
      >
        <div
          style={{ backgroundColor: bg }}
          className="pb-6 pt-3 xl:pt-0 xl:pb-2 2xl:px-5 px-3"
        >
          <h2 style={{ color: color }}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
