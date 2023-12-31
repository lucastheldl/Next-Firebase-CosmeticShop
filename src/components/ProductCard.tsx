import { CardContainer } from "@/styles/components/productCard";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  imgUrl: string;
}

export default function ProductCard({
  id,
  title,
  imgUrl,
  price,
}: ProductCardProps) {
  return (
    <CardContainer href={`/products/${id}`}>
      <Image
        src={imgUrl}
        alt={title}
        width={250}
        height={250}
        quality={100}
        loading="lazy"
        style={{ objectFit: "cover" }}
      />
      <p>{title}</p>
      <strong>{price}</strong>
    </CardContainer>
  );
}
