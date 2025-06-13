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

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#2a7da2] flex-shrink-0" />
                <span className="text-gray-600">01023456789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#2a7da2] flex-shrink-0" />
                <span className="text-gray-600">
                  81 Mohamed Magd, Near City
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2a7da2] flex-shrink-0" />
                <span className="text-gray-600">Webbing-Agency@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#2a7da2] flex-shrink-0" />
                <span className="text-gray-600">www.webbing-agency.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a
                href="#home"
                className="block text-gray-600 hover:text-[#2a7da2] transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="block text-gray-600 hover:text-[#2a7da2] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-gray-600 hover:text-[#2a7da2] transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-gray-600 hover:text-[#2a7da2] transition-colors"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800">
              Social Media
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <Facebook className="w-5 h-5 text-[#1877f2]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <Twitter className="w-5 h-5 text-[#1da1f2]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <img src={logo} alt="logo" />
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
