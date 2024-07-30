import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
// import '../css/main.css';
import '../css/CircleSlider.scss';

const CircularSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: '/slider/js.svg', title: 'Javascript' },
        { image: '/slider/css.png', title: 'Css3' },
        { image: '/slider/html.png', title: 'Html5' },
        { image: '/slider/sass.png', title: 'Sass' },
        { image: '/slider/vstudio.png', title: 'MVS Code' },
        { image: '/slider/chrome.png', title: 'Chrome' },
    ];

    const stepAngle = (2 * Math.PI) / slides.length;
    const sliderSize = 400; // 픽셀 단위의 고정 크기
    const slideSize = 60;  // 픽셀 단위의 고정 크기

    const [{ rotate }, api] = useSpring(() => ({
        rotate: 0,
        config: { mass: 1, tension: 120, friction: 14 },
    }));

    useEffect(() => {
        const newRotate = -currentSlide * (stepAngle * 180 / Math.PI);
        api.start({ rotate: newRotate, immediate: false });
    }, [currentSlide, api, stepAngle]);

    const rotateSlider = (direction) => {
        const newSlide = (currentSlide - direction + slides.length) % slides.length;
        setCurrentSlide(newSlide);
    };

    const bind = useDrag(({ movement: [mx], velocity: [vx], active, last }) => {
        if (active) {
            const rotation = -currentSlide * (stepAngle * 180 / Math.PI) + mx * 2;
            api.start({ rotate: rotation, immediate: true });
        } else if (last) {
            const moveThreshold = 1;
            const velocityThreshold = 0.1;

            if (Math.abs(mx) > moveThreshold || Math.abs(vx) > velocityThreshold) {
                const direction = mx > 0 ? -1 : 1;
                const newSlide = (currentSlide + direction + slides.length) % slides.length;
                setCurrentSlide(newSlide);
            }

            api.start({ rotate: -currentSlide * (stepAngle * 180 / Math.PI), immediate: false });
        }
    }, { axis: 'x', preventScroll: true });

    return (
        <div className="slider" >
            <div className="circular-slider circular-slider-1">
                <div className="wrapper" style={{ width: '100%', height: '100%', position: 'relative' }}>
                    {/* 수동조작 */}
                    {/* <div className="controls">
                        <div className="controls__left" onClick={() => rotateSlider(1)}>
                            <div className="icon-wrapper"><i className="far fa-arrow-alt-circle-left"></i></div>
                        </div>
                        <div className="controls__right" onClick={() => rotateSlider(-1)}>
                            <div className="icon-wrapper"><i className="far fa-arrow-alt-circle-right"></i></div>
                        </div>
                    </div> */}
                    <div className="descriptions" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                        {slides.map((slide, index) => (
                            <div key={index} className={`descriptions__item ${index === currentSlide ? 'descriptions__item_visible' : ''}`} style={{ display: index === currentSlide ? 'block' : 'none' }}>
                                <h1>{slide.title}</h1>
                            </div>
                        ))}
                    </div>
                    <animated.div
                        className="slides-holder"
                        style={{
                            width: `${sliderSize}px`,
                            height: `${sliderSize}px`,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: rotate.to(r => `translate(0%, 0%) rotate(${r}deg)`),
                            touchAction: 'none',
                        }}
                    >
                        {slides.map((slide, index) => {
                            const angle = stepAngle * index;
                            const radius = (sliderSize / 2 - slideSize / 2) * 0.8; // 0.8을 조정하여 반지름 변경
                            const x = radius * Math.cos(angle - Math.PI / 2);
                            const y = radius * Math.sin(angle - Math.PI / 2);
                            return (
                                <div
                                    key={index}
                                    className={`slides-holder__item ${index === currentSlide ? 'slides-holder__item_active' : ''}`}
                                    style={{
                                        width: `${slideSize}px`,
                                        height: `${slideSize}px`,
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${angle * 180 / Math.PI}deg)`,
                                    }}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            cursor: 'grab',
                                            touchAction: 'none'
                                        }}
                                        {...(index === currentSlide ? bind() : {})}
                                    />
                                </div>
                            );
                        })}
                    </animated.div>
                  
                </div>
            </div>
        </div>
    );
};

export default CircularSlider;