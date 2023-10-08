import entrance from '../../assets/2.jpg'

const EntranceDecoration = () => {
    return (
        <div>

            <div className=" ">
                <header>
                    <h2 className="text-3xl font-bold text-center py-4">Welcome to Elegant Entryways</h2>
                </header>
                <div className='flex justify-center w-full h-[70vh]'>
                    <img src={entrance} alt="mehendi" />
                </div>
                <section className=" my-5 flex justify-center">
                    <h2 className='bg-pink-500 p-2 rounded w-96  text-xl font-semibold text-center flex items-center justify-center mr-5'>About Us</h2>
                    <p className='my-3'>
                        At Elegant Entryways, we specialize in creating stunning and memorable wedding entrance decorations that leave a lasting impression on your guests. With years of experience and a passion for creativity, we are dedicated to making your wedding day truly special.
                    </p>
                </section>
                <section className="services">
                    <h2 className='bg-pink-300 p-2 rounded w-full  text-xl font-semibold text-center'>Our Services</h2>
                    <ul className='text-center my-3'>
                        <li><button className='btn bg-yellow-400 w-[300px] my-1'>Customized Entrance Decorations</button></li>
                        <li><button className="btn bg-yellow-400 w-[300px]">Theme-Based Designs</button></li>
                        <li><button className="btn bg-yellow-400 w-[300px] my-1">Floral Arrangements</button></li>
                        <li><button className="btn bg-yellow-400 w-[300px]">Luxury and Elegance</button></li>
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

export default EntranceDecoration;