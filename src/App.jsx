const projects = [
  {
    title: "Audi Q8 e-tron",
    subtitle: "Естетика майбутнього",
    category: "AI-відео / Luxury Automotive",
    image: "/images/audi-q8-cover.jpg.png",
    youtube: "https://www.youtube.com/embed/97CBgS4R8Lk",
    shortConcept:
      "Кінематографічна візуалізація преміального електрокара, де технологічна досконалість зустрічається з художньою майстерністю.",
    conceptTitle: "Концепція: «The future has presence».",
    concept:
      "Цей проект — кінематографічна візуалізація преміального електрокара, де технологічна досконалість зустрічається з художньою майстерністю. Основний акцент зроблено на грі світла й тіні, що підкреслює бездоганні текстури металу та футуристичний силует Audi Q8 e-tron.",
    process:
      "Створення проекту включало розробку детального сторіборду на 12 сцен та фінальну збірку з акцентом на преміальній динаміці.",
    tools: [
      {
        name: "Візуальна генерація",
        text: "Kling AI та Flow забезпечили плавність рухів та реалістичність фізики.",
      },
      {
        name: "Сценарій та промптінг",
        text: "Grok використано для глибокої розробки концепції та візуальних акцентів.",
      },
      {
        name: "Саунд-дизайн",
        text: "Suno створив унікальний атмосферний аудіосупровід.",
      },
      {
        name: "Пост-продакшн",
        text: "DaVinci Resolve для професійного грейдингу та досягнення кінематографічного «дорогого» вигляду.",
      },
    ],
  },
  {
    title: "Симфонія іржі",
    subtitle: "Голос життя у світі машин",
    category: "AI-фільм / Атмосферна візуальна історія",
    image: "/images/symphony-rust-cover.jpg.jpeg",
    youtube: "https://www.youtube.com/embed/3l2LHv8ifUU",
    shortConcept:
      "Емоційна візуальна історія про світ, де холодний метал та іржа поглинули все, крім людської душі.",
    conceptTitle: "Концепція: Мистецтво як символ спротиву та відродження.",
    concept:
      "Емоційна візуальна історія про світ, де холодний метал та іржа поглинули все, крім людської душі. Це розповідь про те, як одна нота скрипки здатна розірвати тишу постапокаліпсису та дати життя неоновим квітам.",
    process:
      "Наратив побудований на різкому контрасті між похмурим індустріальним середовищем та яскравими елементами «живого» мистецтва. Деталізація емоцій героїні та кібернетичних елементів створює глибоке занурення в сюжет.",
    tools: [
      {
        name: "Відеопродакшен",
        text: "Kling AI та Flow використані для створення складних сцен із динамічним димом та світловими ефектами.",
      },
      {
        name: "Музична архітектура",
        text: "Suno згенерував драматичну скрипкову партію, що стала серцем проекту.",
      },
      {
        name: "Креативне керівництво",
        text: "Grok допоміг сформувати наративну лінію та описи кадрів.",
      },
      {
        name: "Монтаж",
        text: "DaVinci Resolve застосовано для маскування, кольорокорекції та створення цілісного кінообразу.",
      },
    ],
  },
];

