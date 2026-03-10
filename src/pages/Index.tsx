import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import EliteClients from "@/components/landing/EliteClients";
import Protocols from "@/components/landing/Protocols";
import ThreatAssessment from "@/components/landing/ThreatAssessment";
import ResponseMetrics from "@/components/landing/ResponseMetrics";
import Fleet from "@/components/landing/Fleet";
import Operatives from "@/components/landing/Operatives";
import TacticalImage from "@/components/landing/TacticalImage";
import MissionsCounter from "@/components/landing/MissionsCounter";
import Blog from "@/components/landing/Blog";
import Confidentiality from "@/components/landing/Confidentiality";
import Assurances from "@/components/landing/Assurances";
import ContactFooter from "@/components/landing/ContactFooter";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <div className="gold-line" />
      <EliteClients />
      <div className="gold-line" />
      <Protocols />
      <div className="gold-line" />
      <ThreatAssessment />
      <div className="gold-line" />
      <ResponseMetrics />
      <div className="gold-line" />
      <Fleet />
      <div className="gold-line" />
      <Operatives />
      <TacticalImage />
      <MissionsCounter />
      <div className="gold-line" />
      <Blog />
      <div className="gold-line" />
      <Confidentiality />
      <div className="gold-line" />
      <Assurances />
      <div className="gold-line" />
      <ContactFooter />
    </main>
  );
};

export default Index;
