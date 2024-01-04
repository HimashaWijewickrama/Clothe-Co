import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import SearchBar from '../components/searchBar';
import { TfiFaceSad } from "react-icons/tfi";
import { INewin } from '../types/INewIn';
import { newinData } from '../data/newInData';


export const NewinsComponent: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [filteredNewins, setFilteredNewins] = useState<INewin[]>(newinData as INewin[]);
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
            setFilteredNewins(newinData);
        } else {
            const filtered = newinData.filter((newin: INewin) =>
                newin.title.toLowerCase().includes(formattedQuery) ||
                newin.content.toLowerCase().includes(formattedQuery)
            );
            setFilteredNewins(filtered);
        }
    };

    useEffect(() => {
        if (filteredNewins.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [filteredNewins]);

    return (
<div id="newin">

        <div className='container' >
            <TitleText title="new in" />
            <Breadcrumber title1='home' title2='New in' />
            <SearchBar onSearch={handleSearch} />

            {loading ? (

                <div className='loader text-center' style={{ marginTop: '20px', marginBottom: '100px' }}>
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
                            <p className='text-center text-danger fs-5 font-weight-light' style={{ marginTop: '100px', marginBottom: '100px' }}>No matching items found  <TfiFaceSad size={20} /></p>
                        ) : (
                            filteredNewins.map((newin) => (
                                <div key={newin.id} style={{ display: 'inline-block', marginRight: '10px', marginBottom: '300px', marginTop: '50px' }}>
                                    <ProductCard
                                        imageUrl={newin.imageURL}
                                        title={newin.title}
                                        content={newin.content}
                                        badgeText={newin.badgeText}
                                    />
                                </div>
                            ))
                        )}
                    </span>
                </div>
            )}
        </div>
        </div>
    );
};
