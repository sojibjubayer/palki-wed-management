

const Birthday = () => {
    return (
        <div>

            <div className="">
                <header>
                    <h1 className="text-2xl md:text-3xl text-center font-bold p-2 shadow-xl my-5">Welcome to Happy Birthday Party Planner</h1>
                    <p className="text-center italic my-3">Your Premier Destination for Memorable Birthday Celebrations</p>
                </header>
                <div>
                    <img className="md:h-[80vh] w-full" src="https://i.ibb.co/CHY03hG/birthday.jpg" alt="" />
                </div>

                <section className="my-5">
                    <h2 className="p-2  border-b-2">About Us</h2>
                    <p className="my-5">
                        At Happy Birthday Party Planner, we specialize in creating unforgettable birthday experiences. Whether its a childs first birthday or a milestone celebration, we make every moment memorable.
                    </p>
                </section>

                <section className="services">
                    <h2 className="border-b-2 mb-4">Our Services</h2>
                    <ul>
                        <li>Custom Party Themes</li>
                        <li>Balloon Decorations</li>
                        <li>Cake and Dessert Selection</li>
                        <li>Entertainment and Games</li>
                        <li>Party Planning and Coordination</li>
                    </ul>
                </section>

                

                <section className="mb-5">
                    <h2 className="border-b-2 my-4">Contact </h2>
                    <p>If you are ready to create magical birthday memories, contact us today. Our experienced team is here to turn your vision into reality.</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: <span className="text-blue-600">info@happybirthdayplanner.com</span></p>

                </section>

                
            </div>




        </div>
    );
};

export default Birthday;