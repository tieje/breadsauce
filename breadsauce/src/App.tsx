// Picture imports
import WEDDING_BG from './assets/images/wedding-invite-bg2.png'
// sauce solo
import PRO_PIC from '../src/assets/images/sauce_solo/pro_pic.jpg'
// gifs
import disco_rabbits from './assets/images/gifs/disco_rabbits.gif'
import umaru from './assets/images/gifs/umaru.gif'
// breadsauce
import BREADSAUCE_FIRST from '../src/assets/images/breadsauce/breadsauce_first.jpg'
import BREADSAUCE_CHRISTMAS from '../src/assets/images/breadsauce/breadsauce_christmas.jpg'
import BREADSAUCE_DATE from '../src/assets/images/breadsauce/breadsauce_date.jpg'
import BREADSAUCE_NORMAL from '../src/assets/images/breadsauce/breadsauce_normal.jpg'
import BREADSAUCE_OLIVES_OILS from '../src/assets/images/breadsauce/breadsauce_olives_oils.jpg'
import BREADSAUCE_THANKSGIVING from '../src/assets/images/breadsauce/breadsauce_thanksgiving.jpg'
import BREADSAUCE_SNOW from '../src/assets/images/breadsauce/breadsauce_snow.jpg'
import BREADSAUCE_WEIRD from '../src/assets/images/breadsauce/breadsauce_weird.jpg'
import BREADSAUCE_WINE from '../src/assets/images/breadsauce/breadsauce_wine.jpg'
// bread
import SOLO_NEON from '../src/assets/images/bread_solo/solo_neon.jpg'
import SOLO_HIKING from '../src/assets/images/bread_solo/solo_hiking.jpg'
// villa
import VILLA from '../src/assets/images/villa.jpeg'
// Functional Imports
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated } from 'react-spring'
import './index.css'
import { ENVELOPE_FLAP_UP, ENVELOPE_OPEN_BOTTOM_FLAP_LEFT, ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT, ENVELOPE_OPEN_BOTTOM_PART, ENVELOPE_OPEN_MIDDLE_PART } from './State/Envelope'
import ClosedLetter from './ClosedLetter'
import { useWindowWidth } from '@react-hook/window-size'
import ROSE_REPEAT from './assets/images/white-rose-repeat.jpeg'
// Variable Imports

function App() {
  const width = useWindowWidth()
  const windowWidthBreakPoint = 900
  return (
    <div
      className='scroll-smooth font-caveat bg-repeat overflow-x-hidden'
      style={{ backgroundImage: ROSE_REPEAT }}
    >
      <ClosedLetter />
      <main className='grid place-content-center text-center text-2xl font-bold'>
        <Parallax
          id='info'
          pages={width < windowWidthBreakPoint ? 17 : 5}
        >
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
          {width < windowWidthBreakPoint ?
            <>
              <ParallaxLayer
                //offset={1} speed={1}
                sticky={{ start: 1, end: 2 }}
              ><img src={BREADSAUCE_FIRST} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={2} speed={1}
                sticky={{ start: 2, end: 3 }}
              ><img src={BREADSAUCE_SNOW} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={3} speed={1}
                sticky={{ start: 3, end: 4 }}
              ><img src={BREADSAUCE_THANKSGIVING} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={4} speed={1}
                sticky={{ start: 4, end: 5 }}
              ><img src={disco_rabbits} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={5} speed={1}
                sticky={{ start: 5, end: 6 }}
              ><img src={BREADSAUCE_WINE} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={6} speed={1}
                sticky={{ start: 6, end: 7 }}
              ><img src={SOLO_NEON} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={7} speed={1}
                sticky={{ start: 7, end: 8 }}
              ><img src={BREADSAUCE_WEIRD} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={8} speed={1}
                sticky={{ start: 8, end: 9 }}
              ><img src={BREADSAUCE_DATE} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={9} speed={1}
                sticky={{ start: 9, end: 10 }}
              ><img src={SOLO_HIKING} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={10} speed={1}
                sticky={{ start: 10, end: 11 }}
              ><img src={BREADSAUCE_CHRISTMAS} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={11} speed={1}
                sticky={{ start: 11, end: 12 }}
              ><img src={BREADSAUCE_OLIVES_OILS} className='rounded-lg' /></ParallaxLayer>
              <ParallaxLayer
                //offset={12} speed={1}
                sticky={{ start: 12, end: 13 }}
              ><img src={PRO_PIC} className='rounded-lg' /></ParallaxLayer>
            </>
            :
            <>
              <ParallaxLayer offset={1} speed={.2}><img src={BREADSAUCE_FIRST} className='w-[20%] ml-[5%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={1.1} speed={.1}><img src={BREADSAUCE_SNOW} className='w-[25%] ml-[30%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={1.2} speed={.2}><img src={BREADSAUCE_THANKSGIVING} className='w-[25%] ml-[70%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={1.1} speed={2.1}><img src={disco_rabbits} className='w-[25%] ml-[50%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={1.7} speed={1}><img src={BREADSAUCE_WINE} className='w-[25%] ml-[10%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={1.7} speed={.4}><img src={SOLO_NEON} className='w-[15%] ml-[55%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={1.9} speed={.3}><img src={BREADSAUCE_WEIRD} className='w-[15%] ml-[75%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={1.9} speed={.1}><img src={BREADSAUCE_DATE} className='w-[25%] ml-[35%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={2} speed={.8}><img src={SOLO_HIKING} className='w-[10%] ml-[5%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={2} speed={.4}><img src={BREADSAUCE_CHRISTMAS} className='w-[15%] ml-[17%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={1.95} speed={.2}><img src={BREADSAUCE_OLIVES_OILS} className='w-[15%] ml-[5%] rounded-lg' /></ParallaxLayer>
              <ParallaxLayer offset={2} speed={.25}><img src={PRO_PIC} className='w-[10%] ml-[63%] rounded-lg' /></ParallaxLayer>
            </>
          }
          {/* Page > 3*/}
          {/*spacer so that the others don't catch up*/}
          <ParallaxLayer
            className='grid place-content-center'
            sticky={width < windowWidthBreakPoint ? { start: 14, end: 15 } : { start: 2.2, end: 2.7 }}
          >
            <h1>Work in Progress</h1>
            <h1 className='px-3'>Formal attire, but feel free to wear whatever you think makes you look your best.</h1>
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
            sticky={width < windowWidthBreakPoint ? { start: 16, end: 17 } : { start: 4, end: 5 }}
          >
            <h1 className='text-8xl font-bold text-pink-300'>
              Forever
            </h1>
          </ParallaxLayer>
        </Parallax>
      </main>
    </div >
  )
}

export default App
