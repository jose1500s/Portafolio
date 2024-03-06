export default function Pill({ text, icon, link, mail }) {
    return (
        <a href={mail.length > 0 ? `mailto:${mail}` : link} target="_blank" rel="noreferrer">
            <button className="button">
                <img src={icon} alt="icon" width="24" height="24" />
                <span className="text">{text}</span>
            </button>
        </a>
    )
}