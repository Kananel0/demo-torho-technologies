import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaMailBulk
} from "react-icons/fa";

const FooterLinks = [
  { id: 1, title: "Home", link: "#home" },
  {
    id: 2,
    title: "About",
    link: "#about",
  },
 
  {
    id: 3,
    title: "Contact",
    link: "#contact",
  },
];

const Footer = () => {
  return (
    <>
      <div id="contact" className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div data-aos="fade" className="container">
          <div className="grid py-4 md:grid-cols-3">
            {/* company Details */}
            <div className="px-4 py-8">
            
              <h1 className="text-sm">
              Torho Technologies
              </h1>
              <br />

              {/* contact section */}
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>The Sett, 44 KE Masinga rd, North Beach, Durban  </p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMailBulk />
                  <a href="mailto:info@torhotech.com" className="text-xl">
                      info@torhotech.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <a href="tel:+277 9010 5072">+277 9010 5072</a>
                </div>
              </div>

              {/* social handle */}
              <div className="flex items-center gap-3 mt-6">
                <a href="https://web.facebook.com/profile.php?id=100063656616705#" target="_blank">
                  <FaFacebook className="text-3xl duration-300 hover:text-orange-500" />
                </a>
                <a href="https://www.instagram.com/torhotech_za/?hl=en" target="_blank">
                  <FaInstagram className="text-3xl duration-300 hover:text-orange-500" />
                </a>
                <a href="https://www.linkedin.com/company/torho-technologies/?viewAsMember=true" target="_blank">
                  <FaLinkedin className="text-3xl duration-300 hover:text-orange-500" />
                </a>
              </div>

            </div>

            {/* Footer Links section */}
            <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
              <div>
                {/* Empty Div for spacing */}
              </div>
              <div>
                <div className="px-4 py-8">
                  <h1 className="mb-3 text-xl font-bold">Quick links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li key={link.id} className="duration-300 hover:translate-x-1">
                        <a href={link.link} className="cursor-pointer hover:text-orange-500">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
