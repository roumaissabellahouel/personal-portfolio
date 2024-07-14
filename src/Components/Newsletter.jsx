import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required.');
    } else if (!validateEmail(email)) {
      setError('Invalid email address.');
    } else {
      setError('');
      // Handle successful submission here
      console.log("Newsletter subscribed with email:", email);
      // Optionally, you can clear the input after successful submission
      setEmail('');
    }
  };

  return (
    <section className="flex justify-center absolute w-[100%]">
      <div className="sm:w-[85%] w-[90%] bg-white flex justify-center sm:py-[60px] py-[50px] mt-[-122px] rounded-[60px]">
        <div className="container sm:w-[90%] w-[100%] flex lg:flex-row flex-col justify-center items-center sm:px-[60px] px-[20px]">
          <div className="sm:w-[40%] w-[100%]">
            <h3 className="font-bold tracking-[.8px] leading-[1.2em] text-[#121212] text-[30px] sm:w-[90%] w-[100%]">
              Subscribe to our Newsletter <br />
              & Never miss latest updates
            </h3>
          </div>
          <div className="email-box relative flex p-2 rounded-[20px] overflow-hidden border-[1px] border-black sm:w-[60%] w-[100%] lg:mt-0 mt-[20px]">
            <form onSubmit={handleSubmit} className="flex sm:flex-row flex-col w-full justify-between">
              <input
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={handleInputChange}
                className="sm:w-[70%] w-[100%] bg-transparent py-2 px-3 outline-none placeholder:text-gray-600 placeholder:font-400 placeholder:tracking-[.8px]"
              />
              <button
                type="submit"
                className="px-[50px] py-[18px] rounded-[15px] text-white font-600 tracking-[.8px] bg-custom-grad2"
              >
                Submit
              </button>
            </form>
          </div>
          {error && <span className="text-red-500 text-sm mt-2">{error}</span>}
        </div>
      </div>
    </section>
  );
};
