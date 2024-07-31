import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
// import '../css/main.css';
import '../css/CircleSlider.scss';

const CircularSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderSize, setSliderSize] = useState(800);
    const slideSize = 200;

    const slides = [
        { image: '/slider/slide_jobtalks.svg', title: 'JOB TALKS' },
        { image: '/slider/slide_itty.svg', title: 'ITTY' },
        { image: '/slider/slide_codebridge.svg', title: 'CODE BRIDGE' },
        { image: '/slider/slide_travlemaker.svg', title: 'TRAVEL MAKER' },
        { image: '/slider/slide_javaburger.svg', title: 'JAVA BURGER' },
    ];

    const stepAngle = (2 * Math.PI) / slides.length;

    const [{ rotate }, api] = useSpring(() => ({
        rotate: -45,
        config: { mass: 2, tension: 100, friction: 14 },
    }));

    const calculateSliderSize = () => {
        const viewportWidth = window.innerWidth;
        console.log('viewportWidth:', viewportWidth);
        const viewportHeight = window.innerHeight;
        const minDimension = Math.min(viewportWidth, viewportHeight);
        return Math.min(minDimension * 0.8, 800);
    };

    useEffect(() => {
        const handleResize = () => {
            setSliderSize(calculateSliderSize());
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        let newRotate = -currentSlide * (stepAngle * 180 / Math.PI);
        let currentRotate = rotate.get();
        let diff = newRotate - currentRotate;
        
        // 가장 짧은 회전 경로 선택
        if (Math.abs(diff) > 180) {
          diff -= Math.sign(diff) * 360;
        }
        
        api.start({ rotate: currentRotate + diff, immediate: false });
      }, [currentSlide, api, stepAngle, rotate]);

    const rotateSlider = (direction) => {
        const newSlide = (currentSlide - direction + slides.length) % slides.length;
        setCurrentSlide(newSlide);
    };

    const bind = useDrag(({ movement: [mx], velocity: [vx], active, last }) => {
        if (active) {
            const rotation = -currentSlide * (stepAngle * 180 / Math.PI) + mx / 4;
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

    const initialRotation = -45 * (Math.PI / 180);
    

    return (
        <div className="slider">
            <div className="circular-slider circular-slider-1">
                <div className="wrapper">
                    <div className="descriptions">
                        {slides.map((slide, index) => (
                            <div key={index} className={`descriptions__item ${index === currentSlide ? 'descriptions__item_visible' : ''}`} style={{ display: index === currentSlide ? 'block' : 'none' }}>
                                <h1>{slide.title}</h1>
                            </div>
                        ))}
                    </div>
                    <div className="slides_wrapper">
                        <animated.div
                            className="slides-holder"
                            style={{
                                width: `${sliderSize}px`,
                                height: `${sliderSize}px`,
                                transform: rotate.to(r => `translate(0%, 0%) rotate(${r}deg)`),
                                touchAction: 'none',
                            }}
                        >
                            {slides.map((slide, index) => {
                                const angle = stepAngle * index + initialRotation;
                                const slideSize = sliderSize * 0.15; // 슬라이더 크기의 15%로 설정
                                const radius = (sliderSize / 2 - slideSize / 2) * 1.2; // 0.8을 조정하여 반지름 변경
                                const x = radius * Math.cos(angle - Math.PI / 2);
                                const y = radius * Math.sin(angle - Math.PI / 2);
                                return (
                                    <div
                                        key={index}
                                        className={`slides-holder__item ${index === currentSlide ? 'slides-holder__item_active' : ''}`}
                                        style={{
                                            // width: `${slideSize}px`,
                                            // height: `${slideSize}px`,

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
        </div>
    );
};

export default CircularSlider;