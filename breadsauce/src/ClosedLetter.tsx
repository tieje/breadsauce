import { useState } from "react"
import { animated } from "react-spring"
import HEARTSU from "./assets/images/heart-svgrepo-com.svg"
import { ENVELOPE_CLOSED, ENVELOPE_OPEN_BOTTOM_FLAP_LEFT, ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT, ENVELOPE_OPEN_BOTTOM_OPENING, ENVELOPE_TOP } from "./State/Envelope"

const ClosedLetter = () => {
    const imgStyleBase = 'absolute z-10 lg:ml-[12%] lg:mt-[10%] md:ml-[25%] md:mt-[21%] ml-[57%] mt-[48%] '
    const noBeat = imgStyleBase + 'motion-safe:animate-pulse'
    const Beat = imgStyleBase + 'motion-safe:animate-ping'
    const [beating, setBeating] = useState(false)
    return (
        <header
            className='relative h-screen w-screen border border-black grid place-content-center bg-[url("./assets/images/white-roses.jpeg")] bg-cover'
        >
            <a
                href='#info'
                onMouseOver={() => setBeating(true)}
                onMouseLeave={() => setBeating(false)}
            >
                <img
                    src={HEARTSU}
                    alt='heartsu'
                    className={beating ? Beat : noBeat}
                    width={75}
                />
                <animated.svg
                    className='z-0'
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
            </a>
            <a
                className='absolute text-4xl z-0 lg:ml-[46.5%] lg:mt-[33%] md:ml-[43%] md:mt-[90%] ml-[35%] mt-[140%] hover:underline underline-offset-8 motion-safe:animate-bounce'
                onMouseOver={() => setBeating(true)}
                href='#info'
            >
                Click me
            </a>
        </header>
    )
}
export default ClosedLetter