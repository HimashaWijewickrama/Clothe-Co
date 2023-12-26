import { useEffect, useState } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';

export const JumpsuitsComponent = () => {
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
            <TitleText title="jumpsuits" />
            <Breadcrumber title1='Shop Now' title2='Jumpsuits' />

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
                                imageUrl='https://images.unsplash.com/photo-1675687631878-66002154d8ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="First Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://plus.unsplash.com/premium_photo-1673758892849-70f04f4a0780?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

                                title="Second Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://media.istockphoto.com/id/1172468078/photo/full-length-portrait-of-stylish-young-model-with-handbag-with-blue-and-red-background.jpg?s=612x612&w=0&k=20&c=fKnG9YWiZ_sK3ZMHx6yZ_H4Xi3PiOwL9epgEIoZ0gY4='

                                title="Third Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://media.istockphoto.com/id/1318502517/photo/beautiful-woman-in-evening-suit-front-of-white-background.jpg?s=612x612&w=0&k=20&c=nvXKD7Oh8-wv0LMkmUykFqIwQ0JSqTXoHq0Jft8_T2g='
                                title="fourth Product"
                                content="Description of the second product."
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://plus.unsplash.com/premium_photo-1673758895104-060a75fa2e5d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="Fifth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/13722335/pexels-photo-13722335.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                title="Sixth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/11664972/pexels-photo-11664972.jpeg?auto=compress&cs=tinysrgb&w=600'
                                title="Seventh Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/13219630/pexels-photo-13219630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title="Eighth Product"
                                content="Description of the second product."
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px', marginBottom: '150px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/5137870/pexels-photo-5137870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title="Nineth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1583464292774-867db8653726?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="Nineth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://i.ebayimg.com/images/g/SfAAAOSwhQJkBc9q/s-l1200.webp'
                                title="Nineth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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