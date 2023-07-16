import getBillboards from "@/actions/GetBillboards";
import getProducts from "@/actions/GetProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import { FC } from "react";

interface HomePageProps {}

export const revalidate = 0;

const HomePage: FC<HomePageProps> = async ({}) => {
  const billboard = await getBillboards("6e933590-6f00-454a-94f5-656ac5761952");

  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col space-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
