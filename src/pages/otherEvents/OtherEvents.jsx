
import PropTypes from 'prop-types';


const OtherEvents = ({event}) => {
    const {name,image,short_details,price} = event;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img data-aos="zoom-in" data-aos-duration="2000" src={image} className='h-[250px] w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_details}</p>
                    <div>
                        <p className='p-2 rounded text-white font-semibold bg-pink-500 w-2/3 '>Price starts from: {price} TK </p>
                    </div>
                    <div className="card-actions ">
                        <button className="btn bg-yellow-400 text-white w-full hover:text-green-500">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

OtherEvents.propTypes = {
    event: PropTypes.object
};

export default OtherEvents;
