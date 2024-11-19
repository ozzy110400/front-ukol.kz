import { Suspense, useEffect } from 'preact/compat'
import { Switch, Route, useLocation} from 'wouter-preact';
import Header from './components/Header'
import Footer from './components/Footer';
import Main from './pages/Main';
import Order from './pages/Order';
import Account from './pages/Account';

export default function () {

  const [location] = useLocation(); // Get the current route

  useEffect(() => {
    switch (location) {
      case '/':
        document.title = 'Главная страница';
        break;
      case '/order':
        document.title = 'Заказ медсотрудника';
        break;
      case '/account':
        document.title = 'Личный кабинет';
        break;
      default:
        document.title = 'Ukol';
    }
  }, [location]); 


  return (
    <div className="container mx-auto" style={{ paddingBottom: '72px' }}>      <Suspense fallback={<p>Loading...</p>} >
        {/* <Header /> */}
        <Switch>
           <Route path="/" component={Main} />
           <Route path="/order" component={Order} />
           <Route path="/account" component={Account} />
        </Switch>    
      </Suspense>    
      <Footer/>
    </div>
  )
}
