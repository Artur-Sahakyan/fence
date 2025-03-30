"use client";

import React from "react";
import TermsBlock from "@/components/terms/TermsBlock";

const TermsAndConditions = () => {
  const data = [
    {
      desc: "These terms and conditions govern the use of securefence.com. This site is owned and operated by SecureFence Installations LLC. This is a service-based website offering residential and commercial fence installation solutions.",
    },
    {
      desc: "By using this site, you indicate that you have read and understand these terms and conditions and agree to comply with them at all times.",
    },
    {
      title: "Intellectual Property",
      desc: "All content published and made available on this site is the property of SecureFence Installations LLC and its creators. This includes, but is not limited to, images, text, logos, documents, downloadable files, and all elements that form the composition of the site.",
    },
    {
      title: "Acceptable Use",
      desc: "As a user of this site, you agree to use it legally and not to engage in any unlawful or malicious activity. You agree not to:",
      list: [
        "Harass or harm other users or staff;",
        "Violate the rights of others;",
        "Engage in fraudulent activity or misrepresent yourself;",
        "Attempt to breach the site’s security or misuse its functionality.",
      ],
      short_desc:
        "If we determine misuse of the site or violations of these terms, we reserve the right to suspend or terminate your access and pursue legal remedies if necessary.",
    },
    {
      title: "Accounts",
      desc: "When providing your information for quotes or scheduling, you agree to:",
      list: [
        "Take full responsibility for the accuracy of the information you submit;",
        "Keep your contact details up to date;",
        "Use the site in good faith.",
      ],
      numberList: true,
      short_desc:
        "We may suspend your access if we believe you are providing false information or violating these terms.",
    },
    {
      title: "Sales of Services",
      desc: "These terms govern the purchase of fence-related services available on our website.",
    },
    {
      desc: "Available services on our site include:",
      list: [
        "Free Consultation Booking",
        "Fence Installation Scheduling",
        "Permit Assistance (where applicable)",
      ],
      short_desc:
        "All services are scheduled and confirmed with client approval. Pricing and project scope will be agreed to prior to beginning work.",
    },
    {
      desc: "Service information, including visuals and descriptions, is offered to provide clarity but may vary depending on your property. You agree to proceed at your own discretion and based on your individual consultation.",
    },
    {
      desc: "We reserve the right to reject or cancel scheduled work where appropriate. In such cases, clients will be refunded in accordance with our policy.",
    },
    {
      title: "Payments",
      desc: "We accept the following forms of payment on this website:",
      list: ["Credit Card", "Debit Card"],
      short_desc:
        "By submitting payment information, you authorize us to process charges through the method you’ve provided, in accordance with our agreed-upon pricing.",
    },
    {
      desc: "If we detect a payment violation or fraudulent charge, we may cancel your transaction or take legal action.",
    },
    {
      title: "Cancellation and Refund Policy",
      desc: "Project cancellations must be requested before material orders are placed or labor has been scheduled. If work or material ordering has already begun, a partial refund may apply depending on the stage of progress.",
    },
    {
      title: "Consumer Protection Law",
      desc: "Where applicable consumer protection laws exist in your jurisdiction, these terms will not override those rights. In the event of a conflict, your legal protections will remain in place.",
    },
    {
      title: "Limitation of Liability",
      desc: "SecureFence Installations LLC, including our staff and affiliates, is not liable for any indirect losses, service delays, or damages beyond our reasonable control. This includes delays due to weather or third-party issues.",
    },
    {
      title: "Indemnity",
      desc: "By using this website, you agree to hold SecureFence Installations LLC harmless from any claims, disputes, or damages arising from your use of the site or misuse of our services.",
    },
    {
      title: "Applicable Law",
      desc: "These terms are governed by the laws of the state of California, without regard to its conflict of laws provisions.",
    },
    {
      title: "Severability",
      desc: "If any term herein is found to be invalid, it shall not affect the validity of the remaining terms, which will remain in full force.",
    },
    {
      title: "Changes",
      desc: "We reserve the right to update these terms at any time. Changes will be published on this page and become effective immediately.",
    },
  ];

  return <TermsBlock data={data} title="Terms and Conditions" type="terms" />;
};

export default TermsAndConditions;
