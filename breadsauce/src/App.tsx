// Picture imports
import BREADSAUCE_FIRST from '../src/assets/images/breadsauce/breadsauce_first.jpg'
import PRO_PIC from '../src/assets/images/sauce_solo/pro_pic.jpg'
import disco_rabbits from './assets/images/gifs/disco_rabbits.gif'
import WEDDING_BG from './assets/images/wedding-invite-bg2.png'

// Functional Imports
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { animated } from 'react-spring'
import './index.css'
import ParallaxPicture, { ParallaxPicturePropsType } from './components/ParallaxPicture/ParallaxPicture'
// Variable Imports
import { PARALLAX_PICTURES } from '../Variables/ParallaxPictures'

function App() {
  //const POINTS = "0,200 50,25 50,75 100,0"
  //const POINT = "-100,-50 -100,50 100,50 100,-50, 0,-120 -100,-50 0,0 100,-50"
  // Close Envelope
  const ENVELOPE_CLOSED = "-100,-50 -100,50 100,50 100,-50"
  const ENVELOPE_TOP = "-100,-50 100,-50"
  //const FLAP_DOWN = "-100,-50 0,0 100,-50"
  // Open Envelope
  //const ENVELOPE_OPEN = "-100,-50 -100,50 100,50 100,-50 0,-120"
  const ENVELOPE_OPEN_BOTTOM_OPENING = "-100,-50 0,10 100,-50"
  //const [flip, set] = useState(false)
  // Bottom Envelope
  //const [width, height] = useWindowSize()
  const ENVELOPE_OPEN_BOTTOM_PART = '-100,-50 -100,50 100,50 100,-50 0,10'
  const ENVELOPE_OPEN_BOTTOM_FLAP_LEFT = "-100,40 -20,-2"
  const ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT = "100,40 20,-2"
  const ENVELOPE_FLAP_UP = "-100,-50 0,-120 100,-50"
  /*
  const { x } = useSpring({
    reset: true,
    reverse: flip,
    from: { x: 0 },
    x: 1,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })*/
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
          speed={.5}
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
        {/* Pictures */}
        {PARALLAX_PICTURES.map((pic: ParallaxPicturePropsType) => {
          let img_src: string = PRO_PIC;
          switch (pic.img_alt) {
            case 'breadsauce_first':
              img_src = BREADSAUCE_FIRST
          }
          return (
            <ParallaxPicture ImgAlt={img_src} props={pic} />
          )
        })}
        <ParallaxLayer
          className='grid grid-cols-12'
          offset={2.1}
          speed={3}
        >
          <div className='grid col-span-4'></div>
          <img
            className='grid col-span-3'
            src={disco_rabbits}
            alt={'disco_rabbits'}
          />
          <div className='grid col-span-5'></div>
        </ParallaxLayer>
        {/*spacer so that they others don't catch up*/}
        <ParallaxLayer
          className='grid place-content-center'
          sticky={{ start: 1.1, end: 2 }}
        >
        </ParallaxLayer>
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
