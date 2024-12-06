import { Suspense, useEffect } from 'preact/compat'
import { Switch, Route, useLocation } from 'wouter-preact';
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './pages/Main';
import Order from './pages/Order';
import Account from './pages/Account';
//import MainOld from './pages/MainOld/MainOld';


declare global {
  interface Window {
    clarity: (action: string, event: string, data: any) => void; // Add this line
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
        {/* You can enable Header if needed */}
        {/* <Header /> */}
        <Switch>
          <Route 
            path="/" 
            component={() => (
              <iframe 
                src="https://ukol.kz"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none', // Remove iframe border
                }} 
              />
            )}
          />
          {/* Add other routes if necessary */}
          <Route path="/order" component={Order} />
          <Route path="/account" component={Account} />
        </Switch>
      </Suspense>    
      {/* You can add Footer if needed */}
      {/* <Footer/> */}
    </div>
  )
}
