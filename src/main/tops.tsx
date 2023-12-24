import { useEffect, useState } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';

export const TopsComponent = () => {
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
            <TitleText title="tops" />
            <Breadcrumber title1='Shop Now' title2='tops'/>

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
                                imageUrl='https://media.istockphoto.com/id/1321444254/photo/young-woman-with-arms-raised-standing-against-sky.jpg?s=612x612&w=0&k=20&c=HPTxugxvKZXL9HZbAoQRQzaBu-lmxzAPuCJGtvgIMb0='
                                title="First Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl="https://images.pexels.com/photos/9558764/pexels-photo-9558764.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                title="Second Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/8285758/pexels-photo-8285758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title="Third Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title="fourth Product"
                                content="Description of the second product."
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '200px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/8053691/pexels-photo-8053691.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                title="Fifth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/7716930/pexels-photo-7716930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title="Sixth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/9558588/pexels-photo-9558588.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                title="Seventh Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/9558777/pexels-photo-9558777.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                title="Eighth Product"
                                content="Description of the second product."
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '200px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/6311612/pexels-photo-6311612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title="Nineth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://media.istockphoto.com/id/1190574247/photo/dreamlike-beautiful-young-woman-wearing-peach-pink-vintage-blouse-and-skirt-studio-shot.jpg?s=612x612&w=0&k=20&c=FCM0LXSU4sjO81ATsC2fPXp6B9aAxD2C3zLBUjtn_rE='
                                title="Tenth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/11827462/pexels-photo-11827462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title="Elevanth Product"
                                content="Description of the second product."
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/6774356/pexels-photo-6774356.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                title="Twelveth Product"
                                content="Description of the second product."
                            />
                        </div>
                    </span>


                </div>
            )}
        </div>

    )
}