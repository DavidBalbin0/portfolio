import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";
import {getAllTags} from "../service/TagRepository";
import Tag from "../models/Tag";
import {suffleArray} from "../utils/suffleArray";

export const About = () => {
    const [tags, setTags] = useState<Tag[]>([])

    useEffect(() => {
      const fetchTags = async () => {
          const tags = await getAllTags()
          setTags(suffleArray(tags))
      }
      fetchTags()
    }, [])
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
                            {
                                tags.map(tag=> (
                                    <div key={tag.id} className="skill">
                                        <img src={tag.iconUrl} alt={tag.title}/>
                                    </div>
                                )

                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}