export default function FAQItem({ question, answer }) {
  return (
    <div className="faq-item">
      <details className="faq-details">
        <summary className="faq-summary">
          <span className="faq-question">{question}</span>
          <span className="material-symbols-outlined faq-icon">
            expand_more
          </span>
        </summary>

        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </details>
    </div>
  );
}
