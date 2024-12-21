import date from '../../assets/colorIcon/date.png'
const Contect = () => {
    return (
        <div className="bg-[#151515] rounded-xl px-10 py-16 text-white flex justify-around">
            <div className='flex gap-2'>
                <img src={date} className='w-16'/>
                <div>
                    <p className="text-base font-medium text-[#ffffff9f]">We are open monday-friday</p>
                    <p className="text-3xl font-semibold">7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <img src={date} className='w-16'/>
                <div>
                    <p className="text-base font-medium text-[#ffffff9f]">Have a Question?</p>
                    <p className="text-3xl font-semibold">+2546 251 2658</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <img src={date} className='w-16'/>
                <div>
                    <p className="text-base font-medium text-[#ffffff9f]">Need a repair? our address</p>
                    <p className="text-3xl font-semibold">Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default Contect;