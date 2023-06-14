import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { CartProvider } from "use-shopping-cart";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider currency="INR" allowedCountries={["IN"]} shouldPersist={true}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}
