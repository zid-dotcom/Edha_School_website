import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Appcontext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const Adminlogin = () => {
    const [state, setState] = React.useState("login");
    const { backendURL, atoken, setatoken } = useContext(AppContext)
    const navigate=useNavigate()

    const [inp, setinp] = useState({
        email: "", password: ""
    })


    const handleLogin = async () => {
        try {

            const { email, password } = inp
            if (!email || !password) {
                return toast.warning('please fill email and password')

            } else {
                const response = await axios.post(`${backendURL}/adminlogin`, inp)
                console.log(response);
                if (response.status == 200) {
                    localStorage.setItem('atoken', response.data.token)
                    setatoken(response.data.token)



                    toast.success('admin login successfully')
                    navigate('/admin/dashboard')

                }



            }




        }
        catch (err) {
            console.log(err.response);

            toast.error(err.response.data)




        }
    }
    return (
        <div className='flex  min-h-screen'>

            <div className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
                <p className="text-2xl font-medium m-auto">
                    <span className="text-indigo-500">Admin</span> Login
                </p>

                <div className="w-full ">
                    <p>Email</p>
                    <input onChange={(e) => setinp({ ...inp, email: e.target.value })} value={inp.email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
                </div>
                <div className="w-full ">
                    <p>Password</p>
                    <input onChange={(e) => setinp({ ...inp, password: e.target.value })} value={inp.password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
                </div>

                <button onClick={handleLogin} className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                    Login
                </button>
            </div>
        </div>

    )
}

export default Adminlogin
