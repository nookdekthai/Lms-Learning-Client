import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Ronnakrit",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Thammasat University",
    comment:
    " การสอนได้ดีมากๆ าไปต่อยอดการทำงาน เหมาะสำหรับมือใหม่ ตลอดเวลาการเรียนสนุกมากๆ ได้วยตลอดเวลาการเรียนสนุกมากๆ เป็นกันเองพูดคุยได้ทุกเรื่องได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน  ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วย",
},
  {
    name: "Thanachat",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Full stack developer | Quarter ltd.",
    comment:
    "การสอนได้ดีมากๆ เหมาะสำหรับคนที่ต้องการจะพัฒนาความรู้เกี่ยวกับด้าน ISO สอนเข้าใจง่ายนำไปปปฎิบัติได้จริง ตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน เหมาะสำหรับมือใหม่ ตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้วยตลอดเวลาการเรียนสนุกมากๆ ได้นำความรู้เอาไปต่อยอดการทำงาน หรือหารายได้เพิ่มเติมได้ด้ด้วย",
},
  {
    name: "Jay Gibbs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "computer systems engineering student | Zimbabwe",
    comment:
    "tstanding, sive. The practical applications and real-world examples you incorporate reinforce the theoretical knowledge and provide valuable insights. Your engagement with the audience fosters a supportive learning environment. Thank you for your dedication, expertise, and passion for teaching programming, and keep up the fantastic work!"},
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Junior Web Developer | Indonesia",
    comment:
    "I had the pleasure of exploring Becodemy, a website that provides an extensive range of courses on various tech-related topics. I was thoroughly impressed with my experience",
},
  {
    name: "Rosemary Smith",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Full stack web developer | Algeria",
    comment:
    "Your content is very special. The thing I liked the most is that the videos are so long, which means they cover everything in details. for that any person had beginner-level can complete an integ work",
},
  {
    name: "Laura Mckenzie",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Full stack web developer | Canada",
    comment:
    "Join Becodemy! Becodemy focuses on practical applications rather tevel.",
},
];

const Reviews = (props: Props) => {
  return (
  <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
      <div className="800px:w-[50%] w-full">
        <Image
        src={require("../../../public/assests/business-img.png")}
        alt="business"
        width={700}
        height={700}
        />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde
            voluptatum dignissimos, nulla perferendis dolorem voluptate nemo
            possimus magni deleniti natus accusamus officiis quasi nihil
            commodi, praesentium quidem, quis doloribus?
          </p>
        </div>
        <br />
        <br />
       </div>
       <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
            reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
        </div>
  </div>
  );
};

export default Reviews;
