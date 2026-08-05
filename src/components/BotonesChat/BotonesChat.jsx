import "./BotonesChat.css";
import { site } from "../../data/site";
const BotonesChat = () => {
  return (
    <>
      {/* Botón WhatsApp */}
      <a
        href={site.contact.whatsappUrl}
        className="float-button whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt={`WhatsApp ${site.name}`}
        />
      </a>

      {/* Botón Instagram */}
      <a
        href={site.social.instagram}
        className="float-button instagram-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
        />
      </a>
    </>
  );
};

export default BotonesChat;
