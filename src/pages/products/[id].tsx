import { useRouter } from "next/router";

interface ProductPageProps {
  title: string;
  price: number;
  imgUrl: string;
}

export default function ProductPage(props: ProductPageProps) {
  const router = useRouter();
  const id = router.query.id;
  return <div>Product: {id}</div>;
}
