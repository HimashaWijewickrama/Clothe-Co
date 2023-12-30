import { ProductCard } from '../components/productCard';
import { useEffect, useState } from 'react';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { pantsData } from '../data/pantsData';
import { IPant } from '../types/IPant';


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
            <Breadcrumber title1='Home' title2='New In' />


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
                                imageUrl="https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="LKR 1,600.00"
                                content="Subtle Adjustable Gold Plated Ring"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 2,000.00"
                                content="Chunky 18k Gold Plated Hoop Earring"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1615197419962-90f21da0956d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 1,250.00"
                                content="Delicate Engraved Drop Earings"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl="https://plus.unsplash.com/premium_photo-1674719144437-d1c253a8b775?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                title="Second Product"
                                content="Description of the second product."
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1604001307862-2d953b875079?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D'
                                title="LKR 10,690.00"
                                content="Chanel High Healed Bridal Shoes"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1579543767446-711eb32fd9ef?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 8,950.00"
                                content="Ivory High Healed Bridal Shoes"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 6, 670.00"
                                content="L'Eau Laurissi Poem Water Perfume"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1600086586698-368d69f00d6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 8,590.00"
                                content="Chanel Gabrielle Eau De Parfume"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px', marginBottom: '150px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 58,390.00"
                                content="Chanel Coco Noir Eau De Parfum Spray - 50ml"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1612181346599-a6bfbd67be86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 52,000.00"
                                content="Air Jordan 1 Zoom Air CMFT 2"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 4,650.00"
                                content="Women's Casual Flat Shoes"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1562136230-8fd38b945ef1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 5,899.00"
                                content="Women's Leather Ankle Boot"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        {/* <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1624687943971-e86af76d57de?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 2,500.00"
                                content="Handmade Leather Shopper Tote"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div> */}

                    </span>
                    <span style={{ display: 'block', marginTop: '280px', marginBottom: '150px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1624687943971-e86af76d57de?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 2,500.00"
                                content="Handmade Leather Shopper Tote"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1531357732422-758bdf2af3d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 4,500.00"
                                content="Andriana Women's Short Sleeve T-Shirts"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1566331126664-f1cf3be4d5f4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 4,500.00"
                                content="Andriana Women's Short Sleeve T-Shirts"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1556743630-60ec5c685f78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 1,500.00"
                                content="Linen Summer Hat"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px', marginBottom: '150px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 2,500.00"
                                content="Handmade Leather Shopper Tote"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1496217590455-aa63a8350eea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 4,500.00"
                                content="Andriana Women's Short Sleeve T-Shirts"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1579493934830-eab45746b51b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 4,500.00"
                                content="Andriana Women's Short Sleeve T-Shirts"
                                badgeText="New"
                                showFooter={false} // Set showFooter prop to false for this ProductCard


                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1681734756928-475a6fee809d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title="LKR 990.00"
                                content="Summer Blue and White Mixed Floral Scarf"
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