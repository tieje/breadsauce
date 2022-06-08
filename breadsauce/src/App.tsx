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

// Functional Imports
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated } from 'react-spring'
import './index.css'
// Variable Imports

function App() {
  // Close Envelope
  const ENVELOPE_CLOSED = "-100,-50 -100,50 100,50 100,-50"
  const ENVELOPE_TOP = "-100,-50 100,-50"
  //const FLAP_DOWN = "-100,-50 0,0 100,-50"
  // Open Envelope
  //const ENVELOPE_OPEN = "-100,-50 -100,50 100,50 100,-50 0,-120"
  const ENVELOPE_OPEN_BOTTOM_OPENING = "-100,-50 0,10 100,-50"
  // Bottom Envelope
  const ENVELOPE_OPEN_BOTTOM_PART = '-100,-50 -100,50 100,50 100,-50 0,10'
  const ENVELOPE_OPEN_BOTTOM_FLAP_LEFT = "-100,40 -20,-2"
  const ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT = "100,40 20,-2"
  const ENVELOPE_FLAP_UP = "-100,-50 0,-120 100,-50"

  return (
    <main className='grid place-content-center border border-black text-center font-caveat text-2xl font-bold'>
      <Parallax
        pages={20}
      >
        {/*Letter Opening*/}
        <ParallaxLayer
          className='grid place-content-center'
          //offset={.2}
          //speed={.5}
          sticky={{ start: 0, end: .01 }}
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
            <polygon points={ENVELOPE_CLOSED} />
            <polyline points={ENVELOPE_OPEN_BOTTOM_OPENING} />
            <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_LEFT} />
            <polyline points={ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT} />
            <polyline points={ENVELOPE_TOP} />
          </animated.svg>
        </ParallaxLayer>
        <ParallaxLayer
          className='grid place-content-center'
          offset={.75}
          speed={0}
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
          </animated.svg>
        </ParallaxLayer>
        <ParallaxLayer
          className='grid place-content-center'
          offset={.8}
          speed={.6}
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
        <ParallaxLayer
          className='grid place-content-center'
          //offset={.2}
          //speed={.5}
          sticky={{ start: .75, end: .75 }}
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
        <ParallaxLayer offset={2} speed={.2}><img src={BREADSAUCE_FIRST} className='w-[20%] ml-[5%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={2.1} speed={.1}><img src={BREADSAUCE_SNOW} className='w-[25%] ml-[30%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={.2}><img src={BREADSAUCE_THANKSGIVING} className='w-[25%] ml-[70%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={2.1} speed={2.1}><img src={disco_rabbits} className='w-[25%] ml-[50%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={1}><img src={BREADSAUCE_WINE} className='w-[25%] ml-[10%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={2.7} speed={.4}><img src={SOLO_NEON} className='w-[15%] ml-[55%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={.3}><img src={BREADSAUCE_WEIRD} className='w-[15%] ml-[75%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={.1}><img src={BREADSAUCE_DATE} className='w-[25%] ml-[35%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={3} speed={.8}><img src={SOLO_HIKING} className='w-[10%] ml-[5%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={3} speed={.4}><img src={BREADSAUCE_CHRISTMAS} className='w-[15%] ml-[17%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={2.95} speed={.2}><img src={BREADSAUCE_OLIVES_OILS} className='w-[15%] ml-[5%] rounded-lg' /></ParallaxLayer>
        <ParallaxLayer offset={3} speed={.25}><img src={PRO_PIC} className='w-[10%] ml-[63%] rounded-lg' /></ParallaxLayer>
        {/* Page > 3*/}
        {/*spacer so that the others don't catch up*/}
        <ParallaxLayer
          className='grid place-content-center'
          sticky={{ start: 3.5, end: 4 }}
        >
          <h1>Work in Progress</h1>
          <h1>Formal attire, but feel free to wear whatever you think makes you look your best.</h1>
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
          sticky={{ start: 19, end: 20 }}
        >
          <h1 className='text-8xl font-bold text-pink-300'>
            Forever
          </h1>
        </ParallaxLayer>
      </Parallax>
    </main>
  )
}

export default App
