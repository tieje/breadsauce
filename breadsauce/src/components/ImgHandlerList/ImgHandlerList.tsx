import ImgHandler, { ImgHandlerPropsType } from "./ImgHandler"

const ImgHandlerList = ({ props }: { props: ImgHandlerPropsType[] }) => {
    return (
        <ul>
            {props.map((img: ImgHandlerPropsType) => { return (<ImgHandler key={img.id} props={img} />) })}
        </ul>
    )
}
export default ImgHandlerList