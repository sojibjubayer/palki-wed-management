import { useEffect, useState } from 'react';
import reviewBanner from '../assets/review.jpg'


const Reviews = () => {


    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        fetch('reviews.json')
            .then((response) => response.json())
            .then((data) => {
                setReviews(data); 
                setIsLoading(false); 
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false); 
            });
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='my-5'>
                <img src={reviewBanner} alt="" />
            </div>
            <h2 className='text-2xl md:text-3xl text-center my-5 shadow-lg'>Reviews From Our Valuable Customers:</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <div className='border border-pink-600 p-4 my-5 rounded-xl'>
                            <div className='flex items-center'>
                                <div>
                                    <img src={review.image} alt="" />
                                </div>
                                <div>
                                <h3 className='font-semibold'>{review.name}</h3>
                                <p>{review.address}</p>
                                </div>
                            </div>
                            <div>
                                <p> <span className='bg-pink-500 rounded mr-2 p-1 text-white'>Comment:</span> {review.comment}</p>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}





export default Reviews;