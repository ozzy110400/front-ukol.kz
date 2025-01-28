import Footer from 'components/Footer';
import Bandage from 'components/services/Bandage';
import Detox from 'components/services/Detox';
import Drip from 'components/services/Drip';
import Header from 'components/services/Header';
import Injection from 'components/services/Injection';
import LastPhrase from 'components/services/LastPhrase';
import MainPhrase from 'components/services/MainPhrase';
import Nurse from 'components/services/Nurse';
import Tube from 'components/services/Tube';

import Head from 'preact-head';

export default function Services() {
  return (
    <main>
      <Head>
        <title>Все услуги | ukol.kz</title>
        <meta name="description" content="Полный список медицинских услуг на дому: уколы, капельницы, услуги медсестры, перевязки, уход за больными и многое другое." />
        <meta name="keywords" content="медицинские услуги на дому, уколы на дому, капельницы на дому, медсестра на дом, перевязки на дому, уход за больными" />
        <meta property="og:title" content="Все услуги | Укол.kz" />
        <meta property="og:description" content="Полный список медицинских услуг на дому: уколы, капельницы, услуги медсестры, перевязки, уход за больными и многое другое." />
        <meta property="og:url" content="https://ukol.kz/services" />
        <link rel="canonical" href="https://ukol.kz/services" />
      </Head>

      <Header/>
      <MainPhrase/>
      <Injection/>
      <Drip/>
      <Detox/>
      <Nurse/>
      <Bandage/>
      {/* <Tube/> */}
      <LastPhrase/>
      <Footer/>
     
    </main>
  );
};

