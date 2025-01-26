import MainPhrase from '../components/main/MainPhrase';
import FAQ from '../components/main/FAQ';
import Header from 'components/main/Header';
import Experts from 'components/main/Experts';
import LastPhrase from 'components/main/LastPhrase';
import Review from 'components/main/Reviews';
import Service from 'components/main/Service';
import Footer from 'components/main/Footer';

export default function Main() {
  return (
    <main 
     // className="bg-transparent flex flex-col justify-center text-center"
      itemScope
      itemType="http://schema.org/MedicalOrganization"
    >
      <meta itemProp="name" content="Ukol.kz" />
      <meta itemProp="description" content="Профессиональные медицинские услуги на дому в Казахстане" />
      
      <Header />
      <MainPhrase />
      <Experts />
      <Service/>
      <Review/>
      <FAQ />
      <LastPhrase />
      <Footer />
    </main>
  );
}
