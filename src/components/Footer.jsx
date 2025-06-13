import Container from "../components/Container";
import {
  Phone,
  MapPin,
  Mail,
  Globe,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const quickLinks = [
  { title: "Home", to: "/" },
  { title: "Services", to: "/services" },
  { title: "About", to: "/about" },
  { title: "Projects", to: "/projects" },
  { title: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <Link to="tel:01023456789" className="text-secondText">
                  01023456789
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-secondText">
                  81 Mohamed Magd, Near City
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <Link
                  to="mailto:Webbing-Agency@gmail.com"
                  className="text-secondText"
                >
                  Webbing-Agency@gmail.com
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                <Link
                  to="https://www.webbing-agency.com"
                  className="text-secondText"
                >
                  www.webbing-agency.com
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="block text-secondText hover:text-primary transition-colors"
                >
                  {link.title}
                </Link>
              ))}{" "}
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">
              Social Media
            </h3>
            <div className="flex gap-4">
              <Link
                to="/"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-secondary"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </Link>
              <Link
                to="/"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-secondary"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </Link>
              <Link
                to="/"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-secondary"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-secondary">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <p className="text-secondText text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
