import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';

export default function FAQ() {

  const handleWhatsAppClick = () => {
    const phone = '77027776776'; // Replace with the actual phone number
    const message = 'Здравствуйте! Нужна помощь с заказом медицинских услуг '; // The message you want to send
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank'); // Open in a new tab
  };


  return (
    <div>

      <Typography variant="h6">
        Часто задаваемые вопросы
      </Typography>
      <Accordion sx={{
        mt:1,
        mr:2,
        ml:2,
        border: 'none',
        background: 'transparent',
        boxShadow: 0
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5">
          1.⁠ ⁠Через сколько времени медсестра приедет на дом?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        Медсестры Ukol.kz обычно приезжают в течение 30-40 минут после подтверждения вашего заказа. Точное время зависит от загруженности и расстояния до вашего адреса.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        mt:1,
        mr:2,
        ml:2,
        border: 'none',
        background: 'transparent',
        boxShadow: 0
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h5">
          2.⁠ ⁠Какие состояния требуют капельницы или уколов, которые вы предлагаете?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        Мы оказываем помощь в случаях обезвоживания, необходимости восстановления после интоксикации, витаминной поддержки, а также при медицинских назначениях для лечения заболеваний. Все процедуры выполняются строго по показаниям.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        mt:1,
        mr:2,
        ml:2,
        border: 'none',
        background: 'transparent',
        boxShadow: 0
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h5">
          3.⁠ ⁠Гарантируете ли вы конфиденциальность при предоставлении услуг?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        Да, мы строго соблюдаем принципы конфиденциальности. Вся информация о ваших обращениях и состоянии здоровья остаётся закрытой и защищённой.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        mt:1,
        mr:2,
        ml:2,
        border: 'none',
        background: 'transparent',
        boxShadow: 0
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h5">
          4.⁠ ⁠Как происходит расчет стоимости услуг?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        Стоимость рассчитывается автоматически с учётом вашего местоположения, времени заказа и выбранной услуги. Мы стараемся предоставлять лучшие цены!        </AccordionDetails>
      </Accordion>
      <Accordion sx={{
        mt:1,
        mr:2,
        ml:2,
        border: 'none',
        background: 'transparent',
        boxShadow: 0
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h5">
          5.⁠ ⁠Кто выполняет процедуры?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        Все процедуры выполняются только сертифицированными медсестрами с соответствующей квалификацией. После оказания услуги вы сможете оставить отзыв и оценку для медработника.        </AccordionDetails>
      </Accordion>
    </div>
  );
}
