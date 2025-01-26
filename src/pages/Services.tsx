import { h } from 'preact';
import Head from 'preact-head';

export default function Services() {

  const services = [
    {
      id: 2,
      title: "Наши услуги",
      url: "https://ukol.kz/services",
      description: "Страница со списком всех услуг и ценами",
      subServices: [
        { id: 2.1, title: "Уколы на дому", url: "/uslugi/ukoly" },
        { id: 2.2, title: "Капельницы на дому", url: "/uslugi/kapelnitsy" },
        { id: 2.3, title: "Услуги медсестры на дому", url: "/uslugi/medsestra-na-domu" },
        { id: 2.4, title: "Перевязки на дому", url: "/uslugi/perevyazki" },
        { id: 2.5, title: "Уход за лежачими больными", url: "/uslugi/ukhod-za-lezhachimi-bolnymi" },
        { id: 2.6, title: "Уход за пожилыми людьми", url: "/uslugi/ukhod-za-pozhilymi" },
        { id: 2.7, title: "Витаминные коктейли в капельницах", url: "/uslugi/vitaminnye-kokteyli" },
        { id: 2.8, title: "Нарколог на дом", url: "/uslugi/narkolog-na-dom" },
        { id: 2.9, title: "Плацентарная терапия", url: "/uslugi/placentarnaya-terapiya" },
        { id: 2.10, title: "Детоксикация", url: "/uslugi/detox" },
        { id: 2.11, title: "Установка назогастрального зонда", url: "/uslugi/ustanovka-nazogastralnogo-zonda" },
      ],
    },
  ];

  return (
    <div>
      <Head>
        <title>Все услуги | ukol.kz</title>
        <meta name="description" content="Полный список медицинских услуг на дому: уколы, капельницы, услуги медсестры, перевязки, уход за больными и многое другое." />
        <meta name="keywords" content="медицинские услуги на дому, уколы на дому, капельницы на дому, медсестра на дом, перевязки на дому, уход за больными" />
        <meta property="og:title" content="Все услуги | Укол.kz" />
        <meta property="og:description" content="Полный список медицинских услуг на дому: уколы, капельницы, услуги медсестры, перевязки, уход за больными и многое другое." />
        <meta property="og:url" content="https://ukol.kz/services" />
        <link rel="canonical" href="https://ukol.kz/services" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Наши услуги</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl">{service.title}</h2>
                <p>{service.description}</p>
                <div className="mt-4">
                  {service.subServices.map((subService) => (
                    <a key={subService.id} href={subService.url} className="block text-blue-500 hover:text-blue-700 mb-2">
                      {subService.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
