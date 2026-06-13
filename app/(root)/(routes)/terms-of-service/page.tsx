import React from "react";
import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — Clow",
  description:
    "The terms and conditions governing your use of clow.work, our consultation services, and any related engagements.",
};

const TermsOfServicePage: React.FC = () => {
  return (
    <LegalPage
      slug="terms-of-service"
      title="Terms of Service"
      subtitle="clow.work provides digital transformation consultancy, specializing in identifying and implementing Low-Code, No-Code, and Custom Code solutions. These Terms govern the use of our website and the preliminary engagement process (Consultations and Quotes)."
      lastUpdated="June 13, 2026"
      sections={[
        {
          title: "Scope of Services",
          body: "clow.work provides digital transformation consultancy, specializing in identifying and implementing Low-Code, No-Code, and Custom Code solutions. These Terms govern the use of our website and the preliminary engagement process (Consultations and Quotes).",
        },
        {
          title: "Consultation and Booking",
          body: "We offer free initial consultations to evaluate your business requirements.",
          list: [
            "Accuracy: By booking a call via our integrated calendar or using the 'Get in Touch' feature, you agree to provide accurate and current contact information.",
            "Right to refuse: We reserve the right to reschedule, cancel, or decline consultation requests at our discretion, particularly in cases of suspected spam or requests outside our service capabilities.",
          ],
        },
        {
          title: "Service Recommendations & Quoting",
          body: "Following your consultation, clow.work will provide a professional recommendation regarding the project's technical direction.",
          list: [
            "Pricing: Determined based on the specific scope, complexity, and the chosen technical stack (No-Code vs. Custom).",
            "Quote validity: All quotes are valid for 30 days from the date of issuance unless otherwise stated in writing.",
            "Formal agreement: A quote is merely an invitation to treat. The project officially commences only after a formal Statement of Work (SOW) or Quote is accepted, and any required initial deposit or milestone payment is processed.",
          ],
        },
        {
          title: "User Responsibilities & Data Cooperation",
          body: "To provide an accurate and efficient solution, the client agrees to:",
          list: [
            "Information accuracy: Provide clear, complete, and honest business requirements during the consultation and discovery phase.",
            "Timely feedback: Respond to queries and review milestones in a timely manner.",
            "Liability for delays: clow.work shall not be held responsible for project delays or cost overruns caused by a lack of necessary information, shifting requirements, or delayed feedback from the client side.",
          ],
        },
        {
          title: "Confidentiality & Non-Disclosure",
          body: "We value your business ideas. Both parties agree that any sensitive business information, proprietary data, or trade secrets shared during the consultation process shall be kept strictly confidential and used solely for the purpose of evaluating the project.",
        },
        {
          title: "Intellectual Property",
          body: "Ownership terms for materials exchanged during the engagement:",
          table: {
            headers: ["Party", "What they own"],
            rows: [
              [
                "Clow (Our Property)",
                "All methodologies, templates, and frameworks used by clow.work during the consultation.",
              ],
              [
                "Client (Your Property)",
                "Any pre-existing intellectual property shared by the client.",
              ],
            ],
          },
        },
        {
          title: "Limitation of Liability & Warranty",
          list: [
            "As-is advice: Consultation recommendations are based on the information provided by the client. While we strive for excellence, clow.work does not guarantee specific business outcomes (e.g., specific revenue increases) resulting from the suggested technical approach.",
            "Indirect damages: To the maximum extent permitted by law, clow.work shall not be liable for any indirect, incidental, or consequential damages arising out of the consultation process.",
          ],
        },
        {
          title: "Termination of Engagement",
          body: "Either party may terminate the engagement prior to the signing of a formal project contract at any time by providing written notice. Upon termination, any obligations of confidentiality shall remain in effect.",
        },
        {
          title: "Governing Law",
          body: "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Delhi, India.",
        },
        {
          title: "Contact",
          body: "For questions regarding these Terms, please reach out via:",
          list: [
            "Contact form: clow.work/contact",
            "Website: clow.work",
          ],
        },
      ]}
      cta={{
        title: "Ready to start a project?",
        description:
          "Book a free consultation and we'll help you decide whether a Low-Code, No-Code, or Custom Code approach is the right fit for your business.",
        buttonText: "Book a Call",
        buttonHref: "https://cal.com/clow-nms1gw/30min",
      }}
    />
  );
};

export default TermsOfServicePage;
