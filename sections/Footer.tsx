import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="text-lg text-gray-400 font-bold mb-6">Resources</h5>
          <ul>
            <li>
              <a href="/" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">
                Developers
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg text-gray-400 font-bold mb-6">Company</h5>
          <ul>
            <li>
              <a href="/" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">
                Careers
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">
                Press
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg text-gray-400 font-bold mb-6">Contact</h5>
          <p>123-456-7890</p>
          <p>info@example.com</p>
        </div>

        <div>
          <h5 className="text-lg text-gray-400 font-bold mb-6">Follow Us</h5>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/"
                className="hover:text-gray-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="hover:text-gray-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="hover:text-gray-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className="hover:text-gray-300">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-700 py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 Your Company Name. All rights reserved.
          </p>
          <div>
            <a
              href="/"
              className="text-gray-400 text-sm hover:text-gray-300 mx-2"
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="text-gray-400 text-sm hover:text-gray-300 mx-2"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
