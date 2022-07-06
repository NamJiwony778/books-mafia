import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
    familyName: Yup.string()
    .min(2, 'Too Short!').max(50, 'Too Long!').required('Family name is required'),
    userName: Yup.string()
    .min(2, 'Too Short!').max(50, 'Too Long!').required('Username is required'),
    email: Yup.string()
    .email('Invalid email').required('Email is required'),
    password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
     confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
});

export const SignInSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email').required('Email is required'),
    password: Yup.string()
    .required('Password is required'),
});