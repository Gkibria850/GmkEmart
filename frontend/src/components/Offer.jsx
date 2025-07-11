import React, { useEffect, useState } from 'react'

const Offer = () => {
    const calculateTimeLeft = () => {
  const difference = +new Date("2025-09-18T12:15:00") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  } else {
    timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  return timeLeft;
};

const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {
  const timer = setTimeout(() => {
    setTimeLeft(calculateTimeLeft());
  }, 1000);

  return () => clearTimeout(timer);
});

  return (
    <section className='max-padd-container bg-banner bg-center bg-cover h-[555px] my-8 p-8 rounded-xl '>
      <div className='flex items-center flex-col gap-1 mt-40 max-w-xl'>
        <h3 className='uppercase medium-20'>Sales Fever</h3>
        <h2 className='uppercase  bold-44'>20% off Everything</h2>
        <span className='italic font-ace'>Offer ends in</span>
        <div className='flex gap-x-4  xl:gap-x-7 mt-2' >
            <div className='bg-white p-2 rounded-lg'>
                <span className='font-bold text-4xl'>{timeLeft.days}</span>
                <span className='block'>days</span>
            </div>
            <div className='bg-white p-2 rounded-lg'>
                <span className='font-bold text-4xl'>{timeLeft.hours}</span>
                <span className='block'>Hours</span>
            </div>
            <div className='bg-white p-2 rounded-lg'>
                <span className='font-bold text-4xl'>{timeLeft.minutes}</span>
                <span className='block'>Minutes</span>
            </div>
            <div className='bg-white p-2 rounded-lg'>
                <span className='font-bold text-4xl'>{timeLeft.seconds}</span>
                <span className='block'>Secound</span>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
