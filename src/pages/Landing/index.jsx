import React from "react";
import { NavLink } from "react-router";

const Landing = () => {
  const services = [
    {
      title: "Architectural Design",
      description: "Innovative and functional designs tailored to your needs.",
    },
    {
      title: "Interior Design",
      description: "Creating harmonious and aesthetically pleasing interiors.",
    },
    {
      title: "Project Management",
      description: "Comprehensive management to ensure timely and on-budget completion.",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-[#fcfaf8] overflow-x-hidden font-['Work_Sans','Noto_Sans',sans-serif]">
      <header className="flex items-center justify-between border-b border-[#f4ede7] px-10 py-3">
        <div className="flex items-center gap-4 text-[#1c140d]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold">Architex</h2>
        </div>
        <div className="flex gap-4">
          <a className="text-sm font-medium" href="#projects">Projects</a>
          <a className="text-sm font-medium" href="#services">Services</a>
          <a className="text-sm font-medium" href="#about">About</a>
          <a className="text-sm font-medium" href="#contact">Contact</a>
          <NavLink to="/login" className="h-10 px-4 bg-[#f38524] text-sm font-bold rounded-lg py-2">Login</NavLink>
        </div>
      </header>

      <section className="flex flex-col items-start justify-end bg-cover bg-center px-4 py-20 text-white" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqHUmdddykLhGkoD5ELsUVLxnJ2gqyNRv425_3WIjxcPdrakWbboTHv8Ysl54LU9yCBD2s5Vpwu1_DJT2F7C4dLiFlQG0doG_PoAbs5yMIU-kQagjLlnqbMsPy5h9Gc2AGJk-NUnilAuJTEGIbl5iqHaq3gRalwNJkkmapTQhMID8ETjjSkDR0-_UN58zPWTED2BjbVxUeAKBlt70M8kQK3B4IQ4c_tkHtb6gvUZUkxxbALy6u2QeQfMylzU_HpQtykU6RkI1z_Gk')" }}>
        <h1 className="text-4xl font-black">Crafting Spaces That Inspire</h1>
        <p className="mt-2 text-base max-w-xl">
          We are a team of architects dedicated to creating innovative and sustainable designs that meet your unique needs and aspirations.
        </p>
        <button className="mt-4 h-12 px-6 bg-[#f38524] text-[#1c140d] font-bold rounded-lg">View Our Portfolio</button>
      </section>

      <section id="projects" className="px-4 pt-6">
        <h2 className="text-[22px] font-bold text-[#1c140d] pb-3">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-lg bg-cover bg-center aspect-video" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2bL4Xo1EzIPIz67wZcPnplEFJpLxZaNYe4lJswIQVXwJgyxCYQQW3b1w6wTgYmio4cIMfbyvHy0WyydnsSQuP3YNY89RJf_VmN8z0t6IaalLjeDEOJPbrvPR0A7L4jQNuZVRJV3OKf1wj-68lXjt0c8RQ22Jlm_QX4aAdDaSor0CfHLTVyVBI-TRXTWEt3bdANNh9Af1fDS4VzI4q1S-YngrHH9WEIXeJMqxHKQXTCTHvOaXO1QN9gHnYyMspMokDbYcSI-BvRtQ')" }} />
          <div>
            <h3 className="font-medium text-[#1c140d]">Modern Residence</h3>
            <p className="text-sm text-[#9c7049]">A contemporary home designed for a family of four.</p>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 pt-6">
        <h2 className="text-[22px] font-bold text-[#1c140d] pb-3">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#f4ede7] bg-white p-4 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#1c140d]">
                {service.title}
              </h3>
              <p className="text-sm text-[#9c7049]">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-4 pt-6">
        <h2 className="text-[22px] font-bold text-[#1c140d] pb-3">About Us</h2>
        <p className="text-sm text-[#1c140d] max-w-2xl">
          Architex is a passionate team of architects and designers who are dedicated to transforming ideas into inspiring spaces. With a strong focus on innovation and sustainability, we ensure every project reflects our clients' vision while contributing positively to the environment and community.
        </p>
      </section>

      <section id="contact" className="px-4 pt-6">
        <h2 className="text-[22px] font-bold text-[#1c140d] pb-3">Contact Us</h2>
        <form className="space-y-4 max-w-lg">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-[#1c140d]">Name</label>
            <input id="name" type="text" className="mt-1 rounded-md border border-[#f4ede7] bg-white p-2 text-sm shadow-sm" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-[#1c140d]">Email</label>
            <input id="email" type="email" className="mt-1 rounded-md border border-[#f4ede7] bg-white p-2 text-sm shadow-sm" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm font-medium text-[#1c140d]">Message</label>
            <textarea id="message" rows="4" className="mt-1 rounded-md border border-[#f4ede7] bg-white p-2 text-sm shadow-sm"></textarea>
          </div>
          <button type="submit" className="h-10 px-4 rounded-lg bg-[#f38524] text-[#1c140d] text-sm font-bold">
            Send Message
          </button>
        </form>
      </section>

      <footer className="mt-10 bg-[#1c140d] text-white px-4 py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Architex. All rights reserved.</p>
      </footer>
    </div>
  );
};

export { Landing };
