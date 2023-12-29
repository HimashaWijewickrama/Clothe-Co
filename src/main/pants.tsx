import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { pantsData } from '../data/pantsData';
import SearchBar from '../components/searchBar';
import { TfiFaceSad } from "react-icons/tfi";
import { IPant } from '../types/interfaces';



export const PantsComponent: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [filteredPants, setFilteredPants] = useState<IPant[]>(pantsData as IPant[]);
    const [noResults, setNoResults] = useState(false);

    useEffect(() => {
        const simulateImageLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        };

        simulateImageLoad();
    }, []);

    const handleSearch = (searchQuery: string) => {
        const formattedQuery = searchQuery.trim().toLowerCase();

        if (formattedQuery === '') {
            setFilteredPants(pantsData);
        } else {
            const filtered = pantsData.filter((pant: IPant) =>
                pant.title.toLowerCase().includes(formattedQuery) ||
                pant.content.toLowerCase().includes(formattedQuery)
            );
            setFilteredPants(filtered);
        }
    };

    useEffect(() => {
        if (filteredPants.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [filteredPants]);




    return (

        <div className='container' >
            <TitleText title="pants" />
            <Breadcrumber title1='Shop Now' title2='Pants' />
            <SearchBar onSearch={handleSearch} />

            {loading ? (

                <div className='loader text-center' style={{marginTop: '20px'}}>
                    <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="visually-hidden">Please Wait!</span>
                    </div>
                </div>
            ) : (
                <div>
                    <span style={{ display: 'block' }}>

                        {noResults ? (
                            <p className='text-center text-danger fs-5 font-weight-light' style={{ marginTop: '100px' }}>No matching items found  <TfiFaceSad size={20} /></p>
                        ) : (
                            filteredPants.map((pant) => (
                                <div key={pant.id} style={{ display: 'inline-block', marginRight: '10px', marginBottom: '300px', marginTop: '50px' }}>
                                    <ProductCard
                                        imageUrl={pant.imageURL}
                                        title={pant.title}
                                        content={pant.content}
                                        subtitleSpans={pant.subtitleSpans}
                                        badgeText={pant.badgeText}
                                    />
                                </div>
                            ))
                        )}
                    </span>
                </div>
            )}
        </div>
    );
};
