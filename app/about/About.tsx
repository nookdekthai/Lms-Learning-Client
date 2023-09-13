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
        <p className="text-[18px] font-Poppins">
        เราจัดหา เเละให้คำเเนะนำในสิ่งที่ดีที่สุด เพื่อสิ่งที่ถูกต้อง
          <br />
          <br  />
          <span className="text-gradient text-[25px]">Vision</span>
          <br />
          <br />
          เราจะมุ่งมั่นพัฒนาผู้ประกอบการเพื่อเพิ่มศักยภาพของบุคคลากรเเละองกรณ์ให้มีความรู้เท่าทัน
          ภัยคุกคามเทียบเท่ากับองค์กรระดับโลก
          <br />
          <br />
          <span className="text-gradient text-[25px]">Mission</span>

          <br />
          <br />
          เราจะให้บริการลูกค้า ด้วยทีมงานที่มีความรู้ ความสามารถ เเละเชี่ยวชาญเฉพาะด้าน
          ทั้งระบบจัดการเเละระบบคุณภาพตามมาตรฐานสากล โดยยึดมั่นในจรรยาบรรณวิชาชีพ
          <br />
          <br />
          <span className="text-gradient text-[25px]">Value</span>

          <br />
          <br />
          Fair  : ความเที่ยงธรรม , ยุติธรรม เเละโปร่งใส
          <br/>
          <br/>
          Trust : น่าเชื่อถือ เเละไว้วางใจ 
          <br/>
          <br/>
          Customer orientd : มุ่งเน้นความต้องการลูกค้าเป็นหลัก
          
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