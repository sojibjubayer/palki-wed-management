import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import EventCards from "./EventCards";
import ImageSlider from "./ImageSlider";
import OtherEvents from "./otherEvents/OtherEvents";
import Accordion from "./accordion/Accordion";





const Home = () => {
    const events = useLoaderData('wedding_event.json');

    return (
        <div className="mt-5">
            <div className="relative">
                <ImageSlider></ImageSlider>
            </div>
            <div>
                <h2 className="mt-10 text-2xl md:text-3xl font-bold p-2 rounded-sm text-white bg-pink-600 md:w-1/4">Our Services</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>

                {
                    events?.slice(0, 6).map(event => <EventCards key={event.id} event={event}></EventCards>)
                }
            </div>
            {/* other services  */}



            <h2 className="mt-10 text-2xl md:text-3xl font-bold p-2 rounded-sm text-pink-600 bg-white border border-yellow-600 md:w-1/4">Our Other Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 py-7'>
                {
                    events?.slice(-3).map(event => <OtherEvents key={event.id} event={event}></OtherEvents>)
                }
            </div>

            {/* ACCORDION  */}
            <Accordion></Accordion>


            <Helmet>
                <title>Palki | Home </title>
            </Helmet>
        </div>
    );
};

export default Home;