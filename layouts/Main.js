import { Header } from "components/layout/Header";
import { Menu } from "components/layout/Menu";
import { Footer } from "components/layout/Footer";

export const Main = ({ children }) => (
  <div className="flex flex-col">
    <Header />
    <Menu />
    <div className="mt-24 p-8 md:ml-48">
      {children}
      <Footer />
    </div>
  </div>
);
