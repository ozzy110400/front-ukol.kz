import { useState } from 'preact/hooks';
import logoImg from "/img/logo.svg";
import { navigate } from 'wouter-preact/use-browser-location';

const options = [
  { label: 'Наши услуги', target: 'services' },
  { label: 'Отзывы', target: 'reviews' },
  { label: 'О нас', target: 'about' },
  //{ label: 'Контакты', target: 'contacts' },
  { label: 'Медикам', target: 'spec' },
];
export default function Header() {

    const handleWhatsAppClick = () => {
        const phone = '77027776776'; // Replace with the actual phone number
        const message = 'Здравствуйте! Нужна помощь с заказом медицинских услуг'; // The message you want to send
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank'); // Open in a new tab
      };

  return (
    <div className="navbar bg-transparent">
        <div className="flex-1 mt-3 ml-3">
            <button onClick={handleWhatsAppClick} className="bg-my-green text-black font-semibold py-2 px-4 rounded-lg hover:bg-my-green-dark transition-colors">
                связаться
            </button>
        </div>
        <div className="flex-none mt-3 mr-3">
            <a href="/" className="bg-my-green text-black font-semibold py-2 px-4 rounded-lg hover:bg-my-green-dark transition-colors">
                на главную
            </a>
        </div>
    </div>
   
  );
}

