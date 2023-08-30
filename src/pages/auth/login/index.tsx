"use client";
import signIn from "@/firebase/auth/signIn";
import { FormContainer, FormWrapper } from "@/styles/pages/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as z from "zod";

const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type loginInput = z.infer<typeof LoginSchema>;

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<loginInput>({ resolver: zodResolver(LoginSchema) });

  async function handleLogin(data: loginInput) {
    const { result, error } = await signIn(data.email, data.password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  }

  return (
    <FormContainer>
      <FormWrapper>
        <form onSubmit={handleSubmit(handleLogin)}>
          email
          <input type="text" {...register("email")} />
          password
          <input type="password" {...register("password")} />
          <button type="submit">Login</button>
        </form>
      </FormWrapper>
    </FormContainer>
  );
}
