import React from "react";
import Home from "../components/Main_page/HeaderMain";
import { CartProvider } from "react-use-cart";
import Cart from "./Cart";

const MainPage = () => {
return (
	<div>
		<CartProvider>
		<Home/>
		<Cart/>
		</CartProvider>
	</div>
	);
}

export default MainPage;