import React from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';

export const JumpsuitsComponent = () => {
    return (
        <div className='container' style={{ marginBottom: '50px'}}>
                                    <TitleText title="jumpsuits"/>

            <span style={{ display: 'block'}}>

            <div style={{ display: 'inline-block', marginRight: '20px' }}>
                <ProductCard
                    imageUrl='https://images.unsplash.com/photo-1675687631878-66002154d8ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title="First Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://plus.unsplash.com/premium_photo-1673758892849-70f04f4a0780?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

                    title="Second Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                                                    imageUrl='https://media.istockphoto.com/id/1172468078/photo/full-length-portrait-of-stylish-young-model-with-handbag-with-blue-and-red-background.jpg?s=612x612&w=0&k=20&c=fKnG9YWiZ_sK3ZMHx6yZ_H4Xi3PiOwL9epgEIoZ0gY4='

                    title="Third Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://media.istockphoto.com/id/1318502517/photo/beautiful-woman-in-evening-suit-front-of-white-background.jpg?s=612x612&w=0&k=20&c=nvXKD7Oh8-wv0LMkmUykFqIwQ0JSqTXoHq0Jft8_T2g='
                    title="fourth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            </span>
            <span style={{ display: 'block', marginTop: '200px'}}>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://plus.unsplash.com/premium_photo-1673758895104-060a75fa2e5d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title="Fifth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/13722335/pexels-photo-13722335.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    title="Sixth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/11664972/pexels-photo-11664972.jpeg?auto=compress&cs=tinysrgb&w=600'
                    title="Seventh Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/13219630/pexels-photo-13219630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Eighth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            </span>
            <span style={{ display: 'block', marginTop: '200px'}}>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/5137870/pexels-photo-5137870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Nineth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>

            </span>


        </div>

    )
}