// Functional Imports
import { useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated } from 'react-spring'
import './index.css'
import { ENVELOPE_FLAP_UP, ENVELOPE_OPEN_BOTTOM_FLAP_LEFT, ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT, ENVELOPE_OPEN_BOTTOM_PART, ENVELOPE_OPEN_MIDDLE_PART } from './State/Envelope'
import ClosedLetter from './components/ClosedLetter'
import { useWindowWidth } from '@react-hook/window-size'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import ImgHandlerList from './components/ImgHandlerList/ImgHandlerList'

// mobile imports
// villa
import ROSES_BG_MOBILE from '../src/assets/images/roses-desired.jpeg'
// Picture imports
// breadsauce
import BREADSAUCE_FIRST_MOBILE from '../src/assets/images/mobile_images/breadsauce_first_mobile.jpg'
import BREADSAUCE_CHRISTMAS_MOBILE from '../src/assets/images/mobile_images/breadsauce_christmas_mobile.jpg'
import BREADSAUCE_DATE_MOBILE from '../src/assets/images/mobile_images/breadsauce_date_mobile.jpg'
import BREADSAUCE_OLIVES_OILS_MOBILE from '../src/assets/images/mobile_images/breadsauce_olives_oils_mobile.jpg'
import BREADSAUCE_THANKSGIVING_MOBILE from '../src/assets/images/mobile_images/breadsauce_thanksgiving_mobile.jpg'
import BREADSAUCE_SNOW_MOBILE from '../src/assets/images/mobile_images/breadsauce_snow_mobile.jpg'
import BREADSAUCE_WINE_MOBILE from '../src/assets/images/mobile_images/breadsauce_wine_mobile.jpg'
import BREADSAUCE_COOL_MOBILE from '../src/assets/images/mobile_images/breadsauce_cool_mobile.jpg'
import BREADSAUCE_BEACH_MOBILE from '../src/assets/images/mobile_images/breadsauce_beach_mobile.jpg'
// bread
import SOLO_NEON_MOBILE from '../src/assets/images/mobile_images/solo_neon_mobile.jpg'

// desktop imports
// villa
import VILLA from '../src/assets/images/villa.jpeg'
// Picture imports
import WEDDING_BG from './assets/images/wedding-invite-bg2.png'
// gifs
import disco_rabbits from './assets/images/gifs/disco_rabbits.gif'
// breadsauce
import BREADSAUCE_FIRST from '../src/assets/images/breadsauce/breadsauce_first.jpg'
import BREADSAUCE_CHRISTMAS from '../src/assets/images/breadsauce/breadsauce_christmas.jpg'
import BREADSAUCE_DATE from '../src/assets/images/breadsauce/breadsauce_date.jpg'
import BREADSAUCE_OLIVES_OILS from '../src/assets/images/breadsauce/breadsauce_olives_oils.jpg'
import BREADSAUCE_THANKSGIVING from '../src/assets/images/breadsauce/breadsauce_thanksgiving.jpg'
import BREADSAUCE_SNOW from '../src/assets/images/breadsauce/breadsauce_snow.jpg'
import BREADSAUCE_WINE from '../src/assets/images/breadsauce/breadsauce_wine.jpg'
import BREADSAUCE_COOL from '../src/assets/images/breadsauce/breadsauce_cool.jpg'
import BREADSAUCE_BEACH from '../src/assets/images/breadsauce/breadsauce_beach.jpg'
// bread
import SOLO_NEON from '../src/assets/images/bread_solo/solo_neon.jpg'
import SOLO_HIKING from '../src/assets/images/bread_solo/solo_hiking.jpg'
import AdditionalInfo from './components/AdditionalInfo'
import BREAD_STARTER_PACK from './assets/images/bread_starter_pack.png'

