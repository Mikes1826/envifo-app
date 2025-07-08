import { useRef, useState } from "react";
import { Layout } from "../../components/Layout";
import { NavLink } from "react-router";

const Login = () => {

  const[isActive, setIsActive] = useState(false);
  const[isBussines, setIsBussines] = useState(false);
  const[user, setUser] = useState([])
  const style = "before:left-[50%]";

  const userName = useRef(null);

  const registerAction = () => {
    let newUser = userName
  }

  const loginAction = () => {

  }

  return(
    <Layout>
      <div className={`relative w-[850px] h-[550px] bg-white rounded-[30px] shadow-lg ${isActive ? "active" : ""} overflow-hidden`}>
        {/* form register */}
        <div className={`absolute w-[50%] h-[100%] bg-white right-0 flex items-center text-[#333] text-center p-[40px] z-10 transition-all duration-[600ms] ease-in-out delay-[800ms] ${isActive ? "invisible" : ""} ${isActive ? "left-[50%]" : ""}`}>
          <form action="" className="w-full">
            <h1 className="text-[36px] font-semibold mx-0 -my-[10px]">Login</h1>
            <div className="relative mx-0 my-[30px]">
              <input type="text" placeholder="Username" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-user-circle absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="password" placeholder="Password" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-key absolute right-[20px] top-[50%] translate-y-[-50%]'  ></i>
            </div>
            <div className="-mt-[15px] mx-0 mb-[15px]">
              <NavLink className="text-[14.5px] text-[#333]" to="/forgot-password">
                Forgot password?
              </NavLink>
            </div>
            <button type="submit" className="w-full h-[48px] bg-[#fd8c25] rounded-2xl hover:shadow-none hover:bg-[#fcb425] shadow-lg cursor-pointer text-[16px] font-medium text-white">Login</button>
          </form>
        </div>
        {/* FORM REGISTER */}
          <div className={`absolute w-[50%] h-[100%] bg-white right-0 flex items-center text-[#333] text-center pt-[160px] p-[40px] z-10 transition-all duration-[600ms] ease-in-out delay-[400ms] overflow-auto ${isActive ? "" : "invisible"} ${isActive ? "right-[50%]" : ""}`}>
            {/* IS PERSON */}
          <form action="" className={`w-full ${isBussines?"hidden":""}`}>
            <h1 className="text-[36px] font-semibold mx-0 -my-[10px] mt-[300px]">Crafter register</h1>
            <div className="relative mx-0 my-[30px]">
              <input type="text" placeholder="Username" required ref={userName} className={` w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium`}/>
              < i className='bx  bx-user-circle absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="text" placeholder="First Name" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-user-circle absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="text" placeholder="Middle Name" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-user-circle absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="text" placeholder="First Surname" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-user-circle absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="text" placeholder="Second Surname" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-user-circle absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="number" placeholder="Age" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-user-circle absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="number" placeholder="Phone Number" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bxr bx-mobile absolute right-[20px] top-[50%] translate-y-[-50%]'  ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="email" placeholder="Email" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx bx-envelope-open absolute right-[20px] top-[50%] translate-y-[-50%]'  ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="password" placeholder="Password" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-key absolute right-[20px] top-[50%] translate-y-[-50%]'  ></i>
            </div>

            <button type="submit" className="w-full h-[48px] bg-[#fd8c25] rounded-2xl hover:shadow-none hover:bg-[#fcb425] shadow-lg cursor-pointer text-[16px] font-medium text-white">Sigin</button>
          </form>
          {/* IS BUSSINES? */}
          <form action="" className={`w-full ${isBussines?"":"hidden"}`}>
            <h1 className="text-[36px] font-semibold mx-0 -my-[10px] pb-2">Bussines register</h1>
            <div className="relative mx-0 my-[30px]">
              <input type="text" placeholder="Bussines Name" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-user-circle absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="text" placeholder="Bussines Address" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bxr bx-location-x absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="number" placeholder="Phone Number" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bxr bx-mobile absolute right-[20px] top-[50%] translate-y-[-50%]'  ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="email" placeholder="Email" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx bx-envelope-open absolute right-[20px] top-[50%] translate-y-[-50%]'  ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="password" placeholder="Password" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-key absolute right-[20px] top-[50%] translate-y-[-50%]'  ></i>
            </div>

            <button type="submit" className="w-full h-[48px] bg-[#fd8c25] rounded-2xl hover:shadow-none hover:bg-[#fcb425] shadow-lg cursor-pointer text-[16px] font-medium text-white">Sigin</button>
          </form>
        </div>
        {/* ANIMATED BACKGROUND */}
        <div className={`"absolute w-full h-full  before:content-[''] before:absolute before:w-[300%] before:h-full before:-left-[250%] before:bg-orange-400 before:z-20 before:rounded-[150px] before:transition-all before:duration-[1800ms] before:ease-in-out ${isActive? style : ""}`}>
          {/* Right */}
          <div className={`absolute w-[50%] h-full flex flex-col justify-center items-center z-20 transition-all duration-[1200ms] ease-in-out ${isActive ? "right-0 delay-[1200ms]" : "right-[-50%] delay-[100ms]" }}`}>
            <h1 className="text-white text-[36px] font-bold mx-0 -my-[10px] text-center px-2 mb-[20px]">Welcome to Envifo Forge</h1>
            <h2 className="text-[20px] text-center font-medium text-white mb-[20px]">The place where you can craft your dreams.</h2>
            <div className="w-full h-[50px] flex justify-evenly mb-4">
              <span className="w-[160px] h-[46px] text-white border-solid border-2 rounded-2xl flex justify-center items-center hover:bg-orange-500" onClick={()=>setIsBussines(false)}>Crafter</span>
              <span className="w-[160px] h-[46px] text-white border-solid border-2 rounded-2xl flex justify-center items-center hover:bg-orange-500" onClick={()=>setIsBussines(true)}>Bussines</span>
            </div>
            <p className="text-white text-[14px] mb-[20px]">Don't have an account?</p>
            <button type="submit" onClick={()=>setIsActive(false)} className="text-white w-[160px] h-[46px] border-solid border-2 rounded-md">Login</button>

          </div>
          {/* Left */}
          <div className={`absolute w-[50%] h-full flex flex-col justify-center items-center z-20 transition-all duration-[600ms] ease-in-out ${isActive ? "left-[-50%] delay-[100ms]": "left-0 delay-[1200ms]"}`}>
            <h1 className="text-white text-[36px] font-bold mx-0 -my-[10px] text-center px-2 mb-[20px]">Welcome Back!</h1>
            <p className="text-white text-[14px] mb-[20px]">Already have an account?</p>
            <button type="submit" onClick={()=>setIsActive(true)} className="text-white w-[50%] h-[46px] border-solid border-2 rounded-md">Register</button>
          </div>
        </div>
      </div>
    </Layout>
  )}

export {Login};