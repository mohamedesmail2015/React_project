import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import TopNavbarCopy from "./Components/TopNavbarCopy";
import TopNavbar from "./Components/TopNavbar";
import HomePage from "./pages/HomePage";
import Footer from "./Components/common/Footer";
import ContactPage from "./pages/ContactPage";
import CartListPage from "./pages/CartListPage";
import OrderListPage from "./pages/OrderListPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProductCategoryPage from "./pages/ProductCategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SearchPage from "./pages/SearchPage";
import NotificationPage from "./pages/NotificationPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import FavoratePage from "./pages/FavoratePage";
import AboutPage from "./pages/AboutPage";
import Featured from "./Components/home/Featured";

const App = () => {
  return (
    <>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/shoppingCart" element={<CartListPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/favorate" element={<FavoratePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgetPassword" element={<ForgetPasswordPage />} />
        <Route path="/resetPasswordPage" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<OrderListPage />} />
        <Route path="/subCategory" element={<SubCategoryPage />} />
        <Route path="/category" element={<ProductCategoryPage />} />
        <Route path="/productDetails" element={<ProductDetailsPage />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/company" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
