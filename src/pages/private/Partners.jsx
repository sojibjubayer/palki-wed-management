

const Partners = () => {
    const partners = [
        {
            id: 1,
            name: 'Royal Wedding',
            description: 'Exquisite catering services for weddings and events.',
            contact: 'Contact: John Smith - 666-543678',
            website: 'Website: www.royalelegantcatering.com',
            image: 'https://i.ibb.co/ypsJWy3/royalWed.jpg',
        },
        {
            id: 2,
            name: 'Wedding Planner',
            description: 'Creating stunning floral arrangements for weddings.',
            contact: 'Contact: Sarah Johnson - 555-231456',
            website: ' www.blossomfloristswedding.com',
            image: 'https://i.ibb.co/C6CKkT0/planner.jpg',
        },

    ];




    return (
        <div>
            <div className="text-center border-b-2  my-5">
                <h2 className="p-2 font-semibold text-2xl md:text-3xl bg-black rounded text-yellow-400">
                    Our Preferred Partners</h2>
                <p className="shadow-xl ">
                    These are some of our trusted partners who can help make your wedding day truly special.
                </p>
            </div>

            <div className="partner-list">
                {partners.map((partner) => (
                    <div key={partner.id} className="partner-card">
                        <div className="my-5 border border-lime-400 rounded p-2 text-center ">
                            <img className="block w-[200px] h-[200px] rounded-full mx-auto" src={partner.image} alt={partner.name} />

                            <h2 
                            className="mt-5 bg-black w-[200px] rounded mx-auto text-yellow-400">
                                {partner.name}</h2>
                            <p>{partner.description}</p>
                            <p>{partner.contact}</p>
                            <p className="mb-5 ">Website: <span className="text-blue-500 ">{partner.website}</span></p>

                        </div>
                    </div>
                ))}
            </div>
        </div>




    );
};

export default Partners;