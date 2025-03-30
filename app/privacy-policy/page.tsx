"use client";

import React from "react";
import TermsBlock from "@/components/terms/TermsBlock";

const PrivacyPolicy = () => {
  const data = [
    {
      desc: "SecureFence Installations LLC operates under securefence.com, providing professional residential and commercial fence installation services for our customers.",
    },
    {
      desc: "This page outlines our policies regarding the collection, use, and disclosure of personal information when you use our website or submit a service request.",
    },
    {
      desc: "By submitting your information through securefence.com, you agree to the collection and use of your data as described in this Privacy Policy. We only use your personal information to improve our services and will not share it with anyone except as described here.",
    },
    {
      title: "Collection and Use of Information",
      desc: "To provide accurate quotes or schedule consultations, we may ask for your name, phone number, email address, address, and project details. This information allows us to contact and identify you.",
    },
    {
      title: "Log Data",
      desc: "When you visit our website, we collect standard log data including your IP address, browser type, visited pages, time and date of visit, and time spent on pages. This data helps us optimize site performance and content.",
    },
    {
      title: "Cookies",
      desc: "Cookies are small files used to store information such as your preferences or anonymous session data. These help us personalize your experience and improve functionality. You can accept or reject cookies via your browser settings.",
    },
    {
      title: "Service Providers",
      desc: "We may work with trusted third-party providers for:",
      list: [
        "Scheduling and appointment tools;",
        "Payment processing;",
        "Analytics and performance tracking;",
        "Customer relationship management.",
      ],
      short_desc:
        "These partners only access your information to perform tasks on our behalf and are required to follow strict data confidentiality standards.",
    },
    {
      title: "Cancellation and Refund Policy",
      desc: "Once a fencing project is scheduled and materials are ordered, cancellations may be subject to fees. Please contact us as soon as possible for any changes or cancellations. Refunds may not be guaranteed after project confirmation.",
    },
    {
      title: "Information Protection",
      desc: "We are committed to safeguarding your personal data. However, no method of online transmission or storage is completely secure. We implement best practices but cannot guarantee absolute protection.",
    },
    {
      title: "Changes to Our Privacy Policy",
      desc: "We may update this Privacy Policy periodically. Changes will be posted here and become effective immediately upon publication.",
    },
  ];

  return <TermsBlock data={data} title="Privacy Policy" />;
};

export default PrivacyPolicy;
