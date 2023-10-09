import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
// import { sendEmailVerification } from "firebase/auth";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('')
    const [showPassword, setShowPassword] = useState(false)


    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
         e.target.reset();
        setRegisterError('')
        

      
        if (password.length < 6) {
            setRegisterError('password should be al least 6 characters')
            toast.error('password should be al least 6 characters')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('password should have al least one UpperCase characters')
            return;

        }
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|]/.test(password)) {
            toast.error('password should have al least one special characters')
            return;

        }

        // 

        // after getting craete user from usecontext now calling it
        createUser(email, password)
            .then((result) => {
                console.log(result.user)
                toast.success('user created successfully')
                // update profile
                updateProfile(result.user,{
                    displayName:name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then(()=>console.log('user craeted successfully'))
                .catch()
            }
            )
            .catch((error) => {
                console.error(error)

                toast.error('User already exist !')


            })
    }

    //check success or error
    const handleRegistryMessage = () => {

    }

    return (
        <div>
            <div className="hero min-h-screen bg-yellow-400">
                <div className="hero-content flex-col bg-pink-600 rounded">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold text-white">Please Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type={
                                            showPassword ?
                                                'text'
                                                :
                                                'password'
                                        }
                                        name="password" placeholder="password" className="input input-bordered w-full" required />
                                    <span onClick={() => setShowPassword(!showPassword)}
                                        className="btn btn-sm absolute right-9">
                                        {
                                            !showPassword ?
                                                <FaRegEye />
                                                :
                                                <FaRegEyeSlash />
                                        }
                                    </span>
                                </div>
                               
                            </div>
                            {/* terms and conditions */}
                            <div className=" flex">
                                <input className="mr-3" type="checkbox" name="terms" id="terms" required />
                                <span className="label-text">Accept <a className="text-blue-600" href="">Terms & Conditions</a></span>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleRegistryMessage} className="btn btn-primary">Register</button>
                            </div>
                            <Link to='/login'>
                                <p>Already Registered? Please <span className="text-blue-600">Login</span></p>
                            </Link>
                            <div>
                                <Toaster
                                    position="top-center"
                                />

                            </div>
                            <p className="text-red-400">{registerError}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;