import { LazyLoadImage } from 'react-lazy-load-image-component'
import PAYPAL_QR from '../assets/images/QR_code.png'
const AdditionalInfo = () => {
    return (
        <div
            className='grid place-content-center h-screen w-screen'
        >
            <h1>Work in Progress</h1>
            <h1 className='px-3'>Formal attire, but feel free to wear whatever you think makes you look your best.</h1>
            <h1 className='px-3'>While there is no wedding registry, we would appreciate cash. </h1>
            <a href='https://www.paypal.com/donate/?business=FMS4B29339JES&no_recurring=1&item_name=A+donation+for+the+wedding%2C+for+the+honeymoon%2C+and+for+the+rest+of+our+lives.+Thank+you+very+much+donating.+%3A%29&currency_code=USD'
                className='border border-black rounded-full hover:bg-pink-200 m-5 px-3'
            >
                Donate With Paypal
            </a>
            <div className='w-full grid place-content-center'>
                <LazyLoadImage
                    className='px-5 mb-3 w-screen md:w-52 grid place-content-center'
                    src={PAYPAL_QR}
                    alt='qr code for paypal'
                />
            </div>
            <div>(Paypal QR Code)</div>

        </div >
    )
}
export default AdditionalInfo