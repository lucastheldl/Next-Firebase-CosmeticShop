import { CardContainer } from "@/styles/components/productCard";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: number;
  imgUrl: string;
}

export default function ProductCard({
  title,
  imgUrl,
  price,
}: ProductCardProps) {
  return (
    <CardContainer>
      <Image
        src={imgUrl}
        alt={title}
        width={250}
        height={250}
        style={{ objectFit: "cover" }}
      />
      <p>{title}</p>
      <strong>{price}</strong>
    </CardContainer>
  );
}
