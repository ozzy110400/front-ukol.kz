import { useLocation, Link } from "wouter-preact";

const routesConfig = [
  { path: "/", name: "Главная" },
  { path: "/services", name: "Услуги" },

  { path: "/services/injections", name: "Уколы" },
  { path: "/services/injections/intravenous", name: "Внутривенный" },
  { path: "/services/injections/intramuscularly", name: "Внутримышечный" },
  { path: "/services/injections/subcutaneus", name: "Подкожный" },

  { path: "/services/drips", name: "Капельницы" },
  { path: "/services/drips/custom", name: "Индивидуальная" },
  { path: "/services/drips/poisoning", name: "От отравления" },

  { path: "/services/detox", name: "Детоксикация" },
  { path: "/services/detox/alcohol", name: "Алкогольная" },
  { path: "/services/detox/drug", name: "Наркотическая" },

  { path: "/services/nurse", name: "Медсестры" },
  { path: "/services/nurse/old", name: "Уход за пожилым" },
  { path: "/services/nurse/bed", name: "Уход за лежачим" },
  { path: "/services/nurse/event", name: "Мероприятие" },

  { path: "/services/bandage", name: "Перевязки" },
];

export default function Breadcrumbs() {
  const [location] = useLocation();

  const breadcrumbs = location
    .split("/")
    .reduce((acc, _, index, arr) => {
      const path = arr.slice(0, index + 1).join("/") || "/";
      const route = routesConfig.find((r) => r.path === path);
      if (route) {
        acc.push(route);
      }
      return acc;
    }, [] as { path: string; name: string }[]);

  // Убираем "Услуги", если есть подкатегории (но оставляем для /services)
  const filteredBreadcrumbs =
    location.startsWith("/services/") && location !== "/services"
      ? breadcrumbs.filter((b) => b.path !== "/services")
      : breadcrumbs;

  return (
    <div className="breadcrumbs text-black font-semibold text-md ml-4">
      <ul>
        {filteredBreadcrumbs.map((crumb, index) => (
          <li key={crumb.path}>
            {index < filteredBreadcrumbs.length - 1 ? (
              <a href={crumb.path}>{crumb.name}</a>
            ) : (
              <span>{crumb.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
