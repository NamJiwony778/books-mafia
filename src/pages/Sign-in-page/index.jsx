import SignInForm from '../../components/page-components/Sign-in-form';
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

const SignInPage = () => (
    <div className="connection-page-container">
        <div className="form-column">
            <SignInForm/>
        </div>
        <div className="img-column"  style={columnStyle}/>
    </div>
);

export default SignInPage;