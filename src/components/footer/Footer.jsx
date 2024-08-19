import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="left">
                <div className="hotline">
                    <label>Hotline:</label>
                    <p>+0783231994</p>
                </div>
                <div className="email">
                    <label>Email</label>
                    <p>mercigift.work@gmail.com</p>
                </div>
                <p className="rule">Chính sách mua hàng</p>
                <p className="instruct">Hướng dẫn mua hàng</p>
            </div>

            <div className="middle">
                <p className="time">TP.HCM (8h-22h)</p>
            </div>

            <div className="right">
                <div className='top'>
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724086930/Ellipse_5_etaqnt.svg" alt="" />
                </div>
                <div className='middle'>
                    <p>Hãy kết nối với chúng tớ</p>
                </div>
                <div className='bottom'>
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724086981/Facebook_av88r6.svg" alt="" />
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724086983/Instagram_ru7f1d.svg" alt="" />
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724086984/TikTok_b4rul1.svg" alt="" />
                    <img src="https://res.cloudinary.com/dwyzqcunj/image/upload/v1724086986/YouTube_wa9q8c.svg" alt="" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;