import google from '../assets/media/google.png'
import image from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from './Authentication/AuthProvider';
const Register = () => {
    const {passwordSignUp, user} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        passwordSignUp(email, password)
        .then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.log(err);
        });
        console.log(user);
    };
    return (
        <div className='min-h-[89vh] flex items-center justify-center mx-[15%]'>
            <div className='flex-1'>
                <img src={image} />
            </div>
            <div className="flex-1">
                <div className="bg-white text-gray-800 rounded-lg shadow-lg p-12 w-full max-w-lg">
                    <h2 className="text-4xl font-semibold text-center mb-8">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-lg font-medium mb-2">
                                Name
                            </label>
                            <input
                                name='name'
                                type="text"
                                id="name"
                                placeholder="Your name"
                                className="w-full px-5 py-3 text-gray-800 text-lg rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff3811]"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-lg font-medium mb-2">
                                Email
                            </label>
                            <input
                                name='email'
                                type="email"
                                id="email"
                                placeholder="Your email"
                                className="w-full px-5 py-3 text-gray-800 text-lg rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff3811]"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="confirm-password"
                                className="block text-lg font-medium mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                name='password'
                                type="password"
                                id="confirm-password"
                                placeholder="Your password"
                                className="w-full px-5 py-3 text-gray-800 text-lg rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#ff3811]"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#ff3811] text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="text-center my-8 text-lg font-bold text-gray-500">Or Sign Up with</div>
                    <div className="flex justify-center gap-6">
                        <button className="bg-gray-100 rounded-full p-4 shadow-md">
                            <img src="/facebook-icon.png" alt="Facebook" className="w-8 h-8" />
                        </button>
                        <button className="bg-gray-100 rounded-full p-4 shadow-md">
                            <img src="/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8" />
                        </button>
                        <button className="bg-gray-100 rounded-full p-4 shadow-md">
                            <img src={google} alt="Google" className="w-8 h-8" />
                        </button>
                    </div>
                    <p className="text-center mt-8 text-lg">
                        Already have an account?{" "}
                        <a href="/login" className="text-[#ff3811] hover:underline">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;