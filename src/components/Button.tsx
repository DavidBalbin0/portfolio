
interface ButtonProps {
    text: string;
}
export const Button = ({ text }: ButtonProps) => {
    return (
        <button className="btn"><span>{text}</span></button>
    )
}