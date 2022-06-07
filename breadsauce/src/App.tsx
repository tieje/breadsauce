import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.css'
function App() {
  return (
    <header className='grid place-content-center border border-black text-center max-h-screen'>
      <Parallax pages={4}>
        <ParallaxLayer
          className='grid place-content-center'
          offset={0}
          speed={1}
        >
          <h1 className='text-3xl font-bold'>
            I want love.
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          className='grid place-content-center'
          offset={.04}
          speed={.5}
        //sticky={{ start: .1 , end: 1 }}
        >
          <h1 className='text-3xl font-bold'>
            I want the honeymoon-type of love,
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          className='grid place-content-center'
          offset={.08}
          speed={.3}
        //sticky={{ start: 1, end: 1.5 }}
        >
          <h1 className='text-3xl font-bold'>
            where butterflies still swarm on my stomach
          </h1>
        </ParallaxLayer>
        <ParallaxLayer
          className='grid place-content-center'
          offset={.12}
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
          sticky={{ start: 1, end: 1.5 }}
        >
          <h1 className='text-3xl font-bold'>
            on mine.
          </h1>
        </ParallaxLayer>
      </Parallax>
    </header >
  )
}

export default App
