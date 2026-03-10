import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, DollarSign, ArrowUpRight, ArrowDownLeft, Cpu, Car, FlaskConical, Wrench, Globe } from 'lucide-react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement,
  Title, Tooltip, Legend, RadialLinearScale, PointElement,
  LineElement, Filler, ArcElement
} from 'chart.js';
import { Bar, Radar, Doughnut } from 'react-chartjs-2';
import './index.css';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,
  RadialLinearScale, PointElement, LineElement, Filler, ArcElement
);

const KR = { blue: '#0F64CD', red: '#CD2E3A' };

const chartBase = { responsive: true, maintainAspectRatio: false };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } }
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const darkIds = ['dados', 'industria'];
      for (const id of darkIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200 && window.scrollY < el.offsetTop + el.offsetHeight - 200) {
          setDark(true); return;
        }
      }
      setDark(false);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${dark ? 'dark-mode' : ''}`}>
        <div className="logo-kr">대한민국</div>
        <div className="nav-links">
          {['hero','identidade','dados','economia','industria','conclusao'].map(id => (
            <a key={id} href={`#${id}`}>{id === 'hero' ? 'Início' : id === 'economia' ? 'Economia' : id === 'conclusao' ? 'Conclusão' : id.charAt(0).toUpperCase() + id.slice(1)}</a>
          ))}
        </div>
      </nav>

      {/* ═══════ SLIDE 1: HERO ═══════ */}
      <section id="hero" className="slide">
        <div className="slide-half img-half">
          <img src="./assets/hero_bg.png" alt="Seul" className="cover-img" />
          <div className="img-overlay" />
          <div className="flag-float">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" alt="Bandeira" />
          </div>
        </div>
        <div className="slide-half content-half bg-paper">
          <motion.div className="inner-content" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="label-bar">
              <span className="bar-line" />
              <span className="bar-text">Geografia Industrial</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="hero-title">
              Coreia<br /><span className="text-gradient-kr">do Sul</span>
            </motion.h1>
            <motion.h2 variants={fadeUp} className="hero-sub">대한민국</motion.h2>
            <motion.p variants={fadeUp} className="hero-desc">
              Da reconstrução pós-guerra à potência tecnológica global. Como o investimento em inovação transformou um país.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-tag">
              <Globe strokeWidth={1.5} size={20} color={KR.red} />
              <span>AC1 & PO1 — Países Produtores Industriais, 2026</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SLIDE 2: IDENTIDADE ═══════ */}
      <section id="identidade" className="slide reverse">
        <div className="slide-half img-half">
          <img src="./assets/palace_bg.png" alt="Palácio em Seul" className="cover-img" />
        </div>
        <div className="slide-half content-half bg-white">
          <motion.div className="inner-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">Identidade Nacional</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Capital & Símbolos</motion.h2>
            <motion.p variants={fadeUp} className="section-lead">
              A capital <strong>Seul (서울)</strong> é o epicentro político, econômico e tecnológico do país.
            </motion.p>
            <motion.div variants={fadeUp} className="symbol-row">
              <div className="symbol-box">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" alt="Bandeira" className="symbol-img" />
                <h4 className="symbol-name">Taegeukgi</h4>
                <p className="symbol-desc">Paz, equilíbrio cósmico e harmonia universal.</p>
              </div>
              <div className="symbol-box">
                <svg viewBox="0 0 100 100" className="symbol-img" style={{ alignSelf: 'flex-start', margin: '7px 0', height: '60px' }}>
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#CD2E3A" strokeWidth="2"/>
                  <path d="M50 20 A 15 15 0 0 1 50 50 A 15 15 0 0 0 50 80 A 30 30 0 0 1 50 20 Z" fill="#CD2E3A"/>
                  <path d="M50 80 A 15 15 0 0 0 50 50 A 15 15 0 0 1 50 20 A 30 30 0 0 0 50 80 Z" fill="#0F64CD"/>
                  <circle cx="50" cy="20" r="4" fill="#121212"/>
                  <circle cx="50" cy="80" r="4" fill="#121212"/>
                  <circle cx="20" cy="50" r="4" fill="#121212"/>
                  <circle cx="80" cy="50" r="4" fill="#121212"/>
                  <circle cx="28" cy="28" r="4" fill="#121212"/>
                  <circle cx="72" cy="72" r="4" fill="#121212"/>
                  <circle cx="28" cy="72" r="4" fill="#121212"/>
                  <circle cx="72" cy="28" r="4" fill="#121212"/>
                </svg>
                <h4 className="symbol-name">Emblema</h4>
                <p className="symbol-desc">Taegeuk e pétalas da flor mugunghwa.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SLIDE 3: DADOS ═══════ */}
      <section id="dados" className="slide">
        <div className="slide-half img-half">
          <img src="./assets/port_bg.png" alt="Porto industrial" className="cover-img" style={{ filter: 'grayscale(40%) contrast(1.1)' }} />
        </div>
        <div className="slide-half content-half bg-dark">
          <motion.div className="inner-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">Macroeconomia</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Dimensão Nacional</motion.h2>
            <motion.div variants={fadeUp} className="stats-col">
              <div className="stat-row">
                <MapPin size={28} color={KR.red} className="stat-icon" />
                <div>
                  <p className="stat-label-text">Área Territorial</p>
                  <p className="stat-value">100.450 <span>km²</span></p>
                </div>
              </div>
              <div className="stat-row">
                <Users size={28} color={KR.blue} className="stat-icon" />
                <div>
                  <p className="stat-label-text">População (2024)</p>
                  <p className="stat-value">51.751.065 <span>hab.</span></p>
                </div>
              </div>
              <div className="stat-row accent-stat">
                <DollarSign size={28} color="#fff" className="stat-icon" />
                <div>
                  <p className="stat-label-text">PIB Nacional (2024)</p>
                  <p className="stat-value blue">US$ 1,88 <span>Trilhão</span></p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SLIDE 4: EXPORTAÇÕES ═══════ */}
      <section id="economia" className="slide reverse">
        <div className="slide-half chart-half bg-blue-subtle">
          <div className="chart-centered">
            <h3 className="chart-title">Destinos de Exportação (%)</h3>
            <div className="chart-box">
              <Bar
                data={{
                  labels: ['China', 'EUA', 'Vietnã', 'Hong Kong', 'Japão'],
                  datasets: [{
                    label: '%', data: [25, 18, 9, 6, 5],
                    backgroundColor: [KR.blue, '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'],
                    borderRadius: 4
                  }]
                }}
                options={{
                  ...chartBase, indexAxis: 'y' as const,
                  plugins: { legend: { display: false }, tooltip: { backgroundColor: '#111', padding: 12 } },
                  scales: { x: { display: false }, y: { grid: { display: false }, ticks: { font: { size: 14, weight: 'bold' as const }, color: '#1a1a2e' } } }
                }}
              />
            </div>
          </div>
        </div>
        <div className="slide-half content-half bg-white">
          <motion.div className="inner-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">Balança Comercial</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Exportações</motion.h2>
            <motion.p variants={fadeUp} className="section-lead">
              O motor econômico: tecnologia de alto valor agregado. Os destinos cruciais são <strong>China, EUA, Vietnã, Hong Kong e Japão</strong>.
            </motion.p>
            <motion.div variants={fadeUp} className="callout blue-callout">
              <ArrowUpRight size={20} color={KR.blue} />
              <div>
                <h4>Produto Destaque</h4>
                <p>Semicondutores — US$ 141,9 bilhões (2024)</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SLIDE 5: IMPORTAÇÕES ═══════ */}
      <section id="importacoes" className="slide">
        <div className="slide-half chart-half bg-red-subtle">
          <div className="chart-centered">
            <h3 className="chart-title">Origens de Importação</h3>
            <div className="chart-box">
              <Radar
                data={{
                  labels: ['China', 'EUA', 'Japão', 'A. Saudita', 'Austrália'],
                  datasets: [{
                    label: 'Volume', data: [22, 12, 9, 8, 6],
                    backgroundColor: 'rgba(205,46,58,0.15)', borderColor: KR.red,
                    borderWidth: 2, pointBackgroundColor: KR.red
                  }]
                }}
                options={{
                  ...chartBase,
                  scales: { r: { ticks: { display: false }, grid: { circular: true }, pointLabels: { font: { size: 13, weight: 'bold' as const }, color: '#3a1015' } } },
                  plugins: { legend: { display: false } }
                }}
              />
            </div>
          </div>
        </div>
        <div className="slide-half content-half bg-paper">
          <motion.div className="inner-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">Balança Comercial</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Importações</motion.h2>
            <motion.p variants={fadeUp} className="section-lead">
              Vulnerabilidade energética: a falta de recursos naturais obriga importações massivas de <strong>China, EUA, Japão, Arábia Saudita e Austrália</strong>.
            </motion.p>
            <motion.div variants={fadeUp} className="callout red-callout">
              <ArrowDownLeft size={20} color={KR.red} />
              <div>
                <h4>Produto Destaque</h4>
                <p>Petróleo Bruto — Arábia Saudita e EAU</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SLIDE 6: INDÚSTRIA ═══════ */}
      <section id="industria" className="slide reverse">
        <div className="slide-half img-half">
          <img src="./assets/industry_bg.png" alt="Fábrica de semicondutores" className="cover-img" style={{ filter: 'brightness(0.85) contrast(1.15)' }} />
        </div>
        <div className="slide-half content-half bg-dark">
          <motion.div className="inner-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">A Força Motriz</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Potência Industrial</motion.h2>
            <motion.ul variants={fadeUp} className="industry-grid">
              {[
                { icon: <Cpu size={18} color={KR.blue} />, text: 'Semicondutores & Eletrônicos' },
                { icon: <Car size={18} />, text: 'Automóveis & Navios' },
                { icon: <FlaskConical size={18} />, text: 'Petroquímica & Biofarmácia' },
                { icon: <Wrench size={18} />, text: 'Aço, Máquinas & TIC' },
              ].map((item, i) => (
                <li key={i}>{item.icon}<span>{item.text}</span></li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="curiosity-box">
              <h4>💡 Curiosidade</h4>
              <p>Semicondutores representam <strong>21%</strong> de todas as exportações (Samsung + SK Hynix).</p>
              <div className="mini-doughnut">
                <Doughnut
                  data={{ labels: ['Semi (21%)', 'Outros (79%)'], datasets: [{ data: [21, 79], backgroundColor: [KR.blue, '#1f2230'], borderWidth: 0 }] }}
                  options={{ ...chartBase, cutout: '70%', plugins: { legend: { display: false } } }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SLIDE 7: CONCLUSÃO ═══════ */}
      <section id="conclusao" className="slide">
        <div className="slide-half img-half">
          <img src="./assets/hero_bg.png" alt="Seul à noite" className="cover-img" style={{ filter: 'saturate(1.3)' }} />
        </div>
        <div className="slide-half content-half bg-gradient-end">
          <motion.div className="inner-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="section-label">Reflexão Final</motion.span>
            <motion.h2 variants={fadeUp} className="section-title">Por que a Coreia do Sul?</motion.h2>
            <motion.p variants={fadeUp} className="section-lead" style={{ maxWidth: '100%' }}>
              O maior exemplo moderno de transformação: de economia agrária devastada pela guerra para <strong>superpotência tecnológica global</strong>.
            </motion.p>
            <motion.p variants={fadeUp} style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Marcas como Samsung, Hyundai, Kia e LG estão nos nossos bolsos e garagens todos os dias, provando o sucesso da indústria sul-coreana.
            </motion.p>
            <motion.div variants={fadeUp} className="brands-bar">
              {['SAMSUNG', 'HYUNDAI', 'KIA', 'LG', 'SK HYNIX'].map(b => <span key={b}>{b}</span>)}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="footer">
        <p>AC1 e PO1 — Seminários de Geografia Industrial | 2026</p>
      </footer>
    </div>
  );
}
