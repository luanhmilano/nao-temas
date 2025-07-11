import { GitCommitIcon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="text-center p-4">
            <a href="https://github.com/luanhmilano/nao-temas"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 text-slat-400 hover:text-cyan-400 transition-colors"
            >
                <GitCommitIcon size={16} />
                <span>Ver código no GitHub</span>
            </a>
        </footer>
    )
}

export default Footer;