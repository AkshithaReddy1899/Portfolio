import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  function validateForm() {
    if (senderName == "" && senderEmail == "" && message == "") {
      alert("All fields must be filled out");
      return false;
    }else {
      sendMail();
    }
  
  }

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
        div.textContent = 'Message sent successfully :)';
        setSenderName('');
        setSenderEmail('');
        setMessage('');
      })
      .catch((err) => {
        const div = document.getElementById('error');
        div.textContent = 'OOPS! Unknown error occured. Try again later :(';
      });
  };

  return (
    <div className="text-center mt-24 lg:mt-12 md:pt-20">
      <h1 className="text-2xl text-gray-500">Let&apos;s connect</h1>
      <div className="w-80 h-auto md:w-96 lg:w-1/2 md:py-8 my-8 mx-auto rounded-md border border-green-900">
        <p>
          <span className="text-green-500" id="sent">&nbsp;</span>
          <span className="text-red-900" id="error">&nbsp;</span>
        </p>
        <form className="flex flex-col justify-center items-center w-3/4 md:w-full md:px-8 lg:px-12 mx-auto my-4">
          <input type="text" name="sender_name" value={senderName} onChange={(e) => {setSenderName(e.target.value)}} required placeholder="your name" className="form-control block w-full px-3 py-1.5 text-base font-normaltext-emerald-400 bg-inherit bg-clip-padding border-b border-solid border-green-300 transition ease-in-out m-4 focus:text-emerald-400 focus:bg-inhert focus:border-green-600 focus:outline-none" />
          <input type="email" name="sender_email" value={senderEmail} onChange={(e) => {setSenderEmail(e.target.value)}} required placeholder="your_email@gmail.com" className="form-control block w-full px-3 py-1.5 text-base font-normaltext-emerald-400 bg-inherit bg-clip-padding border-b border-solid border-green-300 transition ease-in-out m-4 focus:text-emerald-400 focus:bg-inhert focus:border-green-600 focus:outline-none" />
          <textarea name="message" value={message} placeholder="your message" onChange={(e) => {setMessage(e.target.value)}} required className="form-control block w-full px-3 py-1.5 text-base font-normaltext-emerald-400 bg-inherit bg-clip-padding border-b border-solid border-green-300 transition ease-in-out m-4 focus:text-emerald-400 focus:bg-inhert focus:border-green-600 focus:outline-none" />
          <button type="submit" className="m-2 p-2 bg-emerald-600 text-white font-bold leading-normal uppercase rounded shadow-md hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg transition duration-150 ease-in-out items-center text-sm" onClick={validateForm}>Send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
