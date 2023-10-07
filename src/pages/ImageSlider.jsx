import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//image import for slide
import palki from '../assets/1.png'
import entrance from '../assets/2.jpg'
import reception from '../assets/3.webp'
import cardecoration from '../assets/4.jpg'
import groom from '../assets/5.jpg'
import light from '../assets/6.jpeg'
import holud from '../assets/7.webp'

const ImageSlider = () => {
   

  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    autoplay={{delay:1000}}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
        <img src={palki} className='w-full md:w-3/4 h-[80vh] mx-auto' alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={entrance} className='w-full h-[80vh]' alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={reception} className='w-full h-[80vh]' alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={groom} className='w-full h-[80vh]' alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={light} className='w-full h-[80vh]' alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={cardecoration} className='w-full h-[80vh]' alt="" />
    </SwiperSlide>
    <SwiperSlide>
        <img src={holud} className='w-full h-[80vh]' alt="" />
    </SwiperSlide>
    
   
   
  </Swiper>
  );
};

export default ImageSlider;
