import { useRouter } from "next/router";
import Image from "next/image";
import {
  ProdContainer,
  ProdInfo,
  ProdWrapper,
} from "@/styles/pages/products/id";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface Product {
  product: {
    name: string;
    price: number;
    imgUrl: string;
    description: string;
    priceInNumber: number;
    defaultPriceId: string;
  };
}

export default function ProductPage({ product }: Product) {
  console.log(product);
  return (
    <>
      <Head>
        <title> Name | Product</title>
      </Head>
      <ProdContainer>
        {product && (
          <ProdWrapper>
            <div>
              <Image src={product.imgUrl} alt="" width={600} height={500} />
            </div>
            <ProdInfo>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
              <span>{String(product.price)}</span>
            </ProdInfo>
          </ProdWrapper>
        )}
      </ProdContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const id = params!.id;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imgUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        priceInNumber: price.unit_amount! / 100,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 2,
  };
};
