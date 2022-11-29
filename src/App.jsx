import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Components/Home";
import ShopPage from "./Components/Shop/ShopPage";
import Categories from "./Components/Shop/components/ListProducts/Categories";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductDetail from "./Components/Shop/components/ProductDetail/ProductDetail";
import AboutUs from "./Components/AboutUs";
import Community from "./Components/Community";
import Contactus from "./Components/ContactUs";
import TestData from "./Components/TestData";

function App() {
  return (
    <div className="relative App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <section className="relative top-[130px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:categoryId" element={<Categories />} />
            <Route path="/shop/:categoryId/:id" element={<ProductDetail />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/test" element={<TestData />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contactUs" element={<Contactus />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 Page not found 😂😂😂</p>
                </main>
              }
            />
          </Routes>
        </section>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
