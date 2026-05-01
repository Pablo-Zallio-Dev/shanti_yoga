"use client";
import React from 'react';



const TimeTableDesktop: React.FC = ({ }) => {
      return (
            <section className="flex flex-col items-center justify-center h-full ">
                  <div className="grid grid-cols-3 gap-4 w-full py-4 border-t border-bgBtnPrimary text-xs lg:text-base font-montserrat uppercase">
                        <p className="w-max">Mondays</p>
                        <p className="w-max">Hot Power Flow</p>
                        <p className="justify-self-end">7:30 PM - 8:45 PM</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full py-4 border-t border-bgBtnPrimary text-xs lg:text-base font-montserrat uppercase">
                        <p className="w-max">Tuesday</p>
                        <p className="w-max">Hot Powerflow Vinyasa</p>
                        <p className="justify-self-end">8:20 AM - 9:20 AM</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full py-4 border-t border-bgBtnPrimary text-xs lg:text-base font-montserrat uppercase">
                        <p className="w-max">Wednesday</p>
                        <p className="w-max">Warm Mindful Flow</p>
                        <p className="justify-self-end">4:15 PM - 5:45 PM</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full py-4 border-t border-bgBtnPrimary text-xs lg:text-base font-montserrat uppercase">
                        <p className="w-max">Thursday</p>
                        <p className="w-max">Kundalini Yoga</p>
                        <p className="justify-self-end">3:30 PM - 4:45 PM</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full py-4 border-t border-bgBtnPrimary text-xs lg:text-base font-montserrat uppercase">
                        <p className="w-max">Friday</p>
                        <p className="w-max">Warm Yin Yoga</p>
                        <p className="justify-self-end">2:00 PM - 3:15 PM</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full py-4 border-t border-bgBtnPrimary text-xs lg:text-base font-montserrat uppercase">
                        <p className="w-max">Saturday</p>
                        <p className="w-max">JZT Dance and Yoga</p>
                        <p className="justify-self-end">10:00 AM - 11:45 AM</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 w-full py-4 border-t border-b border-bgBtnPrimary text-xs lg:text-base font-montserrat uppercase">
                        <p className="w-max">Sunday</p>
                        <p className="w-max">Hanta Yoga</p>
                        <p className="justify-self-end">6:30 PM - 7:30 PM</p>
                  </div>
            </section>
      );
};

export default TimeTableDesktop;
