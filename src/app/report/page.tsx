import PageHeader from "@/components/common/PageHeader";
import ReportForm from "@/components/forms/ReportForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report Cyber Fraud | Secure Complaint Form | Expert Assistance",
  description: "Report cyber fraud incidents securely with our expert-guided complaint form. Get immediate assistance for online scams, banking fraud, and cybercrime cases.",
  keywords: [
    "report cyber fraud",
    "cybercrime complaint form",
    "online fraud reporting",
    "banking fraud report",
    "cyber fraud complaint",
    "scam reporting portal",
    "cybercrime victim support",
    "fraud incident reporting",
    "online scam complaint",
    "cyber fraud assistance",
    "digital fraud reporting",
    "phishing report",
    "identity theft complaint",
    "financial fraud report",
    "cyber security incident",
    "fraud victim support",
    "cyber crime helpline",
    "online safety reporting"
  ],
};

const Report: React.FC = () => {
  return (
    <>
      <PageHeader
        title="Report a Complaint"
        subtitle="Use this secure form to report a cyber fraud incident and get expert assistance."
        bgClass="bg-gradient-to-r from-primary to-accent"
      />

      {/* Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ReportForm />
        </div>
      </section>
    </>
  );
};

export default Report;
