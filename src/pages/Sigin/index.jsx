import { Layout } from "../../components/Layout";

const Sigin = () => {
  return(
        <div className={`absolute w-[50%] h-[100%] bg-white right-0 flex items-center text-[#333] text-center p-[40px] z-10 transition-all duration-[600ms] ease-in-out delay-[1200ms]`}>
          <form action="" className="w-full">
            <h1 className="text-[36px] font-semibold mx-0 -my-[10px]">Registration</h1>
            <div className="relative mx-0 my-[30px]">
              <input type="text" placeholder="Username" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-user-circle absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="email" placeholder="Email" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-envelope-open absolute right-[20px] top-[50%] translate-y-[-50%]' ></i>
            </div>
            <div className="relative mx-0 my-[30px]">
              <input type="password" placeholder="Password" required className="w-full pr-[50px] pt-[13px] pl-[20px] pb-[13px] bg-[#E4ccff] rounded-[8px] border-none outline-none text-[20px] text-[#333] font-medium"/>
              < i className='bx  bx-key absolute right-[20px] top-[50%] translate-y-[-50%]'  ></i>
            </div>
            <div className="-mt-[15px] mx-0 mb-[15px]">
              <a href="#" className="text-[14.5px] text-[#333]">Forgot password</a>
            </div>
            <button type="submit" className="w-full h-[48px] bg-[#fd8c25] rounded-2xl hover:shadow-none hover:bg-[#fcb425] shadow-lg cursor-pointer text-[16px] font-medium text-white">Sigin</button>
          </form>
        </div>
  )
};

export {Sigin };