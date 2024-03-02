import {useEffect, useState} from "react";
import {SocialIcons} from "./SocialIcons";
import {Button} from "./Button";

export const Hero = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="hero" id="home">
            <div className="container">
                <span> Welcome, I'm</span>
                <h1>David Balbino</h1>
                <h2 className="txt-rotate">{text}<span>|</span></h2>
                <p>
                    I'm a developer focused on creating efficient applications.
                    I'm constantly seeking new challenges and opportunities to further develop my skills.
                </p>
                <SocialIcons />
                <div className="btn-container">
                    <Button text={"Let's Talk"} />
                </div>
            </div>
        </section>
    )
}