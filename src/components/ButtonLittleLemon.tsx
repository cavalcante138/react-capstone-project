import "./ButtonLittleLemon.scss"

interface Props {
    title: string;
    onClick: () => void;
}

export const ButtonLittleLemon = (
    { title, onClick }: Props
) => {
    return (
        <button className="button-little-lemon"
        aria-label="On Click"
        onClick={onClick}
        >
            {title}
        </button>
    )
}