const mainServices = [
  {
    title: "AI Cinema & Visual Production",
    description:
      "Преміальний візуальний контент для брендів, які цінують естетику, якість і сильну атмосферу.",
    items: [
      {
        name: "AI Photo Campaign",
        details:
          "Пакет із 5–10 фотореалістичних Hi-Res зображень для соцмереж, сайту або рекламної кампанії.",
        price: "from $200",
      },
      {
        name: "AI Promo Video",
        details:
          "AI-ролик 15–30 секунд: ідея, генерація, монтаж у DaVinci Resolve, саунд-дизайн.",
        price: "from $500",
      },
      {
        name: "AI Brand Story",
        details:
          "Кінематографічний ролик до 60 секунд з глибоким опрацюванням стилю, монтажем та звуковим оформленням.",
        price: "from $850",
      },
    ],
  },
  {
    title: "Web Development & Digital Presence",
    description:
      "Сучасні, швидкі та візуально чисті сайти для брендів, експертів, студій і преміальних послуг.",
    items: [
      {
        name: "Landing Page Premium",
        details:
          "Односторінковий сайт на Vercel з AI-контентом, преміальною візуальною подачею та контактним блоком.",
        price: "from $600",
      },
      {
        name: "Portfolio / Promo Site",
        details:
          "Сайт-візитка для творчих студій, експертів або брендів з акцентом на сильний візуал.",
        price: "from $800",
      },
      {
        name: "Website Support",
        details:
          "Оновлення контенту, технічна підтримка, базові правки та супровід сайту.",
        price: "from $70 / month",
      },
    ],
  },
  {
    title: "Performance Creatives",
    description:
      "Рекламні креативи та візуальні рішення для запусків, соцмереж, PPC-кампаній і продажів.",
    items: [
      {
        name: "PPC Creative Pack",
        details:
          "Сет із 5 статичних і 2 відео-креативів для рекламних кампаній у Facebook, Instagram або Google.",
        price: "from $450",
      },
      {
        name: "Conversion Audit",
        details:
          "Аналіз посадкової сторінки та рекомендації щодо покращення візуалу, структури й конверсії.",
        price: "from $150",
      },
      {
        name: "Complex Performance Design",
        details:
          "Візуальна стратегія для запуску нового продукту: креативи, структура, сторінки та рекламна подача.",
        price: "from $1,000",
      },
    ],
  },
];

const microServices = [
  [
    "Single AI Image",
    "Фінальне Hi-Res зображення для реклами, обкладинки або сайту.",
    "from $40",
  ],
  [
    "AI Retouch / Inpainting",
    "Заміна об’єктів, корекція деталей, розширення фону, доопрацювання кадру.",
    "from $30",
  ],
  [
    "Visual Style Guide",
    "Розробка стилістики, напрямку, референсів і промптів для бренду.",
    "from $100",
  ],
  [
    "Single AI Video Clip",
    "Одна AI-сцена 5–10 секунд у Kling / Flow / Luma за вашим ТЗ.",
    "from $100",
  ],
  [
    "Voiceover up to 1 min",
    "Голосова озвучка, чистка аудіо та накладання музичного фону.",
    "from $50",
  ],
  [
    "Editing & Color Grading",
    "Монтаж, кольорокорекція, ритм, маски, переходи та фінальний вигляд ролика.",
    "from $150",
  ],
  [
    "Photo Animation",
    "Оживлення статичного кадру з плавним рухом і збереженням атмосфери.",
    "from $60",
  ],
  [
    "Vercel Deployment",
    "Налаштування репозиторію, деплой сайту та підключення домену.",
    "from $70",
  ],
  [
    "Custom Website Section",
    "Дизайн і верстка одного унікального блоку для сайту.",
    "from $120",
  ],
  [
    "Technical Consultation",
    "Консультація щодо AI-інструментів, структури сайту або візуального workflow.",
    "from $50 / hour",
  ],
  [
    "Static Ad Banner",
    "Один статичний рекламний банер для соцмереж або кампанії.",
    "from $50",
  ],
  [
    "Social Video Creative",
    "Один відео-креатив для Reels, TikTok, Instagram або рекламного запуску.",
    "from $150",
  ],
  [
    "Ad Storyboard",
    "Структура, сценарій і розкадровка для рекламного ролика.",
    "from $80",
  ],
];

const capabilities = [
  "AI video commercials",
  "Premium product visuals",
  "Landing pages and portfolio websites",
  "Corporate presentations",
  "Sales presentations",
  "Logo animation",
  "Architectural exterior renders",
  "District and real estate visualizations",
  "PPC creatives",
  "Cinematic brand storytelling",
];

const whyNevora = [
  {
    title: "Технологічність",
    text: "NEVORA.AI використовує сучасні AI-інструменти для створення візуалу, який раніше потребував складних зйомок, великих команд і довгого продакшену.",
  },
  {
    title: "Маркетинговий підхід",
    text: "Кожен кадр, блок сайту або презентаційний слайд створюється не просто для краси, а з урахуванням задач бізнесу, уваги клієнта і цілі продажу.",
  },
  {
    title: "Естетика Luxury",
    text: "Фокус на темному преміальному стилі, атмосфері, світлі, деталях, ритмі, дорогій подачі та візуальній цілісності бренду.",
  },
  {
    title: "Повний workflow",
    text: "Від ідеї, концепту, промптів і генерації до монтажу, кольору, сайту, презентації, рекламних матеріалів і фінальної подачі.",
  },
];

