

const ContactUs = () => {
    return (
        <div>


            <div className="contact-us">
                <h1 className="text-2xl my-5 text-center underline">Contact Us</h1>
                <p className="text-center mb-3 italic">If you have any questions or feedback, please feel free to contact us using the form below:</p>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-2xl font-bold">Fill the form & submit</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-pink-600">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;