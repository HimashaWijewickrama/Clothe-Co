import { ProductCard } from '../components/productCard';
import { TitleText } from '../components/titleText';
import { Breadcrumber } from '../components/breadCrumber';

export const AccessoriesComponent = () => {
    return (

        <div className='container' style={{ marginBottom: '50px' }}>
            <TitleText title="fashion accessories" />
            <Breadcrumber title1='shop now' title2='fashion accessories'/>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Women's Tote Bags
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>
                        <div className="accordion-body">
                            {/* Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body. */}
                        </div>
                        <span style={{ display: 'block', marginTop: '30px' }}>

                            <div style={{ display: 'inline-block', marginRight: '20px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 9,750.00"
                                    content="vintage women floral designed leather handbag "
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1585488763177-bde7d15fd3cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8'

                                    title="LKR 6,500.00"
                                    content="SHEIN casual solid color crossbody bag"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1564139615082-01535600057f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xCWm9vd3pCOFI4MHx8ZW58MHx8fHx8'

                                    title="LKR 5,680.00"
                                    content="SHEIN Hand-held solid color leather bag "
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1585488433867-8eb24f59723c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8Qlpvb3d6QjhSODB8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 7,695.00"
                                    content="Casual leather two tone box crossbody bag"
                                />
                            </div>
                        </span>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Perfumes
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://plus.unsplash.com/premium_photo-1673823666050-bb56202cc9e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 4,550.00"
                                    content="Ceylon Rose Garden Island Rose Perfume - 100ml"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1561997835-49889d0e0355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
                                    title="LKR 10,500.00"
                                    content="Calvin Klein Be Unisex perfume - 100ml"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 95,800.00"
                                    content="CHANEL COCO MADEMOISELLE Wome's perfume - 100ml"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1610113233329-1c73b6f7fe98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
                                    title="LKR 84,900.00"
                                    content="N°5 CHANEL Paris Women's perfume - 1000ml"
                                />
                            </div>
                        </span>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Women's High Heels
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1579727027525-352607d8dc49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
                                    title="LKR 20,890.00"
                                    content="Light Blue Satin Block Heel with Satin Back Bow"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1578847857503-bed61186a57a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8'
                                    title="LKR 18,789.00"
                                    content="Open Toe Front Rear Strap Buckle With Sequin Chunky Heels"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1552419272-b0d8e736ea2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
                                    title="LKR 27,000.00"
                                    content="Kamello Classical Heel Stiletto Pumps"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1613987876445-fcb353cd8e27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 10,999.00"
                                    content="Flock Stripper Fetish Strappy Red Pumps"
                                />
                            </div>

                        </span>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Accessories
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'
                                    title="LKR 4,590.00"
                                    content="SHEIN Gold Plated Waterproofed Women Ring"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1641814250010-9887d86eedfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
                                    title="LKR 3,450.00"
                                    content="GALAXY Thin gold plated Waterproofed ring with stone"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1625792508272-bc6ad2788b14?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 3,250.00"
                                    content="SHEIN Classic white Peal Choker necklace - Limited Edition"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://plus.unsplash.com/premium_photo-1674255466849-b23fc5f5d3eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8'
                                    title="LKR 8,599.00"
                                    content="R&BLM Pearl Chain Necklace - Limited Edition "
                                />
                            </div>

                        </span>
                    </div>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        Scrunchies
                        </button>
                    </h2>
                    <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1595686220657-ed59f0f14510?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 175.00"
                                    content="SHEIN Multicolor rainbow satin hair tie scrunchie"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1629019581609-a1626ecfcc19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 200.00"
                                    content="ANBELA Satin Ribbon Hair Tie Scrunchie"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1672699323645-75ace776093e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 150.00"
                                    content="SHEIN Velvet Elastic Hair and hand tie Scrunchie"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1630081757603-a46d414be089?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 125.00"
                                    content="SAZZEL Silk Hair and Hand Tie Scrunchie"
                                />
                            </div>

                        </span>

                    </div>


                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        Women's Watches
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px', marginBottom: '100px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1655693488763-bba42128fbc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFkaWVzJTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D'
                                    title="LKR 7,899.00"
                                    content="White Dial Leather Mesh Band Quartz Wrist watch"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1653651461484-5c8ea009b1d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'
                                    title="LKR 80,000.00"
                                    content="TORY BURCH Women's Eleanor Goldtone Watch"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1655693487677-683764e20c08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8'
                                    title="LKR 48,000.00"
                                    content="JewelryWe Round Green Dial Analog Quartz Calendar Watch"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1655693489381-a7ae63269c48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
                                    title="LKR 56,000.00"
                                    content="Wrist Watch Steel Band Waterproof Calendar White Watch"
                                />
                            </div>

                        </span>
                    </div>

                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            Hats
                        </button>
                    </h2>
                    <div id="flush-collapseEight" className="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>

                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1585799357162-5ef26c702aba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 5,550.00"
                                    content="Off White Beach Hat With brown color Hem"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://plus.unsplash.com/premium_photo-1671149785230-bf9fc44e3829?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 3,650.00"
                                    content="Sundown bead trim hat with cute bow"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1583703779199-e6ed378df595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzN8NDUzMTY3OHx8ZW58MHx8fHx8'
                                    title="LKR 6,450.00"
                                    content="Summer Big Straw sun Protection Sun Hat with black bow"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1601980265524-04468b355ac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
                                    title="LKR 4,500.00"
                                    content="Futurekart Straw Sun Hat with Cute Bow"
                                />
                            </div>

                        </span>

                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingNine">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                        Women's Sneakers, Boots
                        </button>
                    </h2>
                    <div id="flush-collapseNine" className="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '300px' }}>


                        <span style={{ display: 'block', marginTop: '30px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D'
                                    title="LKR 85,000.00"
                                    content="Nike Air Force 1 AF1 W Shadow Pastel Blue Pink Ghost"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1656164753657-8ff832063a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8'
                                    title="LKR 48,550.00"
                                    content="Nike Air Force 1 Low 07 Retro Classic Low Top Board Shoes"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1591370409347-2fd43b7842de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxODA0MjI1Mnx8ZW58MHx8fHx8'
                                    title="LKR 20,000.00"
                                    content="Nike SB Blazer Mid Light British Tan Boots"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1656944227480-98180d2a5155?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 89,000.00"
                                    content="Nike Air Jordan 1 Low GS - Red / Black 553560-163 Youth"
                                />
                            </div>

                        </span>
                        <span style={{ display: 'block', marginTop: '300px' }}>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1602231379593-b85a472e3c99?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 79,000.00"
                                    content="Nike Air Jordan 1 Mid Light Smoke Grey Anthracite (GS) 554725-078"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1620138546344-7b2c38516edf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 69,999.00"
                                    content="Nike Air Max 90 White University Gold Trainers DC9845 101"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                            
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1610398752800-146f269dfcc8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 37,900.00"
                                    content="Joliss Women Warm Winter lock Heel Ankle Boots Round"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1462117580841-44df9d9d23fd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 18,680.00"
                                    content="LL Bean Women's Leather Lace-up Ankle Duck Boots"
                                />
                            </div>

                        </span>

                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTen">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                            Scarfs
                        </button>
                    </h2>
                    <div id="flush-collapseTen" className="accordion-collapse collapse" aria-labelledby="flush-headingTen" data-bs-parent="#accordionFlushExample" style={{ marginBottom: '200px' }}>


                        <span style={{ display: 'block', marginTop: '30px' }}>
                        <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://www.mexicaliblues.com/cdn/shop/products/printed_pareo_beach_cover_daylily_daydream.jpg?v=1679940192&width=1400'
                                    title="LKR 3,860.00"
                                    content="floral Printed Pareo Beach Cover Scarf"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://images.unsplash.com/photo-1602095319680-edfc5b44cf5e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                    title="LKR 4,799.00"
                                    content="LAVEN Printed Soft Linen Cotton Scarf"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://i.etsystatic.com/5509557/r/il/bf2000/3823986338/il_fullxfull.3823986338_8xyi.jpg'
                                    title="LKR 5,460.00"
                                    content="100% Silk floral painted Creamy Vanilla Silk Foulard Scarf"
                                />
                            </div>
                            <div style={{ display: 'inline-block', marginRight: '10px' }}>
                                <ProductCard
                                    imageUrl='https://www.mexicaliblues.com/cdn/shop/products/marbleized_lightweight_beach_cover_purple.jpg?v=1678991120&width=900'
                                    title="LKR 2,460.00"
                                    content="Marbleized Lightweight Beach Cover Scarf"
                                />
                            </div>
                 
                            
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}