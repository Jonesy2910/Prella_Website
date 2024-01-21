import React from 'react';
import LoadingScreen from './LoadingScreen'; // Import the LoadingScreen component
import Header from './Header';
import Logo from'./Logo'
import BannerSlider from "./BannerSlider";
import Storefront from "./Storefront";
import './App.css';


const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 20,
        image: 'product1.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 20,
        image: "product1.jpg",
    },
];

function App() {
    return (
        <div className="App">
            {/* Render the LoadingScreen component */}
            <LoadingScreen />
            <Logo />
            <Header />
            <BannerSlider />
            <h1>Store Front</h1>
            <Storefront products={products} />
        </div>
    );
}

export default App;

