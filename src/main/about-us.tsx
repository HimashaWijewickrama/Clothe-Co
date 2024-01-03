import { CardGroup } from "../components/cardGroup"
import { SubTitleText } from "../components/subtitleText";
import { TitleText } from "../components/titleText"
import { branchData } from '../data/branchData';
import '../styles/about.css';

export const AboutUs = () => {
    return (
        <div className="container" id="aboutus">
            <TitleText title="about us" /><br />
            <div className="container" style={{ marginBottom: '100px' }}>
                <img src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="img-fluid"
                    alt="about-us"
                    style={{ display: 'flex' }}></img><br />
                <div className="common-text" style={{ position: 'absolute', textAlign: 'center', left: '40%', marginTop: '30px' }}>
                </div>
            </div>
            <div className="container" style={{ marginBottom: '100px' }}>
                <div className="card border-dark bg-light mb-3 card-hover" style={{ maxWidth: '50rem' }}>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Company Overview</h5>
                        <p className="card-text small text-muted" style={{ textAlign: 'justify' }}>Clothe Co. is a vibrant and curated destination for the modern woman,
                            offering a wide array of trendy clothing and accessories. Founded with a passion for empowering women
                            through fashion, our store aims to provide a unique shopping experience that celebrates individuality,
                            style, and confidence. With an emphasis on quality, affordability, and the latest fashion trends,
                            we strive to be the go-to destination for every woman looking to express her personality through her wardrobe.</p>
                    </div>

                </div>
                <div className="card border-dark bg-light mb-3 card-hover" style={{ maxWidth: '50rem', marginLeft: '500px', marginTop: '50px' }}>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Our Mission</h5>
                        <p className="card-text small text-muted" style={{ textAlign: 'justify' }}>
                            At Clothe Co., our mission is to inspire
                            and empower women to embrace their unique style and individuality. We aim to curate a diverse collection
                            of clothing and accessories that not only enhance fashion-forward looks but also instill confidence and
                            self-expression in every customer. Through exceptional customer service and a commitment to quality, we
                            endeavor to create a shopping environment that fosters joy, creativity,
                            and a sense of belonging for every woman who walks through our doors or visits us online.</p>
                    </div>

                </div>
                <div className="card border-dark bg-light mb-3 card-hover" style={{ maxWidth: '50rem', marginTop: '50px' }}>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Our Vision</h5>
                        <p className="card-text small text-muted" style={{ textAlign: 'justify' }}>
                            Our vision is to become a leading fashion hub recognized for its inclusivity, diversity, and innovation.
                            We aspire to continually evolve, staying ahead of fashion trends while remaining rooted in our dedication
                            to providing high-quality, versatile, and affordable clothing and accessories. We aim to build a community
                            where women feel empowered, confident, and inspired to explore and embrace their unique sense of style,
                            creating a lasting impact on the world of fashion and beyond.</p>
                    </div>

                </div>
            </div>
            <SubTitleText subtitle="our stores" />
            <p className="card-text fs-6 small text-muted" style={{ textAlign: 'center', marginBottom: '50px' }}>
                Welcome to our network of branches, where convenience meets personalized service
            </p>
            <div className="row row-cols-1 row-cols-md-6 g-4">
                {branchData.map(branch => (
                    <div key={branch.id} className="col">
                        <CardGroup
                            imageURL={branch.imageURL}
                            imageALT={branch.imageALT}
                            branchName={branch.branchName}
                            address={branch.address}
                            contactNumber={branch.contactNumber}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}