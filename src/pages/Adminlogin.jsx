import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Appcontext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
    const { backendURL, setatoken } = useContext(AppContext)
    const navigate = useNavigate()

    const [inp, setinp] = useState({
        email: "", password: ""
    })
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = inp
            if (!email || !password) {
                return toast.warning('Please fill email and password')
            }
            
            setLoading(true);
            const response = await axios.post(`${backendURL}/adminlogin`, inp)
            
            if (response.status === 200) {
                localStorage.setItem('atoken', response.data.token)
                setatoken(response.data.token)
                toast.success('Login successful')
                navigate('/admin/dashboard')
            }
        }
        catch (err) {
            console.log(err.response);
            toast.error(err.response?.data || 'Login failed')
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex min-h-[calc(100vh-200px)] bg-neutral-50 items-center justify-center p-4'>
            <div className="w-full max-w-sm bg-white border border-neutral-300 shadow-sm">
                
                <div className="bg-primary-600 text-white px-4 py-3 font-bold uppercase text-sm border-b-2 border-primary-800 text-center">
                    Administrator Portal
                </div>
                
                <div className="p-6">
                    <p className="text-neutral-600 text-xs text-center mb-6">
                        Authorized personnel only. Please enter your credentials to manage the portal.
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Email ID</label>
                            <input 
                                onChange={(e) => setinp({ ...inp, email: e.target.value })} 
                                value={inp.email} 
                                placeholder="Enter Admin Email" 
                                className="w-full bg-white border border-neutral-300 p-2 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" 
                                type="email" 
                                required 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider">Password</label>
                            <input 
                                onChange={(e) => setinp({ ...inp, password: e.target.value })} 
                                value={inp.password} 
                                placeholder="Enter Password" 
                                className="w-full bg-white border border-neutral-300 p-2 text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500" 
                                type="password" 
                                required 
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-primary-600 text-white py-2 text-sm font-bold uppercase hover:bg-primary-700 transition-colors border border-primary-800 shadow-sm mt-4 disabled:opacity-70"
                        >
                            {loading ? "Authenticating..." : "Secure Login"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Adminlogin
