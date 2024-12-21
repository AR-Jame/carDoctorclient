import { useContext } from 'react';
import login from '../assets/images/login/login.svg';
import google from '../assets/media/google.png'
import { AuthContext } from './Authentication/AuthProvider';
const Login = () => {
    const {passwordSignIn} = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        passwordSignIn(email, password)
        .then((result) => {
            console.log(result.user);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <div className='flex min-h-[89vh] items-center justify-between lg:mx-[15%]'>
            <div className='flex-1'>
                <img src={login} />
            </div>
            <div className="flex-1">
                <div className="bg-white text-gray-800 rounded-lg border p-12 w-full max-w-lg">
                    <h2 className="text-4xl font-semibold text-center mb-8">Log In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-lg font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                placeholder="Your email"
                                className="w-full px-5 py-3 text-gray-800 text-lg rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="confirm-password"
                                className="block text-lg font-medium mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name='password'
                                placeholder="Your password"
                                className="w-full px-5 py-3 text-gray-800 text-lg rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#ff3811] text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="text-center my-8 text-lg text-gray-500">Or Sign Up with</div>
                    <div className="flex justify-center gap-6">
                        <button className="bg-gray-100 rounded-full p-4 shadow-md">
                            <img src="/facebook-icon.png" alt="Facebook" className="w-8 h-8" />
                        </button>
                        <button className="bg-gray-100 rounded-full p-4 shadow-md">
                            <img src="/linkedin-icon.png" alt="LinkedIn" className="w-8 h-8" />
                        </button>
                        <button className="bg-gray-100 rounded-full p-4">
                            <img src={google} alt="Google" className="w-8 h-8" />
                        </button>
                    </div>
                    <p className="text-center mt-8 text-lg">
                        New to Car Doctor?{" "}
                        <a href="/register" className="text-orange-500 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;