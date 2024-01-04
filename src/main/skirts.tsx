import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { skirtData } from '../data/skirtData';
import SearchBar from '../components/searchBar';
import { TfiFaceSad } from "react-icons/tfi";
import { ISkirt } from '../types/ISkirt';


export const SkirtsComponent: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [filteredSkirts, setfilteredSkirts] = useState<ISkirt[]>(skirtData as ISkirt[]);
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
            setfilteredSkirts(skirtData);
        } else {
            const filtered = skirtData.filter((skirt: ISkirt) =>
                skirt.title.toLowerCase().includes(formattedQuery) ||
                skirt.content.toLowerCase().includes(formattedQuery)
            );
            setfilteredSkirts(filtered);
        }
    };

    useEffect(() => {
        if (filteredSkirts.length === 0) {
            setNoResults(true);
        } else {
            setNoResults(false);
        }
    }, [filteredSkirts]);




    return (

        <div className='container' >
            <TitleText title="skirts" />
            <Breadcrumber title1='Shop Now' title2='skirts' />
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
                            filteredSkirts.map((skirt) => (
                                <div key={skirt.id} style={{ display: 'inline-block', marginRight: '10px', marginBottom: '300px', marginTop: '50px' }}>
                                    <ProductCard
                                        imageUrl={skirt.imageURL}
                                        title={skirt.title}
                                        content={skirt.content}
                                        subtitleSpans={skirt.subtitleSpans}
                                        badgeText={skirt.badgeText}
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
