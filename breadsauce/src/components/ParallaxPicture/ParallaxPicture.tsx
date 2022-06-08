import { ParallaxLayer } from "@react-spring/parallax"
import { ImgAlts } from '../../types/ImgAlts'

type ParallaxPicturePropsType = {
    img_alt: ImgAlts
    offset: number
    speed: number
    col_start: string
    col_span: string
    rightSide?: boolean
}
const ParallaxPicture = ({ ImgAlt, props }: { ImgAlt: string, props: ParallaxPicturePropsType }) => {
    let mainDivStyle = 'grid grid-cols-12 w-screen gap-4 '
    const firstDivStyle = 'grid col-span-' + props.col_start
    const imgStyle = 'rounded-lg grid col-span-' + props.col_span
    if (props.rightSide) {
        mainDivStyle = mainDivStyle + 'ml-[25%]'
    }
    //const finalDivStyle = 'grid cols-'
    return (
        <ParallaxLayer
            offset={props.offset}
            speed={props.speed}
        >
            <div
                className={mainDivStyle}
            >
                <div className={firstDivStyle}></div>
                <img
                    className={imgStyle}
                    src={ImgAlt}
                    alt={props.img_alt}
                />
            </div>
        </ParallaxLayer >
    )
}
export type {
    ParallaxPicturePropsType,
}
export default ParallaxPicture