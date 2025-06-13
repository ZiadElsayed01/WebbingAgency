import React from "react";
import Title from "../../../components/Title";
import Container from "../../../components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import client1 from "../../../assets/home/client1.png";
import client2 from "../../../assets/home/client2.png";
import client3 from "../../../assets/home/team1.svg";
import client4 from "../../../assets/home/team2.svg";
import FeedbackCard from "../../../components/Home/FeedbackCard";

const feedbacks = [
  {
    name: "Mariam Mohamed",
    message:
      "Working with this team has been an incredible experience. They delivered a beautifully designed and fully functional website that has significantly improved our online presence.",
    image: client1,
  },
  {
    name: "Omar Ahmed",
    message:
      "They truly understood our vision and transformed it into a powerful digital solution. Highly recommended!",
    image: client2,
  },
  {
    name: "Ali Hassan",
    message:
      "Working with this team was smooth and professional. Our mobile app turned out fantastic and very user-friendly.",
    image: client3,
  },
  {
    name: "Zahraa Mohamed",
    message:
      "They truly understood our vision and transformed it into a powerful digital solution. Highly recommended!",
    image: client4,
  },
];

export default function Feedback() {
  return (
    <div className="bg-secondBg py-12">
      <Container>
        <Title title="What Our Client Say?" />

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {feedbacks.map((client, index) => (
            <SwiperSlide key={index}>
              <FeedbackCard client={client} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
