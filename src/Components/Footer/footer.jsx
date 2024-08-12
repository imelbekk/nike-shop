import React, { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import "../../ui/Footer.css";

export default function footer() {
  const [resources, setResources] = useState([
    { id: 1, link: "#", title: "Gift Cards" },
    { id: 2, link: "#", title: "Find a Store" },
    { id: 3, link: "#", title: "Membership" },
    { id: 4, link: "#", title: "Nike x NBA" },
    { id: 5, link: "#", title: "Nike Journal" },
    { id: 6, link: "#", title: "Site Feedback" },
  ]);
  const [help, setHelp] = useState([
    { id: 1, link: "#", title: "Get Help" },
    { id: 2, link: "#", title: "Order Status" },
    { id: 3, link: "#", title: "Shipping and Delivery" },
    { id: 4, link: "#", title: "Returns" },
    { id: 5, link: "#", title: "Order Cancellation" },
    { id: 6, link: "#", title: "Payment Options" },
    { id: 7, link: "#", title: "Gift Card Balance" },
    { id: 8, link: "#", title: "Contact Us" },
  ]);
  const [company, setCompany] = useState([
    { id: 1, link: "#", title: "About Nike" },
    { id: 2, link: "#", title: "News" },
    { id: 3, link: "#", title: "Careers" },
    { id: 4, link: "#", title: "Investors" },
    { id: 5, link: "#", title: "Purpose" },
    { id: 6, link: "#", title: "Sustainability" },
  ]);
  const [promotions, setPromotions] = useState([
    { id: 1, link: "#", title: "Student" },
    { id: 2, link: "#", title: "Military" },
    { id: 3, link: "#", title: "Teacher" },
    { id: 4, link: "#", title: "First Responders & Medical Professionals" },
    { id: 5, link: "#", title: "Birthday" },
  ]);
  return (
    <footer>
      <div className="footer_top">
        <div className="resources footer_card">
          <h6>Resources</h6>
          {resources.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
          <div className="footer_top_hidden">
            <h1>salom</h1>
          </div>
        </div>
        <div className="help footer_card">
          <h6>Help</h6>
          {help.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
          <div className="footer_top_hidden">
            <h1>salom</h1>
          </div>
        </div>
        <div className="company footer_card">
          <h6>Company</h6>
          {company.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
          <div className="footer_top_hidden">
            <h1>salom</h1>
          </div>
        </div>
        <div className="promotions footer_card">
          <h6>Promotions & Discounts</h6>
          {promotions.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.link}>{item.title}</a>
              </li>
            );
          })}
          <div className="footer_top_hidden">
            <h1>salom</h1>
          </div>
        </div>
        <div className="united_states">
          <LanguageIcon />
          <p>United States</p>
        </div>
      </div>
      <div className="footer_bottom">
        <a href="#">© 2024 Nike, Inc. All Rights Reserved</a>
        <a href="#">Guides</a>
        <a href="#">Terms of Sale</a>
        <a href="#">Terms of Use</a>
        <a href="#">Nike Privacy Policy</a>
        <a href="#">Your Privacy Choices</a>
        <a href="#">CA Supply Chains Act</a>
      </div>
    </footer>
  );
}
