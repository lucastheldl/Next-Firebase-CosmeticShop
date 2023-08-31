import { app } from "@/firebase/config";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

  return <div>{product !== null && <div>Product: {product.title}</div>}</div>;
}
