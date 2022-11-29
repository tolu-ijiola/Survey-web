import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../asset/logo.png'
import review from '../asset/review.png'
import stepone from '../asset/stepone.png'
import steptwo from '../asset/steptwo.png'
import stepthree from '../asset/stepthree.png'
import phone from '../asset/phone-display.png'
import Slider from "react-slick";
import { RatingStar } from "rating-star";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import {useClickAway} from 'react-use';
import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Dropdown from '../component/dropdown'

const Home = () => {

  const settings = {
    infinite: true,
    className: 'small-div',
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
  };

  const workScroll = () => {
    setshow(false)
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  }

  const faqScroll = () => {
    setshow(false)
    let pageHeight = window.innerHeight;
    window.scrollBy(0, (pageHeight * 2.7));
  }

  useEffect(() => {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, [])

    useEffect(() => {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 50);
    }, [])

    const [show, setshow] = useState(false)

    const toggleShow = () => {
      setshow(!show)
    }

    const ref = useRef(null);
  useClickAway(ref, () => {
    toggleShow()
  });

  return (
    <div className='home'>
      {show && 
      <Slide top when={show}>
      <Dropdown refi={ref} work={workScroll} faq={faqScroll} toggleShow={toggleShow}/>
      </Slide>}
      <Zoom>
      <section className='showcase'>
        <div className='showcase-text'>
          <header>
            <Link to={"/"} className="homepage">
              <img src={logo} alt='logo' />
              <h5>MyCash Surveys</h5>
            </Link>
            <i class="fa-solid fa-bars" onClick={toggleShow}></i>
            <div className='nav'>
              <Link to={"/"} onClick={workScroll}>How it works</Link>
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/"} onClick={faqScroll}>Faq</Link>
            </div>
          </header>
          <div className='showcase-text-explaination'>
            <h1>Get Rewards <span>💰</span></h1>
            <h1><span>👨‍💻</span>From <span>🏹</span></h1>
            <h1>Taking<span className='colored'> Surveys</span></h1>
            <br />
            <p>Share your opinions and get paid. It's free, it's easy what are you waiting for?</p>
            <div className='app-store-buttons'>
              <button>
                <i class="fa-brands fa-google-play"></i>
                <div>
                  <span className='smaller'>Get it on</span>
                  <h4>Google Play</h4>
                </div>
              </button>
              <button className='apple-button'>
                <i class="fa-brands fa-apple"></i>
                <div>
                  <span className='smaller'>Download on</span>
                  <h4>App Store</h4>
                </div>
              </button>
            </div>
            <div className='review'>
              <img src={review} alt="review" />
              <p><i class="fa-solid fa-star"></i> 4.5 {"(<"}1k reviews{")"}</p>
            </div>
          </div>
        </div>
        <div className='showcase-img'>
          <header>
            <a>Download now</a>
          </header>
          <img src={phone} alt="mycash-survey-phone display" />
        </div>
      </section>
      </Zoom>
      <Fade bottom>
      <section className='get-started'>
        <h1>How to get <span className='yellow'>started?</span></h1>
        <p>Earning money on MyCash Surveys has never been so easy</p>
        <div className='get-started-steps'>
        <Zoom left duration={1000}>
          <div>
            <img src={stepone} />
          </div>
        </Zoom>
        <Zoom right duration={2000}>
          <div>
            <img src={steptwo} />
          </div>
        </Zoom>
        </div>
        <Zoom>
        <div>
          <img src={stepthree} />
        </div>
        </Zoom>
        
      </section>
      </Fade>
      <Zoom bottom>
      <div className='banner-cut-out'>
        <h2>Get up to $5 when you create an account?</h2>
        <Jump>
        <button>Start Earning!</button></Jump>
      </div>
      </Zoom>
      <Bounce duration={2000}>
      <section className='faq'>
        <h1 className='yellow'>Frequently <span className='colored'>Asked</span> Questions?</h1>
        <h5>Here are some list of questions we get asked alot...</h5>

        <div className='faq-questions'>
          <button class="accordion">How can i make money on MyCash Surveys?</button>
          <div class="panel">
            <p>You can make money from MyCash Surveys by taking surveys, completeing offerwalls, entering sweepstake, referrals and a whole other ways</p>
          </div>

          <button class="accordion">How much can you earn from MyCash Surveys?</button>
          <div class="panel">
            <p>It is possible to earn about $100 per month. Check out the leaderboard to know most active users monthly</p>
          </div>

          <button class="accordion">How long does your cash out take?</button>
          <div class="panel">
            <p>Your cashout would be processed within 1-3 days. You can contact support if you need additional help or have enquires</p>
          </div>
          <button class="accordion">I was not rewarded after completing a survey? What do i do</button>
          <div class="panel">
            <p>Contact us now <a className='colored' href='mailto:help@mycashsurveys.com'>here</a></p>
          </div>
          

        </div>
      </section>
      </Bounce>
      <Bounce>
      <section className='review'>
        <h1>What our users have to say about us?</h1>


        <Slider {...settings}>
          <div className='review-card'>
            <h4>Andrew</h4>
            <RatingStar
              size={16}
              maxScore={5}
              rating={5}
            />
            <h4 className='light'>Cool app</h4>
            <p>I think MyCash Surveys is a great way to make some extra money on the side. It takes me about 10 minutes a day to complete their surveys and I get paid in cash.</p>
          </div>
          <div className='review-card'>
            <h4>Catherine</h4>
            <RatingStar
              size={16}
              maxScore={5}
              rating={4}
            />
            <h4 className='light'>Good site</h4>
            <p>I have been taking surveys from MyCashSurveys for a week and I am really happy that I found this site. They offer a ton of surveys and you can really make some money.</p>
          </div>
          <div className='review-card'>
            <h4>John</h4>
            <RatingStar
              size={16}
              maxScore={5}
              rating={5}
            />
            <h4 className='light'>Worth my time</h4>
            <p>I'm not a big fan of surveys and to be honest I don't really have time for them, but i use MyCash surveys as a distraction and it also pays the little bills</p>
          </div>
          <div className='review-card'>
            <h4>Emma snow</h4>
            <RatingStar
              size={16}
              maxScore={5}
              rating={4}
            />
            <h4 className='light'>I really love MyCash Surveys</h4>
            <p>I am a stay-at-home mom and it has been really helpful to have an extra income.</p>
          </div>
        </Slider>
      </section>
      </Bounce>
      <Zoom>
      <footer>
      <Link to={"/"} className="homepage">
              <img src={logo} alt='logo' />
              <h5>MyCash Surveys</h5>
            </Link>
            <div>
            <Link to={"/terms"}>Terms and condition</Link>
            <Link to={"/privacy"}>Privacy policy</Link>
            <a href='blog.mycashsurveys.com'>Blog</a>
            <Link to={"/contact"}>Contact</Link>
            </div>
            <div>
            <div className='app-store-buttons'>
              <button>
                <i class="fa-brands fa-google-play"></i>
                <div>
                  <span className='smaller'>Get it on</span>
                  <h4>Google Play</h4>
                </div>
              </button>
              <button className='apple-button'>
                <i class="fa-brands fa-apple"></i>
                <div>
                  <span className='smaller'>Download on</span>
                  <h4>App Store</h4>
                </div>
              </button>
            </div>
            <br/>
            <p>© 2022 MyCash Surveys. All rights reserved.</p>
            </div>
            
      </footer>
      </Zoom>
    </div>
  )
}

export default Home