import React from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Media from "../media/messagif.gif";
import { useState } from "react";
import { useEffect } from "react";

const bogliasco = "https://media.giphy.com/media/l3q2XB76CaWPggiNW/giphy.gif";
const countyClare = "https://media.giphy.com/media/10ppffwhOftLy0/giphy.gif";
const craterRock =
    "https://lh3.googleusercontent.com/EkwnFkB0dkBRe2QKFg2FVZfBT2LqdoBZ8gIaSXKvIAilKKMhnhj8rxDaxJK4oqXRJcWXJtML34HBiyVQlnV4nfn0Y8u9SYt6Wh96I9JVfxbVN5ZvIROAsVEGh3tgSc2rhJ9OPLVWXw=w1024";
const giauPass =
    "https://lh3.googleusercontent.com/e61aE8m0APkuLHS74Vpa-WR28uiU0FN_TnJLh8pQBMFDk2K96GgfA43dntwwU6qYyHzz2ym8pf9Qr9_H6X9SaWbKKOI_yH-nvc7d3-TFaLsZTX5V9aCC3Qj1acYAG1YIH3dGUgE8MQ=w1024";

const txt = " <Initizalize />";

function HeroSliderComponent() {
    const [text, setText] = useState("");
    let i = 0;
    let toggle = true;
    const textAnimate = async () => {
        if (toggle && i < txt.length) {
            setText(txt.slice(0, i));
            i++;
            if (i == txt.length) {
                await setTimeout(1000);
                toggle = !toggle;
            }
        } else {
            setText(txt.slice(0, i));
            i--;
            if (i == 0) {
                toggle = !toggle;
            }
        }
        setTimeout(textAnimate, 100);
    };
    useEffect(() => {
        textAnimate();
    }, []);
    return (
        <div
            style={{
                padding: "50px",
            }}
        >
            <HeroSlider
                slidingAnimation="left_to_right"
                orientation="horizontal"
                initialSlide={1}
                onBeforeChange={(previousSlide, nextSlide) =>
                    console.log("onBeforeChange", previousSlide, nextSlide)
                }
                onChange={(nextSlide) => console.log("onChange", nextSlide)}
                onAfterChange={(nextSlide) =>
                    console.log("onAfterChange", nextSlide)
                }
                style={{
                    backgroundColor: "rgba(10,10,10,0.5)",
                    marginTop: "110px",
                    borderRadius: "10px",
                    boxShadow: "0 1rem 3rem #000",
                }}
                settings={{
                    slidingDuration: 250,
                    slidingDelay: 100,
                    shouldAutoplay: true,
                    shouldDisplayButtons: true,
                    autoplayDuration: 5000,
                    height: "50vh",
                }}
            >
                <OverlayContainer
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        textAlign: "start",
                    }}
                >
                    <h1>
                        <strong>We are</strong>
                        <p>Technocrats {text}</p>
                    </h1>
                </OverlayContainer>

                <Slide
                    background={{
                        backgroundImage: giauPass,
                        backgroundAttachment: "fixed",
                    }}
                    style={{
                        opacity: 0.8,
                    }}
                />

                <Slide
                    background={{
                        backgroundImage: bogliasco,
                        backgroundAttachment: "fixed",
                    }}
                    style={{
                        opacity: 0.5,
                    }}
                />

                <Slide
                    background={{
                        backgroundImage: countyClare,
                        backgroundAttachment: "fixed",
                    }}
                    style={{
                        opacity: 0.5,
                    }}
                />

                <Slide
                    background={{
                        backgroundImage: craterRock,
                        backgroundAttachment: "fixed",
                    }}
                    style={{
                        opacity: 0.7,
                    }}
                />

                <Nav />
            </HeroSlider>
        </div>
    );
}

export default HeroSliderComponent;
