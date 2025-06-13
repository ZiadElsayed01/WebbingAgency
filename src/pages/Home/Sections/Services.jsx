import Container from "../../../components/Container";
import Title from "../../../components/Title";
import service1 from "../../../assets/home/services1.png";
import service2 from "../../../assets/home/services2.png";
import service3 from "../../../assets/home/services3.png";
import ServicesCard from "../../../components/Home/ServicesCard";

const services = [
  {
    name: "Website Development",
    description:
      "From responsive web designs to fully functional websites, we build digital platforms that engage your audience. Our expertise in front-end and back-end development ensures that your website is optimized for performance and user experience.",
    icon: service1,
    position: "left",
  },
  {
    name: "Mobile App Development",
    description:
      "We design and develop custom mobile apps that deliver seamless user experiences on both iOS and Android platforms. Whether you need a simple app or a complex solution, our team ensures top-notch performance and aesthetics.",
    icon: service2,
    position: "center",
  },
  {
    name: "UI/UX Design",
    description:
      "Our design team creates intuitive and visually appealing user interfaces that enhance the user experience. We focus on usability, aesthetics, and functionality to ensure your product is user-friendly and effective.",
    icon: service3,
    position: "right",
  },
];

export default function Services() {
  return (
    <div className="my-6 lg:my-16 relative text-center">
      <Container>
        <Title title="Our Services" />
        <div className="grid grid-cols-1 gap-4 lg:flex lg:flex-row justify-center items-center md:items-stretch relative mt-6 lg:mt-12">
          {services.map((service, index) => (
            <ServicesCard key={index} service={service} />
          ))}
        </div>
      </Container>
    </div>
  );
}
