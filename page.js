"use client";

import { useMemo, useState } from "react";

const content = {
  ru: {
    brandSubtitle: "Road & Airfield Engineering",
    switchLabel: "EN",
    nav: {
      home: "Главная",
      about: "О компании",
      services: "Услуги",
      projects: "Проекты",
      contacts: "Контакты",
    },
    heroBadge: "Корпоративный сайт NOVATECH",
    heroTitle: "Поставка оборудования и инженерное сопровождение для дорог и аэродромов",
    heroText:
      "NOVATECH — компания для заказчиков, которым нужны профессиональные решения в строительстве дорог, аэродромов и инфраструктурных объектов: от поставки оборудования до инженерного сопровождения и контроля качества.",
    heroPrimary: "Связаться с нами",
    heroSecondary: "Смотреть услуги",
    homeStats: [
      { label: "Специализация", value: "Дороги и аэродромы" },
      { label: "Формат", value: "Корпоративный B2B сайт" },
      { label: "Языки", value: "Русский / English" },
      { label: "Проекты", value: "Международный опыт" },
    ],
    whyTitle: "Почему выбирают NOVATECH",
    whyItems: [
      "Опыт в международных проектах",
      "Экспертиза в дорогах и ВПП",
      "Контроль качества на всех этапах",
      "Гибкость и индивидуальные решения",
    ],
    homeSectionsTitle: "Что уже включено в сайт",
    homeSections: [
      {
        title: "Сильная главная страница",
        text: "Четкое позиционирование компании для заказчиков в дорожном и аэродромном строительстве, акцент на доверие, опыт и профессиональный подход.",
      },
      {
        title: "Страница о компании",
        text: "Описание специализации, направлений деятельности, инженерного подхода и деловой репутации NOVATECH.",
      },
      {
        title: "Раздел услуг",
        text: "Структурированная подача услуг: поставка оборудования, консультации, инженеринг, сопровождение и контроль качества.",
      },
      {
        title: "Блок реализованных проектов",
        text: "Сильные кейсы по аэродромам, ВПП, дорогам и инфраструктурным объектам в разных странах.",
      },
    ],
    aboutTitle: "О компании",
    aboutLead:
      "NOVATECH — современная B2B-компания, специализирующаяся на поставке оборудования, консультационных и инженерных услугах в сфере строительства дорог, аэродромов и инфраструктурных объектов.",
    aboutText:
      "Сайт выстроен как деловой инструмент для представления компании перед заказчиками, партнерами и инвесторами. Он подчеркивает экспертизу NOVATECH в дорожном и аэродромном строительстве, показывает практический опыт участия в значимых проектах и помогает перевести интерес клиента в конкретный запрос.",
    aboutCards: [
      "Экспертиза в дорогах и аэродромах",
      "B2B-структура под продажи",
      "Двухъязычная подача",
      "Готовность к расширению",
    ],
    servicesTitle: "Услуги",
    services: [
      {
        title: "Поставка оборудования",
        text: "Поставка оборудования для строительства дорог и аэродромов под задачи заказчика, проект и требуемые технические параметры.",
      },
      {
        title: "Консультационные услуги",
        text: "Профессиональные консультации по строительству дорог и аэродромов, выбору решений, материалов и организации работ.",
      },
      {
        title: "Инжиниринговые услуги",
        text: "Инженерные услуги в проектировании дорог и аэродромов с учетом технических требований, условий площадки и задач заказчика.",
      },
      {
        title: "Сопровождение проектов",
        text: "Инженерно-техническое сопровождение проекта на всех ключевых этапах реализации — от подготовки до сдачи объекта.",
      },
      {
        title: "Контроль качества",
        text: "Сопровождение и контроль качества строительства, материалов, технологических процессов и соответствия проектным решениям.",
      },
      {
        title: "Индивидуальные решения",
        text: "Подготовка решений под конкретный объект, страну, заказчика, отрасль и сложные инфраструктурные задачи.",
      },
    ],
    projectsTitle: "Проекты и кейсы",
    projectsLead:
      "Ниже показаны ключевые направления и проекты, в которых компания участвовала в формате инженерно-технического сопровождения.",
    projects: [
      {
        title: "Аэропорт Пулково, Санкт-Петербург",
        text: "Инженерно-техническое сопровождение строительства ВПП в аэропорту Пулково, Санкт-Петербург.",
      },
      {
        title: "Национальный аэропорт Минск",
        text: "Инженерно-техническое сопровождение строительства ВПП в Национальном аэропорту города Минск, Республика Беларусь.",
      },
      {
        title: "Аэропорт Одесса, Украина",
        text: "Инженерно-техническое сопровождение строительства ВПП в Одессе, Украина, 2016 год.",
      },
      {
        title: "Вторая кольцевая дорога М14, Минск",
        text: "Инженерно-техническое сопровождение строительства Второй кольцевой дороги М14 в городе Минск.",
      },
      {
        title: "Самарканд-Сити, Узбекистан",
        text: "Инженерно-техническое сопровождение строительства и благоустройства Самарканд-Сити, г. Самарканд, Узбекистан.",
      },
      {
        title: "Ашхабад, Туркменистан",
        text: "Инженерно-техническое сопровождение строительства дорог и водосточных каналов в Ашхабаде, Туркменистан.",
      },
    ],
    partnersTitle: "Партнеры",
    partners: [
      "СМТ-8, Минск",
      "ГСК Возрождение, Санкт-Петербург",
      "Возрождение, Ашхабад",
      "Интер Инжениринг, Ташкент",
      "СУ-288, Санкт-Петербург",
      "Автомагистраль-Юг, Одесса (2016)",
      "Белавтодор",
      "Узавтодор",
      "Казавтодор",
      "КаздорНИИ",
      "БелдорНИИ",
      "МАДИ, Москва",
      "Межправительственный совет дорожников, Москва",
      "Базис-А, Астана",
      "BI Group, Астана",
    ],
    contactsTitle: "Контакты",
    contactsLead:
      "Телефон и точный адрес можно добавить позже. Структура сайта уже готова, чтобы потом просто подставить финальные данные.",
    person: "Носенко Валерий Александрович",
    role: "Директор",
    phoneLabel: "Телефон",
    emailLabel: "Email",
    websiteLabel: "Сайт",
    addressLabel: "Адрес",
    phone: "+375 XX XXX XX XX",
    email: "email@novatech.by",
    website: "www.novatech.by",
    address: "Адрес будет добавлен позже",
    contactButton: "Отправить запрос",
    footer: "© NOVATECH. Корпоративный сайт компании.",
  },
  en: {
    brandSubtitle: "Road & Airfield Engineering",
    switchLabel: "RU",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contacts: "Contacts",
    },
    heroBadge: "NOVATECH corporate website",
    heroTitle: "Equipment supply and engineering support for roads and airfields",
    heroText:
      "NOVATECH works with clients who need professional solutions for road, airfield and infrastructure construction: from equipment supply to engineering support and quality control.",
    heroPrimary: "Contact us",
    heroSecondary: "View services",
    homeStats: [
      { label: "Specialization", value: "Roads and airfields" },
      { label: "Format", value: "Corporate B2B website" },
      { label: "Languages", value: "Russian / English" },
      { label: "Projects", value: "International experience" },
    ],
    whyTitle: "Why choose NOVATECH",
    whyItems: [
      "International project experience",
      "Expertise in roads and runways",
      "Quality control at every stage",
      "Flexible and tailored solutions",
    ],
    homeSectionsTitle: "What is already included",
    homeSections: [
      {
        title: "Strong homepage",
        text: "Clear positioning for customers in road and airfield construction with a focus on trust, experience and professional execution.",
      },
      {
        title: "About page",
        text: "A focused presentation of specialization, engineering approach, business profile and company strengths.",
      },
      {
        title: "Services section",
        text: "Structured presentation of equipment supply, consulting, engineering, project support and quality control services.",
      },
      {
        title: "Completed projects block",
        text: "Strong cases in airfields, runways, roads and infrastructure facilities across multiple countries.",
      },
    ],
    aboutTitle: "About the company",
    aboutLead:
      "NOVATECH is a modern B2B company specializing in equipment supply, consulting and engineering services for roads, airfields and infrastructure construction.",
    aboutText:
      "The website is built as a business tool for presenting the company to clients, partners and investors. It highlights NOVATECH expertise in road and airfield construction, shows practical experience in significant projects and helps convert interest into a direct business request.",
    aboutCards: [
      "Road and airfield expertise",
      "Built for B2B sales",
      "Bilingual presentation",
      "Ready for expansion",
    ],
    servicesTitle: "Services",
    services: [
      {
        title: "Equipment supply",
        text: "Supply of equipment for road and airfield construction based on project goals, technical requirements and customer needs.",
      },
      {
        title: "Consulting services",
        text: "Professional consulting in road and airfield construction, including solutions selection, materials and work organization.",
      },
      {
        title: "Engineering services",
        text: "Engineering support in the design of roads and airfields with attention to technical standards, site conditions and project objectives.",
      },
      {
        title: "Project support",
        text: "Engineering and technical support through all major stages of project delivery, from preparation to completion.",
      },
      {
        title: "Quality control",
        text: "Support and quality control of construction, materials, technological processes and compliance with project requirements.",
      },
      {
        title: "Custom solutions",
        text: "Tailored solutions for specific facilities, countries, customers, sectors and complex infrastructure tasks.",
      },
    ],
    projectsTitle: "Projects and cases",
    projectsLead:
      "Below are the key areas and projects in which the company participated through engineering and technical support services.",
    projects: [
      {
        title: "Pulkovo Airport, Saint Petersburg",
        text: "Engineering and technical support for runway construction at Pulkovo Airport, Saint Petersburg.",
      },
      {
        title: "National Airport Minsk",
        text: "Engineering and technical support for runway construction at National Airport Minsk, Republic of Belarus.",
      },
      {
        title: "Odessa Airport, Ukraine",
        text: "Engineering and technical support for runway construction in Odessa, Ukraine, 2016.",
      },
      {
        title: "M14 Second Ring Road, Minsk",
        text: "Engineering and technical support for construction of the M14 Second Ring Road in Minsk.",
      },
      {
        title: "Samarkand City, Uzbekistan",
        text: "Engineering and technical support for construction and landscaping of Samarkand City, Samarkand, Uzbekistan.",
      },
      {
        title: "Ashgabat, Turkmenistan",
        text: "Engineering and technical support for construction of roads and drainage channels in Ashgabat, Turkmenistan.",
      },
    ],
    partnersTitle: "Partners",
    partners: [
      "SMT-8, Minsk",
      "GSK Vozrozhdenie, Saint Petersburg",
      "Vozrozhdenie, Ashgabat",
      "Inter Engineering, Tashkent",
      "SU-288, Saint Petersburg",
      "Avtomagistral-Yug, Odessa (2016)",
      "Belavtodor",
      "Uzavtodor",
      "Kazavtodor",
      "KazdorNII",
      "BeldorNII",
      "MADI, Moscow",
      "Intergovernmental Road Council, Moscow",
      "Basis-A, Astana",
      "BI Group, Astana",
    ],
    contactsTitle: "Contacts",
    contactsLead:
      "The phone number and exact address can be added later. The site structure is ready, so the final contact details can simply be inserted afterward.",
    person: "Valery Aleksandrovich Nosenko",
    role: "Director",
    phoneLabel: "Phone",
    emailLabel: "Email",
    websiteLabel: "Website",
    addressLabel: "Address",
    phone: "+375 XX XXX XX XX",
    email: "email@novatech.by",
    website: "www.novatech.by",
    address: "Address will be added later",
    contactButton: "Send request",
    footer: "© NOVATECH. Corporate company website.",
  },
};

