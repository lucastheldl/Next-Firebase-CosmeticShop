import { HeaderContainer, OptionLink } from "@/styles/components/header";

export default function Header() {
  return (
    <HeaderContainer>
      <h1> Cosmetic spa</h1>
      <ul>
        <li>
          <OptionLink href="#">Carrinho</OptionLink>
        </li>
        <li>
          <OptionLink href="#">Perfil</OptionLink>
        </li>
      </ul>
    </HeaderContainer>
  );
}
