// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

// //image import for slide
// import palki from '../assets/1.png'
// import entrance from '../assets/2.jpg'
// import reception from '../assets/3.webp'
// import cardecoration from '../assets/4.jpg'
// import groom from '../assets/5.jpg'
// import light from '../assets/6.jpeg'
// import holud from '../assets/7.webp'

// const ImageSlider = () => {
   

//   return (
//     <Swiper className='h-full'
//     // install Swiper modules
//     modules={[Navigation, Pagination, Scrollbar, A11y]}
//     spaceBetween={50}
//     slidesPerView={1}
//     navigation
//     pagination={{ clickable: true }}
//     scrollbar={{ draggable: true }}
//     autoplay={{delay:1000}}
//     onSwiper={(swiper) => console.log(swiper)}
//     onSlideChange={() => console.log('slide change')}
//   >
//     <SwiperSlide className=''>
//         <img data-aos="fade-up" data-aos-duration="2000"  src={palki} className='w-full md:w-3/4 md:h-[80vh] mx-auto relative' alt="" />
//     </SwiperSlide>
//     <SwiperSlide>
//         <img  src={entrance} className='w-full md:h-[80vh] ' alt="" />
//     </SwiperSlide>
//     <SwiperSlide>
//         <img src={reception} className='w-full md:h-[80vh]' alt="" />
//     </SwiperSlide>
//     <SwiperSlide>
//         <img src={groom} className='w-full md:h-[80vh]' alt="" />
//     </SwiperSlide>
//     <SwiperSlide>
//         <img src={light} className='w-full md:h-[80vh]' alt="" />
//     </SwiperSlide>
//     <SwiperSlide>
//         <img src={cardecoration} className='w-full md:h-[80vh]' alt="" />
//     </SwiperSlide>
//     <SwiperSlide>
//         <img src={holud} className='w-full md:h-[80vh]' alt="" />
//     </SwiperSlide>
    
   
   
//   </Swiper>
//   );
// };

// export default ImageSlider;





import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    'https://i.ibb.co/93h9dPL/groom-Bride.jpg',
    'https://i.ibb.co/93h9dPL/groom-Bride.jpg',
    'https://i.ibb.co/93h9dPL/groom-Bride.jpg',
    'https://i.ibb.co/93h9dPL/groom-Bride.jpg',
    
  ];

  const CustomPrevArrow = (props) => (
    <button {...props} className="custom-arrow custom-prev">
      Previous
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="custom-arrow custom-next">
      Next
    </button>
  );

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="slider-arrows">
        <CustomPrevArrow />
        <CustomNextArrow />
      </div>
    </div>
  );
};

export default ImageSlider;
