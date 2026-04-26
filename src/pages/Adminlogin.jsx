import React, { useContext, useState } from 'react'
import { AppContext } from '../context/Appcontext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight } from 'lucide-react';

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
        <div className='flex min-h-screen bg-neutral-50 items-center justify-center p-4 relative overflow-hidden'>
            {/* Background Decorations */}
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary-200 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-200 rounded-full blur-[100px] opacity-50"></div>

            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 p-8 md:p-10 relative z-10">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary-100">
                        <Lock className="w-8 h-8 text-primary-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-neutral-900 mb-2">
                        Admin Portal
                    </h1>
                    <p className="text-neutral-500 text-sm">
                        Enter your credentials to access the dashboard
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Mail className="w-5 h-5 text-neutral-400" />
                            </div>
                            <input 
                                onChange={(e) => setinp({ ...inp, email: e.target.value })} 
                                value={inp.email} 
                                placeholder="admin@example.com" 
                                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-neutral-900" 
                                type="email" 
                                required 
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-700">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Lock className="w-5 h-5 text-neutral-400" />
                            </div>
                            <input 
                                onChange={(e) => setinp({ ...inp, password: e.target.value })} 
                                value={inp.password} 
                                placeholder="••••••••" 
                                className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all text-neutral-900" 
                                type="password" 
                                required 
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-neutral-900 text-white py-3.5 rounded-xl font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
                    >
                        {loading ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                            <>
                                Sign In
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Adminlogin
