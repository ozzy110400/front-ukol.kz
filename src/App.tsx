import { Suspense, useEffect } from 'preact/compat'
import { Switch, Route, useLocation } from 'wouter-preact';
import Main from './pages/Main';
import Order from './pages/Order';
import Account from './pages/Account';
import Waiting from 'pages/Waiting';
import Raiting from 'pages/Rating';
import NotFound from 'pages/NotFound';

declare global {
  interface Window {
    clarity: (action: string, event: string) => void; 
  }
}

export const trackClarityEvent = (eventName: string) => {
  try {
    if (window.clarity) {
      console.log('Tracking Clarity event:', eventName); // Debug log
      window.clarity('event', eventName);
    } else {
      console.warn('Clarity not initialized');
    }
  } catch (error) {
    console.error('Error tracking Clarity event:', error);
  }
};

export default function () {

  const [location] = useLocation(); 

  useEffect(() => {
    switch (location) {
      case '/':
        document.title = 'Вызов опытной медсестры на дом';
        break;
      case '/order':
        document.title = 'Вызов опытной медсестры на дом';
        break;
      case '/account':
        document.title = 'Вызов опытной медсестры на дом';
        break;
      default:
        document.title = 'Вызов опытной медсестры на дом';
    }
  }, [location]); 

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ukol.kz",
    "description": "Профессиональные медицинские услуги на дому в Казахстане",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KZ"
    },
    "telephone": "+77027776776",
    "openingHours": "Mo-Su 08:00-23:00"
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ 
      height: '100vh', // Ensure the container takes full viewport height
      margin: 0,       // Remove any default margin
      padding: 0,      // Remove padding to avoid restricting space
      display: 'flex', // Use flexbox to manage the content
      flexDirection: 'column', // Arrange the layout vertically
    }}>   
     
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL4BHDZW"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
       <Suspense fallback={<p>Loading...</p>}>
        {/* <Header /> */}
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/order" component={Order} />
          <Route path="/account" component={Account} />
          <Route path="/waiting" component={Waiting} />
          <Route path="/rating/:id" component={Raiting} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>    
      {/* <Footer/> */}
    </div>
  )
}
