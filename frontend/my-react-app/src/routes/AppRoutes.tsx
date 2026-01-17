import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/Mainlayout"
import LandingPage from "../pages/landing/LandingPage"
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
