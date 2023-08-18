
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPinterest,
    // faInstagram,
    // faTwitter,
    // faFacebook
    // } from '@fortawesome/free-brands-svg-icons'; 
    // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faPinterest, faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
    
    const Footer = () => {
      return (
        <div className="bg-pink-200 text-black py-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <h3 className="text-3xl font-semibold italic mb-4 text-red-600">Foodish</h3>
                <p className="text-sm">Continue Foodish 2023 all rights reserved</p>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Follow Us On</h3>
                  <div className="flex space-x-4">
                    <FontAwesomeIcon className="icon text-xl" icon={faPinterest} />
                    <FontAwesomeIcon className="icon text-xl" icon={faInstagram} />
                    <FontAwesomeIcon className="icon text-xl" icon={faTwitter} />
                    <FontAwesomeIcon className="icon ml-1 text-xs" icon={faFacebook} />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-semibold italic mb-4 text-red-600">Menu</h3>
                <ul className="text-sm space-y-1">
                  <li><a href="">Home</a></li>
                  <li><a href="">Offers</a></li>
                  <li><a href="">Service</a></li>
                  <li><a href="">About Us</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-3xl font-semibold italic mb-4 text-red-600">Information</h3>
                <ul className="text-sm space-y-1">
                  <li><a href="">Menu</a></li>
                  <li><a href="">Quality</a></li>
                  <li><a href="">Make a Choice</a></li>
                  <li><a href="">Salad With Vegetable</a></li>
                  <li><a href="">Fast Delivery</a></li>
                  <li><a href="">Subscribe</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-3xl font-semibold italic mb-4 text-red-600">Contact</h3>
                <ul className="text-sm space-y-1">
                  <li><a href="">+123 456 789</a></li>
                  <li><a href="">Explore</a></li>
                  <li><a href="">info@foodish.com</a></li>
                  <li><a href="">Salad With Vegetable</a></li>
                  <li><a href="">1245, New York, USA</a></li>
                  <li><a href="">Subscribe</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Footer;
    
      

