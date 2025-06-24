import { Layout } from "../../components/Layout";
import logo from "../../assets/ENVIFO.png";
import { NavLink } from "react-router";

const ForgotPassword = () => {
    return (
        <Layout>
            <div className="w-[600px] h-[600px] bg-white rounded-2xl shadow-lg p-2  flex flex-col items-center gap-3">
                <div className="w-[160px] h-[160px] pt-[50px] m-[20px]">
                    <img src={logo} alt="Envifo Logo"/>
                </div>
                <h1 className="mt-[40px] text-[#333] font-semibold text-2xl">Recover your password</h1>
                <p className="text-lg">Enter your email address so we can send you a verification code.</p>
                <input className="w-[80%] h-[46px] text-center border-solid border-2 border-orange-600 rounded-md shadow-md m-[10px] " type="email" placeholder="Your email here :D"/>
                <NavLink to="/verify-code" className="flex justify-center items-center w-[250px] h-[46px] my-[20px] rounded-2xl bg-orange-500 text-white font-semibold  shadow-md hover:bg-orange-600 hover:shadow-none">Send Code</NavLink>
            </div>
        </Layout>
    )
};

export { ForgotPassword };