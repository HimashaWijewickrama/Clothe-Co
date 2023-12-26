import { useEffect, useState } from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';
import { pantsData } from '../data/pantsData';

export const PantsComponent = () => {
    
    const [loading, setLoading] = useState(true);
    const simulateImageLoad = () => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    };
    useEffect(() => {
        simulateImageLoad();
    }, []);
    const pantColor1 = [
        { backgroundColor: '#ffffff'},
        { backgroundColor: '#000000'},
        { backgroundColor: '#38419D'}
    ];
    const pantColor2 = [
        { backgroundColor: '#FFC7C7'},
        { backgroundColor: '#FBA1B7'},
    ];
    const pantColor3 = [
        { backgroundColor: '#a4c3de'},
        { backgroundColor: '#84aed3'},
        { backgroundColor: '#609cd0'},
        { backgroundColor: '#4482b8'},
        { backgroundColor: '#276499'},

    ];
    const pantColor4 = [
        { backgroundColor: '#F875AA'},
        { backgroundColor: '#FBA1B7'},
    ];
    const pantColor5 = [
        { backgroundColor: '#303030'},
        { backgroundColor: '#8E7F78'},
        { backgroundColor: '#ffffff'},

    ];
    const pantColor6 = [
        { backgroundColor: '#97441A'},
        { backgroundColor: '#E14D2A'},
        { backgroundColor: '#142F43'},
    ];
    const pantColor7 = [
        { backgroundColor: '#97441A'},
        { backgroundColor: '#E14D2A'},
        { backgroundColor: '#6C4826'},
    ];
    const pantColor8 = [
        { backgroundColor: '#171C22'},
        { backgroundColor: '#384847'},
    ];
    const pantColor9 = [
        { backgroundColor: '#ffffff'},

    ];
    const pantColor10 = [
        { backgroundColor: '#AA9992'},
        { backgroundColor: '#ffffff'},
        { backgroundColor: '#0f1036'},
    ];
    const pantColor11 = [
        { backgroundColor: '#a4c3de'},
        { backgroundColor: '#84aed3'},
        { backgroundColor: '#609cd0'},

    ];
    const pantColor12 = [
        { backgroundColor: '#a4c3de'},
        { backgroundColor: '#84aed3'},
        { backgroundColor: '#609cd0'},
        { backgroundColor: '#4482b8'},
        { backgroundColor: '#3B5983'},
    ];
    return (
        <div className='container' style={{ marginBottom: '50px' }}>
            <TitleText title="pants" />
            <Breadcrumber title1='Shop Now' title2='Pants' />

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
                                imageUrl='https://imagescdn.planetfashion.in/img/app/product/7/739143-8269861.jpg'
                                title={pantsData.price1}
                                content={pantsData.title1}
                                subtitleSpans={pantColor1}

                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                                title={pantsData.price2}
                                content={pantsData.title2}
                                subtitleSpans={pantColor2}

                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D'
                                title={pantsData.price3}
                                content={pantsData.title3}
                                subtitleSpans={pantColor3}
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.pexels.com/photos/7203477/pexels-photo-7203477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                title={pantsData.price4}
                                content={pantsData.title4}
                                subtitleSpans={pantColor4}
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://sslimages.shoppersstop.com/sys-master/images/h29/hbb/29441780383774/FLWASCRGF294882_LIGHT_GREY.jpg_136Wx204H'
                                title={pantsData.price5}
                                content={pantsData.title5}
                                subtitleSpans={pantColor5}
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1551854838-212c50b4c184?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
                                title={pantsData.price6}
                                content={pantsData.title6}
                                subtitleSpans={pantColor6}
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1519211777646-3a7ccf759b64?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title={pantsData.price7}
                                content={pantsData.title7}
                                subtitleSpans={pantColor7}
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8'
                                title={pantsData.price8}
                                content={pantsData.title8}
                                subtitleSpans={pantColor8}
                            />
                        </div>
                    </span>
                    <span style={{ display: 'block', marginTop: '280px', marginBottom: '150px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://images.unsplash.com/photo-1602583459551-c0e623f7af36?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                title={pantsData.price9}
                                content={pantsData.title9}
                                subtitleSpans={pantColor9}
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://4.imimg.com/data4/MI/DF/MY-1863278/ladies-formal-trouser.jpg'
                                title={pantsData.price10}
                                content={pantsData.title10}
                                subtitleSpans={pantColor10}
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://mypamperedlifeseattle.com/cdn/shop/files/18720300_5462b370-7dbb-4004-b626-5dc635aee7ec.jpg?v=1691043970&width=533'
                                title={pantsData.price11}
                                content={pantsData.title11}
                                subtitleSpans={pantColor11}
                            />
                        </div>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            <ProductCard
                                imageUrl='https://rukminim2.flixcart.com/image/850/1250/xif0q/jean/1/e/6/28-mid-blue-skg-original-imagzf9hzv8thead.jpeg?q=20'
                                title={pantsData.price12}
                                content={pantsData.title12}
                                subtitleSpans={pantColor12}
                            />
                        </div>

                    </span>
                </div>
            )}



        </div>

    )
}