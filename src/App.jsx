const videoWorks = [
  {
    title: "Audi Q8 e-tron",
    label: "ШІ-рекламний ролик для авто",
    goal: "Ціль: створити преміальний відеокреатив для автомобільного бренду.",
    description:
      "Коротке AI-відео з кінематографічною атмосферою, темним преміальним стилем, монтажем, кольором і звуковим настроєм.",
    youtube: "https://www.youtube.com/embed/97CBgS4R8Lk",
  },
  {
    title: "Симфонія іржі",
    label: "Атмосферний AI-ролик",
    goal: "Ціль: показати емоційну історію через візуал, музику та настрій.",
    description:
      "Приклад художнього AI-відео з акцентом на атмосферу, образність, ритм і відчуття кінематографічності.",
    youtube: "https://www.youtube.com/embed/3l2LHv8ifUU",
  },
];

const productImages = [
  {
    title: "Ювелірна AI-фотосесія",
    text: "Преміальний рекламний кадр для прикрас, Instagram, сайту або каталогу.",
    image: "/images/jewelry-blue-ring.jpeg",
  },
  {
    title: "Luxury-зйомка каблучки",
    text: "Темний дорогий стиль для брендів, яким потрібна сильна візуальна подача.",
    image: "/images/gold-ring-dark.jpeg",
  },
  {
    title: "Казкова подача прикрас",
    text: "Атмосферний візуал для ювелірних виробів, beauty-брендів і рекламних кампаній.",
    image: "/images/flower-ring.jpeg",
  },
  {
    title: "AI-фото сережок",
    text: "Деталізований предметний кадр для каталогу, соцмереж або реклами.",
    image: "/images/diamond-earrings.jpeg",
  },
  {
    title: "Преміальна рекламна серія",
    text: "Візуал для товару у стилі luxury campaign: фактури, світло, деталі, атмосфера.",
    image: "/images/luxury-ring-moss.jpeg",
  },
  {
    title: "AI-фотосесія сумки",
    text: "Візуал для бренду сумок, Instagram, лукбуку або рекламного запуску.",
    image: "/images/red-bag.jpeg",
  },
  {
    title: "Світлий каталоговий стиль",
    text: "Чистий product visual для годинників, аксесуарів або premium lifestyle-брендів.",
    image: "/images/silver-watch.jpeg",
  },
  {
    title: "Lifestyle-фото аксесуарів",
    text: "Візуал для бренду сумок, одягу, аксесуарів або преміального товару.",
    image: "/images/black-bag.jpeg",
  },
];

const creationTypes = [
  {
    title: "ШІ-відео для реклами",
    text: "Короткі ролики для Instagram, TikTok, сайту, презентації або запуску продукту.",
  },
  {
    title: "AI-фотосесії товарів",
    text: "Рекламні зображення товарів без студійної зйомки: для соцмереж, каталогу, сайту або реклами.",
  },
  {
    title: "Сайти та landing pages",
    text: "Сайти-візитки й односторінкові сторінки для брендів, експертів, студій і послуг.",
  },
  {
    title: "Презентації для бізнесу",
    text: "Корпоративні, sales та pitch-презентації з візуальною структурою і преміальною подачею.",
  },
  {
    title: "Креативи для соцмереж",
    text: "Банери, відео, рекламні візуали та матеріали для запуску реклами.",
  },
  {
    title: "Анімація логотипу",
    text: "Коротка анімація бренду для відео, заставок, презентацій або соцмереж.",
  },
];

const services = [
  {
    title: "AI-фотосесія товару",
    price: "від $200",
    text: "5–10 готових зображень для сайту, Instagram, реклами або каталогу.",
  },
  {
    title: "ШІ-рекламний ролик 15–30 сек",
    price: "від $500",
    text: "Коротке відео для Instagram, TikTok, сайту або презентації бренду.",
  },
  {
    title: "Кінематографічний AI-ролик до 60 сек",
    price: "від $850",
    text: "Атмосферне відео з ідеєю, монтажем, кольором і звуком.",
  },
  {
    title: "Сайт-візитка / Landing page",
    price: "від $600",
    text: "Преміальний односторінковий сайт для бренду, експерта або студії.",
  },
  {
    title: "Лендинг + AI-візуали",
    price: "від $900",
    text: "Сайт із готовими AI-зображеннями, візуальною подачею, контактами та базовою адаптацією під мобільний.",
  },
  {
    title: "Преміальний сайт-портфоліо / бренд-лендинг",
    price: "від $1,200",
    text: "Сильна структура, тексти, AI-фото, відео, анімації, деплой на Vercel і преміальна подача бренду.",
  },
  {
    title: "Презентація для бізнесу",
    price: "від $300",
    text: "Корпоративна, sales або pitch-презентація з чіткою структурою.",
  },
  {
    title: "Рекламні креативи для соцмереж",
    price: "від $350",
    text: "Банери, відео та візуали для Instagram, Facebook, TikTok або Google.",
  },
];

