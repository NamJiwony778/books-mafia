import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignInSchema }  from "../../../core/validation/connection";
import SignInConst from "../../../core/const/sign-in-const";
import ButtonModel from "../../models/buttonModel";
import "../../../styles/form.scss";

const initialValues = {
  email: '',
  password: '',
};

const  SignInForm = () => (
<Formik initialValues={initialValues} validationSchema={SignInSchema}>
  {() => (
      <Form className="form" onSubmit={() =>alert('submit')}>
        <h1>Sign Up Form</h1>
        {
            SignInConst.map(({ name, label, type, id }) => 
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
        <p className="form-text">If you have account <a href="/sign-up">Sign Up</a></p>
      </Form>
   )}
  </Formik>
);

export default SignInForm;