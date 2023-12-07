import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import { useSpring, a } from '@react-spring/web'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/app.scss';
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router-dom";
import JavaBurger from './JavaBurger';

function Main() {


    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveSlide(swiper.activeIndex);
    };
    console.log('activeSlide', activeSlide);

    const [transitionDuration, setTransitionDuration] = useState('0.5s');

    useEffect(() => {
        if (activeSlide >= 2 && activeSlide <= 4) {
            // 나타날 때 0.8초
            setTransitionDuration('0.8s');
        } else {
            // 사라질 때 0.5초
            setTransitionDuration('0.3s');
        }
    }, [activeSlide]);

    const leftBoxStyle = {
        opacity: activeSlide >= 2 && activeSlide <= 4 ? 1 : 0,
        transition: `opacity ${transitionDuration} ease-in-out`,
    };


    // 모달 관련
    const [showModal, setShowModal] = useState(false); // 모달 표시 상태

    // 모달 토글 함수
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="App">
            {activeSlide >= 1 && activeSlide <= 5 &&
                <div className="left_box_fixed" style={leftBoxStyle}>
                    SKILLS <br />
                    {activeSlide == 2 && "-Front-"}
                    {activeSlide == 3 && "-Back-"}
                    {activeSlide == 4 && "-Etc-"}
                </div>
            }
            {showModal && <JavaBurger closeModal={toggleModal} />}

            <header>
                <div className="nav_box_left">
                    SooHwan
                </div>
                <ul className="nav_box_right">
                    <li>
                        <a href='https://github.com/SooHwanC' target="_blank" rel="noopener noreferrer">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                        </a>
                    </li>
                    <li>
                        <a href='https://frcp9408.tistory.com/' target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459"><title>티스토리 로고</title><g><path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" /></g></svg>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.notion.so/6151759b15b241b48ab9f172b2b70935?pvs=4' target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M5.948 5.609c0.99 0.807 1.365 0.75 3.234 0.625l17.62-1.057c0.375 0 0.063-0.375-0.063-0.438l-2.927-2.115c-0.557-0.438-1.307-0.932-2.74-0.813l-17.057 1.25c-0.625 0.057-0.75 0.37-0.5 0.62zM7.005 9.719v18.536c0 0.995 0.495 1.37 1.615 1.307l19.365-1.12c1.12-0.063 1.25-0.745 1.25-1.557v-18.411c0-0.813-0.313-1.245-1-1.182l-20.234 1.182c-0.75 0.063-0.995 0.432-0.995 1.24zM26.12 10.708c0.125 0.563 0 1.12-0.563 1.188l-0.932 0.188v13.682c-0.813 0.438-1.557 0.688-2.177 0.688-1 0-1.25-0.313-1.995-1.245l-6.104-9.583v9.271l1.932 0.438c0 0 0 1.12-1.557 1.12l-4.297 0.25c-0.125-0.25 0-0.875 0.438-0.995l1.12-0.313v-12.255l-1.557-0.125c-0.125-0.563 0.188-1.37 1.057-1.432l4.609-0.313 6.354 9.708v-8.589l-1.62-0.188c-0.125-0.682 0.37-1.182 0.995-1.24zM2.583 1.38l17.745-1.307c2.177-0.188 2.74-0.063 4.109 0.932l5.667 3.984c0.932 0.682 1.245 0.87 1.245 1.615v21.839c0 1.37-0.5 2.177-2.24 2.302l-20.615 1.245c-1.302 0.063-1.927-0.125-2.615-0.995l-4.172-5.417c-0.745-0.995-1.057-1.74-1.057-2.609v-19.411c0-1.12 0.5-2.052 1.932-2.177z" />
                        </svg>
                        </a>
                    </li>

                </ul>
            </header>

            <Swiper
                speed={1000}
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={handleSlideChange}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="main_top_box">
                        <video src="/main_video.mp4" autoPlay playsinline muted loop></video>
                        <div className="main_top_title">
                            <h1>최수환</h1>
                            <h1>Full Stack Developer</h1>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="second_block">
                        <div className="second_block_photo">
                            <img src="/profile_pic.jpg" />
                        </div>
                        <div className="second_block_intro">
                            <h1>
                                To Be <br />Full Stack Developer
                            </h1>
                            <p>
                                안녕하세요 풀스택 개발자를 지향하는 최수환입니다. <br />
                                새로운 지식과 기술을 배우는걸 좋아합니다. <br />
                                완벽을 추구하는 성향 덕분에 맡은 일을 끝까지 해냅니다. <br />
                            </p>
                            <ul>
                                <li>
                                    #꼼꼼함
                                </li>
                                <li>
                                    #완벽주의
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide>
                    <div className='skill_block'>
                        <div className='left_box'>
                        </div>
                        <div className='right_box'>
                            {/* <h1>
                                Front
                            </h1> */}
                            <div className='logo_wrapper'>
                                <h2>
                                    Language
                                </h2>
                                <div className='right_box_logo3'>
                                    <div className='logo_box'>
                                        <img src='/html.svg' alt='logo_html' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/css.svg' alt='logo_css' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/javascript.svg' alt='logo_js' class='tilt-animation' />
                                    </div>
                                </div>
                                <h2>
                                    FrameWork
                                </h2>
                                <div className='right_box_logo1'>
                                    <div className='logo_box'>
                                        <img src='/react.svg' alt='logo_react' class='tilt-animation' />
                                    </div>
                                </div>
                                <h2>
                                    Library
                                </h2>
                                <div className='right_box_logo2'>
                                    <div className='logo_box'>
                                        <img src='/redux.svg' alt='logo_redux' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/sass.svg' alt='logo_sass' class='tilt-animation' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide>
                    <div className='skill_block'>
                        <div className='left_box'>
                        </div>
                        <div className='right_box'>
                            {/* <h1>
                                Back
                            </h1> */}
                            <div className='logo_wrapper'>
                                <h2>
                                    Language
                                </h2>
                                <div className='right_box_logo3'>
                                    <div className='logo_box'>
                                        <img src='/javascript.svg' alt='logo_js' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/java.svg' alt='logo_java' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/python.svg' alt='logo_python' class='tilt-animation' />
                                    </div>
                                </div>
                                <h2>
                                    FrameWork
                                </h2>
                                <div className='right_box_logo2'>
                                    <div className='logo_box_large'>
                                        <img src='/springboot.svg' className='large_svg' alt='logo_spb' />
                                    </div>
                                    <div className='logo_box_large'>
                                        <img src='/node1.svg' className='large_svg' alt='logo_node' />
                                    </div>
                                </div>
                                <h2>
                                    DB
                                </h2>
                                <div className='right_box_logo3'>
                                    <div className='logo_box'>
                                        <img src='/oracle.svg' alt='logo_oracle' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/mysql.svg' alt='logo_mysql' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/mongodb.svg' alt='logo_mongodb' class='tilt-animation' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >
                <SwiperSlide>
                    <div className='skill_block'>
                        <div className='left_box'>
                        </div>
                        <div className='right_box'>
                            {/* <h1>
                                Etc
                            </h1> */}
                            <div className='logo_wrapper'>
                                <h2>
                                    Etc
                                </h2>

                                <div className='right_box_logo3'>
                                    <div className='logo_box'>
                                        <img src='/docker.svg' alt='logo_docker' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/firebase.svg' alt='logo_firebase' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/aws.svg' alt='logo_aws' class='tilt-animation' />
                                    </div>
                                    <div className='logo_box'>
                                        <img src='/github.svg' alt='logo_github' class='tilt-animation' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide >



                <SwiperSlide className='work_wrapper'>
                    <div className='work_title'>
                        <div>
                            <h1>Works</h1>
                        </div>
                    </div>
                    <Swiper navigation={true} modules={[Navigation]} className="port_wrapper">
                        <SwiperSlide>
                            <div className='port_box_inner'>
                                <div className='port_box_img'>
                                    <img src='/itty.png' alt='img_itty' />
                                </div>
                                <div className='port_box_description'>
                                    <div>
                                        <h2>ITTY</h2>
                                        <p>
                                            개발자를 위한 IT커뮤니티 ITTY
                                        </p>

                                        <a href='https://github.com/ITTYofficial/ITTY#itty_official' target="_blank" rel="noopener noreferrer">
                                            <span>
                                                <svg className='svg_github' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                                ReadMe
                                            </span>
                                        </a>

                                        <a href='http://itty-kr.site' target="_blank" rel="noopener noreferrer">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                </svg>
                                                웹 페이지 바로가기
                                            </span>
                                        </a>
                                        <ul>
                                            <li>
                                                React
                                            </li>
                                            <li>
                                                Node.js
                                            </li>
                                            <li>
                                                MongoDB
                                            </li>
                                            <li>
                                                FireBase
                                            </li>
                                            <li>
                                                AWS
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a href='https://www.notion.so/ITTY-f5805f363bde4b32ab54562aa3e8c14f?pvs=4' target="_blank" rel="noopener noreferrer">
                                            <div className='detail_btn'>
                                                Detail
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='port_box'>
                                <div className='port_box_inner'>
                                    <div className='port_box_img'>
                                        <img src='/codebridge2.jpg' alt='img_codebridge' />
                                    </div>
                                    <div className='port_box_description'>
                                        <div>
                                            <h2>Code Bridge</h2>
                                            <p>
                                                웹 개발환경과 AI가 포함된 코딩 AI LMS 시스템
                                            </p>

                                            <a href='https://github.com/2023-SMHRD-SW-DataDesign-1/CodeBridge_Front#readme' target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    <svg className='svg_github' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                                    ReadMe
                                                </span>
                                            </a>

                                            <a href='http://codebridge.site' target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                    </svg>
                                                    웹 페이지 바로가기
                                                </span>
                                            </a>
                                            <ul>
                                                <li>
                                                    React
                                                </li>
                                                <li>
                                                    SpringBoot
                                                </li>
                                                <li>
                                                    Flask
                                                </li>
                                                <li>
                                                    MySql
                                                </li>
                                                <li>
                                                    Docker
                                                </li>
                                                <li>
                                                    OpenAI
                                                </li>
                                                <li>
                                                    LangChain
                                                </li>
                                                <li>
                                                    AWS
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <a href='https://www.notion.so/CodeBridge-365c3985ce13457abfda09b8a96a5406?pvs=4' target="_blank" rel="noopener noreferrer">
                                                <div className='detail_btn'>
                                                    Detail
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='port_box'>
                                <div className='port_box_inner'>
                                    <div className='port_box_img'>
                                        <img src='/travelmaker.png' alt='img_travelmaker' />
                                    </div>
                                    <div className='port_box_description'>
                                        <div>
                                            <h2>Travel Maker</h2>
                                            <p>
                                                맞춤형 여행가이드 오픈마켓 플랫폼
                                            </p>
                                            <a href='https://github.com/2023-SMHRD-SW-DataDesign-1/TravelMaker' target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    <svg className='svg_github' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                                    ReadMe
                                                </span>
                                            </a>
                                            <ul>
                                                <li>
                                                    Java
                                                </li>
                                                <li>
                                                    Jsp
                                                </li>
                                                <li>
                                                    Servlet
                                                </li>
                                                <li>
                                                    OracleDB
                                                </li>
                                                <li>
                                                    GoogleMaps
                                                </li>
                                                <li>
                                                    PortOne
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <a href='https://www.notion.so/Travel-Maker-53ef2bbc38e14762b2d8be9c94a52690?pvs=4' target="_blank" rel="noopener noreferrer">
                                                <div className='detail_btn'>
                                                    Detail
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='port_box'>
                                <div className='port_box_inner'>
                                    <div className='port_box_img'>
                                        <img src='/javaburger.png' alt='img_javaburger' />
                                    </div>
                                    <div className='port_box_description'>
                                        <div>
                                            <h2>Java Burger</h2>
                                            <p>
                                                햄버거를 만들어 사람들에게 행복을 전달하는 본격! 햄버거 타이쿤
                                            </p>
                                            <a href='https://github.com/2023-SMHRD-SW-DataDesign-1/DoMyBest' target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    <svg className='svg_github' aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                                    ReadMe
                                                </span>
                                            </a>
                                            <ul>
                                                <li>
                                                    Java
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <a href='https://bevel-amusement-3e9.notion.site/JAVA-BURGER-4fb6023011fe40d29dd356bd2afe73b4?pvs=4' target="_blank" rel="noopener noreferrer">
                                                <div className='detail_btn'>
                                                    Detail
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </SwiperSlide>
            </Swiper >
        </div >
    );
}

export default Main;
