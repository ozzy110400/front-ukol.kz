import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const faqItems = [
    {
      question: 'Через сколько времени медсестра приедет на дом?',
      answer:
        'Медсестры Ukol.kz обычно приезжают в течение 30-40 минут после подтверждения вашего заказа. Точное время зависит от загруженности и расстояния до вашего адреса.',
    },
    {
      question: 'Какие состояния требуют капельницы или уколов, которые вы предлагаете?',
      answer:
        'Мы оказываем помощь в случаях обезвоживания, необходимости восстановления после интоксикации, витаминной поддержки, а также при медицинских назначениях для лечения заболеваний. Все процедуры выполняются строго по показаниям.',
    },
    {
      question: 'Гарантируете ли вы конфиденциальность при предоставлении услуг?',
      answer:
        'Да, мы строго соблюдаем принципы конфиденциальности. Вся информация о ваших обращениях и состоянии здоровья остаётся закрытой и защищённой.',
    },
    {
      question: 'Как происходит расчет стоимости услуг?',
      answer:
        'Стоимость рассчитывается автоматически с учётом вашего местоположения, времени заказа и выбранной услуги. Мы стараемся предоставлять лучшие цены!',
    },
    {
      question: 'Кто выполняет процедуры?',
      answer:
        'Все процедуры выполняются только сертифицированными медсестрами с соответствующей квалификацией. После оказания услуги вы сможете оставить отзыв и оценку для медработника.',
    },
  ];

  return (
    <Box sx={{ marginTop: '10%', marginX: '5%' }}>
      <Typography variant="h1" sx={{ fontWeight: 700, marginBottom: 4, fontSize: '30px',textAlign: 'left' }}>
        Часто задаваемые вопросы
      </Typography>
      {faqItems.map((item, index) => (
        <Accordion key={index} sx={{ marginBottom: 2, background: 'transparent', border: 'none', boxShadow: 'none',textAlign: 'left' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6" sx={{ fontWeight: 700,fontSize: '20px', }}>
              {index + 1}. {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ fontSize: 16 }}>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
