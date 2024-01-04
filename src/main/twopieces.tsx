import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { twoPieceData } from '../data/twopieceData';
import SearchBar from '../components/searchBar';
import { TfiFaceSad } from "react-icons/tfi";
import { ITwoPiece } from '../types/ITwoPiece';

export const TwoPiecesComponent: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [filteredTwoPieces, setFilteredTwoPieces] = useState<ITwoPiece[]>(twoPieceData as ITwoPiece[]);
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
            setFilteredTwoPieces(twoPieceData);
        } else {
            const filtered = twoPieceData.filter((twopiece: ITwoPiece) =>
                twopiece.title.toLowerCase().includes(formattedQuery) ||
                twopiece.content.toLowerCase().includes(formattedQuery)
            );
            setFilteredTwoPieces(filtered);
        }
    };

    useEffect(() => {
        if (filteredTwoPieces.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [filteredTwoPieces]);




    return (

        <div className='container' >
            <TitleText title="twopieces" />
            <Breadcrumber title1='Shop Now' title2='TwoPieces' />
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
                            filteredTwoPieces.map((twopiece) => (
                                <div key={twopiece.id} style={{ display: 'inline-block', marginRight: '10px', marginBottom: '300px', marginTop: '50px' }}>
                                    <ProductCard
                                        imageUrl={twopiece.imageURL}
                                        title={twopiece.title}
                                        content={twopiece.content}
                                        subtitleSpans={twopiece.subtitleSpans}
                                        badgeText={twopiece.badgeText}
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
