import { useState, useEffect } from "react";
import contactImg from "../assets/img/contact-img.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.lastName) errors.lastName = "Last name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid. It should be 10 digits.";
    }
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit the form
      console.log("Form submitted", formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section id="Contact" className="flex justify-center items-center bg-custom-crad3 pt-[60px] pb-[200px] ">
      <div className="container flex justify-center items-center lg:flex-row flex-col lg:w-[90%] ">
        <div className="left lg:w-[50%] sm:w-[80%] w-[95%] flex justify-center items-center" data-aos="fade-up">
          <img src={contactImg} alt="contact image" className="w-[80%]" />
        </div>
        <div className="right lg:w-[50%] sm:w-[80%] w-[95%] px-[25px] mt-[20px] lg:mt-0">
          <h2 className="text-white font-bold text-[45px] tracking-[.8px] leading-[1.2em]">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="mt-[20px]">
            <div className="flex sm:flex-row flex-col sm:justify-between mb-[16px] gap-4 sm:gap-0">
              <div className="sm:w-[48%]">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`rounded-[20px] py-[21px] px-[18px] border-[1px] border-myGrey bg-input-bg w-full transition delay-75 ease-in-out placeholder-white placeholder:font-400 placeholder:tracking-[0.8px] focus:bg-white focus:placeholder-black focus:outline-none ${formErrors.firstName ? 'border-red-500' : ''}`}
                />
                {formErrors.firstName && <span className="text-red-500 text-sm">{formErrors.firstName}</span>}
              </div>
              <div className="sm:w-[48%]">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`rounded-[20px] py-[21px] px-[18px] border-[1px] border-myGrey bg-input-bg w-full transition delay-75 ease-in-out placeholder-white placeholder:font-400 placeholder:tracking-[0.8px] focus:bg-white focus:placeholder-black focus:outline-none ${formErrors.lastName ? 'border-red-500' : ''}`}
                />
                {formErrors.lastName && <span className="text-red-500 text-sm">{formErrors.lastName}</span>}
              </div>
            </div>
            <div className="flex sm:flex-row flex-col mb-[16px] sm:justify-between gap-4 sm:gap-0">
              <div className="sm:w-[48%]">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`rounded-[20px] py-[21px] px-[18px] border-[1px] border-myGrey bg-input-bg w-full transition delay-75 ease-in-out placeholder-white placeholder:font-400 placeholder:tracking-[0.8px] focus:bg-white focus:placeholder-black focus:outline-none ${formErrors.email ? 'border-red-500' : ''}`}
                />
                {formErrors.email && <span className="text-red-500 text-sm">{formErrors.email}</span>}
              </div>
              <div className="sm:w-[48%]">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`rounded-[20px] py-[21px] px-[18px] border-[1px] border-myGrey bg-input-bg w-full transition delay-75 ease-in-out placeholder-white placeholder:font-400 placeholder:tracking-[0.8px] focus:bg-white focus:placeholder-black focus:outline-none ${formErrors.phone ? 'border-red-500' : ''}`}
                />
                {formErrors.phone && <span className="text-red-500 text-sm">{formErrors.phone}</span>}
              </div>
            </div>
            <textarea
              rows={6}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className={`rounded-[20px] py-[21px] px-[18px] border-[1px] border-myGrey bg-input-bg w-[100%] transition delay-75 ease-in-out placeholder-white placeholder:font-400 placeholder:tracking-[0.8px] focus:bg-white focus:placeholder-black focus:outline-none ${formErrors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {formErrors.message && <span className="text-red-500 text-sm">{formErrors.message}</span>}
            <button
              type="submit"
              className="contactbtn bg-white px-[50px] py-[15px] mt-[25px] text-black font-semibold text-[16px] tracking-[.8px] relative transition delay-400 ease-in-out"
            >
              <a href="#" className="relative z-2">Send</a>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
