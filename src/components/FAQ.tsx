import { useEffect } from "preact/hooks";



type FAQProps = {
  faqItems: {
    question: string,
    answer: string
  }[]
};

export default function FAQ( {faqItems} : FAQProps) {
  useEffect(() => {
    // Generate structured data for FAQ schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    // Add the structured data script to the head of the document
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, [faqItems]); // Зависимость от faqItems

  return (
    <div className="mt-10 mx-2">
      <p className="font-bold text-2xl mb-8 ml-2 text-black">
        Часто задаваемые вопросы
      </p>
      <div className="w-full">
        {faqItems.map((item, index) => (
          <div key={index} className="collapse collapse-arrow mb-4 rounded-lg border-b-2">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-semibold text-black">
              {index + 1}. {item.question}
            </div>
            <div className="collapse-content text-black">
              <p className="text-base">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}