import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (e) => {
    setSenderName(e.target.value);
  };

  const handleEmail = (e) => {
    setSenderEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send(
      'service_yh8ebpa',
      'template_dc2iq06',
      { senderName, senderEmail, message },
      'Zv5WpBhN8vrCPYO6G',
    )
      .then((response) => {
        const div = document.getElementById('sent');
        div.innerHtml = `Message sent successfully. ${response.message}`;
      })
      .catch((err) => {
        const div = document.getElementById('error');
        div.innerHTML = `OOPS! Unknown error occured. Try again later :( ${err.message}`;
      });
  };

  return (
    <div className="text-center mt-24 lg:mt-12 md:pt-20">
      <h1 className="text-2xl text-gray-500">Let&apos;s connect</h1>
      <div className="w-80 h-auto lg:w-1/2 md:py-8 my-8 mx-auto rounded-md border border-green-900 md:w-11/12">
        <p>
          <span className="text-green-500" id="sent">&nbsp;</span>
          <span className="text-red-900" id="error">&nbsp;</span>
        </p>
        <form onSubmit={sendMail} className="flex flex-col justify-center items-center w-3/4 mx-auto">
          <input type="text" name="sender_name" value={senderName} onChange={handleName} required placeholder="your name" className="my-4 border-b bg-inherit border-green-300 w-4/5 text-green-100 p-2" />
          <input type="email" name="sender_email" value={senderEmail} onChange={handleEmail} required placeholder="your_email@gmail.com" className="my-4 border-b bg-inherit border-green-300 w-4/5 text-green-100 p-2" />
          <textarea name="message" value={message} placeholder="your message" onChange={handleMessage} required className="my-4 border-b bg-inherit border-green-300 w-4/5 text-green-100 p-2 " />
          <button type="submit" className="m-2 p-2 bg-emerald-600 text-white font-bold leading-normal uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out items-center text-sm">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
