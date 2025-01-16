import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";


export default function Layout() {
  return (
  <div id="site-wrapper">
    <NavBar />
    
<main id="pageMain " >

   <Outlet />
</main>
<Footer />
  </div>
  );
}
