import AllProducts from "./components/AllProducts";
import Hero from "./components/Hero";
import HighPrice from "./components/HighPrice";
import LowPrice from "./components/LowPrice";

export default function Home() {
  return (
    <>
        <Hero/>
        <HighPrice/>
        <LowPrice />
        <AllProducts/>
    </>
  );
}
