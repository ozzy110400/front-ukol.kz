import { useEffect } from "preact/hooks";

const faqItems = [
  {
    question: 'Можно ли вызвать медсестру или врача на дом для оказания медицинских услуг?',
    answer:
      'Да, специалисты Ukol.kz предоставляют профессиональные медицинские услуги на дому, включая инъекции, капельницы, перевязки и другие медицинские манипуляции. Мы оказываем помощь при обезвоживании, восстановлении после интоксикации, витаминной поддержке и других медицинских показаниях. Все процедуры выполняются строго в соответствии с медицинскими стандартами и рекомендациями врачей.',
  },
  {
    question: 'Как быстро медсестра может приехать на дом после оформления заказа?',
    answer:
      'Медсестры Ukol.kz прибывают на дом в течение 30-40 минут после подтверждения заявки. Время прибытия зависит от загруженности специалистов и расстояния до вашего адреса. Мы стремимся предоставлять медицинские услуги максимально оперативно и качественно.',
  },
  {
    question: 'В каких случаях требуется постановка капельницы или инъекций на дому?',
    answer:
      'Постановка капельниц и инъекций на дому необходима при таких состояниях, как обезвоживание, восстановление после алкогольной интоксикации, укрепление иммунитета, лечение хронических заболеваний и срочная медицинская помощь. Все процедуры выполняются квалифицированными специалистами Ukol.kz с использованием сертифицированных медикаментов.',
  },
  {
    question: 'Как Ukol.kz обеспечивает конфиденциальность оказания медицинских услуг?',
    answer:
      'Мы гарантируем полную конфиденциальность и безопасность при предоставлении медицинских услуг на дому. Вся информация о пациентах хранится в зашифрованном виде, а персонал строго соблюдает врачебную тайну и этические нормы.',
  },
  {
    question: 'Как рассчитать стоимость медицинских услуг на дому?',
    answer:
      'Стоимость медицинских услуг Ukol.kz рассчитывается автоматически на основе вашего местоположения, времени заказа и выбранного типа процедуры. Наши цены прозрачны и конкурентоспособны, что позволяет получать качественные медицинские услуги по доступным тарифам.',
  },
  {
    question: 'Какие специалисты оказывают медицинские услуги на дому?',
    answer:
      'В Ukol.kz работают только квалифицированные и сертифицированные медсестры и врачи с опытом работы. Каждый специалист проходит обязательное обучение и аттестацию перед началом работы. После оказания услуги вы сможете оставить отзыв и оценку, что помогает нам поддерживать высокий уровень сервиса.',
  },
];

export default function FAQ() {
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
  }, []);

  return (
    <div className="mt-10 mx-2">
      <p className="font-bold text-3xl mb-8 text-center text-black">
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
