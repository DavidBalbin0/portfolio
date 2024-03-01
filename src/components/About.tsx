import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const About = () => {
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
        <div>
            <div className="skills" id="about">
                <div className="skills-box" >
                    <h2 >About Me</h2>
                    <p>

                        At 16, I dove headfirst into the world of software development, starting with the basics,
                        exploring JavaScript, and later advancing to Java. During this time, I also sought to learn and
                        understand key programming concepts.
                    </p>
                    <p>
                        Currently, I am studying software development at <a href="https://fiap.com.br">FIAP</a>,
                        focusing on developing projects and challenges that enhance my skills.
                    </p>
                    <p>
                        I am seeking opportunities where I can continue my professional development and contribute
                        meaningfully.
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
        </div>
    )
}