import { MessageCircle } from "lucide-react";
import { COMPANY } from "../data/siteData";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20UAE%20Approval%20Hub,%20I'd%20like%20to%20discuss%20a%20project.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} color="white" />
    </a>
  );
}
