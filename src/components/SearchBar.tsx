import { SearchContainer } from "@/styles/components/SearchBar";

export default function SearchBar() {
  return (
    <SearchContainer>
      <input type="text" placeholder="Busque por um produto" />
      <button>🔍</button>
    </SearchContainer>
  );
}
