import { Formik, Form, Field, ErrorMessage } from 'formik';
import SignUpConst from "../../../core/const/sign-up-const";
import { SignUpSchema }  from "../../../core/validation/connection";
import ButtonModel from "../../models/buttonModel";
import "../../../styles/form.scss";

const initialValues = {
  firstName: '',
  familyName: '',
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const  SignUpForm = () => (
<Formik initialValues={initialValues} validationSchema={SignUpSchema}>
  {() => (
      <Form className="form" onSubmit={() =>alert('submit')}>
        <h1>Sign Up Form</h1>
        {
            SignUpConst.map(({ name, label, type, id }) => 
            <div key={id}  className="input-container">
              <label htmlFor={name}> {label} </label>
              <div>
              <Field name={name} type={type}/>
              <ErrorMessage
                  name={name}
                  component="div"
                  className="text-danger"
                />
                </div>
            </div> 
          ) 
        }
        <ButtonModel onClick={() => console.log()} id="0" label="Sign Up" name="connect-btn" className="connection-btn" type="submit"/>
        <p className="form-text">If you have account <a href="/sign-in">Sign In</a></p>
      </Form>
   )}
  </Formik>
);

export default SignUpForm;