function App() {
  const width = useWindowWidth()
  const windowWidthBreakPoint = 900
  const mobileImages = [
    {
      id: 1,
      src: BREADSAUCE_FIRST_MOBILE,
      alt: 'Talking all night for the first time.'
    },
    {
      id: 2,
      src: BREADSAUCE_SNOW_MOBILE,
      alt: 'Rolling in the snow'
    },
    {
      id: 3,
      src: BREADSAUCE_THANKSGIVING_MOBILE,
      alt: 'Thanksgiving day together.'
    },
    {
      id: 4,
      src: BREADSAUCE_WINE_MOBILE,
      alt: 'Spending the day with friends at a vineyard.',
    },
    {
      id: 5,
      src: SOLO_NEON_MOBILE,
      alt: 'Really cool picture of Mayenne.',
    },
    {
      id: 6,
      src: BREADSAUCE_DATE_MOBILE,
      alt: "Valentine's date in New Haven, TJ's fav picture.",
    },
    {
      id: 7,
      src: BREADSAUCE_CHRISTMAS_MOBILE,
      alt: 'Spending Christmas with family.',
    },
    {
      id: 8,
      src: BREADSAUCE_OLIVES_OILS_MOBILE,
      alt: "TJ's Birthday.",
    },
    {
      id: 9,
      src: BREADSAUCE_BEACH_MOBILE,
      alt: "TJ's Mom's Birthday Day at the beach in RI.",
    },
    {
      id: 10,
      src: BREADSAUCE_COOL_MOBILE,
      alt: 'Cool picture of us.',
    },
    {
      id: 11,
      src: BREAD_STARTER_PACK,
      alt: 'bread starter pack'
    },
    {
      id: 12,
      src: "https://i.imgflip.com/6jw9gu.jpg",
      alt: 'wheat, no, bread, yes'
    }
  ]
  return (
    <div
      className='scroll-smooth font-caveat overflow-x-hidden'
    >
      {width < 1000 ? null : <ClosedLetter />}
      <main className='grid place-content-center text-center text-2xl font-bold'>
        {width < windowWidthBreakPoint ?
          <>
            <Parallax
              id='info'
              pages={2}
            >
              {/*Letter Opening Animation*/}
              {/*Villa Background*/}
              <ParallaxLayer
                offset={0}
                speed={.1}
              >
                <LazyLoadImage
                  className='h-screen w-screen'
                  src={ROSES_BG_MOBILE}
                  alt='villa bianca'
                />
              </ParallaxLayer>
              {/*Pieces behind the letter*/}
              <ParallaxLayer
                className='grid place-content-center'
                offset={.25}
                speed={.5}
              //sticky={{ start: .39, end: 1 }}
              >
                <animated.svg
                  //className='border border-black'
                  style={{ margin: 0, width: 500, height: 500 }}
                  viewBox="-150 -150 300 300"
                  strokeWidth="5"
                  fill="white"
                  stroke="rgb(45, 55, 71)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  //strokeDasharray={156}
                  strokeDasharray={10000}
                //strokeDashoffset={x.to(x => (1 - x) * 156)}
                >
                  <polyline points={ENVELOPE_FLAP_UP} />
                  <polygon points={ENVELOPE_OPEN_MIDDLE_PART} />
                </animated.svg>
              </ParallaxLayer>
              {/*Info letter*/}
              <ParallaxLayer
                className='grid place-content-center'
                offset={0}
                speed={1}
              >
                <div
                  className='relative h-[370px] w-[300px] border-4 border-black bg-white'
                >
                  <img
                    className=''
                    src={WEDDING_BG}
                    alt='hm'
                    width='290'
                    height='200'
                  />
                  <article
                    className='absolute top-5 pt-12 px-10 grid grid-cols-1 w-full'
                  >
                    <p
                      className='whitespace-pre-wrap text-left pb-20'
                    >
                      To whom it may concern,
                    </p>
                    <p
                      className='whitespace-pre-wrap text-center'
                    >
                      TJ and Mayenne...
                    </p>
                    <p
                      className='whitespace-pre-wrap text-center'
                    >
                      are getting married!
                    </p>
                    <p
                      className='whitespace-pre-wrap text-center'
                    >
                      5pm Sunday Oct 9, 2022
                    </p>
                    <p
                      className='whitespace-pre-wrap text-center'
                    >
                      312 Roosevelt Dr, Seymour, CT
                    </p>
                  </article>
                </div>
              </ParallaxLayer>
              {/*Opened letter*/}
              <ParallaxLayer
                className='grid place-content-center'
                offset={.25}
                speed={.5}
              >
                <animated.svg
                  //className='border border-black'
                  style={{ margin: 0, width: 500, height: 500 }}
                  viewBox="-150 -150 300 300"
                  strokeWidth="5"
                  fill="#eeeeee"
                  stroke="rgb(45, 55, 71)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  //strokeDasharray={156}
                  strokeDasharray={10000}
                //strokeDashoffset={x.to(x => (1 - x) * 156)}
                >
                  {/*<polygon points={ENVELOPE_OPEN} />
          <polyline points={ENVELOPE_OPEN_BOTTOM_OPENING} />
          <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_LEFT} />
          <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT} />*/}
                  <polygon points={ENVELOPE_OPEN_BOTTOM_PART} />
                  <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_LEFT} />
                  <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT} />
                </animated.svg>
              </ParallaxLayer>
            </Parallax>
            <AdditionalInfo />
            {/* Page < 1 */}
            {/* Pictures Section 1 */}
            {/* Mobile pictures */}
            <ImgHandlerList props={mobileImages} />
            {/*spacer so that the others don't catch up*/}
            {/* Joke Banter Page */}
            {/* Practice */}
            {/*<ParallaxLayer
            {/*Final Slide*/}
            <footer className='grid place-content-center h-screen w-screen'>
              <h1 className='text-8xl font-bold text-pink-300'>Forever</h1>
            </footer>
          </>
          :
          < Parallax
            id='info'
            pages={8}
          >
            {/* Desktop */}
            {/*Letter Opening Animation*/}
            {/*Villa Background*/}
            <ParallaxLayer
              offset={0}
              speed={.1}
            >
              <img
                className='h-screen w-screen'
                src={VILLA}
                alt='villa bianca'
              />
            </ParallaxLayer>
            {/*Pieces behind the letter*/}
            <ParallaxLayer
              className='grid place-content-center'
              offset={.25}
              speed={.5}
            //sticky={{ start: .39, end: 1 }}
            >
              <animated.svg
                //className='border border-black'
                style={{ margin: 0, width: 500, height: 500 }}
                viewBox="-150 -150 300 300"
                strokeWidth="5"
                fill="white"
                stroke="rgb(45, 55, 71)"
                strokeLinecap="round"
                strokeLinejoin="round"
                //strokeDasharray={156}
                strokeDasharray={10000}
              //strokeDashoffset={x.to(x => (1 - x) * 156)}
              >
                <polyline points={ENVELOPE_FLAP_UP} />
                <polygon points={ENVELOPE_OPEN_MIDDLE_PART} />
              </animated.svg>
            </ParallaxLayer>
            {/*Info letter*/}
            <ParallaxLayer
              className='grid place-content-center'
              offset={0}
              speed={1}
            >
              <div
                className='relative h-[370px] w-[300px] border-4 border-black bg-white'
              >
                <img
                  className=''
                  src={WEDDING_BG}
                  alt='hm'
                  width='290'
                  height='200'
                />
                <article
                  className='absolute top-5 pt-12 px-10 grid grid-cols-1 w-full'
                >
                  <p
                    className='whitespace-pre-wrap text-left pb-20'
                  >
                    To whom it may concern,
                  </p>
                  <p
                    className='whitespace-pre-wrap text-center'
                  >
                    TJ and Mayenne...
                  </p>
                  <p
                    className='whitespace-pre-wrap text-center'
                  >
                    are getting married!
                  </p>
                  <p
                    className='whitespace-pre-wrap text-center'
                  >
                    5pm Sunday Oct 9, 2022
                  </p>
                  <p
                    className='whitespace-pre-wrap text-center'
                  >
                    312 Roosevelt Dr, Seymour, CT
                  </p>
                </article>
              </div>
            </ParallaxLayer>
            {/*Opened letter*/}
            <ParallaxLayer
              className='grid place-content-center'
              offset={.25}
              speed={.5}
            >
              <animated.svg
                //className='border border-black'
                style={{ margin: 0, width: 500, height: 500 }}
                viewBox="-150 -150 300 300"
                strokeWidth="5"
                fill="#eeeeee"
                stroke="rgb(45, 55, 71)"
                strokeLinecap="round"
                strokeLinejoin="round"
                //strokeDasharray={156}
                strokeDasharray={10000}
              //strokeDashoffset={x.to(x => (1 - x) * 156)}
              >
                {/*<polygon points={ENVELOPE_OPEN} />
            <polyline points={ENVELOPE_OPEN_BOTTOM_OPENING} />
            <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_LEFT} />
            <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT} />*/}
                <polygon points={ENVELOPE_OPEN_BOTTOM_PART} />
                <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_LEFT} />
                <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT} />
              </animated.svg>
            </ParallaxLayer>
            {/* Page < 1 */}
            {/* Pictures Section 1 */}
            <ParallaxLayer offset={1} speed={.2}><img src={BREADSAUCE_FIRST} className='w-[20%] ml-[5%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={.1}><img src={BREADSAUCE_SNOW} className='w-[25%] ml-[30%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={1.2} speed={.2}><img src={BREADSAUCE_THANKSGIVING} className='w-[25%] ml-[70%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={1.1} speed={2.1}><img src={disco_rabbits} className='w-[25%] ml-[50%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={1.7} speed={1}><img src={BREADSAUCE_WINE} className='w-[25%] ml-[10%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={1.7} speed={.4}><img src={SOLO_NEON} className='w-[15%] ml-[55%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={1.9} speed={.3}><img src={BREADSAUCE_BEACH} className='w-[15%] ml-[75%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={1.9} speed={.1}><img src={BREADSAUCE_DATE} className='w-[25%] ml-[35%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={2} speed={.8}><img src={SOLO_HIKING} className='w-[10%] ml-[5%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={2} speed={.4}><img src={BREADSAUCE_CHRISTMAS} className='w-[15%] ml-[17%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={1.95} speed={.2}><img src={BREADSAUCE_COOL} className='w-[15%] ml-[5%] rounded-lg' /></ParallaxLayer>
            <ParallaxLayer offset={2} speed={.25}><img src={BREADSAUCE_OLIVES_OILS} className='w-[10%] ml-[63%] rounded-lg' /></ParallaxLayer>
            {/* Page > 3*/}
            {/*spacer so that the others don't catch up*/}
            <ParallaxLayer
              className='grid place-content-center'
              sticky={{ start: 2.6, end: 2.7 }}
            //style={{ backgroundImage: `url(${ROSE_REPEAT})`, backgroundRepeat: 'repeat' }}
            >
              <AdditionalInfo />
            </ParallaxLayer>
            {/* Page > 4 */}
            {/* Poem 1 */}
            {/* Picture Section 2 - Composable CSS animation with anim xyz */}
            {/* Joke Banter Page */}
            {/* Practice */}
            {/*<ParallaxLayer
          className='grid place-content-center'
          offset={2.1}
          speed={1}
        >
          <h1 className='text-3xl font-bold'>
            I want love.
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          className='grid place-content-center'
          offset={2.14}
          speed={.5}
        //sticky={{ start: .1 , end: 1 }}
        >
          <h1 className='text-3xl font-bold'>
            I want the honeymoon-type of love,
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          className='grid place-content-center'
          offset={2.18}
          speed={.3}
        //sticky={{ start: 1, end: 1.5 }}
        >
          <h1 className='text-3xl font-bold'>
            where butterflies still swarm on my stomach
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          className='grid place-content-center'
          offset={2.22}
          speed={.1}
        >
          <h1 className='text-3xl font-bold'>
            and a hint of hesitation stumbles from your lips
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          className='grid place-content-center'
          //offset={.6}
          //speed={.05}
          sticky={{ start: 3, end: 3.5 }}
        >
          <h1 className='text-3xl font-bold'>
            on mine.
          </h1>
      </ParallaxLayer>*/}
            {/*Final Slide*/}
            <ParallaxLayer
              className='grid place-content-center'
              //offset={19}
              //speed={.05}
              sticky={{ start: 3.7, end: 5 }}
            >
              <h1
                className='text-8xl font-bold text-pink-500'
              >
                Forever
              </h1>
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 6, end: 6 }}
              className='grid place-content-center'
            >
              <LazyLoadImage
                src={BREAD_STARTER_PACK}
                alt='bread starter pack'
              />
            </ParallaxLayer>
            <ParallaxLayer
              sticky={{ start: 7, end: 8 }}
              className='grid place-content-center'
            >
              <LazyLoadImage
                className='border border-black'
                src="https://i.imgflip.com/6jw9gu.jpg"
                title="made at imgflip.com"
                alt='wheat_no_bread'
              />
            </ParallaxLayer>
          </Parallax>
        }
      </main >
    </div >
  )
}

export default App
