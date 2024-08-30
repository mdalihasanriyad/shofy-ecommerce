import BottomHeader from "@/components/header/BottomHeader";
import Banner from "@/components/pages/home/Banner";
import ProductList from "@/components/ProductList";
import { getData } from "./helpers";
import MiddleBanner from "@/components/pages/home/MiddleBanner";

export default async function Home() {
  const product = await getData("https://dummyjson.com/products");

  return (
    <main>
      <Banner />
      <ProductList product={product} />
      <MiddleBanner />
    </main>
  );
}
