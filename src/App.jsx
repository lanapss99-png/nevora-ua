const projects = [
  {
    title: "Audi Q8 e-tron",
    subtitle: "Естетика майбутнього",
    category: "AI-відео / Luxury Automotive",
    image: "/images/audi-q8-cover.jpg.png",
    youtube: "https://www.youtube.com/embed/97CBgS4R8Lk",
    concept:
      "Преміальний електромобіль, візуалізований через кінематографічне освітлення, тіні, рух і атмосферу майбутнього.",
    process:
      "Проєкт створений як серія високохудожніх кадрів з акцентом на метал, світло, преміальність бренду, динаміку та футуристичну естетику.",
  },
  {
    title: "Симфонія іржі",
    subtitle: "Голос життя у світі машин",
    category: "AI-фільм / Атмосферна візуальна історія",
    image: "/images/symphony-rust-cover.jpg.jpeg",
    youtube: "https://www.youtube.com/embed/3l2LHv8ifUU",
    concept:
      "Емоційна кіноісторія про силу мистецтва. Світ, де музика здатна прорости квітами крізь іржу, тишу та холодні технології.",
    process:
      "Наратив побудований на контрасті між похмурим постапокаліптичним середовищем, кібернетичними деталями, емоціями героїні та неоновими елементами живого мистецтва.",
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
          html { scroll-behavior: smooth; }

          .premium-card,
          .quiet-card,
          .project-card {
            transition: all 0.5s ease;
          }

          .premium-card:hover {
            transform: scale(1.03);
            box-shadow: 0 24px 70px rgba(207, 181, 59, 0.22);
            border-color: rgba(207, 181, 59, 0.45) !important;
            background: rgba(255, 255, 255, 0.075) !important;
          }

          .quiet-card:hover {
            transform: translateY(-6px);
            border-color: rgba(207, 181, 59, 0.35) !important;
            background: rgba(255, 255, 255, 0.065) !important;
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

          @media (max-width: 720px) {
            .price-row {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>

      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "34px 40px 70px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 28% 8%, rgba(207,181,59,0.13), transparent 30%), radial-gradient(circle at 78% 18%, rgba(255,255,255,0.075), transparent 25%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "980px", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "26px",
            }}
          >
            <img
              src="/images/nevora-logo.png"
              alt="NEVORA.AI Creative Studio logo"
              style={{
                width: "220px",
                maxWidth: "82%",
                height: "auto",
                display: "block",
                filter:
                  "brightness(1.55) contrast(1.08) drop-shadow(0 20px 60px rgba(207, 181, 59, 0.38))",
              }}
            />
          </div>

          <p style={sectionLabel}>NEVORA.AI КРЕАТИВНА СТУДІЯ</p>

          <h1
            style={{
              fontSize: "clamp(38px, 5.2vw, 68px)",
              lineHeight: "1.07",
              margin: "0 auto",
              maxWidth: "920px",
              fontWeight: "700",
              letterSpacing: "-0.04em",
            }}
          >
            AI-візуал, сайти та презентації для брендів із преміальною подачею.
          </h1>

          <p
            style={{
              color: "#d4d4d4",
              fontSize: "19px",
              lineHeight: "1.75",
              maxWidth: "760px",
              margin: "30px auto 0",
            }}
          >
            Кінематографічні AI-відео, рекламні креативи, landing pages,
            презентації, логотип-анімації та візуальні концепти для бізнесу.
          </p>

          <p
            style={{
              color: "#cfb53b",
              fontSize: "14px",
              letterSpacing: "2.8px",
              textTransform: "uppercase",
              margin: "34px auto 0",
              lineHeight: "1.7",
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
              marginTop: "38px",
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

      <Section
        label="ЧОМУ NEVORA.AI"
        title="Не просто AI-генерація, а візуальна режисура з комерційною метою."
        dark
      >
        <div style={gridFour}>
          {whyNevora.map((item) => (
            <div key={item.title} className="quiet-card" style={darkCard}>
              <h3 style={cardTitle}>{item.title}</h3>
              <p style={paragraph}>{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="work" style={{ padding: "100px 40px 80px" }}>
        <p style={sectionLabel}>ПОРТФОЛІО</p>

        <h2 style={sectionTitle}>Вибрані проєкти</h2>

        <p style={sectionDescription}>
          Дві сильні роботи NEVORA.AI — кінематографічні, атмосферні та
          емоційно виразні.
        </p>

        <div style={projectGrid}>
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-card"
              style={projectCard}
            >
              <div style={imageWrap}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={imageStyle}
                />
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
                }}
              >
                {project.subtitle}
              </p>

              <p style={paragraph}>{project.concept}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: "70px 40px 100px" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          {projects.map((project) => (
            <div key={project.title + " video"} style={caseCard}>
              <p style={sectionLabelSmall}>CASE STUDY</p>

              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 44px)",
                  marginTop: 0,
                }}
              >
                {project.title}: {project.subtitle}
              </h2>

              <div style={videoWrap}>
                <iframe
                  src={project.youtube}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={iframeStyle}
                />
              </div>

              <p style={paragraph}>{project.process}</p>
            </div>
          ))}
        </div>
      </section>

      <Section
        label="ДЛЯ БРЕНДІВ, ЯКИМ ПОТРІБНО"
        title="Преміальний візуал для запусків, реклами, сайтів і продажів."
        dark
      >
        <div style={pillGrid}>
          {capabilities.map((item) => (
            <div key={item} className="quiet-card" style={pill}>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <section id="pricing" style={{ padding: "100px 40px", background: "#0b0b0b" }}>
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
                <h3 style={{ fontSize: "32px", marginTop: 0 }}>
                  {group.title}
                </h3>

                <p style={{ ...paragraph, marginBottom: "28px" }}>
                  {group.description}
                </p>

                <div style={{ display: "grid", gap: "14px" }}>
                  {group.items.map((item) => (
                    <div key={item.name} className="price-row" style={priceRow}>
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

      <Section
        label="MICRO-SERVICES & ADD-ONS"
        title="Окремі задачі та додаткові послуги"
      >
        <p style={sectionDescription}>
          Формат для невеликих задач, швидких правок, тестових проєктів або
          точкової допомоги з AI-візуалом, відео, сайтом чи рекламою.
        </p>

        <div style={microGrid}>
          {microServices.map(([name, details, price]) => (
            <div key={name} className="quiet-card" style={darkCard}>
              <h3 style={cardTitle}>{name}</h3>
              <p style={{ ...paragraph, fontSize: "16px" }}>{details}</p>
              <p
                style={{
                  color: "#CFB53B",
                  fontWeight: "700",
                  marginTop: "18px",
                }}
              >
                {price}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        label="УМОВИ СПІВПРАЦІ"
        title="Прозорий процес і зрозумілі правила."
        dark
      >
        <div style={gridFour}>
          {workingTerms.map((term) => (
            <div key={term} className="quiet-card" style={darkCard}>
              <p style={{ ...paragraph, margin: 0 }}>{term}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="contact" style={{ padding: "100px 40px" }}>
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
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
              style={contactWhite}
            >
              Написати в Telegram
            </a>

            <a
              href="https://www.instagram.com/nevora.ai/"
              target="_blank"
              rel="noreferrer"
              style={contactWhite}
            >
              Написати в Instagram
            </a>
          </div>

          <p style={{ marginTop: "28px", color: "#555", fontSize: "16px" }}>
            nevora.aistudio@gmail.com
          </p>

          <p style={{ marginTop: "8px", color: "#777", fontSize: "15px" }}>
            Telegram: @nevora_ai
          </p>

          <p style={{ marginTop: "8px", color: "#777", fontSize: "15px" }}>
            Київ / Remote
          </p>
        </div>
      </section>

      <footer
        style={{
          padding: "30px 40px",
          color: "#777",
          background: "#050505",
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          flexWrap: "wrap",
          fontSize: "14px",
        }}
      >
        <p>© 2026 NEVORA.AI Creative Studio. All rights reserved.</p>
        <p>AI Video • Websites • Presentations • Logo Animation • Renders</p>
      </footer>
    </main>
  );
}

function Section({ label, title, children, dark }) {
  return (
    <section
      style={{
        padding: "90px 40px",
        background: dark ? "#080808" : "#050505",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <p style={sectionLabel}>{label}</p>
        <h2 style={sectionTitle}>{title}</h2>
        {children}
      </div>
    </section>
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
  marginBottom: "20px",
  textAlign: "center",
};

const sectionLabelSmall = {
  letterSpacing: "4px",
  color: "#999",
  fontSize: "13px",
  marginBottom: "16px",
};

const sectionTitle = {
  fontSize: "clamp(36px, 5vw, 58px)",
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
  marginBottom: "28px",
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

const contactWhite = {
  background: "transparent",
  color: "black",
  textDecoration: "none",
  border: "1px solid rgba(0,0,0,0.25)",
  borderRadius: "999px",
  padding: "18px 32px",
  fontSize: "16px",
  display: "inline-block",
};