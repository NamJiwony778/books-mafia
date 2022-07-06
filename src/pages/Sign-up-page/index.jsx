import SignUpForm from '../../components/page-components/Sign-up-form';
import image from '../../assets/img/books.jpg';
import '../../styles/connect.scss';

const columnStyle = {
    width: "100vw",
    height: "auto",
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const SignUpPage = () => (
    <div className="connection-page-container">
        <div className="form-column">
            <SignUpForm/>
        </div>
        <div className="img-column"  style={columnStyle}/>
    </div>
);

export default SignUpPage;