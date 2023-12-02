import React, { useEffect, useState } from 'react';
import './css/app.scss';
import './reset.css';
import { ResponsiveBar } from '@nivo/bar'
import { useSpring, a } from '@react-spring/web'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";


function App() {

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

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

  return (
    <div className="App">
      <div className="left_box_fixed" style={leftBoxStyle}>
        이런걸 할줄 압니다
      </div>
      <header>
        <div className="nav_box_left">
          최수환
        </div>
        <ul className="nav_box_right">
          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459"><title>티스토리 로고</title><g><path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" /></g></svg>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path d="M5.948 5.609c0.99 0.807 1.365 0.75 3.234 0.625l17.62-1.057c0.375 0 0.063-0.375-0.063-0.438l-2.927-2.115c-0.557-0.438-1.307-0.932-2.74-0.813l-17.057 1.25c-0.625 0.057-0.75 0.37-0.5 0.62zM7.005 9.719v18.536c0 0.995 0.495 1.37 1.615 1.307l19.365-1.12c1.12-0.063 1.25-0.745 1.25-1.557v-18.411c0-0.813-0.313-1.245-1-1.182l-20.234 1.182c-0.75 0.063-0.995 0.432-0.995 1.24zM26.12 10.708c0.125 0.563 0 1.12-0.563 1.188l-0.932 0.188v13.682c-0.813 0.438-1.557 0.688-2.177 0.688-1 0-1.25-0.313-1.995-1.245l-6.104-9.583v9.271l1.932 0.438c0 0 0 1.12-1.557 1.12l-4.297 0.25c-0.125-0.25 0-0.875 0.438-0.995l1.12-0.313v-12.255l-1.557-0.125c-0.125-0.563 0.188-1.37 1.057-1.432l4.609-0.313 6.354 9.708v-8.589l-1.62-0.188c-0.125-0.682 0.37-1.182 0.995-1.24zM2.583 1.38l17.745-1.307c2.177-0.188 2.74-0.063 4.109 0.932l5.667 3.984c0.932 0.682 1.245 0.87 1.245 1.615v21.839c0 1.37-0.5 2.177-2.24 2.302l-20.615 1.245c-1.302 0.063-1.927-0.125-2.615-0.995l-4.172-5.417c-0.745-0.995-1.057-1.74-1.057-2.609v-19.411c0-1.12 0.5-2.052 1.932-2.177z" />
            </svg>
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
          <div className="second_block" onClick={() => set(state => !state)}>
            <div>
              License
            </div>
            <div className='second_block_main'>

              <div className="second_block_photo">
                <img src="/profile_pic.jpg" />
              </div>
              <div className="second_block_intro">
                <div>
                  Full Stack Developer
                </div>
                <div>
                  name : 최수환
                </div>
                <div>
                  Date of Birth : 08/22/1994
                </div>
                <div>
                  Keyworlds : 차분함 꼼꼼함 완벽함
                </div>

                <div className='flip_btn'>
                  Click!
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
              <div className='right_box_front'>
                Front
              </div>
              <div className='right_box_logo'>
                <img src='/html.png' alt='logo_html' />
              </div>
            </div>
          </div>
        </SwiperSlide >
        <SwiperSlide>
          <div className='skill_block'>
            <div className='left_box'>

            </div>
            <div className='right_box'>
              오른쪽2
            </div>
          </div>
        </SwiperSlide >
        <SwiperSlide>
          <div className='skill_block'>
            <div className='left_box'>

            </div>
            <div className='right_box'>
              오른쪽3
            </div>
          </div>
        </SwiperSlide >



        <SwiperSlide className='work_wrapper'>
          <div>
            <h1>Work</h1>
          </div>
          <Swiper navigation={true} modules={[Navigation]} className="port_wrapper">
            <SwiperSlide>
              <div className='port_box'>
                <div className='port_box_inner'>
                  <div className='port_box_img'>
                    <img src='/javaburger.png' />
                  </div>
                  <div className='port_box_description'>
                    <div>
                      <h2>Java Burger</h2>
                      <span>
                        햄버거를 만들어 사람들에게 행복을 전달하는 본격! 햄버거 타이쿤
                      </span>
                      <ul>
                        <li>
                          Java
                        </li>
                        <li>
                          Java
                        </li>
                      </ul>
                    </div>
                    <div className='detail_btn'>
                      <Link>
                        Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='port_box'>
                <div className='port_box_inner'>
                  <div className='port_box_img'>
                    <img src='/travelmaker.png' />
                  </div>
                  <div className='port_box_description'>
                    <h2>Travel Maker</h2>
                    <span>
                      맞춤형 여행가이드 오픈마켓 플랫폼
                    </span>
                    <ul>
                      <li>
                        Java
                      </li>
                      <li>
                        Java
                      </li>
                    </ul>
                    <div className='detail_btn'>
                      Detail
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='port_box'>
                <div className='port_box_inner'>
                  <div className='port_box_img'>
                    <img src='/itty.png' />
                  </div>
                  <div className='port_box_description'>
                    <h2>ITTY</h2>
                    <span>
                      개발자를 위한 IT커뮤니티 ITTY
                    </span>
                    <ul>
                      <li>
                        Java
                      </li>
                      <li>
                        Java
                      </li>
                    </ul>
                    <div className='detail_btn'>
                      Detail
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='port_box'>
                <div className='port_box_inner'>
                  <div className='port_box_img'>
                    <img src='/itty.png' />
                  </div>
                  <div className='port_box_description'>
                    <h2>Code Bridge</h2>
                    <span>
                      웹 개발환경과 AI가 포함된 코딩 AI LMS
                    </span>
                    <ul>
                      <li>
                        Java
                      </li>
                      <li>
                        Java
                      </li>
                    </ul>
                    <div className='detail_btn'>
                      Detail
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

export default App;
