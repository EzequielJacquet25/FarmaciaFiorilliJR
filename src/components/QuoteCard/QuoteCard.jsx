import "./QuoteCard.css";

export default function QuoteCard({ text, author, icon = "science" }) {
  return (
    <div className="quote-card">
      <p className="quote-card-text">"{text}"</p>

      <div className="quote-card-footer">
        <div className="quote-card-icon-wrap">
          <span className="material-symbols-outlined quote-card-icon">
            {icon}
          </span>
        </div>

        <span className="quote-card-author">{author}</span>
      </div>
    </div>
  );
}