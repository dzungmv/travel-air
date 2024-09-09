import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { PropsWithChildren } from "react";

export default function StageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
