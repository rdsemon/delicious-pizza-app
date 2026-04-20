import "./globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import StoreProvider from "./StoreProvider";
import Header from "./components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Delicious Pizza",
    default: "Delicious Pizza",
  },
  description:
    "Satisfy your cravings with our mouth-watering, oven-fresh pizzas made from the finest ingredients. From classic Margherita to bold, custom creations — every bite is a slice of perfection. Order online and enjoy fast delivery, hot and fresh to your door.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={` ${poppins.className} grid h-full grid-rows-[70px_1fr_30px] antialiased md:min-h-screen`}
      >
        <Header />
        <StoreProvider>
          <div className="px-3 py-8">
            <main className="mx-auto max-w-7xl">{children}</main>
            <ToastContainer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
