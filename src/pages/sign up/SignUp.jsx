import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Header from "../../components/header/Header";


const schema = yup.object({
  name: yup.string().required(),
  emeil: yup.number().positive().integer().required(),
}).required();
function SignIn() {

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  return (
    <>
        <Header />
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="enter your name" />
            <p>{errors.nameame?.message}</p>
                
            <input {...register("emeil")}  placeholder="enter your emeil"/>
            <p>{errors.emeil?.message}</p>
            
            <input type="submit" />
        </form>
    </>
  )
}

export default SignIn