const addOns = [
  "1 AI-зображення — від $40",
  "Анімація фото — від $60",
  "Монтаж ролика — від $150",
  "Анімація логотипу — від $100",
  "Один рекламний банер — від $50",
  "Консультація — від $50 / година",
  "Розгортання сайту на Vercel — від $70",
  "Один відеокреатив для соцмереж — від $150",
];

const processSteps = [
  {
    title: "1. Ви описуєте задачу",
    text: "Надсилаєте фото товару, посилання на бренд або коротко пишете, що потрібно: відео, фото, сайт чи презентація.",
  },
  {
    title: "2. Я пропоную ідею",
    text: "Підбираю стиль, формат і пояснюю, який результат можна отримати для вашого бізнесу.",
  },
  {
    title: "3. Створюю матеріали",
    text: "Готую AI-зображення, відеокреатив, сайт, презентацію або рекламні матеріали.",
  },
  {
    title: "4. Передаю фінальний результат",
    text: "Ви отримуєте готові файли для Instagram, сайту, реклами, презентації або запуску продукту.",
  },
];

export default function App() {
  return (
    <main style={page}>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background: #050505;
          }

          .premium-card {
            transition: all 0.5s ease;
          }

          .premium-card:hover {
            transform: translateY(-6px);
            border-color: rgba(207,181,59,0.45) !important;
            background: rgba(255,255,255,0.075) !important;
            box-shadow: 0 24px 70px rgba(207,181,59,0.16);
          }

          .image-card img {
            transition: transform 0.7s ease;
          }

          .image-card:hover img {
            transform: scale(1.05);
          }

          .button-hover {
            transition: all 0.35s ease;
          }

          .button-hover:hover {
            transform: translateY(-2px);
          }

          @media (max-width: 760px) {
            .video-card {
              grid-template-columns: 1fr !important;
            }

            .hero-title {
              font-size: 44px !important;
            }
          }
        `}
      </style>

      <section style={heroSection}>
        <div style={heroGlowOne}></div>
        <div style={heroGlowTwo}></div>

        <div style={heroInner}>
          <nav style={nav}>
            <div style={brandMini}>NEVORA.AI</div>

            <a href="#contact" style={navButton} className="button-hover">
              Контакти
            </a>
          </nav>

          <div style={heroContent}>
            <div style={heroLogoBlock}>
              <div style={heroLogoAura}></div>
              <img
                src="/images/nevora-logo.png"
                alt="NEVORA AI Creative Studio"
                style={heroLogo}
              />
            </div>

            <p style={heroCaption}>NEVORA.AI КРЕАТИВНА СТУДІЯ</p>

            <h1 className="hero-title" style={heroTitle}>
              ШІ-візуал, який допомагає бренду виглядати дорожче.
            </h1>

            <p style={heroText}>
              Створюю рекламні AI-відео, фотосесії товарів, сайти, презентації
              та візуальні матеріали для брендів, яким потрібна сучасна,
              красива і комерційна подача.
            </p>

            <div style={heroButtons}>
              <a href="#videos" style={primaryButton} className="button-hover">
                Дивитися приклади
              </a>

              <a href="#pricing" style={secondaryButton} className="button-hover">
                Послуги та ціни
              </a>

              <a href="#contact" style={goldButton} className="button-hover">
                Обговорити проєкт
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={sectionDark}>
        <div style={container}>
          <p style={sectionLabel}>ЩО Я СТВОРЮЮ</p>

          <h2 style={sectionTitle}>
            Візуали для реклами, соцмереж, сайтів і презентацій.
          </h2>

          <p style={sectionDescription}>
            Без складних технічних термінів: ви отримуєте готовий матеріал,
            який можна використовувати для бренду, запуску продукту, реклами або
            портфоліо.
          </p>

          <div style={cardsGrid}>
            {creationTypes.map((item) => (
              <div key={item.title} className="premium-card" style={darkCard}>
                <h3 style={cardTitle}>{item.title}</h3>
                <p style={paragraph}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" style={section}>
        <div style={container}>
          <p style={sectionLabel}>ПРИКЛАДИ ВІДЕОКРЕАТИВІВ</p>

          <h2 style={sectionTitle}>
            Короткі AI-ролики для брендів і комерційної подачі.
          </h2>

          <p style={sectionDescription}>
            Це приклади того, як може виглядати відео для реклами, презентації,
            соцмереж або іміджевого запуску.
          </p>

          <div style={{ display: "grid", gap: "34px" }}>
            {videoWorks.map((video) => (
              <article key={video.title} className="video-card" style={videoCard}>
                <div style={videoFrame}>
                  <iframe
                    src={video.youtube}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={iframeStyle}
                  />
                </div>

                <div>
                  <p style={smallGold}>{video.label}</p>
                  <h3 style={videoTitle}>{video.title}</h3>
                  <p style={{ ...paragraph, marginBottom: "14px" }}>{video.goal}</p>
                  <p style={paragraph}>{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="photo" style={sectionDark}>
        <div style={container}>
          <p style={sectionLabel}>AI-ФОТОСЕСІЇ ТОВАРІВ</p>

          <h2 style={sectionTitle}>
            Рекламні зображення товарів без студійної зйомки.
          </h2>

          <p style={sectionDescription}>
            Створюю візуали для Instagram, сайту, каталогу, презентації або
            запуску бренду. Підходить для прикрас, аксесуарів, косметики,
            fashion-брендів, нерухомості та преміальних товарів.
          </p>

          <div style={imageGrid}>
            {productImages.map((item) => (
              <article key={item.image} className="image-card" style={imageCard}>
                <div style={imageWrap}>
                  <img src={item.image} alt={item.title} style={imageStyle} />
                </div>

                <h3 style={imageTitle}>{item.title}</h3>
                <p style={imageText}>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" style={section}>
        <div style={container}>
          <p style={sectionLabel}>ПОСЛУГИ ТА ЦІНИ</p>

          <h2 style={sectionTitle}>Прості формати для бізнесу.</h2>

          <p style={sectionDescription}>
            Вартість вказана як стартова. Фінальна ціна залежить від структури,
            кількості блоків, складності візуальної подачі, матеріалів, дедлайну
            та кількості правок. Оплата можлива в USD або в гривні за актуальним
            курсом.
          </p>

          <div style={servicesGrid}>
            {services.map((service) => (
              <div key={service.title} className="premium-card" style={serviceCard}>
                <div>
                  <h3 style={serviceTitle}>{service.title}</h3>
                  <p style={paragraph}>{service.text}</p>
                </div>

                <p style={price}>{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={sectionDark}>
        <div style={container}>
          <p style={sectionLabel}>ДОДАТКОВІ ПОСЛУГИ</p>

          <h2 style={sectionTitle}>Для невеликих задач або тестового старту.</h2>

          <div style={addOnsBox}>
            {addOns.map((item) => (
              <div key={item} style={addOnRow}>
                <span style={dot}></span>
                <p style={addOnText}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <p style={sectionLabel}>ЯК ПРОХОДИТЬ РОБОТА</p>

          <h2 style={sectionTitle}>Замовити візуал просто.</h2>

          <p style={sectionDescription}>
            Ви описуєте задачу — я допомагаю сформувати ідею, створюю матеріали
            та готую фінальний результат для вашого бренду.
          </p>

          <div style={processGrid}>
            {processSteps.map((step) => (
              <div key={step.title} className="premium-card" style={darkCard}>
                <h3 style={cardTitle}>{step.title}</h3>
                <p style={paragraph}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" style={footer}>
        <div style={contactBox}>
          <p style={contactLabel}>КОНТАКТИ</p>

          <h2 style={contactTitle}>
            Готові створити візуал для вашого бренду?
          </h2>

          <p style={contactText}>
            Напишіть коротко, що вам потрібно: AI-відео, фотосесія товару,
            сайт, презентація або рекламні креативи.
          </p>

          <div style={contactButtons}>
            <a
              href="mailto:nevora.aistudio@gmail.com?subject=Запит на проєкт NEVORA.AI"
              style={contactBlack}
              className="button-hover"
            >
              Написати на email
            </a>

            <a
              href="https://t.me/nevora_ai"
              target="_blank"
              rel="noreferrer"
              style={contactWhite}
              className="button-hover"
            >
              Telegram
            </a>

            <a
              href="https://www.instagram.com/nevora.ai/"
              target="_blank"
              rel="noreferrer"
              style={contactWhite}
              className="button-hover"
            >
              Instagram
            </a>
          </div>

          <p style={contactInfo}>nevora.aistudio@gmail.com</p>
          <p style={contactInfo}>Telegram: @nevora_ai</p>
          <p style={contactInfo}>Київ / Remote</p>
        </div>

        <div style={footerBottom}>
          <p>© 2026 NEVORA.AI Creative Studio. All rights reserved.</p>
          <p>AI-відео • AI-фотосесії • Сайти • Презентації • Реклама</p>
        </div>
      </footer>
    </main>
  );
}

const page = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  fontFamily:
    "Inter, Arial, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  overflow: "hidden",
};

const heroSection = {
  position: "relative",
  minHeight: "100vh",
  overflow: "hidden",
  background:
    "linear-gradient(135deg, #050505 0%, #090909 45%, #050505 100%)",
};

const heroGlowOne = {
  position: "absolute",
  width: "700px",
  height: "700px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(207,181,59,0.16), rgba(207,181,59,0.04) 42%, transparent 70%)",
  top: "-220px",
  left: "50%",
  transform: "translateX(-50%)",
  filter: "blur(20px)",
};

const heroGlowTwo = {
  position: "absolute",
  width: "520px",
  height: "520px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(255,255,255,0.08), rgba(255,255,255,0.02) 42%, transparent 70%)",
  right: "-180px",
  bottom: "10%",
  filter: "blur(18px)",
};

const heroInner = {
  position: "relative",
  zIndex: 2,
  maxWidth: "1240px",
  minHeight: "100vh",
  margin: "0 auto",
  padding: "28px 24px 80px",
  display: "flex",
  flexDirection: "column",
};

const nav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
};

const brandMini = {
  color: "#d8d8d8",
  fontSize: "14px",
  letterSpacing: "0.32em",
  fontWeight: "600",
};

const navButton = {
  color: "white",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "999px",
  padding: "12px 20px",
  fontSize: "14px",
  background: "rgba(255,255,255,0.04)",
};

const heroContent = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  paddingTop: "70px",
};

const heroLogoBlock = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "min(360px, 78vw)",
  marginBottom: "20px",
};

const heroLogoAura = {
  position: "absolute",
  width: "360px",
  height: "260px",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(207,181,59,0.32) 0%, rgba(207,181,59,0.16) 32%, rgba(207,181,59,0.06) 58%, transparent 78%)",
  filter: "blur(34px)",
  zIndex: 1,
};

const heroLogo = {
  position: "relative",
  zIndex: 2,
  width: "min(300px, 72vw)",
  height: "auto",
  display: "block",
  objectFit: "contain",
  filter:
    "drop-shadow(0 0 12px rgba(207,181,59,0.36)) drop-shadow(0 0 34px rgba(207,181,59,0.24)) drop-shadow(0 16px 42px rgba(0,0,0,0.85))",
};

const heroCaption = {
  margin: "0 0 34px",
  color: "#ededed",
  fontSize: "clamp(12px, 2vw, 17px)",
  letterSpacing: "0.42em",
  textTransform: "uppercase",
  opacity: 0.95,
};

const heroTitle = {
  maxWidth: "1040px",
  margin: 0,
  fontSize: "clamp(46px, 7vw, 86px)",
  lineHeight: "0.98",
  letterSpacing: "-0.06em",
  fontWeight: "760",
};

const heroText = {
  maxWidth: "760px",
  margin: "30px auto 0",
  color: "#cfcfcf",
  fontSize: "20px",
  lineHeight: "1.7",
};

const heroButtons = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "14px",
  marginTop: "42px",
};

const primaryButton = {
  background: "white",
  color: "black",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "17px 28px",
  fontSize: "16px",
  fontWeight: "700",
  display: "inline-flex",
};

const secondaryButton = {
  background: "rgba(255,255,255,0.04)",
  color: "white",
  textDecoration: "none",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: "999px",
  padding: "17px 28px",
  fontSize: "16px",
  display: "inline-flex",
};

const goldButton = {
  background: "#CFB53B",
  color: "black",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "17px 28px",
  fontSize: "16px",
  fontWeight: "700",
  display: "inline-flex",
};

const section = {
  padding: "100px 24px",
  background: "#050505",
};

const sectionDark = {
  padding: "100px 24px",
  background: "#080808",
};

const container = {
  maxWidth: "1180px",
  margin: "0 auto",
};

const sectionLabel = {
  color: "#CFB53B",
  textAlign: "center",
  letterSpacing: "0.34em",
  fontSize: "13px",
  fontWeight: "700",
  margin: "0 0 18px",
};

const sectionTitle = {
  color: "white",
  textAlign: "center",
  fontSize: "clamp(34px, 5vw, 58px)",
  lineHeight: "1.08",
  letterSpacing: "-0.04em",
  margin: "0 auto 20px",
  maxWidth: "920px",
};

const sectionDescription = {
  color: "#c7c7c7",
  textAlign: "center",
  fontSize: "18px",
  lineHeight: "1.75",
  maxWidth: "760px",
  margin: "0 auto 58px",
};

const cardsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "18px",
};

const darkCard = {
  border: "1px solid rgba(255,255,255,0.13)",
  borderRadius: "26px",
  padding: "26px",
  background: "rgba(255,255,255,0.04)",
};

const cardTitle = {
  margin: "0 0 12px",
  color: "white",
  fontSize: "22px",
  letterSpacing: "-0.02em",
};

const paragraph = {
  color: "#cfcfcf",
  fontSize: "16px",
  lineHeight: "1.75",
  margin: 0,
};

const videoCard = {
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: "28px",
  alignItems: "center",
  border: "1px solid rgba(255,255,255,0.13)",
  borderRadius: "30px",
  padding: "24px",
  background: "rgba(255,255,255,0.04)",
};

const videoFrame = {
  position: "relative",
  width: "100%",
  paddingTop: "56.25%",
  overflow: "hidden",
  borderRadius: "22px",
  background: "#111",
};

const iframeStyle = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  border: 0,
};

const smallGold = {
  color: "#CFB53B",
  fontSize: "14px",
  fontWeight: "700",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  margin: "0 0 12px",
};

const videoTitle = {
  color: "white",
  fontSize: "34px",
  lineHeight: "1.1",
  margin: "0 0 18px",
  letterSpacing: "-0.03em",
};

const imageGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "18px",
};

const imageCard = {
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.13)",
  borderRadius: "28px",
  background: "rgba(255,255,255,0.04)",
};

const imageWrap = {
  height: "390px",
  overflow: "hidden",
  background: "#111",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const imageTitle = {
  color: "white",
  fontSize: "20px",
  margin: "22px 22px 10px",
};

const imageText = {
  color: "#c7c7c7",
  fontSize: "15px",
  lineHeight: "1.65",
  margin: "0 22px 24px",
};

const servicesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "18px",
};

const serviceCard = {
  minHeight: "240px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid rgba(255,255,255,0.13)",
  borderRadius: "28px",
  padding: "28px",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.065), rgba(255,255,255,0.025))",
};

const serviceTitle = {
  color: "white",
  fontSize: "24px",
  margin: "0 0 12px",
  letterSpacing: "-0.03em",
};

const price = {
  color: "#CFB53B",
  fontSize: "22px",
  fontWeight: "800",
  margin: "28px 0 0",
};

const addOnsBox = {
  maxWidth: "860px",
  margin: "0 auto",
  border: "1px solid rgba(255,255,255,0.13)",
  borderRadius: "30px",
  padding: "26px",
  background: "rgba(255,255,255,0.04)",
};

const addOnRow = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  padding: "15px 0",
};

const dot = {
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: "#CFB53B",
  flex: "0 0 auto",
};

const addOnText = {
  color: "#e0e0e0",
  fontSize: "17px",
  margin: 0,
};

const processGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const footer = {
  padding: "100px 24px 32px",
  background: "#050505",
};

const contactBox = {
  maxWidth: "1180px",
  margin: "0 auto",
  background: "white",
  color: "black",
  borderRadius: "34px",
  padding: "64px 34px",
  textAlign: "center",
};

const contactLabel = {
  color: "#777",
  fontSize: "13px",
  fontWeight: "700",
  letterSpacing: "0.34em",
  margin: "0 0 18px",
};

const contactTitle = {
  maxWidth: "820px",
  margin: "0 auto 22px",
  fontSize: "clamp(34px, 5vw, 58px)",
  lineHeight: "1.08",
  letterSpacing: "-0.05em",
};

const contactText = {
  maxWidth: "660px",
  margin: "0 auto 34px",
  color: "#555",
  fontSize: "18px",
  lineHeight: "1.7",
};

const contactButtons = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "14px",
};

const contactBlack = {
  background: "black",
  color: "white",
  textDecoration: "none",
  borderRadius: "999px",
  padding: "17px 28px",
  fontSize: "16px",
  fontWeight: "700",
};

const contactWhite = {
  background: "transparent",
  color: "black",
  textDecoration: "none",
  border: "1px solid rgba(0,0,0,0.2)",
  borderRadius: "999px",
  padding: "17px 28px",
  fontSize: "16px",
  fontWeight: "700",
};

const contactInfo = {
  color: "#666",
  margin: "16px 0 0",
  fontSize: "15px",
};

const footerBottom = {
  maxWidth: "1180px",
  margin: "28px auto 0",
  display: "flex",
  justifyContent: "space-between",
  gap: "18px",
  flexWrap: "wrap",
  color: "#777",
  fontSize: "14px",
};