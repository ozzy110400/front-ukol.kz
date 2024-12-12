import { Suspense, useEffect } from 'preact/compat'
import { Switch, Route, useLocation } from 'wouter-preact';
import Main from './pages/Main';
import Order from './pages/Order';
import Account from './pages/Account';

declare global {
  interface Window {
    clarity: (action: string, event: string) => void; // Add this line
  }
}

export default function () {

  const [location] = useLocation(); // Get the current route

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
        </Switch>
      </Suspense>    
      {/* <Footer/> */}
    </div>
  )
}
