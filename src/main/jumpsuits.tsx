import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { jumpSuitData } from '../data/jumpsuitData';
import SearchBar from '../components/searchBar';
import { TfiFaceSad } from "react-icons/tfi";
import { IJumpSuit } from '../types/IJumpSuit';

export const JumpSuitsComponent: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [filteredJumpSuits, setFilteredTwoPieces] = useState<IJumpSuit[]>(jumpSuitData as IJumpSuit[]);
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
            setFilteredTwoPieces(jumpSuitData);
        } else {
            const filtered = jumpSuitData.filter((jumpsuit: IJumpSuit) =>
                jumpsuit.title.toLowerCase().includes(formattedQuery) ||
                jumpsuit.content.toLowerCase().includes(formattedQuery)
            );
            setFilteredTwoPieces(filtered);
        }
    };

    useEffect(() => {
        if (filteredJumpSuits.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [filteredJumpSuits]);




    return (

        <div className='container' >
            <TitleText title="jumpsuits" />
            <Breadcrumber title1='Shop Now' title2='Jump Suits' />
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
                            filteredJumpSuits.map((jumpsuit) => (
                                <div key={jumpsuit.id} style={{ display: 'inline-block', marginRight: '10px', marginBottom: '300px', marginTop: '50px' }}>
                                    <ProductCard
                                        imageUrl={jumpsuit.imageURL}
                                        title={jumpsuit.title}
                                        content={jumpsuit.content}
                                        subtitleSpans={jumpsuit.subtitleSpans}
                                        badgeText={jumpsuit.badgeText}
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
