import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="w-10/12 mx-auto my-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
