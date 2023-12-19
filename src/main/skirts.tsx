import React from 'react';
import { ProductCard } from '../components/productCard';

export const SkirtsComponent = () => {
    return (
        <div className='container' style={{ marginBottom: '50px'}}>
            <span style={{ display: 'block'}}>

            <div style={{ display: 'inline-block', marginRight: '20px' }}>
                <ProductCard
                    imageUrl='https://media.istockphoto.com/id/1249944450/photo/women-skirt.jpg?s=612x612&w=0&k=20&c=W62ntdmUKTb2kqD2EnEFDPIij-CwhaeaMSDiE8fD_Mw='
                    title="First Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl="https://images.unsplash.com/photo-1594633313515-7ad9334a2349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
                    title="Second Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/9768446/pexels-photo-9768446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Third Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/4663319/pexels-photo-4663319.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    title="fourth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            </span>
            <span style={{ display: 'block', marginTop: '200px'}}>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/14913695/pexels-photo-14913695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Fifth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/15486310/pexels-photo-15486310/free-photo-of-woman-walking-barefoot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Sixth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://images.pexels.com/photos/7879787/pexels-photo-7879787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    title="Seventh Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://media.istockphoto.com/id/1426465371/photo/serie-of-studio-photos-of-attractive-young-female-model-wearing-black-blouse-and-leopard.jpg?s=612x612&w=0&k=20&c=ZXUjP-28hYQTTG0MGuXEVbRTsBPegY6AZsyn0AOstmw='
                    title="Eighth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            </span>
            <span style={{ display: 'block', marginTop: '200px'}}>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://media.istockphoto.com/id/1426465015/photo/serie-of-studio-photos-of-attractive-young-female-model-wearing-elegant-white-silk-satin.jpg?s=612x612&w=0&k=20&c=pxXcXc-KU0Y6bL11wscJPS_xnFDqKy4qkZChWOiLwEI='
                    title="Nineth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://media.istockphoto.com/id/1249944480/photo/women-skirt.jpg?s=612x612&w=0&k=20&c=dd3C7Z-tSQh81Nkl0FgdSJAZ5-zplxXNfcvuWNukxVM='
                    title="Tenth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://media.istockphoto.com/id/1426466124/photo/serie-of-studio-photos-of-attractive-young-female-model-wearing-black-blouse-and-geometric.jpg?s=612x612&w=0&k=20&c=f5jTt9YJCGKCxQqGc2aXTE6JveOH5pCOVUJit8YKe5s='
                    title="Elevanth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                <ProductCard
                    imageUrl='https://media.istockphoto.com/id/1225543198/photo/women-skirt.jpg?s=612x612&w=0&k=20&c=MP9wlpoIivwaj3Iumski-yyGIXjFx3DFSWNqU4mcLlc='
                    title="Twelveth Product"
                    content="Description of the second product."
                    navigate="Go to another place"
                />
            </div>
            </span>


        </div>

    )
}