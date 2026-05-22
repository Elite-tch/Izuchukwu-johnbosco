'use client'
import { useForm, ValidationError } from '@formspree/react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjkkzoyr");
  if (state.succeeded) {
    return <p className='text-center py-8'>Thanks for contacting me!</p>;
  }
  return (
    <section id='contact' className='bg-white     dark:bg-[#000000] dark:text-gray-200 text-[#1D1753]  pt-[5%]'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className='md:w-[95%] w-[90%] mx-auto'
      >
        <h2 className="text-[#f25c34] text-2xl text-center">Get in Touch</h2>
        <h1 className="font-semibold text-3xl md:text-4xl pt-3 text-center">Got questions or idea? Reach out!</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-5 md:mt-10 mx-auto md:w-[40%] w-[90%] '>
          <div className='flex  gap-2 flex-col'>
            <label htmlFor="email">
              Email :
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-[100%] focus:outline-none focus:ring-0 focus:border-[#1D1753] dark:focus:border-[#f25c34] dark:bg-gray-900"

            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex gap-2 flex-col'>
            <label htmlFor="message">
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              className="w-[100%] focus:outline-none focus:ring-0 focus:border-[#1D1753] dark:focus:border-[#f25c34] dark:bg-gray-900"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className='flex justify-center items-center mt-4'>
            <button type="submit" disabled={state.submitting} className="bg-[#f25c34] hover:bg-[#1D1753] w-fit dark:hover:bg-[#f25c34]/80 dark:bg-[#f25c34] text-white md:px-4 px-3 py-2 rounded-md">
              Send a message
            </button>
          </div>
          <div className='flex items-center gap-5'>
            <p>Let's Connect : </p>
            <div className='flex gap-4 '>
              <a href="https://x.com/IzuchukwuJ99034?t=C0oDZva2STQieP_PRp08Gg&s=09 " target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34]' />
              </a>
              <a href="https://github.com/Elite-tch " target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34]' />
              </a>
              <a href="https://www.linkedin.com/in/izuchukwu-johnbosco-364657323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className='dark:text-gray-200 text-[#1D1753] hover:text-[#f25c34] dark:hover:text-[#f25c34]' />
              </a>
            </div>
          </div>
        </form>

      </motion.div>
      <footer className="text-center py-4 mt-8 md:mt-16 border-t dark:border-gray-700">
        <p>&copy; {new Date().getFullYear()} Johnbosco<span className='text-[#f25c34]'> Izuchukwu</span> All rights reserved.</p>
      </footer>

    </section>
  );
}
