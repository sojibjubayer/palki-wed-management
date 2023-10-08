
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const OtherEvents = ({ event }) => {
    const {id, name, image, short_details } = event;
    return (
        <div>
            <div className="card card-compact w-96 bg-yellow-400 shadow-xl">
                <figure><img data-aos="zoom-in" data-aos-duration="2000" src={image} className='h-[250px] w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_details}</p>
                    <div>
                    </div>
                    <div className="card-actions ">
                        <Link to={`/${id}`}>
                            <button className="btn bg-pink-600 text-white w-full hover:text-green-500 ">View Details</button>
                        </Link>
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
