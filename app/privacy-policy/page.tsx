"use client";

import React from "react";
import TermsBlock from "@/components/terms/TermsBlock";

const PrivacyPolicy = () => {
  const data = [
    {
      desc: "At Secure Fences, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect the personal information of visitors to our website. We are committed to handling your data with care, transparency, and respect.",
    },
    {
      title: "Information We Collect",
      desc: "We collect the following types of information:",
      list: [
        "Personal Information: This includes your name, email address, phone number, and any other details you provide when filling out a contact form, requesting a quote, or subscribing to updates.",
        "Non-Personal Information: When you visit our website, we automatically collect technical information such as your IP address, browser type, device information, and browsing activity.",
      ],
      numberList: true,
    },
    {
      title: "Cookies",
      desc: "Secure Fences uses cookies to enhance your browsing experience and collect analytics data. Cookies are small files placed on your device that help us understand how visitors use our website. You can manage your cookie settings through your browser preferences.",
    },
    {
      title: "How We Use Your Information",
      list: [
        "Respond to your questions, quote requests, or service inquiries.",
        "Send you updates, promotions, or newsletters if you’ve subscribed.",
        "Improve our website's performance, user experience, and security.",
        "Meet legal requirements and protect our rights and services.",
      ],
    },
    {
      title: "Sharing Your Information",
      desc: "We may share personal information with trusted third-party partners who help us operate our website, manage communications, or support our business. These parties are obligated to protect your data and only use it for authorized purposes.",
      short_desc: "We may also disclose your information if required by law or to respond to legal processes such as subpoenas or court orders.",
    },
    {
      title: "External Links",
      desc: "Our website may include links to third-party websites. We are not responsible for the privacy practices or content of those external sites.",
    },
    {
      title: "Data Security",
      desc: "We take reasonable and appropriate measures to safeguard the personal information we collect. However, please note that no method of online transmission or storage is 100% secure.",
    },
    {
      title: "Updates to This Policy",
      desc: "We may update this Privacy Policy occasionally to reflect changes in our practices or legal requirements. Any updates will be posted on this page, with the “Last Updated” date clearly indicated.",
    },
    {
      title: "Contact Us",
      desc: "If you have any questions or concerns about this Privacy Policy, please contact us at:",
      list: ["📧 office@secfences.com"],
    },
  ];

  return <TermsBlock data={data} title="Privacy Policy" />;
};

export default PrivacyPolicy;
