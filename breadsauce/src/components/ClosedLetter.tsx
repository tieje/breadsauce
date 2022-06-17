import { useEffect, useState } from "react"
import { animated } from "react-spring"
import HEARTSU from "../assets/images/heart-svgrepo-com.svg"
import { ENVELOPE_CLOSED, ENVELOPE_OPEN_BOTTOM_FLAP_LEFT, ENVELOPE_OPEN_BOTTOM_FLAP_RIGHT, ENVELOPE_OPEN_BOTTOM_OPENING, ENVELOPE_TOP } from "../State/Envelope"

const ClosedLetter = () => {
    //const imgStyleBase = 'xl:ml-[17%] xl:mt-[13%] lg:ml-[17%] lg:mt-[17%] absolute z-10 md:ml-[25%] md:mt-[21%] ml-[57%] mt-[48%] '
    const imgStyleBase = 'z-20 motion-safe:animate-pulse'
    const headerStyleBase = 'fixed h-screen w-screen grid place-content-center bg-[url("./assets/images/white-roses.jpeg")] bg-cover'
    return (
        <header
            className={headerStyleBase}
        >
            <a
                className='relative grid place-content-center'
                href='#info'
            >
                <div
                    className="absolute h-full w-full ml-[42%] mt-[35%] z-10"
                >
                    <img
                        src={HEARTSU}
                        alt='heartsu'
                        className={imgStyleBase}
                        width={75}
                    />
                </div>
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
        </header>
    )
}
export default ClosedLetter