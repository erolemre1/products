import Image from "next/image";
import ProductPage from "./product/page";

export default function Home(context: { searchParams: any }) {
  const { searchParams } = context;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductPage searchParams={searchParams} />
    </main>
  );
}
