import Layout from "@/sources/components/Layout";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div style={poppins.style} className="text-dark bg-white">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
