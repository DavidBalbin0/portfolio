import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills = () => {
    const skills = [
        {name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'},
        {
            name: 'Spring',
            iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
        },
        {name: 'Node', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'},
    ]
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="skills">
            <div className="skills-box">
                <h2>Skills</h2>
                <p>
                    I have experience in a wide range of technologies. Here are a few of the technologies I have worked
                    with recently:
                </p>
                <div className="container">
                    <Slider {...settings}>
                        {skills.map((skill, index) => (
                            <div key={index} className="skill">
                                <img src={skill.iconUrl} alt={skill.name}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}