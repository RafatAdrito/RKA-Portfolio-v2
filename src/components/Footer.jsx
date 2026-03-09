const Footer = ({dark}) => {
    return (
        <footer className={`py-6 text-center text-xs ${dark ? "bg-slate-950 text-slate-600" : "bg-slate-900 text-slate-500"}`}>
            Designed & built by <span className="text-blue-400 font-medium">Rafat</span> · {new Date().getFullYear()}
        </footer>
    );
}
export default Footer
