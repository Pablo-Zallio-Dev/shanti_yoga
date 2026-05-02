import { TextSection } from "@/components/ui/TextSection";
import { DaySlider } from "@/components/ui/TimeTable/components/DaySlider";
import { TimeTableDesktop } from "@/components/ui/TimeTable/TimeTableDesktop";
import { TimeTableSlider } from "@/components/ui/TimeTable/TimeTableSlider";
import { TitleSection } from "@/components/ui/TitleSection";
import Image from "next/image";


export default function SectionTimetable() {
  return (
  <>
  <section id="timetable" className="  ">
      <TitleSection text="Join to our class, see our schedule" />
      <TextSection text="Start your day energized with our early morning classes or relax and unwind during our evening sessions. Join our skilled instructors in our spacious studio and deepen your yoga practice while connecting with a community of like-minded individuals." className=" pt-4  max-w-215 " />
      <section className=" flex flex-col md:flex-row-reverse justify-between md:gap-20 pt-12 ">
            <section className=" relative w-full lg:w-1/2   rounded-2xl  h-116.25 xl:h-140  overflow-hidden ">
                  <Image className=" object-cover     " src='/images/image_timetable/image_timeTable.webp' alt="" fill />
            </section>
            <section className=" md:hidden ">
                  <TimeTableSlider slides={
                        [
                              <DaySlider key='Monday' day="Monday" classes="Hot Power Flow" hour="7:30 PM - 8:45 PM" />,
                              <DaySlider key='Tuesday' day="Tuesday" classes="Hot PowerFlow vinyasa" hour="8:20 AM - 9:20 AM" />,
                              <DaySlider key='Wednesday' day="Wednesday" classes="Warm mindful flow " hour="4:15 PM - 5:45 PM" />,
                              <DaySlider key='Thursday' day="Thursday" classes="Kundalini yoga" hour="3:30 PM - 4:45 PM" />,
                              <DaySlider key='Friday' day="Friday" classes="Warm yin yoga" hour="2:00 PM - 3:15 PM" />,
                              <DaySlider key='Saturday' day="Saturday" classes="jzt dance and yoga" hour="10:00 AM - 11:45 AM" />,
                              <DaySlider key='Sunday' day="Sunday" classes="Hanta yoga" hour="6:30 PM - 7:30 PM" />
                        ]
                  } options={{ loop: true }} />
            </section>
            <section className=" hidden md:block  ">
                  <TimeTableDesktop/>
            </section>
      </section>

  </section>
  </>
  );
}
