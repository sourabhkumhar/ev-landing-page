import Motor from "@/sources/sections/motor";
import ProductInfo from "@/sources/sections/productinfo";
import Colors from "@/sources/sections/colors";
import Front from "@/sources/sections/front";
import Gallery from "@/sources/sections/gallery";
import React from "react";
import Testimonials from "@/sources/sections/testimonials";
import Footer from "@/sources/sections/footer";

const Page = () => {
  return (
    <main>
      <Front />
      <ProductInfo />
      <Motor />
      <Gallery />
      <Colors />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Page;
