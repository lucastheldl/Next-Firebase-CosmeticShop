import { AuthContext, AuthContextProvider } from "@/context/AuthContext";
import { globalCss } from "@/styles";
import type { AppProps } from "next/app";
import { useContext } from "react";

globalCss();

export default function App({ Component, pageProps }: AppProps) {
  const user = useContext(AuthContext);
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
