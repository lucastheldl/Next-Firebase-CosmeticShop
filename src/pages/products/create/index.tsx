"use client";

import { app } from "@/firebase/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import * as z from "zod";

const productSchema = z.object({
  title: z.string(),
  price: z.number(),
  imgUrl: z.string(),
  //category: z.enum(["hair", "skincare", "bath"]),
});

type ProductInput = z.infer<typeof productSchema>;

export default function CreatePost() {
  const db = getFirestore(app);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ProductInput>({ resolver: zodResolver(productSchema) });

  async function handleCreateProduct(data: ProductInput) {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const docRef = await addDoc(collection(db, "products"), {
        title: data.title,
        price: data.price,
        imgUrl: data.imgUrl,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        Titulo
        <input type="text" required {...register("title")} />
        Valor
        <input
          type="number"
          required
          {...register("price", { valueAsNumber: true })}
        />
        Imagen URL
        <input type="text" required {...register("imgUrl")} />
        <button type="submit">Cadastrar produto</button>
      </form>
    </div>
  );
}
