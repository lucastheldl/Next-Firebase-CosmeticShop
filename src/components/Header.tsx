import { HeaderContainer, OptionLink } from "@/styles/components/header";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <HeaderContainer>
      <h1> Cosmetic spa</h1>
      <SearchBar />
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