const pageKeys = ["home", "about", "services", "projects", "contacts"];

function SectionTitle({ title, text }) {
  return (
    <div className="section-title">
      <div className="eyebrow">NOVATECH</div>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function Card({ children, small = false }) {
  return <div className={small ? "card small-card" : "card"}>{children}</div>;
}

export default function HomePage() {
  const [lang, setLang] = useState("ru");
  const [page, setPage] = useState("home");
  const t = useMemo(() => content[lang], [lang]);

  return (
    <main className="site">
      <header className="topbar">
        <button className="logoBtn" onClick={() => setPage("home")}>
          <div className="logoMark" />
          <div>
            <div className="logoTitle">NOVATECH</div>
            <div className="logoSub">{t.brandSubtitle}</div>
          </div>
        </button>

        <nav className="nav">
          {pageKeys.map((key) => (
            <button
              key={key}
              className={page === key ? "navBtn active" : "navBtn"}
              onClick={() => setPage(key)}
            >
              {t.nav[key]}
            </button>
          ))}
        </nav>

        <button className="langBtn" onClick={() => setLang(lang === "ru" ? "en" : "ru")}>
          {t.switchLabel}
        </button>
      </header>

      {page === "home" && (
        <div className="pageWrap">
          <section className="hero">
            <div>
              <div className="badge">{t.heroBadge}</div>
              <h1>{t.heroTitle}</h1>
              <p className="heroText">{t.heroText}</p>
              <div className="actions">
                <button className="primaryBtn" onClick={() => setPage("contacts")}>
                  {t.heroPrimary}
                </button>
                <button className="secondaryBtn" onClick={() => setPage("services")}>
                  {t.heroSecondary}
                </button>
              </div>
            </div>

            <div className="statsGrid">
              {t.homeStats.map((item) => (
                <Card key={item.label}>
                  <div className="muted">{item.label}</div>
                  <div className="value">{item.value}</div>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title={t.whyTitle} />
            <div className="grid4">
              {t.whyItems.map((item) => (
                <Card key={item}>{item}</Card>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title={t.homeSectionsTitle} />
            <div className="grid2">
              {t.homeSections.map((item) => (
                <Card key={item.title}>
                  <div className="accentLine" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      )}

      {page === "about" && (
        <div className="pageWrap">
          <section>
            <SectionTitle title={t.aboutTitle} text={t.aboutLead} />
            <div className="aboutGrid">
              <Card>
                <p>{t.aboutText}</p>
              </Card>
              <div className="stack">
                {t.aboutCards.map((item) => (
                  <Card key={item} small>
                    {item}
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}

      {page === "services" && (
        <div className="pageWrap">
          <section>
            <SectionTitle title={t.servicesTitle} />
            <div className="grid3">
              {t.services.map((service) => (
                <Card key={service.title}>
                  <div className="accentLine" />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      )}

      {page === "projects" && (
        <div className="pageWrap">
          <section>
            <SectionTitle title={t.projectsTitle} text={t.projectsLead} />
            <div className="grid3">
              {t.projects.map((project) => (
                <Card key={project.title}>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title={t.partnersTitle} />
            <div className="grid3">
              {t.partners.map((p) => (
                <Card key={p} small>
                  {p}
                </Card>
              ))}
            </div>
          </section>
        </div>
      )}

      {page === "contacts" && (
        <div className="pageWrap">
          <section>
            <SectionTitle title={t.contactsTitle} text={t.contactsLead} />
            <div className="contactsGrid">
              <Card>
                <div className="contactItem">
                  <div className="muted">{lang === "ru" ? "Контактное лицо" : "Contact person"}</div>
                  <div className="value">{t.person}</div>
                  <div className="muted">{t.role}</div>
                </div>
                <div className="contactItem">
                  <div className="muted">{t.phoneLabel}</div>
                  <div className="value">{t.phone}</div>
                </div>
                <div className="contactItem">
                  <div className="muted">{t.emailLabel}</div>
                  <div className="value break">{t.email}</div>
                </div>
                <div className="contactItem">
                  <div className="muted">{t.websiteLabel}</div>
                  <div className="value">{t.website}</div>
                </div>
                <div className="contactItem">
                  <div className="muted">{t.addressLabel}</div>
                  <div className="value">{t.address}</div>
                </div>
              </Card>

              <Card>
                <div className="logoTitle" style={{marginBottom: 16}}>NOVATECH</div>
                <div className="stack">
                  <Card small>{t.phoneLabel}: {t.phone}</Card>
                  <Card small>{t.emailLabel}: {t.email}</Card>
                  <Card small>{t.websiteLabel}: {t.website}</Card>
                  <Card small>{t.addressLabel}: {t.address}</Card>
                </div>
                <button className="orangeBtn">{t.contactButton}</button>
              </Card>
            </div>
          </section>
        </div>
      )}

      <footer className="footer">{t.footer}</footer>
    </main>
  );
}
