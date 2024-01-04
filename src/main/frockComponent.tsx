import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { frockData } from '../data/frockData';
import SearchBar from '../components/searchBar';
import { TfiFaceSad } from "react-icons/tfi";
import { IFrock } from '../types/IFrock';

export const FrocksComponent: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [filteredFrocks, setFilteredFrocks] = useState<IFrock[]>(frockData as IFrock[]);
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
            setFilteredFrocks(frockData);
        } else {
            const filtered = frockData.filter((frock: IFrock) =>
                frock.title.toLowerCase().includes(formattedQuery) ||
                frock.content.toLowerCase().includes(formattedQuery)
            );
            setFilteredFrocks(filtered);
        }
    };

    useEffect(() => {
        if (filteredFrocks.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [filteredFrocks]);




    return (

        <div className='container' >
            <TitleText title="frocks" />
            <Breadcrumber title1='Shop Now' title2='Frocks' />
            <SearchBar onSearch={handleSearch} />

            {loading ? (

                <div className='loader text-center' style={{ marginTop: '20px' }}>
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
                            filteredFrocks.map((frock) => (
                                <div key={frock.id} style={{ display: 'inline-block', marginRight: '10px', marginBottom: '300px', marginTop: '50px' }}>
                                    <ProductCard
                                        imageUrl={frock.imageURL}
                                        title={frock.title}
                                        content={frock.content}
                                        subtitleSpans={frock.subtitleSpans}
                                        badgeText={frock.badgeText}
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
