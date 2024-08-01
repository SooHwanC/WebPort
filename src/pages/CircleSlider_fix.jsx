import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from '@use-gesture/react';
// import '../css/main.css';
import '../SCSS/components/CircleSlider.scss';

const CircularSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderSize, setSliderSize] = useState(1000);
    const slideSize = 200;

    const slides = [
        {
            image: '/slider/slide_jobtalks.svg',
            title: 'JOB<br/>TALKS',
            sub_title: 'LLM + RAG 첨삭 서비스',
            tech_stacks: [
                'JS', 'JAVA', 'Spring'
            ]
        },
        {
            image: '/slider/slide_itty.svg',
            title: 'ITTY',
            sub_title: '개발자 커뮤니티',
            tech_stacks: [
                'JS', 'JAVA', 'Spring'
            ]
        },
        {
            image: '/slider/slide_codebridge.svg',
            title: 'CODE<br/>BRIDGE',
            sub_title: '코딩 교육 LMS',
            tech_stacks: [
                'JS', 'JAVA', 'Spring'
            ]
        },
        {
            image: '/slider/slide_travlemaker.svg',
            title: 'TRAVEL<br/>MAKER',
            sub_title: '여행계획 거래 플랫폼',
            tech_stacks: [
                'JS', 'JAVA', 'Spring'
            ]
        },
        {
            image: '/slider/slide_javaburger.svg',
            title: 'JAVA<br/>BURGER',
            sub_title: '햄버거 만들기 타이쿤',
            tech_stacks: [
                'JS', 'JAVA', 'Spring'
            ]
        },
    ];

    const stepAngle = (2 * Math.PI) / slides.length;

    const [{ rotate }, api] = useSpring(() => ({
        rotate: -45,
        config: { mass: 2, tension: 100, friction: 14 },
    }));

    // const calculateSliderSize = () => {
    //     const viewportWidth = window.innerWidth;
    //     const viewportHeight = window.innerHeight;
    //     const minDimension = Math.min(viewportWidth, viewportHeight);
    //     console.log('viewportWidth:', viewportWidth);
    //     console.log('viewportHeight:', viewportHeight);
    //     console.log('minDimension:', minDimension);
    //     return Math.min(minDimension * 1, 1000);
    // };

    const wrapperRef = useRef(null);

    const calculateSliderSize = () => {
        if (wrapperRef.current) {
            const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
            console.log('wrapperWidth:', wrapperWidth);
            return Math.min(wrapperWidth * 1.1, 900);
        }
        return 800; // 기본값
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

    const bind = useDrag(({ movement: [mx, my], velocity: [vx, vy], active, last }) => {
        console.log('on');
        if (!hasInteracted) {
            setHasInteracted(true);
        }
        if (active) {
            const distance = Math.sqrt(mx * mx + my * my);
            const direction = Math.atan2(my, mx);
            const rotation = -currentSlide * (stepAngle * 180 / Math.PI) + (distance / 4) * Math.cos(direction);
            api.start({ rotate: rotation, immediate: true });
        } else if (last) {
            const moveThreshold = 1;
            const velocityThreshold = 0.1;
            const totalVelocity = Math.sqrt(vx * vx + vy * vy);

            if (Math.sqrt(mx * mx + my * my) > moveThreshold || totalVelocity > velocityThreshold) {
                const direction = mx > 0 ? -1 : 1;
                const newSlide = (currentSlide + direction + slides.length) % slides.length;
                setCurrentSlide(newSlide);
            }

            api.start({ rotate: -currentSlide * (stepAngle * 180 / Math.PI), immediate: false });
        }
    }, { preventScroll: true });

    const initialRotation = -45 * (Math.PI / 180);

    const [hasInteracted, setHasInteracted] = useState(false);

    return (
        <div className="slider">
            <div className="circular-slider circular-slider-1">
                <div className="wrapper">
                    <div className="descriptions">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`descriptions__item ${index === currentSlide ? 'descriptions__item_visible' : ''}`}
                            >
                                <div className="tech_stacks_wrapper">
                                    {slide.tech_stacks.map((tech_stack, index) => (
                                        <div key={index} className="tech_stack">{tech_stack}</div>
                                    ))}
                                </div>
                                <h2>{slide.sub_title}</h2>
                                <h1 dangerouslySetInnerHTML={{ __html: slide.title }}></h1>
                            </div>
                        ))}
                    </div>
                    <div className="slides_wrapper" ref={wrapperRef}>
                        <animated.div
                            className="slides-holder"
                            style={{
                                width: `${sliderSize}px`,
                                height: `${sliderSize}px`,
                                transform: rotate.to(r => `translate(0%, 0%) rotate(${r}deg)`),
                            }}
                        >
                            {slides.map((slide, index) => {
                                const angle = stepAngle * index + initialRotation;
                                const slideSize = sliderSize * 0.05; // 슬라이더 크기의 15%로 설정
                                const radius = (sliderSize / 2 - slideSize / 2) * 1.05; // 0.8을 조정하여 반지름 변경
                                const x = radius * Math.cos(angle - Math.PI / 2);
                                const y = radius * Math.sin(angle - Math.PI / 2);
                                return (
                                    <div
                                        key={index}
                                        className={`swiper-no-swiping slides-holder__item ${index === currentSlide ? 'slides-holder__item_active' : ''}`}
                                        // className={`swiper-no-swiping slides-holder__item ${index === currentSlide ? 'slides-holder__item_active' : ''}`}
                                        style={{
                                            // width: `${slideSize}px`,
                                            // height: `${slideSize}px`,

                                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${angle * 180 / Math.PI}deg)`,
                                        }}
                                    >
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            {...(index === currentSlide ? bind() : {})}
                                        />
                                    </div>
                                );
                            })}

                            {!hasInteracted && (
                                <div
                                    className="slide_gesture_wrapper"
                                    style={{
                                        width: `${sliderSize * 0.15}px`,
                                        height: `${sliderSize * 0.15}px`,
                                        position: 'absolute',
                                        top: '30%',
                                        left: '9%',
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <img src="../images/slide_gesture.svg" alt="드래그 제스처 안내" />
                                </div>
                            )}

                            <div
                                className='slide_center_wrapper'
                                style={{
                                    width: `${sliderSize * 0.5}px`,
                                    height: `${sliderSize * 0.5}px`,
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <img src="../images/planet_02_white.svg" alt="" style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }} />
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircularSlider;