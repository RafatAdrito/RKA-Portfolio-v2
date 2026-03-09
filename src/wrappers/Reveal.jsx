import UseInView from "../hooks/useInView.js";

const Reveal = ({ children, delay = 0, className = "" }) => {
    const [ref, inView] = UseInView();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}
export default Reveal
