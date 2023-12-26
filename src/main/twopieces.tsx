import { useEffect, useState } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';

export const TwoPiecesComponent = () => {
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
            <TitleText title='two piece sets' />
            <Breadcrumber title1='Shop Now' title2='two piece sets'/>

            {loading ? (
                <div className='loader text-center'>
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

                        <div style={{ display: 'inline-block', marginRight: '20px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="First Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl="https://images.pexels.com/photos/15686362/pexels-photo-15686362/free-photo-of-studio-shot-of-model-in-pants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                title="Second Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://www.rosedress.com/cdn/shop/products/high-waist-rib-long-sleeve-winter-sweater-two-piece-dress-White-1_600x.jpg?v=1604318868'
                                title="Third Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/18550230/pexels-photo-18550230/free-photo-of-young-woman-in-blouse-and-white-pants-posing-on-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title="fourth Product"
                                content="Description of the second product."
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px', marginBottom: '150px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://www.smilepromdresses.co/cdn/shop/products/Scoop_Neck_Long_Sleeve_Tulle_Wedding_Dress_With_Lace_Bodice_V_Back_Wedding_Gowns_PW512_grande.jpg?v=1574491763'
                                title="Fifth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://cdn.shopify.com/s/files/1/1851/2511/products/Luis_Civit.jpg'
                                title="Sixth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://www.na-kd.com/globalassets/nakd_drawstring_cut_out_dress_1100-003831-0005_01c.jpg?ref=AAE9AF9536'
                                title="Seventh Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1654806389957-f8ca19bb7b1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="Seventh Product"
                                content="Description of the second product."
                            />
                        </div>

                    </span>


                </div>
            )}
        </div>

    )
}