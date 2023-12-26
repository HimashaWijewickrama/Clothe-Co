import { useEffect, useState } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';

export const FrocksComponent = () => {
    const [loading, setLoading] = useState(true);
    const simulateImageLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    };
    useEffect(() => {
        simulateImageLoad();
    }, []);

    return (
        <div className='container' style={{ marginBottom: '50px' }}>
            <TitleText title="frocks" />
            <Breadcrumber title1='shop now' title2='frocks'/>

            {loading ? (
                <div className='loader text-center'>
                    <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow" style={{width: '3rem', height: '3rem'}} role="status">
                        <span className="visually-hidden">Please Wait!</span>
                    </div>
                </div>
            ) : (
                <div>

                    <span style={{ display: 'block' }}>

                        <div style={{ display: 'inline-block', marginRight: '20px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1542295669297-4d352b042bca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="First Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl="https://images.unsplash.com/photo-1570382667048-23b581258f6a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="Second Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1592805637227-caff1981360f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'
                                title="Third Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8'
                                title="fourth Product"
                                content="Description of the second product."
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="Fifth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1579328064848-53fe6c665058?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="Sixth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1545911825-1a1a91821015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
                                title="Seventh Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1589400363677-81704324e25b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8'
                                title="Eighth Product"
                                content="Description of the second product."
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px', marginBottom: '150px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1593105522065-9a6ecd21aeb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="Nineth Product"
                                content="Description of the second product."
                            />
                        </div>


                    </span>
                </div>

            )}



        </div>

    )
}