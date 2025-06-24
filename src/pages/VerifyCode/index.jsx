import logo from "../../assets/ENVIFO.png";
import { Layout } from "../../components/Layout";
import { NavLink } from "react-router";

const VerifyCode = () => {
    return (
        <Layout>
            <div className="w-[600px] h-[600px] bg-white rounded-2xl shadow-lg flex flex-col items-center gap-3">
                <div className="w-[80%] h-[60px] flex justify-between m-6">
                    <img src={logo} alt="Envifo Logo" className="w-[60px]" />
                    <NavLink to="/forgot-password" className="w-[60px] h-[60px] bg-orange-500 rounded-full hover:bg-orange-400">< i className='bx bx-arrow-big-left-line w-full h-full text-3xl text-white p-[13px]' ></i></NavLink>
                </div>
                <h1 className="mt-[40px] text-[#333] font-semibold text-2xl">Recover your password</h1>
                <p className="text-lg">Enter your code.</p>
                <input className="w-[40%] h-[46px] text-center border-solid border-2 border-orange-600 rounded-md shadow-md m-[10px] " type="text" placeholder="Your code here :P"/>
                <NavLink to="/verify-code" className="flex justify-center items-center w-[250px] h-[46px] my-[20px] rounded-2xl bg-orange-500 text-white font-semibold  shadow-md hover:bg-orange-600 hover:shadow-none">Send Code</NavLink>
                <p className="text-orange-500 font-semibold hover:underline cursor-pointer text-lg">Resend code.</p>
            </div>
        </Layout>
    )
}

export {VerifyCode};