import Container from "../Container";
import Title from "../Title";
import service1 from "../../assets/home/services1.png";
import service2 from "../../assets/home/services2.png";
import service3 from "../../assets/home/services3.png";

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
    <div className="my-16 relative text-center">
      <Container>
        <Title title="Our Services" />
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch relative mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg shadow-primary/50 p-6 max-w-xl mx-2 my-4 md:my-0 relative ${
                service.position === "center"
                  ? "z-10 md:transform md:scale-115"
                  : service.position === "left"
                  ? "md:mr-[-15px]"
                  : "md:ml-[-15px]"
              }`}
            >
              <div className="flex items-start text-left">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 bg-secondBg rounded-full flex items-center justify-center">
                    <img
                      src={service.icon || "/placeholder.svg"}
                      alt={service.name}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <button className="text-blue-600 text-sm font-medium hover:underline">
                    Show Projects
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
