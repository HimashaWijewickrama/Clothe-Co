import React, { useState } from 'react';
import { TitleText } from "../components/titleText";
import { ReviewCard } from "../components/reviewCard";
import { Breadcrumber } from "../components/breadCrumber";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export const CustomerReview = () => {

    const reviews = [
        {
            header: "Comfortable!",
            content: "Nicely fitting comfortable dress. More attractive colors on the store!",
            author: "Vasana Perera"
        },
        {
            header: "Awesome Product!",
            content: "Deliver on time.. I'm really happy because I get all the designs that matches me. I highly recommend this is the best clothing store I ever experience both in store and online shopping",
            author: "Vinoliya"
        },
        {
            header: "Look Great!",
            content: "I ordered yesterday and I received my package today.! Thank you so much..",
            author: "Alaxan Alax"
        },
        {
            header: "Good Quality",
            content: "My first order here. Fast delivery and same as the picture!",
            author: "Sandunika Madhushani"
        },
        {
            header: "Highly Recommend",
            content: "I got my package yesterday.. It looks good! Thank you so much Clothe Co. ❤️",
            author: "Himasha "
        }
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [nextActive, setNextActive] = useState(false);
    const [previousActive, setPreviousActive] = useState(false);

    const handleNext = () => {
        if (startIndex + 4 < reviews.length) {
            setStartIndex(startIndex + 1);
            setNextActive(true);
            setPreviousActive(false);
        }
    };

    const handlePrevious = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
            setNextActive(false);
            setPreviousActive(true);
        }
    };

    return (
        <div className='container' style={{ marginBottom: '150px' }}>
            <TitleText title="customer reviews" />
            <Breadcrumber title1='Home' title2='Customer reviews' />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
                    border: '1px solid #f6f6f6',
                    // backgroundColor: '#F8F9FA',
                    backgroundColor: previousActive ? '#d6d6d6' : '#f8f8f8',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '20px',
                }}>
                <GrPrevious size={40} onClick={handlePrevious} /></div>

                {reviews.slice(startIndex, startIndex + 4).map((review, index) => (
                    <div key={index} style={{ display: 'inline-block', marginRight: '30px' }}>
                        <ReviewCard
                            header={review.header}
                            content={review.content}
                            author={review.author}
                        />
                    </div>
                ))}

                <div className="nextButton" style={{
                    border: '1px solid #f6f6f6',
                    backgroundColor: nextActive ? '#d6d6d6' : '#F8F8F8',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                    <GrNext size={40} onClick={handleNext} /></div>
            </div>
        </div>
    );
};
