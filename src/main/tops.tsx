import React from 'react';
import { ProductCard } from '../components/productCard';

export const TopsComponent = () => {
    return (
        <div className='container' style={{ marginBottom: '50px'}}>
            <span style={{ display: 'block'}}>

            <div style={{ display: 'inline-block', marginRight: '20px' }}>
                <ProductCard
                    imageUrl='https://media.istockphoto.com/id/1321444254/photo/young-woman-with-arms-raised-standing-against-sky.jpg?s=612x612&w=0&k=20&c=HPTxugxvKZXL9HZbAoQRQzaBu-lmxzAPuCJGtvgIMb0='
                    title="First Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl="https://images.pexels.com/photos/9558764/pexels-photo-9558764.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    title="Second Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.unsplash.com/photo-1520591799316-6b30425429aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title="Third Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/9558787/pexels-photo-9558787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="fourth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            </span>
            <span style={{ display: 'block', marginTop: '200px'}}>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/8053691/pexels-photo-8053691.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    title="Fifth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.unsplash.com/photo-1618677603544-51162346e165?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title="Sixth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/16048083/pexels-photo-16048083/free-photo-of-woman-posing-in-sunglasses-and-green-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Seventh Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/9558777/pexels-photo-9558777.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    title="Eighth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            </span>
            <span style={{ display: 'block', marginTop: '200px'}}>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/6311612/pexels-photo-6311612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Nineth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/16048099/pexels-photo-16048099/free-photo-of-standing-woman-posing-with-t-shirt-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    title="Tenth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.unsplash.com/photo-1644483878406-bc4a2f63de83?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    title="Elevanth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/6774356/pexels-photo-6774356.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    title="Twelveth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            </span>


        </div>

    )
}