import { useState } from 'preact/hooks';
import {
  Box,
  Typography,
  Button,
  Link,
  Modal,
  IconButton,
  Container,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import contactImg from '/img/third.png';
import phoneIcon from '/img/phone-icon.png';
import instaIcon from '/img/instagram-icon.png';
import quoteImg from '/img/quote.png';

export default function Contact() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  const openOfferModal = () => setIsOfferModalOpen(true);
  const closeOfferModal = () => setIsOfferModalOpen(false);

  const ModalContent = ({ title, children, onClose }: any) => (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          width: '80%',
          maxWidth: 500,
          maxHeight: '80vh', // Set max-height for the modal content
          overflowY: 'auto',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );

  return (
    <section id="reviews" >

    <Container sx={{ py: 4 }}>
      <Box display="flex" flexWrap="wrap" gap={15}  sx={{justifyContent: 'center'}}>
        <Box sx={{  display: { xs: 'none', md: 'block' }, }}>
          <img
            src={contactImg}
            alt="Doctor"
            style={{ height: '550px', borderRadius: '8px', }}
          />
        </Box>
        <Box>
          <Typography variant="h1"  sx={{ fontWeight: 700, marginBottom: 4, fontSize: '35px' }}>
            НАШИ КОНТАКТЫ
          </Typography>
          
          <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
            <img   src={phoneIcon} alt="Phone" style={{ marginRight: 8, width:'30px', height:'30px', }} />
            <Link
              href="https://api.whatsapp.com/send?phone=77027776776"
              underline="hover"
              target="_blank"
              color='#3A4157'
              fontSize='25px'
            >
              whatsapp.com/ukolkz
            </Link>
          </Box>

          <Box display="flex" alignItems="center"justifyContent="center"  mb={2} >
            <img src={instaIcon} alt="Instagram" style={{ marginRight: 8, width:'25px', height:'25px',  }} />
            <Link
              href="https://www.instagram.com/ukol_kz"
              underline="hover"
              target="_blank"
              color='#3A4157'
              fontSize='25px'
            >
              instagram.com/ukolkz
            </Link>
          </Box>
          <Box
            sx={{
                position: 'relative',
                width: { xs: '400px', sm: '600px' },
                margin: '0 auto',
            }}
            >
            <img
                src={quoteImg}
                alt="Quote"
                style={{ borderRadius: '8px' }}
            />
            <Typography
                sx={{
                textTransform: 'uppercase',
                fontWeight: 700,
                fontStyle: 'italic',
                position: 'absolute',
                top: '15%',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: { xs: '20px', sm: '30px' },
                textAlign: 'center',
                color: '#3A4157', 
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
                }}
            >
                Более 1000 клиентов уже доверились нам и получили квалифицированную <br />
                помощь
            </Typography>
            </Box>

        </Box>
      </Box>

      <Box mt={4} >
        <Box  gap={2}>
          <Button  color="inherit" onClick={openPrivacyModal}>
            Политика конфиденциальности
          </Button>
          <Button color="inherit" onClick={openOfferModal}>
            Договор Оферты
          </Button>
          <Typography>Все права защищены &copy;</Typography>
        </Box>
      </Box>

      {isPrivacyModalOpen && (
            <ModalContent title="Политика конфиденциальности" onClose={closePrivacyModal}>
            <p><strong>Дата вступления в силу:</strong> 1.06.2024</p>
            <h3>1. Введение</h3>
            <p>Мы, в компании Ukol.kz, серьезно относимся к конфиденциальности ваших данных. Эта Политика конфиденциальности объясняет, какие данные мы собираем, как мы их используем и защищаем, а также ваши права и возможности управления вашей информацией. Используя наш сайт, вы соглашаетесь с условиями этой Политики конфиденциальности.</p>
            <h3>2. Сбор информации</h3>
            <ul>
              <li><strong>Личная информация:</strong> Имя, электронная почта, номер телефона и другая контактная информация, которую вы предоставляете при регистрации или заполнении форм на нашем или других сайтах.</li>
              <li><strong>Автоматически собираемая информация:</strong> IP-адрес, тип браузера, язык браузера, время доступа и адреса веб-сайтов, с которых вы пришли на наш сайт.</li>
              <li><strong>Информация о взаимодействии:</strong> Данные о вашем взаимодействии с нашим сайтом, такие как просмотренные страницы, продолжительность визитов и другие действия на сайте.</li>
            </ul>
            <h3>3. Использование информации</h3>
            <ul>
              <li><strong>Предоставление услуг:</strong> Для обработки ваших запросов и улучшения наших сервисов.</li>
              <li><strong>Коммуникация:</strong> Для связи с вами по вопросам обслуживания, обновлений и предложений.</li>
              <li><strong>Аналитика:</strong> Для анализа использования сайта и улучшения пользовательского опыта.</li>
              <li><strong>Реклама:</strong> Для показа персонализированной рекламы и проведения маркетинговых кампаний.</li>
            </ul>
            <h3>4. Передача информации</h3>
            <p>Мы можем делиться вашей информацией с третьими лицами при следующих условиях:</p>
            <ul>
              <li><strong>Сервис-провайдеры:</strong> Для выполнения функций от нашего имени, таких как обработка платежей или предоставление аналитики.</li>
              <li><strong>Правовые требования:</strong> При необходимости выполнения закона или защиты наших прав.</li>
            </ul>
            <h3>5. Использование файлов cookie и аналогичных технологий</h3>
            <p>Мы используем файлы cookie и аналогичные технологии для:</p>
            <ul>
              <li><strong>Функционирования сайта:</strong> Для обеспечения работы сайта и удобства его использования.</li>
              <li><strong>Аналитики:</strong> Для сбора данных о посещениях и взаимодействии с сайтом.</li>
              <li><strong>Рекламы:</strong> Для показа персонализированной рекламы на основе вашего поведения на сайте.</li>
            </ul>
            <p>Вы можете управлять настройками файлов cookie в вашем браузере, но это может ограничить функциональность сайта.</p>
            <h3>6. Защита данных</h3>
            <p>Мы принимаем меры для защиты ваших данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни один метод передачи данных через интернет или способ хранения данных не является на 100% безопасным.</p>
            <h3>7. Ваши права</h3>
            <p>Вы имеете право на:</p>
            <ul>
              <li><strong>Доступ:</strong> Запросить копию ваших личных данных.</li>
              <li><strong>Исправление:</strong> Исправить неточную или неполную информацию.</li>
              <li><strong>Удаление:</strong> Запросить удаление ваших данных.</li>
              <li><strong>Ограничение обработки:</strong> Ограничить обработку ваших данных в определенных условиях.</li>
              <li><strong>Отзыв согласия:</strong> Отозвать согласие на обработку данных в любое время.</li>
            </ul>
            <p>Чтобы воспользоваться этими правами, свяжитесь с нами по контактному номеру.</p>
            <h3>8. Изменения в Политике конфиденциальности</h3>
            <p>Мы можем периодически обновлять эту Политику конфиденциальности. Изменения вступят в силу с момента их публикации на сайте. Мы рекомендуем регулярно проверять эту страницу на предмет обновлений.</p>
            <h3>9. Контактная информация</h3>
            <p>Если у вас есть вопросы или предложения по поводу этой Политики конфиденциальности, свяжитесь с нами по контактному номеру.</p>
            </ModalContent>
          )}

          {isOfferModalOpen && (
            <ModalContent title="Договор публичной оферты" onClose={closeOfferModal}>
               <p><strong>Дата вступления в силу:</strong> 01.06.2024</p>
            <h3>1. Общие положения</h3>
            <p>1.1. Настоящий Договор публичной оферты (далее – "Договор") регулирует условия предоставления услуг через платформу Ukol.kz (далее – "Сайт"), расположенную на территории Республики Казахстан.</p>
            <p>1.2. Использование Сайта, включая подачу заявок на услуги, означает полное и безоговорочное согласие клиента (далее – "Клиент") с условиями данного Договора.</p>
            <p>1.3. Настоящий Договор является публичной офертой в соответствии со статьей 395 Гражданского кодекса Республики Казахстан.</p>
            <h3>2. Услуги и исполнители</h3>
            <p>2.1. Сайт предоставляет услуги по обеспечению взаимодействия между Клиентами и исполнителями (медицинскими сестрами, врачами и т.д., далее – "Исполнители") для предоставления медицинских услуг на дому, включая, но не ограничиваясь: капельница на дом, укол на дом, перевязка, лечение от алкогольной интоксикации и другие медицинские услуги на территории Республики Казахстан.</p>
            <p>2.2. Исполнители являются сертифицированными специалистами, имеющими необходимые квалификации и лицензии для оказания медицинских услуг в соответствии с законодательством Республики Казахстан. Сайт Ukol.kz не оказывает медицинские услуги и не несет ответственности за их качество и результаты.</p>
            <p>2.3. Исполнители обязаны оказывать услуги исключительно по назначению врача и должны отказаться от оказания услуг без соответствующего назначения.</p>
            <h3>3. Оформление заявок и оплата</h3>
            <p>3.1. Клиент может обратиться на контактный номер, указанный на Сайте, для оформления заявки на предоставление услуг.</p>
            <p>3.2. При обращении Клиента наш сервис Ukol.kz принимает заказ, обговаривает с Клиентом стоимость услуг и подтверждает условия оказания услуг.</p>
            <p>3.3. Стоимость услуг устанавливается Сайтом и доводится до сведения Клиента до передачи заказа Исполнителю.</p>
            <p>3.4. Заказ передается Исполнителю, который осуществляет выезд к Клиенту и исполняет заявку в согласованные сроки.</p>
            <p>3.5. После оказания услуг Клиент обязан оплатить полную стоимость услуг непосредственно Исполнителю.</p>
            <p>3.6. Исполнитель обязуется оплатить нашему сервису Ukol.kz вознаграждение согласно договоренностям, выставленному счету и условиям данного Договора.</p>
            <h3>4. Права и обязанности сторон</h3>
            <h4>4.1. Права и обязанности Клиента:</h4>
            <p>4.1.1. Клиент имеет право на получение услуг на территории Республики Казахстан в соответствии с условиями и сроками, согласованными с Ukol.kz.</p>
            <p>4.1.2. Клиент обязан предоставить Исполнителю полную и достоверную информацию, необходимую для оказания услуг.</p>
            <p>4.1.3. Клиент обязан оплатить полную стоимость услуг непосредственно Исполнителю по завершении услуг.</p>
            <p>4.1.4. Клиент несет ответственность за корректность и полноту предоставленной информации.</p>
            <h4>4.2. Права и обязанности Исполнителя:</h4>
            <p>4.2.1. Исполнитель обязуется оказать услуги в соответствии с квалификацией, лицензией и законодательством Республики Казахстан.</p>
            <p>4.2.2. Исполнитель несет полную ответственность за оказание услуг, включая медицинскую, юридическую и иную ответственность перед Клиентом на территории Республики Казахстан.</p>
            <p>4.2.3. Исполнитель обязуется оказывать услуги исключительно по назначению врача и отказаться от оказания услуг без назначения.</p>
            <p>4.2.4. Исполнитель обязан оплатить вознаграждение Сайту Ukol.kz в соответствии с договоренностями и выставленными счетами.</p>
            <h4>4.3. Права и обязанности Сайта:</h4>
            <p>4.3.1. Сайт обеспечивает платформу для подачи заявок и взаимодействия между Клиентами и Исполнителями на территории Республики Казахстан.</p>
            <p>4.3.2. Сайт не несет ответственности за качество, безопасность, результаты или законность услуг, оказываемых Исполнителями.</p>
            <p>4.3.3. Сайт не несет ответственности за любые убытки, ущерб или иные негативные последствия, связанные с услугами, оказываемыми Исполнителями на территории Республики Казахстан.</p>
            <p>4.3.4. Сайт устанавливает стоимость услуг и согласовывает их с Клиентом перед передачей заказа Исполнителю.</p>
            <h3>5. Стоимость и оплата услуг</h3>
            <p>5.1. Стоимость услуг устанавливается Сайтом и сообщается Клиенту при оформлении заявки.</p>
            <p>5.2. Оплата услуг осуществляется Клиентом непосредственно Исполнителю по завершении оказания услуг.</p>
            <p>5.3. Исполнитель обязуется оплатить вознаграждение Сайту Ukol.kz в соответствии с выставленными счетами и условиями данного Договора.</p>
            <h3>6. Ответственность</h3>
            <p>6.1. Клиент и Исполнитель несут полную ответственность за выполнение условий настоящего Договора и законодательства Республики Казахстан.</p>
            <p>6.2. Сайт не несет ответственности за действия или бездействие Исполнителей, в том числе за причиненный вред или ущерб, связанный с оказанием медицинских услуг на территории Республики Казахстан.</p>
            <h3>7. Форс-мажор</h3>
            <p>7.1. Стороны освобождаются от ответственности за полное или частичное неисполнение своих обязательств по настоящему Договору, если это вызвано обстоятельствами непреодолимой силы (форс-мажор).</p>
            <h3>8. Прочие условия</h3>
            <p>8.1. Настоящий Договор может быть изменен или дополнен Сайтом в одностороннем порядке с уведомлением Клиентов путем публикации на Сайте.</p>
            <p>8.2. Вопросы, не урегулированные настоящим Договором, регулируются в соответствии с законодательством Республики Казахстан.</p>
            <h3>9. Контактная информация</h3>
            <p>По всем вопросам, связанным с условиями настоящего Договора, обращайтесь по контактным номерам.</p>
            </ModalContent>
          )}
    </Container>
    </section>
  );
}
