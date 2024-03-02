import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ReduxProvider from "./redux/provider.tsx";
import ProtectRoute from "./components/pages/providers/ProtectRoute.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ReduxProvider>
				<ProtectRoute>
					<App />
				</ProtectRoute>
			</ReduxProvider>
		</BrowserRouter>
	</React.StrictMode>
);