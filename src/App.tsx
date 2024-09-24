import { Routes, BrowserRouter as Router, Route,matchPath, useLocation } from "react-router-dom";
// import Header from "./components/header";
import Category from "./pages/dashboard/pages/category";
import Scents from "./pages/dashboard/pages/taste";
import Brand from "./pages/dashboard/pages/brand";
import Product from "./pages/dashboard/pages/products";
import GiftBox from "./pages/dashboard/pages/gift-box";
import Orders from "./pages/dashboard/pages/orders";
import Contact from "./pages/dashboard/pages/contact";
import Settings from "./pages/dashboard/pages/settings";
import Reviews from "./pages/dashboard/pages/reviews";
import AddProduct from "./pages/dashboard/pages/products/AddProduct";
import AddGiftBox from "./pages/dashboard/pages/gift-box/AddGiftBox";
import Dashboard from "./pages/dashboard/admin-dashboard";
import AdminSignInForm from "./pages/dashboard/pages/admin-login";
import { ProtectAdminRoutes } from "./lib/protect-routes";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import FooterSection from "./pages/home/components/footer-section";
import Footer from "./components/footer";
import ScentPage from "./pages/scent";
import CustomizePage from "./pages/customize";
import AboutPage from "./pages/about";
import CareersPage from "./pages/careers";
import ContactUs from "./pages/contact-us";
import ReviewsPage from "./pages/reviews";
import BestSelling from "./pages/best-selling";
import GiftBoxPage from "./pages/gift-box";
import CartPage from "./pages/cart";
import Header from "./components/header";
import PageNotFound from "./pages/not-found";




function App() {

  return (
    <div>
  
      <Router>
        <Header/>
        {/* Now the location hook is inside Router */}
        <NavbarDisplay />
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scent" element={<ScentPage />} />
        <Route path="/customize" element={<CustomizePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/best-selling" element={<BestSelling />} />
        <Route path="/gift-box" element={<GiftBoxPage />} />
        <Route path="/cart" element={<CartPage />} />

        

          <Route path="/admin-login" element={<AdminSignInForm />} />
          {/* dashboard routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectAdminRoutes>
                <Dashboard />
              </ProtectAdminRoutes>
            }
          >
            <Route path="category" element={<Category />} />
            <Route path="scents" element={<Scents />} />
            <Route path="brand" element={<Brand />} />
            <Route path="product" element={<Product />} />
            <Route path="gift-box" element={<GiftBox />} />
            <Route path="order" element={<Orders />} />
            <Route path="contact" element={<Contact />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="setting" element={<Settings />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="add-gift" element={<AddGiftBox />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />

        </Routes>
        <FooterDisplay/>
      
      </Router>
    </div>
  );
}
// NavbarDisplay/> is to show navbar on specific routes
const NavbarDisplay = function () {
  const { pathname } = useLocation();

  const pathsToShowNavbar = [
    "/",
    "/online-store",
    "/customize",
    "/about",
    "/login",
    "/scent",
    "/cart",
    "/product-details/:productId",
    "/checkout",
    "/payment-success",
    "/contact-us",
    "/reviews",
    "/search",
    "/careers",
    "/best-selling",
    "/gift-box",
    "/gift-box-details/:giftBoxId",
    "/gift-box-checkout",
  ];
  const shouldShowNavbar = pathsToShowNavbar.some((path) =>
    matchPath(path, pathname)
  );

  return shouldShowNavbar ? <Navbar /> : null;
};

// Wrapper component to handle footer visibility


// FooterDisplay/> is to show navbar on specific routes
const FooterDisplay = function () {
  const { pathname } = useLocation();

  const pathsToShowFooter = [
    "/",
    "/online-store",
    "/customize",
    "/about",
    "/login",
    "/scent",
    "/cart",
    "/checkout",
    "/product-details/:productId",
    "/payment-success/:amount",
    "/contact-us",
    "/reviews",
    "/search",
    "/careers",
    "/best-selling",
  ];

  const shouldShowFooter = pathsToShowFooter.some((path) =>
    matchPath(path, pathname)
  );

  return shouldShowFooter ? (
    <div>
      <FooterSection />
      <Footer />
    </div>
  ) : null;
}

export default App;

