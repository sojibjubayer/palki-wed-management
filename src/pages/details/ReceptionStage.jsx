import stage from '../../assets/stage.jpg'

const ReceptionStage = () => {
    return (
        <div>
            <div className=" ">
                <header>
                    <h2 className="text-3xl font-bold text-center py-4">Welcome to Grand Stage Creations</h2>
                </header>
                <div className='flex justify-center w-full h-[70vh]'>
                    <img src={stage} alt="mehendi" />
                </div>
                <section className=" my-5 flex justify-center">
                    <h2 className='bg-pink-500 p-2 rounded w-96  text-xl font-semibold text-center flex items-center justify-center mr-5'>About Us</h2>
                    <p className='my-3'>
                    At Grand Stage Creations, we are dedicated to making your special day even more magical with our exquisite reception stage decorations. With a passion for creativity and an eye for detail, 
                    we create stunning stage setups that will leave a lasting impression and your guests.
                    </p>
                </section>
                <section className="services">
                    <h2 className='bg-pink-300 p-2 rounded w-full  text-xl font-semibold text-center'>Our Services</h2>
                    <ul className='text-center my-3'>
                        <li><button className='btn bg-yellow-400 w-[300px] my-1'>Custom Stage Designs</button></li>
                        <li><button className="btn bg-yellow-400 w-[300px]">Themed Stage Decor</button></li>
                        <li><button className="btn bg-yellow-400 w-[300px] my-1">Luxurious Backdrops</button></li>
                        <li><button className="btn bg-yellow-400 w-[300px]">Floral and Lighting Arrangements</button></li>
                        <li><button className="btn bg-yellow-400 w-[300px] my-1">Professional Setup</button></li>
                    </ul>
                </section>


                <p className='p-2 rounded  font-semibold bg-pink-300 w-full italic text-center'>We have different price package.Please contact us for details. </p>


                <section className=" my-5 flex justify-center">
                    <h2 className='bg-pink-500 p-2 rounded w-96  text-xl font-semibold text-center flex items-center justify-center mr-5'>What Our <br /> Clients Say</h2>
                    <p className='my-3'>
                        They made our Wedding Entrance Decoration truly magical.The attention to details was exceptional and every moment was perfect.We appreciate there sacrifice to make the event awesome. <span className='bg-pink-200'>John and Sarah, Happy Clients</span>
                    </p>
                </section>

            </div>
        </div>
    );
};

export default ReceptionStage;