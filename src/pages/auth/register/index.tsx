"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";
import signUp from "@/firebase/auth/signUp";
import { FormContainer, FormWrapper } from "@/styles/pages/login";

const RegisterSchema = z.object({
  displayName: z.string(),
  email: z.string(),
  password: z.string(),
});

type RegisterInput = z.infer<typeof RegisterSchema>;

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(RegisterSchema) });

  async function handleRegister(data: RegisterInput) {
    /* const user = {
      displayName: data.displayName,
      email: data.email,
      password: data.password,
    }; */
    const { result, error } = await signUp(data.email, data.password);

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
        <form onSubmit={handleSubmit(handleRegister)}>
          name
          <input type="text" {...register("displayName")} />
          email
          <input type="text" {...register("email")} />
          password
          <input type="password" {...register("password")} />
          <button type="submit">Registrar</button>
        </form>
      </FormWrapper>
    </FormContainer>
  );
}
