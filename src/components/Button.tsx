
interface ButtonProps {
    text: string;
    bgColor?: string;
}
export const Button = ({ text, bgColor }: ButtonProps) => {
    return (
        <button className="btn" style={{ background: bgColor ? bgColor : ''}}><span>{text}</span></button>
    )
}