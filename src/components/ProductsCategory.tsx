import Image from "next/image";
import Link from "next/link";

import Bath from "../assets/Bath.jpg";
import Makeup from "../assets/Makeup.jpg";
import Skincare from "../assets/Skincare.jpg";
import { Nav, NavLink } from "@/styles/components/productsCategory";

export default function ProductsCategory() {
  return (
    <Nav>
      <NavLink href={`/products/`}>
        <Image src={Skincare} width={370} height={150} alt="skincare" />
      </NavLink>
      <NavLink href={`/products/`}>
        <Image src={Makeup} width={370} height={150} alt="maquiagem" />
      </NavLink>
      <NavLink href={`/products/`}>
        <Image src={Bath} width={370} height={150} alt="bath" />
      </NavLink>
    </Nav>
  );
}
