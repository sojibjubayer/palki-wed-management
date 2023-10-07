import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import EventCards from "./EventCards";



const Home = () => {
    const events = useLoaderData();
    console.log(events);
    return (
        <div className="">
            <div>
                <h2 className="mt-10 text-3xl font-bold p-2 rounded-sm text-white bg-pink-600 md:w-1/4">Our Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>

                {
                    events?.map(event => <EventCards key={event.id} event={event}></EventCards>)
                }
            </div>

            <Helmet>
                <title>Palki | Home </title>
            </Helmet>
        </div>
    );
};

export default Home;