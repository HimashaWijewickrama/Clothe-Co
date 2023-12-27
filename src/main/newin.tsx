import { ProductCard } from '../components/productCard';
import { useEffect, useState } from 'react';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { pantsData } from '../data/pantsData';

export const NewInComponent = () => {
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
        <div className='container' style={{ marginBottom: '280px' }}>
            <TitleText title="new in" />
            <Breadcrumber title1='Home' title2='New In'/>


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
                                imageUrl="https://images.pexels.com/photos/9558764/pexels-photo-9558764.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                title="Second Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1654806389957-f8ca19bb7b1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="Eighth Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/7203477/pexels-photo-7203477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title="fourth Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://rukminim2.flixcart.com/image/850/1250/xif0q/jean/1/e/6/28-mid-blue-skg-original-imagzf9hzv8thead.jpeg?q=20'
                                title={pantsData.price12}
                                content={pantsData.title12}
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://media.istockphoto.com/id/1318502517/photo/beautiful-woman-in-evening-suit-front-of-white-background.jpg?s=612x612&w=0&k=20&c=nvXKD7Oh8-wv0LMkmUykFqIwQ0JSqTXoHq0Jft8_T2g='
                                title="fourth Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1564139615082-01535600057f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xCWm9vd3pCOFI4MHx8ZW58MHx8fHx8'
                                title="Third Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1610113233329-1c73b6f7fe98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
                                title="Eighth Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1602231379593-b85a472e3c99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="Nineth Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px', marginBottom: '150px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1630081757603-a46d414be089?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="Nineth Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1583703779199-e6ed378df595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzN8NDUzMTY3OHx8ZW58MHx8fHx8'
                                title="Nineth Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1591370409347-2fd43b7842de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxODA0MjI1Mnx8ZW58MHx8fHx8'
                                title="Nineth Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1601244005535-a48d21d951ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8'
                                title="fourth Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>

                    </span>
                </div>

            )}


        </div>

    )
}