import { ParallaxLayer } from "@react-spring/parallax"
import { ImgAlts } from '../../types/ImgAlts'

type ParallaxPicturePropsType = {
    offset: number
    speed: number
    col_start: number
    col_span: number
    img_alt: ImgAlts
}
const ParallaxPicture = ({ ImgAlt, props }: { ImgAlt: string, props: ParallaxPicturePropsType }) => {
    return (
        <ParallaxLayer
            className='grid grid-cols-12'
            offset={props.offset}
            speed={props.speed}
        >
            <div className={`grid col-span-${props.col_start}`}></div>
            <img
                className={`grid col-span-${props.col_span}`}
                src={ImgAlt}
                alt={props.img_alt}
            />
            <div className={`grid col-span-${12 - props.col_start - props.col_span}`}></div>
        </ParallaxLayer>
    )
}
export type {
    ParallaxPicturePropsType,
}
export default ParallaxPicture