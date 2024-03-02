import { Routes, Route } from "react-router";
import LoginPage from "../pages/loginPage/LoginPage";
import HomePage from "../pages/homePage/HomePage";
import UserPage from "../pages/userPage/UserPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

const Layout = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/user" element={<UserPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
};

export default Layout;
