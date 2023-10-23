import "./App.css";
import Navbar from "./components/Navbar.js";
import SocialMedia from "./components/SocialMedia.js";
import ItemListContainer from "./components/ItemListContainer.js";
import Footer from "./components/Footer.js";
import Banner from "./components/Banner.js";

export default function App() {
  return (
    <body>
      <Banner />
      <Navbar />
      <SocialMedia />
      <ItemListContainer />
      <Footer />
    </body>
  );
}
