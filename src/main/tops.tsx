import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { topData } from '../data/topData';
import SearchBar from '../components/searchBar';
import { TfiFaceSad } from "react-icons/tfi";
import { ITop } from '../types/ITop';



export const TopsComponent: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [filteredTops, setFilteredTops] = useState<ITop[]>(topData as ITop[]);
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
            setFilteredTops(topData);
        } else {
            const filtered = topData.filter((top: ITop) =>
                top.title.toLowerCase().includes(formattedQuery) ||
                top.content.toLowerCase().includes(formattedQuery)
            );
            setFilteredTops(filtered);
        }
    };

    useEffect(() => {
        if (filteredTops.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [filteredTops]);




    return (

        <div className='container' >
            <TitleText title="tops" />
            <Breadcrumber title1='Shop Now' title2='Tops' />
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
                            filteredTops.map((top) => (
                                <div key={top.id} style={{ display: 'inline-block', marginRight: '10px', marginBottom: '300px', marginTop: '50px' }}>
                                    <ProductCard
                                        imageUrl={top.imageURL}
                                        title={top.title}
                                        content={top.content}
                                        subtitleSpans={top.subtitleSpans}
                                        badgeText={top.badgeText}
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
