import parts from '../../assets/images/about_us/parts.jpg'
import person from '../../assets/images/about_us/person.jpg'
const AboutUs = () => {
    return (
        <div className='flex mb-8 justify-between xl:gap-52 px-10'>
            <div className='relative border'>
                <img src={person} className='w-[500px] h-[500px] object-cover rounded-xl' />
                <img src={parts} className='w-[400px] h-[400px] object-cover rounded-xl border-[12px] border-white absolute -bottom-1/4 -right-[100px]' />
            </div>

            <div className='flex-1'>
                <h4 className='font-bold text-[#FF3811] text-xl'>About Us</h4>
                <h2 className='text-5xl font-bold leading-tight'>We are qualified & <br /> of experience <br /> in this field</h2>
                <p className='text-lg mt-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <p className='text-lg mt-7'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button className='hover:text-[#FF3811] text-white  bg-[#FF3811] border-transparent mt-10 hover:border-[#FF3811] hover:bg-transparent btn btn-primary'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;