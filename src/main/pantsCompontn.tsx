import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { pantsData } from '../data/pantsData';
import SearchBar from '../components/searchBar'; // Assuming your SearchBar component file path

interface IPant {
    id: string;
    title: string;
    price: string;
    // Add other properties as needed
}

export const PantsComponent: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [filteredPants, setFilteredPants] = useState<IPant[]>(pantsData as IPant[]);

    const simulateImageLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    useEffect(() => {
        simulateImageLoad();
    }, []);

    const handleSearch = (searchQuery: string) => {
        const filtered = pantsData.filter((pant: IPant) =>
            pant.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredPants(filtered);
    };

    return (
        <div className='container' style={{ marginBottom: '50px' }}>
            <TitleText title="pants" />
            <Breadcrumber title1='Shop Now' title2='Pants' />

            <SearchBar onSearch={handleSearch} />

            {loading ? (
                <div className='loader text-center'>
                    {/* Your loading spinner */}
                </div>
            ) : (
                <div>
                    {pantsData.map((pant) => (
                        <ProductCard
                            key={pant.id} // Assuming 'id' is a unique identifier
                            // imageUrl="https://imagescdn.planetfashion.in/img/app/product/7/739143-8269861.jpg" // Use the correct property for the image URL
                            title={pant.title} // Access 'title' from each 'IPant' object
                            content={pant.price} // Access 'price' from each 'IPant' object
                        // other props as needed
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
