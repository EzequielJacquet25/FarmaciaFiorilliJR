const BotonesChat = () => {
  return (
    <>
      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/5491127490223"
        className="float-button whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="WhatsApp Fiorilli JR"
        />
      </a>

      {/* Botón Instagram */}
      <a
        href="https://www.instagram.com/fiorilli.jrfarmacia/"
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
