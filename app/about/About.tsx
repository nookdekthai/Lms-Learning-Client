import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Foodtek-ftc?</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[20px] text-white ">
           เราจัดหา เเละให้คำเเนะนำในสิ่งที่ดีที่สุด เพื่อสิ่งที่ถูกต้อง
          <br />
          <br/>
          <p className="text-[25px] text-gradient ">
            Vision
          </p>
          <br />
          เราจะมุ่งมั่นพัฒนาผู้ประกอบการเพื่อเพิ่มศักยภาพของบุคคลากรเเละองกรณ์ให้มีความรู้เท่าทัน
          ภัยคุกคามเทียบเท่ากับองค์กรระดับโลก
         
          <br />
          <br/>
          <p className="text-[25px] text-gradient ">
            Mission
          </p>
          <br />
          เราจะให้บริการลูกค้า ด้วยทีมงานที่มีความรู้ ความสามารถ เเละเชี่ยวชาญเฉพาะด้าน
          ทั้งระบบจัดการเเละระบบคุณภาพตามมาตรฐานสากล โดยยึดมั่นในจรรยาบรรณวิชาชีพ
          <br />
          <br/>
          <p className="text-[25px] text-gradient ">
            Value
          </p>
          <br />
           we believe that price should never be a barrier to
          achieving your dreams. That&apos;s why our courses are priced low
          &ndash; so that anyone, regardless of their financial situation, can
          access the tools and knowledge they need to succeed.
          <br />
       
       
        </p>
        <br />
        <span className="text-[22px]">Mr. </span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of Foodtek-ftc
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
