import { app } from "@/firebase/config";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Image from "next/image";
import {
  ProdContainer,
  ProdInfo,
  ProdWrapper,
} from "@/styles/pages/products/id";

interface Product {
  title: string;
  price: number;
  imgUrl: string;
}

export default function ProductPage() {
  const router = useRouter();
  const id = router.query.id;

  const db = getFirestore(app);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function getProductData(id: string) {
      let result = null;
      let error = null;
      try {
        const docRef = doc(db, "products", id);
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
          const { title, price, imgUrl } = docSnapshot.data();
          setProduct({
            title,
            price,
            imgUrl,
          });
        }
      } catch (e) {
        error = e;
        console.log(error);
      }
    }
    getProductData(id);
  }, [db, id]);

  return (
    <ProdContainer>
      {product && (
        <ProdWrapper>
          <div>
            <Image src={product.imgUrl} alt="" width={600} height={500} />
          </div>
          <ProdInfo>
            <strong>{product.title}</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores consequatur voluptatum molestias, id, sapiente odio,
              perspiciatis delectus officiis ab fuga at voluptate totam quasi
              minima quam voluptatem hic libero saepe!
            </p>
            <span>R$ {product.price}</span>
          </ProdInfo>
        </ProdWrapper>
      )}
    </ProdContainer>
  );
}
