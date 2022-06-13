import { LazyLoadImage } from "react-lazy-load-image-component"

type ImgHandlerPropsType = {
    id: number
    src: string
    alt: string
}
const ImgHandler = ({ props }: { props: ImgHandlerPropsType }) => {
    return (
        <li>
            <LazyLoadImage
                src={props.src}
                alt={props.alt}
            />
            <p className="whitespace-pre-wrap px-5 py-2">
                {props.alt}
            </p>
        </li>
    )
}
export type { ImgHandlerPropsType }
export default ImgHandler
