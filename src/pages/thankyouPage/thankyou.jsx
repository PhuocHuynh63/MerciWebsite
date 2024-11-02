import './ThankyouPage.scss';

const ThankyouPage = () => {
 return (<div className="container thankyou">
    <h1 className="thank-you-message">Cảm ơn bạn đã đặt hàng!</h1>
    <p className="order-details">Chúng tôi sẽ gửi thông tin chi tiết đơn hàng qua email của bạn.</p>
    <p className="support">Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với bộ phận hỗ trợ khách hàng của chúng tôi.</p>
    <a href="/" className="home-button">Quay lại trang chủ</a>
</div>) 
 
}
export default ThankyouPage