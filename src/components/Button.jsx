export function Button({
    children,
    variant = "brand",
    disabled,
    loading,
    className = "",
    ...props
}) {
    const base =
        "px-4 py-2 rounded-xl font-medium focus:outline-none transition cursor-pointer";
    const variants = {
        brand: "bg-brand-button text-white hover:bg-brand-button/90 active:bg-brand-button/80",
        outline:
            "border border-brand-button text-brand-button hover:bg-brand-button/10 active:bg-brand-button/20",
        secondary:
            "bg-secondary text-white hover:bg-secondary/90 active:bg-secondary/80",
    };
    const state = disabled ? "opacity-50 cursor-not-allowed" : "";
    return (
        <button
            className={`${base} ${variants[variant]} ${state} ${className}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading ? (
                <span className="loader w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" />
            ) : (
                children
            )}
        </button>
    );
}
