import React from 'react';
import Product from './Product';

const Storefront = ({ products }) => {
    return (
        <div className="storefront">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Storefront;