const workingTerms = [
  "Термін виконання: від 24 до 72 годин залежно від складності задачі.",
  "У вартість включено 2 ітерації правок.",
  "Термінове виконання день у день: +50% до вартості.",
  "Фінальна ціна залежить від складності, тривалості, дедлайну, кількості матеріалів і правок.",
  "Оплата можлива в USD або в гривні за актуальним курсом.",
];

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "white",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          .logo-glow {
            filter:
              drop-shadow(0 0 8px rgba(207, 181, 59, 0.22))
              drop-shadow(0 0 20px rgba(207, 181, 59, 0.14))
              drop-shadow(0 0 42px rgba(207, 181, 59, 0.08));
            animation: logoPulse 4s ease-in-out infinite;
          }

          @keyframes logoPulse {
            0%, 100% {
              filter:
                drop-shadow(0 0 8px rgba(207, 181, 59, 0.22))
                drop-shadow(0 0 20px rgba(207, 181, 59, 0.14))
                drop-shadow(0 0 42px rgba(207, 181, 59, 0.08));
            }

            50% {
              filter:
                drop-shadow(0 0 14px rgba(207, 181, 59, 0.34))
                drop-shadow(0 0 34px rgba(207, 181, 59, 0.20))
                drop-shadow(0 0 58px rgba(207, 181, 59, 0.11));
            }
          }

          .premium-card {
            transition: all 0.5s ease;
            will-change: transform, box-shadow, background;
          }

          .premium-card:hover {
            transform: scale(1.03);
            box-shadow: 0 24px 70px rgba(207, 181, 59, 0.22);
            border-color: rgba(207, 181, 59, 0.45) !important;
            background: rgba(255, 255, 255, 0.075) !important;
          }

          .quiet-card {
            transition: all 0.5s ease;
          }

          .quiet-card:hover {
            transform: translateY(-6px);
            border-color: rgba(207, 181, 59, 0.35) !important;
            background: rgba(255, 255, 255, 0.065) !important;
          }

          .project-card {
            transition: all 0.5s ease;
          }

          .project-card:hover {
            transform: scale(1.02);
            box-shadow: 0 20px 60px rgba(207, 181, 59, 0.16);
            border-color: rgba(207, 181, 59, 0.35) !important;
          }

          .project-card img {
            transition: transform 0.5s ease;
          }

          .project-card:hover img {
            transform: scale(1.04);
          }

          .social-bottom-button {
            transition: all 0.35s ease;
          }

          .social-bottom-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 36px rgba(207, 181, 59, 0.22);
          }

          @media (max-width: 700px) {
            .hero-logo {
              width: 235px !important;
              margin-bottom: 10px !important;
            }

            .footer-socials {
              justify-content: center !important;
            }

            .footer-inner {
              text-align: center !important;
              justify-content: center !important;
            }

            .price-row-mobile {
              grid-template-columns: 1fr !important;
            }

            .case-card-mobile {
              padding: 26px !important;
            }
          }
        `}
      </style>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 40px 40px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 10%, rgba(207,181,59,0.12), transparent 27%), radial-gradient(circle at 30% 10%, rgba(207,181,59,0.07), transparent 24%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05), transparent 22%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <img
            src="/images/nevora-logo.png"
            alt="NEVORA AI Creative Studio"
            className="logo-glow hero-logo"
            style={{
              width: "310px",
              maxWidth: "84vw",
              height: "auto",
              display: "block",
              margin: "0 auto 18px",
              borderRadius: "0",
            }}
          />

          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 82px)",
              lineHeight: "1.04",
              margin: "0 auto",
              maxWidth: "1050px",
              fontWeight: "700",
            }}
          >
            Преміальний AI-візуал для брендів, які хочуть виглядати незабутньо.
          </h1>

          <p
            style={{
              color: "#cfcfcf",
              fontSize: "20px",
              lineHeight: "1.7",
              maxWidth: "780px",
              margin: "28px auto 24px",
            }}
          >
            NEVORA.AI створює кінематографічні AI-відео, рекламні креативи,
            сайти, презентації, анімації логотипів, архітектурні рендери та
            преміальні візуальні концепти для бізнесу.
          </p>

          <p
            style={{
              color: "#cfb53b",
              fontSize: "15px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            Київ / Remote • AI Production • Web • Presentations • Brand Visuals
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginTop: "28px",
            }}
          >
            <a href="#work" style={buttonPrimary}>
              Дивитися роботи
            </a>

            <a href="#pricing" style={buttonSecondary}>
              Послуги та ціни
            </a>

            <a href="#contact" style={buttonGold}>
              Обговорити проєкт
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 40px", background: "#080808" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>ЧОМУ NEVORA.AI</p>

          <h2 style={sectionTitle}>
            Не просто AI-генерація, а візуальна режисура з комерційною метою.
          </h2>

          <div style={gridFour}>
            {whyNevora.map((item) => (
              <div key={item.title} className="quiet-card" style={darkCard}>
                <h3 style={cardTitle}>{item.title}</h3>
                <p style={paragraph}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" style={{ padding: "100px 40px 80px" }}>
        <p style={sectionLabel}>ПОРТФОЛІО</p>

        <h2 style={sectionTitle}>Вибрані проєкти</h2>

        <p style={sectionDescription}>
          Дві сильні роботи NEVORA.AI — кінематографічні, атмосферні та емоційно
          виразні.
        </p>

        <div style={projectGrid}>
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card"
              style={projectCard}
            >
              <div style={imageWrap}>
                <img src={project.image} alt={project.title} style={imageStyle} />
              </div>

              <p style={{ color: "#999", marginBottom: "10px", fontSize: "16px" }}>
                {project.category}
              </p>

              <h3 style={{ fontSize: "34px", marginTop: 0, marginBottom: "8px" }}>
                {project.title}
              </h3>

              <p
                style={{
                  color: "#b5b5b5",
                  fontSize: "18px",
                  marginTop: 0,
                  marginBottom: "20px",
                }}
              >
                {project.subtitle}
              </p>

              <p style={paragraph}>{project.shortConcept}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "70px 40px 100px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          {projects.map((project) => (
            <div
              key={project.title + " video"}
              className="case-card-mobile"
              style={caseCard}
            >
              <p style={sectionLabelSmall}>CASE STUDY</p>

              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  marginTop: 0,
                  marginBottom: "12px",
                }}
              >
                {project.title}: {project.subtitle}
              </h2>

              <p
                style={{
                  color: "#CFB53B",
                  fontSize: "20px",
                  lineHeight: "1.6",
                  marginTop: 0,
                  marginBottom: "30px",
                  fontWeight: "700",
                }}
              >
                {project.conceptTitle}
              </p>

              <div style={videoWrap}>
                <iframe
                  src={project.youtube}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={iframeStyle}
                />
              </div>

              <div style={{ display: "grid", gap: "26px" }}>
                <div>
                  <h3 style={caseSubtitle}>Концепція</h3>
                  <p style={paragraph}>{project.concept}</p>
                </div>

                <div>
                  <h3 style={caseSubtitle}>Процес</h3>
                  <p style={paragraph}>{project.process}</p>
                </div>

                <div>
                  <h3 style={caseSubtitle}>Інструменти та нейромережі</h3>

                  <div style={toolsGrid}>
                    {project.tools.map((tool) => (
                      <div key={tool.name} className="quiet-card" style={toolCard}>
                        <h4
                          style={{
                            margin: "0 0 10px",
                            color: "#CFB53B",
                            fontSize: "18px",
                          }}
                        >
                          {tool.name}
                        </h4>

                        <p style={{ ...paragraph, fontSize: "16px", margin: 0 }}>
                          {tool.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "90px 40px", background: "#080808" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>ДЛЯ БРЕНДІВ, ЯКИМ ПОТРІБНО</p>

          <h2 style={sectionTitle}>
            Преміальний візуал для запусків, реклами, сайтів і продажів.
          </h2>

          <div style={pillGrid}>
            {capabilities.map((item) => (
              <div key={item} className="quiet-card" style={pill}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        style={{ padding: "100px 40px", background: "#0b0b0b" }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>ПОСЛУГИ ТА ЦІНИ</p>

          <h2 style={sectionTitle}>Основні напрямки роботи</h2>

          <p style={sectionDescription}>
            Вартість вказана як стартова. Фінальна ціна залежить від складності,
            дедлайну, кількості матеріалів і рівня деталізації.
          </p>

          <div style={{ display: "grid", gap: "28px" }}>
            {mainServices.map((group) => (
              <section key={group.title} className="premium-card" style={serviceGroup}>
                <h3 style={{ fontSize: "32px", marginTop: 0, marginBottom: "12px" }}>
                  {group.title}
                </h3>

                <p style={{ ...paragraph, marginBottom: "28px" }}>
                  {group.description}
                </p>

                <div style={{ display: "grid", gap: "14px" }}>
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="price-row-mobile"
                      style={priceRow}
                    >
                      <div>
                        <h4 style={{ fontSize: "20px", margin: "0 0 8px" }}>
                          {item.name}
                        </h4>

                        <p style={{ ...paragraph, margin: 0, fontSize: "16px" }}>
                          {item.details}
                        </p>
                      </div>

                      <strong
                        style={{
                          color: "#CFB53B",
                          fontSize: "18px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.price}
                      </strong>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 40px", background: "#050505" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>MICRO-SERVICES & ADD-ONS</p>

          <h2 style={sectionTitle}>Окремі задачі та додаткові послуги</h2>

          <p style={sectionDescription}>
            Формат для невеликих задач, швидких правок, тестових проєктів або
            точкової допомоги з AI-візуалом, відео, сайтом чи рекламою.
          </p>

          <div style={microGrid}>
            {microServices.map(([name, details, price]) => (
              <div key={name} className="quiet-card" style={darkCard}>
                <h3 style={cardTitle}>{name}</h3>

                <p style={{ ...paragraph, fontSize: "16px" }}>{details}</p>

                <p style={{ color: "#CFB53B", fontWeight: "700", marginTop: "18px" }}>
                  {price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "90px 40px", background: "#080808" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <p style={sectionLabel}>УМОВИ СПІВПРАЦІ</p>

          <h2 style={sectionTitle}>Прозорий процес і зрозумілі правила</h2>

          <div style={gridFour}>
            {workingTerms.map((term) => (
              <div key={term} className="quiet-card" style={darkCard}>
                <p style={{ ...paragraph, margin: 0 }}>{term}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" style={{ padding: "100px 40px" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "32px",
            padding: "60px 40px",
            background: "white",
            color: "black",
            textAlign: "center",
          }}
        >
          <p
            style={{
              letterSpacing: "5px",
              color: "#777",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            ГОТОВІ РЕАЛІЗУВАТИ ПРОЄКТ?
          </p>

          <h2
            style={{
              fontSize: "clamp(38px, 5vw, 56px)",
              lineHeight: "1.1",
              maxWidth: "850px",
              margin: "0 auto 30px",
            }}
          >
            Напишіть, щоб отримати індивідуальну пропозицію.
          </h2>

          <p
            style={{
              color: "#444",
              fontSize: "18px",
              lineHeight: "1.7",
              maxWidth: "650px",
              margin: "0 auto 36px",
            }}
          >
            Розкажіть коротко про задачу: відео, сайт, презентація, рендери,
            рекламні креативи або повна візуальна система для бренду.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:nevora.aistudio@gmail.com?subject=Запит на проєкт NEVORA.AI"
              style={contactBlack}
            >
              Написати на email
            </a>

            <a
              href="https://t.me/nevora_ai"
              target="_blank"
              rel="noreferrer"
              style={contactGold}
            >
              Telegram @nevora_ai
            </a>
          </div>

          <p style={{ marginTop: "28px", color: "#555", fontSize: "16px" }}>
            nevora.aistudio@gmail.com
          </p>

          <p style={{ marginTop: "8px", color: "#777", fontSize: "15px" }}>
            Київ / Remote
          </p>
        </div>
      </section>

      <footer
        style={{
          padding: "46px 40px",
          color: "#777",
          background: "#050505",
          borderTop: "1px solid rgba(255,255,255,0.10)",
        }}
      >
        <div
          className="footer-inner"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p style={{ margin: "0 0 8px", color: "#aaa", fontSize: "14px" }}>
              © 2026 NEVORA.AI Creative Studio. All rights reserved.
            </p>

            <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
              AI Video • Websites • Presentations • Logo Animation • Renders
            </p>
          </div>

          <div
            className="footer-socials"
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <a
              href="https://t.me/nevora_ai"
              target="_blank"
              rel="noreferrer"
              className="social-bottom-button"
              style={telegramButton}
            >
              Telegram @nevora_ai
            </a>

            <a
              href="https://www.instagram.com/nevora.ai/"
              target="_blank"
              rel="noreferrer"
              className="social-bottom-button"
              style={instagramButton}
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

const buttonPrimary = {
  background: "white",
  color: "black",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "18px 32px",
  fontSize: "16px",
  display: "inline-block",
};

const buttonSecondary = {
  background: "transparent",
  color: "white",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "999px",
  padding: "18px 32px",
  fontSize: "16px",
  display: "inline-block",
};

const buttonGold = {
  background: "#CFB53B",
  color: "black",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "18px 32px",
  fontSize: "16px",
  display: "inline-block",
  fontWeight: "700",
};

const sectionLabel = {
  letterSpacing: "5px",
  color: "#b5b5b5",
  fontSize: "14px",
  marginTop: "0",
  marginBottom: "18px",
  textAlign: "center",
};

const sectionLabelSmall = {
  letterSpacing: "4px",
  color: "#999",
  fontSize: "13px",
  marginBottom: "16px",
};

const sectionTitle = {
  fontSize: "clamp(38px, 5vw, 60px)",
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: "700",
};

const sectionDescription = {
  color: "#cfcfcf",
  textAlign: "center",
  maxWidth: "760px",
  margin: "0 auto 60px",
  lineHeight: "1.7",
  fontSize: "18px",
};

const paragraph = {
  color: "#cfcfcf",
  lineHeight: "1.8",
  fontSize: "17px",
};

const gridFour = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
  marginTop: "50px",
};

const darkCard = {
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "24px",
  padding: "24px",
  background: "rgba(255,255,255,0.04)",
};

const cardTitle = {
  fontSize: "22px",
  marginTop: 0,
  marginBottom: "12px",
};

const projectGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "28px",
  maxWidth: "1180px",
  margin: "0 auto",
};

const projectCard = {
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "28px",
  padding: "28px",
  background: "rgba(255,255,255,0.04)",
  overflow: "hidden",
};

const imageWrap = {
  width: "100%",
  height: "260px",
  borderRadius: "20px",
  overflow: "hidden",
  marginBottom: "28px",
  background: "#111",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const caseCard = {
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "32px",
  padding: "42px",
  background: "rgba(255,255,255,0.04)",
  marginBottom: "36px",
};

const caseSubtitle = {
  color: "white",
  fontSize: "24px",
  margin: "0 0 12px",
};

const toolsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px",
};

const toolCard = {
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "22px",
  padding: "22px",
  background: "rgba(255,255,255,0.035)",
};

const videoWrap = {
  position: "relative",
  width: "100%",
  paddingTop: "56.25%",
  borderRadius: "24px",
  overflow: "hidden",
  marginBottom: "36px",
  background: "#111",
};

const iframeStyle = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  border: "0",
};

const pillGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "16px",
  marginTop: "50px",
};

const pill = {
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "999px",
  padding: "18px 22px",
  background: "rgba(255,255,255,0.04)",
  textAlign: "center",
  color: "#d6d6d6",
  fontSize: "16px",
};

const serviceGroup = {
  border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: "30px",
  padding: "32px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.025))",
};

const priceRow = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: "24px",
  alignItems: "start",
  borderTop: "1px solid rgba(255,255,255,0.12)",
  padding: "20px 0",
};

const microGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const contactBlack = {
  background: "black",
  color: "white",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "18px 32px",
  fontSize: "16px",
  display: "inline-block",
};

const contactGold = {
  background: "#CFB53B",
  color: "black",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "18px 32px",
  fontSize: "16px",
  display: "inline-block",
  fontWeight: "700",
};

const telegramButton = {
  background: "#CFB53B",
  color: "black",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "16px 26px",
  fontSize: "15px",
  display: "inline-block",
  fontWeight: "700",
  border: "1px solid rgba(207,181,59,0.75)",
};

const instagramButton = {
  background: "transparent",
  color: "white",
  textDecoration: "none",
  border: "1px solid rgba(207,181,59,0.55)",
  borderRadius: "999px",
  padding: "16px 26px",
  fontSize: "15px",
  display: "inline-block",
};