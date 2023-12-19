import React from 'react';
import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';

export const TwoPiecesComponent = () => {
    return (
        <div className='container' style={{ marginBottom: '50px'}}>
            <TitleText title='two piece sets'/>
            <span style={{ display: 'block'}}>

            <div style={{ display: 'inline-block', marginRight: '20px' }}>
                <ProductCard
                    imageUrl='https://images.unsplash.com/photo-1584998316204-3b1e3b1895ae?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title="First Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl="https://images.pexels.com/photos/15686362/pexels-photo-15686362/free-photo-of-studio-shot-of-model-in-pants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    title="Second Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.unsplash.com/photo-1691154928997-5d839847e4e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title="Third Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/18550230/pexels-photo-18550230/free-photo-of-young-woman-in-blouse-and-white-pants-posing-on-sidewalk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="fourth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            </span>
            <span style={{ display: 'block', marginTop: '200px'}}>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/7203488/pexels-photo-7203488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Fifth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://media.istockphoto.com/id/1041662604/photo/full-length-view-of-beautiful-fashionable-woman-posing-and-looking-at-camera-on-grey.jpg?s=612x612&w=0&k=20&c=hvdYKJSkVGeYmzX-gTn9GpyhKKuiKJRR0rh5VGk3gJo='
                    title="Sixth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/10547922/pexels-photo-10547922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Seventh Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            
            </span>


        </div>

    )
}