// AboutSectionCard.jsx
import React from "react";

export default function AboutSectionCard({
    title,
    description,
    media, // { type: 'image' | 'video', src: string }
    overlay = "black", // 'black' или 'brand'
    defaultWide = false,
    className = "",
    onMouseEnter,
    onMouseLeave,
}) {
    const base = `
    relative
    h-[40cqw]
    overflow-hidden
    rounded-4xl
    transition-all duration-300 ease-in-out
    bg-brand
    flex-grow
  `;

    // ширина: по умолчанию 30cqw, при hover — 40cqw; или сразу 40cqw, если defaultWide=true
    const widthClass = defaultWide ? "w-[40cqw]" : "w-[30cqw] hover:w-[40cqw]";

    // цвет градиента-подложки
    const gradientFrom =
        overlay === "brand" ? "from-brand/70" : "from-black/70";

    const textColor = overlay === "brand" ? "text-brand-brown" : "text-white";

    return (
        <div
            className={`${base} ${widthClass}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {/* Фоновое медиа */}
            {media?.type === "video" ? (
                <video
                    className="absolute inset-0 object-cover w-full h-full"
                    src={media.src}
                    autoPlay
                    muted
                    loop
                />
            ) : media?.type === "image" ? (
                <img
                    className="absolute inset-0 object-cover w-full h-full"
                    src={media.src}
                    alt={title}
                />
            ) : null}

            {/* Градиент-подложка */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className={`
            absolute inset-x-0 bottom-0 h-1/2
            bg-gradient-to-t ${gradientFrom} to-transparent
          `}
                />
            </div>

            {/* Текст */}
            <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <h4 className={`${textColor} text-xl font-bold mb-2`}>
                    {title}
                </h4>
                {description && (
                    <p className={`${textColor}  text-sm opacity-90`}>
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
}
