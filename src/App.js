import React, { useEffect, useState } from 'react';
import './App.css';
import './reset.css';

function App() {

  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isScrolling, setIsScrolling] = useState(false);

  const smoothScrollTo = (endY, duration) => {
    setIsScrolling(true); // 스크롤 시작 전에 상태 업데이트
    const startY = window.scrollY;
    const change = endY - startY;
    const startTime = performance.now();

    const animateScroll = currentTime => {
      const elapsedTime = currentTime - startTime;
      const nextY = easeInOut(elapsedTime, startY, change, duration);

      window.scrollTo(0, nextY);

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, endY);
        setIsScrolling(false); // 스크롤 완료 후 상태 업데이트
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOut = (time, start, change, duration) => {
    time /= duration / 2;
    if (time < 1) return change / 2 * time * time + start;
    time--;
    return -change / 2 * (time * (time - 2) - 1) + start;
  };

  const handleScroll = () => {
    if (isScrolling) return;
    
    const currentScrollY = window.scrollY;
    const fullHeight = window.innerHeight;
    const direction = currentScrollY > lastScrollY ? 'down' : 'up';
    setLastScrollY(currentScrollY);


    let newScrollTop;

    if (direction === 'down') {
      newScrollTop = Math.ceil(currentScrollY / fullHeight) * fullHeight;
    } else {
      newScrollTop = Math.floor(currentScrollY / fullHeight) * fullHeight;
    }

    if (newScrollTop !== currentScrollY) {
      smoothScrollTo(newScrollTop, 500);
    }
  };



  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isScrolling]);

  return (
    <div className="App">
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
      <div className="main_top_box">
        <video src="/main_video.mp4" autoPlay playsinline muted loop></video>
        <div className="main_top_title">
          <h1>최수환</h1>
          <h1>Full Stack Developer</h1>
        </div>
      </div>
      <div className="second_block">
        <div className="second_block_photo">
          <img src="/profile_pic.jpg" />
        </div>
        <div className="second_block_intro">
          <h1>Full Stack Developer</h1>
          <p>성격이 차분하고 꼼꼼합니다.</p>
          <p>맡은 일이나 기획한 프로젝트를 제가 정한 기준에 도달하기 전까지 책임감을 가지고</p>
          <p>쉬지 않고 막히는 부분이 있다면 끊임없는 자기계발을 하며 목표 달성을 위해 노력합니다</p>
        </div>
      </div>
      <div className="second_block">
        <div className="second_block_photo">
          <img src="/profile_pic.jpg" />
        </div>
        <div className="second_block_intro">
          <h1>Full Stack Developer</h1>
          <p>성격이 차분하고 꼼꼼합니다.</p>
          <p>맡은 일이나 기획한 프로젝트를 제가 정한 기준에 도달하기 전까지 책임감을 가지고</p>
          <p>쉬지 않고 막히는 부분이 있다면 끊임없는 자기계발을 하며 목표 달성을 위해 노력합니다</p>
        </div>
      </div>
    </div>
  );
}

export default App;
