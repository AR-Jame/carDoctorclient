import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import heroImg1 from '../../assets/images/banner/1.jpg';
import heroImg2 from '../../assets/images/banner/2.jpg';
import heroImg3 from '../../assets/images/banner/3.jpg';
const Hero = () => {
    const btn = 'hover:text-[#FF3811] text-white  bg-[#FF3811] border-transparent hover:border-[#FF3811] hover:bg-transparent btn btn-primary';
    const outlineBtn = 'hover:text-black text-white border border-white hover:border-black hover:bg-white btn btn-outline'
    return (
        <div className="">
            <Swiper
                effect={"fade"}
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay]}
                className="mySwiper"
            >
                {/* slide 1 */}
                <SwiperSlide>
                    <div className="md:h-[700px] h-auto relative rounded-lg">
                        <img src={heroImg1} className="object-cover w-full h-full" />
                        <div className="absolute rounded-lg flex justify-center gap-4 flex-col bg-gradient-to-r h-full w-full from-[#000000] via-[#0000006c] to-[#0000001e] top-1/2 pl-20 -translate-y-1/2 text-white">
                            <h4 className="text-6xl mb-2 font-bold">Affordable <br /> Price For Car <br />Servicing</h4>
                            <p>There are many variations of passages of  available, but the majority have <br /> suffered alteration in some form</p>
                            <div className="gap-4 flex">
                                <button className={btn}>Discover More</button>
                                <button className={outlineBtn}>Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide>
                    <div className="md:h-[700px] h-auto relative rounded-lg">
                        <img src={heroImg2} className="object-cover w-full h-full" />
                        <div className="absolute rounded-lg flex justify-center gap-4 flex-col bg-gradient-to-r h-full w-full from-[#000000] via-[#0000006c] to-[#0000001e] top-1/2 pl-20 -translate-y-1/2 text-white">
                            <h4 className="text-6xl mb-2 font-bold">We work <br /> With Trust <br />and loality</h4>
                            <p>There are many variations of passages of  available, but the majority have <br /> suffered alteration in some form</p>
                            <div className="gap-4 flex">
                                <button className={btn}>Discover More</button>
                                <button className={outlineBtn}>Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                    <div className="md:h-[700px] h-auto relative rounded-lg">
                        <img src={heroImg3} className="object-cover w-full h-full" />
                        <div className="absolute rounded-lg flex justify-center gap-4 flex-col bg-gradient-to-r h-full w-full from-[#000000] via-[#0000006c] to-[#0000001e] top-1/2 pl-20 -translate-y-1/2 text-white">
                            <h4 className="text-6xl mb-2 font-bold">Affordable <br /> Price For Car <br />Servicing</h4>
                            <p>There are many variations of passages of  available, but the majority have <br /> suffered alteration in some form</p>
                            <div className="gap-4 flex">
                                <button className={btn}>Discover More</button>
                                <button className={outlineBtn}>Latest Project</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Hero;