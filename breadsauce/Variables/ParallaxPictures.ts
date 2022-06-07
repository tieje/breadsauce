import { ParallaxPicturePropsType } from '../src/components/ParallaxPicture/ParallaxPicture'
import BREADSAUCE_FIRST from '../src/assets/images/breadsauce/breadsauce_first.jpg'

const PARALLAX_PICTURES: ParallaxPicturePropsType[] = [
    {
        offset: 2,
        speed: .1,
        col_start: 3,
        col_span: 2,
        img_alt: 'breadsauce_first',
        img_src: BREADSAUCE_FIRST,
    },
]
export {
    PARALLAX_PICTURES
}