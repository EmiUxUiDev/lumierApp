import "./App.css";
import SocialMedia from "./components/SocialMedia.js";
import ItemListContainer from "./components/ItemListContainer.js";
import Layout from "./components/Layout.js";


export default function App() {
  return (
    
      <>
      <Layout>
        <SocialMedia />
        <ItemListContainer />
      </Layout>
      </>
   
  );
}
