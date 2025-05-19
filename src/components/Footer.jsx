// Footer.jsx
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter, FaApple, FaGooglePlay } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-10">
          {/* For Clients */}
          <div>
            <h4 className="font-semibold mb-3">For Clients</h4>
            <ul className="space-y-2">
              {[
                "How to hire", "Talent Marketplace", "Project Catalog",
                "Hire an agency", "Enterprise", "Business Plus",
                "Any Hire", "Contract-to-hire", "Direct Contracts",
                "Hire worldwide", "Hire in the USA"
              ].map(item => (
                <li key={item} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* For Talent */}
          <div>
            <h4 className="font-semibold mb-3">For Talent</h4>
            <ul className="space-y-2">
              {[
                "How to find work", "Direct Contracts", "Find freelance jobs worldwide",
                "Find freelance jobs in the USA", "Win work with ads",
                "Exclusive resources with Freelancer Plus"
              ].map(item => (
                <li key={item} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              {[
                "Help & support", "Success stories", "Upwork reviews",
                "Resources", "Blog", "Affiliate programme",
                "Free Business Tools", "Release notes"
              ].map(item => (
                <li key={item} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              {[
                "About us", "Leadership", "Investor relations", "Careers",
                "Our impact", "Press", "Contact us", "Partners",
                "Trust, safety & security", "Modern slavery statement"
              ].map(item => (
                <li key={item} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-gray-700 pt-6 text-gray-400 space-y-4 sm:space-y-0">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <span>Follow us</span>
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>

          {/* Mobile Apps */}
          <div className="flex items-center space-x-4">
            <span>Mobile app</span>
            <FaApple className="hover:text-white cursor-pointer" />
            <FaGooglePlay className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-6 text-gray-500 text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            © 2015 - 2025 Upwork® Global Inc.
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">CA Notice at Collection</span>
            <span className="hover:underline cursor-pointer">Cookie Settings</span>
            <span className="hover:underline cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
