import { useForm } from "react-hook-form";
import * as yup from "yup";
import Header from "../../components/header/Header";
import './SignUp.scss';
import { useCallback } from "react";
const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
  );
const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

function SignUp() {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, formState, setError } = useForm({ resolver });
  const { errors } = formState;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (errors[name]) {
      setError(name, undefined);
    }
  };

  return (
    <>
      <Header />
      <main className="main">
        <h1 className="main__title">Sign Up</h1>
        <form onSubmit={handleSubmit(data => console.log(data))} className="main-form">
          <input {...register("email")} onChange={handleInputChange} className="main-form__input" placeholder="Enter your email" />
          {errors.email && <div className="error-message">{errors.email.message}</div>}
          <input {...register("password")} onChange={handleInputChange}  className="main-form__input" placeholder="Enter your password" />
          {errors.password && <div className="error-message">{errors.password.message}</div>}
          <input {...register("confirmPassword")} onChange={handleInputChange}  className="main-form__input" placeholder="Confirm your password" />
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword.message}</div>}
          <button type="submit" className="main-form__btn" >Send</button>
        </form>
      </main>
    </>
  )
}
export default SignUp