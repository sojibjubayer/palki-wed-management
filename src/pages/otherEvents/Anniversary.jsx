

const Anniversary = () => {
    return (
        <div>
            
    <div className="anniversary-party-page">
      <header>
        <h1 className="text-2xl md:text-3xl font bold text-center my-5  shadow-xl">Celebrate Your Special Anniversary</h1>
      </header>
      <div>
        <img className="w-full md:h-[80vh]" src="https://i.ibb.co/DRst4CF/anniversary.jpg" alt="" />
      </div>

      <section className="party-info">
        <h2 className="border-b-2 my-5 text-xl">About Anniversary Parties</h2>
        <p className="my-5">
          Anniversaries are a time to commemorate the love, commitment, and memories shared by two people. Whether its
          your first anniversary or a golden milestone, celebrating with an anniversary party can make the occasion even
          more memorable.
        </p>
      </section>

      <section className="party-planning">
        <h2 className="text-xl border-b-2 my-5">Planning Your Anniversary Party</h2>
        <p className="my-4">
          Planning an anniversary party requires attention to detail and thoughtful preparation. From selecting the
          perfect venue to curating a playlist of your favorite songs, our website is here to guide you through the
          entire planning process.
        </p>
      </section>

      <section className="party-tips">
        <h2 className="text-xl border-b-2 my-5">Top Anniversary Party Tips</h2>
        <ul className="list-disc my-5 ml-10">
          <li>Choose a meaningful theme or color scheme that reflects your relationship.</li>
          <li>Consider the guest list and whether it will be an intimate gathering or a larger celebration.</li>
          <li>Personalize the decorations and include elements that represent your journey together.</li>
          <li>Plan a special moment, such as a toast, a slideshow of memories, or a renewal of vows.</li>
          <li>Dont forget to capture the memories with photos and videos.</li>
        </ul>
      </section>

      <section className="my-5">
        <h2 className="text-xl border-b-2 my-5">Contact </h2>
        <p>
          If you need assistance planning your anniversary party or have any questions, please feel free to get in touch
          with us. Our dedicated team is here to help make your celebration unforgettable.
        </p>
        <p>Email: <span className="text-blue-600">info@anniversarypartyplanner.com</span></p>
        <p>Phone: 123-456-7890</p>
      </section>
    </div>


        </div>
    );
};

export default Anniversary;