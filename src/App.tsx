import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./pages/Feed";
import AuthProvider from "./context/Auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

export default function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route index path="/" element={
            <PublicRoute>
              <Home />
            </PublicRoute>} 
          />
          <Route path="/register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>} 
          />
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>} 
          />
          <Route path="/feed" element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>} 
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}
