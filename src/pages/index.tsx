import Head from "next/head";

import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "@/firebase/config";
import { Container, ListContainer } from "@/styles/pages/home";
import ProductCard from "@/components/ProductCard";
import ProductsCategory from "@/components/ProductsCategory";
import { GetStaticProps } from "next";

interface Product {
  id: string;
  title: string;
  price: number;
  imgUrl: string;
}
interface HomeProps {
  products: {
    id: string;
    title: string;
    price: number;
    imgUrl: string;
  }[];
}
const db = getFirestore(app);
export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Cosmetic shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <ProductsCategory />
        <ListContainer>
          {products &&
            products.map((prod: Product, i) => {
              return (
                <ProductCard
                  key={i}
                  id={prod.id}
                  title={prod.title}
                  price={new Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(prod.price)}
                  imgUrl={prod.imgUrl}
                />
              );
            })}
        </ListContainer>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let result = null;
  let products;
  const collectionRef = collection(db, "products");

  try {
    result = await getDocs(collectionRef);

    const document: any = [];
    result.forEach((doc: any) => {
      document.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    products = document;
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      products,
    },
  };
};
