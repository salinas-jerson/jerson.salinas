import { r as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as supabase } from "./client-Xl9kR23F.mjs";
import { _ as ArrowRight, a as Mail, c as Globe, d as Cpu, f as Cloud, g as BookOpen, h as Brain, i as Menu, l as Github, m as CircleAlert, n as Sun, o as LoaderCircle, p as CircleCheck, r as Moon, s as Linkedin, t as X, u as ExternalLink } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CytVlczK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logicontUrl = "#";
var dictionaries = {
	es: {
		nav: {
			home: "Inicio",
			services: "Servicios",
			about: "Sobre mí",
			projects: "Proyectos",
			research: "Investigación",
			contact: "Contacto"
		},
		hero: {
			greeting: "Hola, soy Jerson Salinas. Construyo microservicios empresariales de alto rendimiento y modelos de Inteligencia Artificial con impacto real.",
			cta: "Hablemos",
			subroles: "Backend Developer · Data Science Engineer"
		},
		counters: {
			years: "Años de Experiencia",
			projects: "Proyectos",
			scholar: "Becario PRONABEC",
			rank: "Tercio Superior"
		},
		services: {
			title: "Servicios",
			subtitle: "Soluciones técnicas para el sector financiero y científico.",
			items: [
				{
					title: "Desarrollo de Microservicios y APIs",
					desc: "Arquitecturas robustas y escalables en Spring Boot con SQL."
				},
				{
					title: "Data Science & Deep Learning",
					desc: "Modelos predictivos y de aprendizaje profundo con Python y TensorFlow."
				},
				{
					title: "Consultoría y Soluciones Cloud",
					desc: "Integraciones cloud, IA y modernización de sistemas legados."
				}
			]
		},
		about: {
			title: "Sobre mí",
			bio: "Ingeniero Informático y de Sistemas especializado en el desarrollo backend e inteligencia artificial. Con experiencia en el sector financiero y científico, diseño arquitecturas robustas basadas en microservicios y modelos de aprendizaje profundo aplicados a la resolución de problemas de alta complejidad.",
			languages: "Idiomas",
			qu: "Quechua (Avanzado)",
			pt: "Portugués (Intermedio)",
			en: "Inglés (Básico)",
			timelineTitle: "Trayectoria",
			timeline: [
				{
					date: "12/2024 — Presente",
					role: "Desarrollador Backend Principal",
					org: "Caja Cusco"
				},
				{
					date: "09/2024 — 12/2024",
					role: "Ingeniero de Software Backend",
					org: "Caja Cusco"
				},
				{
					date: "08/2023 — 04/2024",
					role: "Responsable de TI",
					org: "Instituto de Sistemas Cusco (ISC)"
				},
				{
					date: "2024",
					role: "Bachiller en Ingeniería Informática y de Sistemas",
					org: "UNSAAC"
				}
			]
		},
		projects: {
			title: "Proyectos Destacados",
			subtitle: "Sistemas en producción, soluciones corporativas y prototipos de investigación aplicada.",
			items: [
				{
					title: "LogiCont — B2B SaaS LogTech + FinTech",
					desc: "SaaS de gestión administrativa que automatiza la contabilidad en tiempo real. Su diseño modular permite a PYMEs de servicios o comerciales operar con o sin almacén, facilitando la toma de decisiones acertadas en el momento oportuno.",
					stack: "React · TypeScript · Tailwind CSS · Node.js",
					status: "Validación · Demo",
					url: logicontUrl
				},
				{
					title: "Microservicio Ya Ganaste — Caja Cusco",
					desc: "Integracion Ya Ganaste para recaudación y pagos.",
					stack: "Java · Spring Boot · MySQL · Arquitectura Owner",
					status: "En producción"
				},
				{
					title: "Microservicio Western Union — Caja Cusco",
					desc: "Integración Western Union para pagos transfronterizos.",
					stack: "Java · Spring Boot · MySQL · Microservicios",
					status: "En producción"
				},
				{
					title: "Modelo Predictivo de Sequías (SENAMHI Cusco)",
					desc: "Deep Learning aplicado a series temporales climáticas.",
					stack: "Python · TensorFlow · Keras"
				}
			]
		},
		research: {
			title: "Investigación y Publicaciones",
			intro: "Ponencia presentada en el Simposio Peruano de Jóvenes Investigadores en Bioinformática.",
			paper: "Modelado de redes de expresión genética usando redes neuronales recurrentes LSTM",
			venue: "Simposio Peruano de Jóvenes Investigadores en Bioinformática"
		},
		contact: {
			title: "Contacto",
			intro: "¿Tienes un proyecto en mente? Conversemos.",
			name: "Nombre",
			email: "Correo",
			message: "Mensaje",
			send: "Enviar mensaje",
			sending: "Enviando…",
			success: "¡Mensaje enviado! Te responderé pronto.",
			error: "No se pudo enviar el mensaje. Intenta de nuevo.",
			nameError: "Ingresa tu nombre (mínimo 2 caracteres).",
			emailError: "Ingresa un correo válido.",
			messageError: "El mensaje debe tener al menos 10 caracteres."
		},
		footer: { rights: "Todos los derechos reservados." }
	},
	en: {
		nav: {
			home: "Home",
			services: "Services",
			about: "About",
			projects: "Projects",
			research: "Research",
			contact: "Contact"
		},
		hero: {
			greeting: "Hi, I'm Jerson Salinas. I build high-performance enterprise microservices and Artificial Intelligence models with real-world impact.",
			cta: "Let's talk",
			subroles: "Backend Developer · Data Science Engineer"
		},
		counters: {
			years: "Years of Experience",
			projects: "Projects",
			scholar: "PRONABEC Scholar",
			rank: "Top Academic Third"
		},
		services: {
			title: "Services",
			subtitle: "Technical solutions for the financial and scientific sectors.",
			items: [
				{
					title: "Microservices & API Development",
					desc: "Robust, scalable Spring Boot architectures with SQL."
				},
				{
					title: "Data Science & Deep Learning",
					desc: "Predictive and deep learning models with Python and TensorFlow."
				},
				{
					title: "Cloud Consulting & Solutions",
					desc: "Cloud, AI integrations and legacy modernization."
				}
			]
		},
		about: {
			title: "About Me",
			bio: "Informatics and Systems Engineer specializing in backend development and artificial intelligence. With experience in the financial and scientific sectors, I design robust microservice architectures and deep learning models applied to solving high-complexity problems.",
			languages: "Languages",
			qu: "Quechua (Advanced)",
			pt: "Portuguese (Intermediate)",
			en: "English (Basic)",
			timelineTitle: "Experience",
			timeline: [
				{
					date: "12/2024 — Present",
					role: "Lead Backend Developer",
					org: "Caja Cusco"
				},
				{
					date: "09/2024 — 12/2024",
					role: "Backend Software Engineer",
					org: "Caja Cusco"
				},
				{
					date: "08/2023 — 04/2024",
					role: "IT Lead",
					org: "Instituto de Sistemas Cusco (ISC)"
				},
				{
					date: "2024",
					role: "B.S. in Informatics and Systems Engineering",
					org: "UNSAAC"
				}
			]
		},
		projects: {
			title: "Featured Projects",
			subtitle: "Production-ready enterprise systems, corporate solutions, and applied research prototypes.",
			items: [
				{
					title: "LogiCont — B2B SaaS LogTech + FinTech",
					desc: "Administrative management SaaS that automates accounting in real time. Its modular design allows service or commercial SMEs to operate with or without warehouses, facilitating well-informed, timely decision-making.",
					stack: "React · TypeScript · Tailwind CSS · Node.js",
					status: "Validation · Demo",
					url: logicontUrl
				},
				{
					title: "Ya Ganaste Microservice — Caja Cusco",
					desc: "End-to-end integration of the 'Ya Ganaste' microservice for high-volume collections and payment processing systems.",
					stack: "Java · Spring Boot · MySQL · Architecture Owner",
					status: "In Production"
				},
				{
					title: "Western Union Microservice — Caja Cusco",
					desc: "Core backend development and integration of the Western Union microservice for secure cross-border payment processing.",
					stack: "Java · Spring Boot · MySQL · Microservices",
					status: "In Production"
				},
				{
					title: "Drought Predictive Model (SENAMHI Cusco)",
					desc: "Applied Deep Learning and time-series forecasting using complex climate and meteorological datasets.",
					stack: "Python · TensorFlow · Keras"
				}
			]
		},
		research: {
			title: "Research & Publications",
			intro: "Talk presented at the Peruvian Symposium of Young Researchers in Bioinformatics.",
			paper: "Modeling gene expression networks using LSTM recurrent neural networks",
			venue: "Peruvian Symposium of Young Researchers in Bioinformatics"
		},
		contact: {
			title: "Contact",
			intro: "Got a project in mind? Let's talk.",
			name: "Name",
			email: "Email",
			message: "Message",
			send: "Send message",
			sending: "Sending…",
			success: "Message sent! I'll get back to you soon.",
			error: "Could not send the message. Please try again.",
			nameError: "Enter your name (minimum 2 characters).",
			emailError: "Enter a valid email.",
			messageError: "Message must be at least 10 characters."
		},
		footer: { rights: "All rights reserved." }
	},
	pt: {
		nav: {
			home: "Início",
			services: "Serviços",
			about: "Sobre mim",
			projects: "Projetos",
			research: "Pesquisa",
			contact: "Contato"
		},
		hero: {
			greeting: "Olá, sou Jerson Salinas. Desenvolvo microserviços empresariais de alto desempenho e modelos de Inteligência Artificial com impacto real.",
			cta: "Vamos conversar",
			subroles: "Backend Developer · Data Science Engineer"
		},
		counters: {
			years: "Anos de Experiência",
			projects: "Projetos",
			scholar: "Bolsista PRONABEC",
			rank: "Tercio Superior (Destaque Acadêmico)"
		},
		services: {
			title: "Serviços",
			subtitle: "Soluções técnicas para os setores financeiro e científico.",
			items: [
				{
					title: "Desenvolvimento de Microserviços e APIs",
					desc: "Arquiteturas robustas e escaláveis em Spring Boot com SQL."
				},
				{
					title: "Data Science & Deep Learning",
					desc: "Modelos preditivos e de aprendizado profundo com Python e TensorFlow."
				},
				{
					title: "Consultoria e Soluções Cloud",
					desc: "Integrações cloud, IA e modernização de sistemas legados."
				}
			]
		},
		about: {
			title: "Sobre mim",
			bio: "Engenheiro de Informática e de Sistemas especializado em desenvolvimento backend e inteligência artificial. Com experiência nos setores financeiro e científico, projeto arquiteturas robustas baseadas em microserviços e modelos de aprendizado profundo aplicados à resolução de problemas de alta complexidade.",
			languages: "Idiomas",
			qu: "Quíchua (Avançado)",
			pt: "Português (Intermediário)",
			en: "Inglês (Básico)",
			timelineTitle: "Trajetória",
			timeline: [
				{
					date: "12/2024 — Presente",
					role: "Desenvolvedor Backend Principal",
					org: "Caja Cusco"
				},
				{
					date: "09/2024 — 12/2024",
					role: "Engenheiro de Software Backend",
					org: "Caja Cusco"
				},
				{
					date: "08/2023 — 04/2024",
					role: "Responsável de TI",
					org: "Instituto de Sistemas Cusco (ISC)"
				},
				{
					date: "2024",
					role: "Bacharel em Engenharia de Informática e de Sistemas",
					org: "UNSAAC"
				}
			]
		},
		projects: {
			title: "Projetos em Destaque",
			subtitle: "Sistemas em produção, soluções corporativas e protótipos de pesquisa aplicada.",
			items: [
				{
					title: "LogiCont — B2B SaaS LogTech + FinTech",
					desc: "SaaS de gestão administrativa que automatiza a contabilidade em tempo real. Seu design modular permite que PMEs de serviços ou comerciais operem com ou sem estoque, facilitando a tomada de decisões certas no momento oportuno.",
					stack: "React · TypeScript · Tailwind CSS · Node.js",
					status: "Validação · Demo",
					url: logicontUrl
				},
				{
					title: "Microserviço Ya Ganaste — Caja Cusco",
					desc: "Integração Ya Ganaste para arrecadação e pagamentos.",
					stack: "Java · Spring Boot · MySQL · Arquitetura Owner",
					status: "Em produção"
				},
				{
					title: "Microserviço Western Union — Caja Cusco",
					desc: "Integração Western Union para pagamentos transfronteiriços.",
					stack: "Java · Spring Boot · MySQL · Microservicios",
					status: "Em produção"
				},
				{
					title: "Modelo Preditivo de Secas (SENAMHI Cusco)",
					desc: "Deep Learning aplicado a séries temporais climáticas.",
					stack: "Python · TensorFlow · Keras"
				}
			]
		},
		research: {
			title: "Pesquisa e Publicações",
			intro: "Palestra apresentada no Simpósio Peruano de Jovens Pesquisadores em Bioinformática.",
			paper: "Modelagem de redes de expressão gênica usando redes neurais recorrentes LSTM",
			venue: "Simpósio Peruano de Jovens Pesquisadores em Bioinformática"
		},
		contact: {
			title: "Contato",
			intro: "Tem um projeto em mente? Vamos conversar.",
			name: "Nome",
			email: "E-mail",
			message: "Mensagem",
			send: "Enviar mensagem",
			sending: "Enviando…",
			success: "Mensagem enviada! Responderei em breve.",
			error: "Não foi possível enviar a mensagem. Tente novamente.",
			nameError: "Insira seu nome (mínimo de 2 caracteres).",
			emailError: "Insira um e-mail válido.",
			messageError: "A mensagem deve ter pelo menos 10 caracteres."
		},
		footer: { rights: "Todos os direitos reservados." }
	}
};
var languageNames = {
	es: "Español",
	en: "English",
	pt: "Português"
};
var LanguageContext = (0, import_react.createContext)(null);
var STORAGE_KEY$1 = "portfolio.lang";
function LanguageProvider({ children }) {
	const [lang, setLangState] = (0, import_react.useState)("es");
	(0, import_react.useEffect)(() => {
		const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY$1) : null;
		if (saved && dictionaries[saved]) setLangState(saved);
	}, []);
	const setLang = (0, import_react.useCallback)((l) => {
		setLangState(l);
		if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY$1, l);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageContext.Provider, {
		value: {
			lang,
			setLang,
			t: dictionaries[lang]
		},
		children
	});
}
function useLanguage() {
	const ctx = (0, import_react.useContext)(LanguageContext);
	if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
	return ctx;
}
var ThemeContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "portfolio.theme";
function applyTheme(theme) {
	if (typeof document === "undefined") return;
	document.documentElement.classList.toggle("dark", theme === "dark");
}
function ThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const saved = localStorage.getItem(STORAGE_KEY);
		const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
		const initial = saved ?? (prefersDark ? "dark" : "light");
		setTheme(initial);
		applyTheme(initial);
	}, []);
	const toggleTheme = (0, import_react.useCallback)(() => {
		setTheme((prev) => {
			const next = prev === "dark" ? "light" : "dark";
			localStorage.setItem(STORAGE_KEY, next);
			applyTheme(next);
			return next;
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			toggleTheme
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
var sections = [
	"home",
	"services",
	"about",
	"projects",
	"research",
	"contact"
];
function Header() {
	const { theme, toggleTheme } = useTheme();
	const { lang, setLang, t } = useLanguage();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [langOpen, setLangOpen] = (0, import_react.useState)(false);
	const navLinks = sections.map((id) => ({
		id,
		label: t.nav[id]
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 inset-x-0 z-50 glass",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "font-display font-bold tracking-tight text-foreground",
					children: [
						"Jerson",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-brand",
							children: "."
						}),
						"Salinas"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-7",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${l.id}`,
						className: "text-sm text-muted-foreground hover:text-brand transition-colors",
						children: l.label
					}, l.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setLangOpen((v) => !v),
								className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 py-1.5 text-xs font-medium text-foreground hover:border-brand transition-colors",
								"aria-label": "Change language",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "w-3.5 h-3.5" }), lang.toUpperCase()]
							}), langOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute right-0 mt-2 w-36 rounded-md border border-border bg-popover shadow-lg overflow-hidden",
								children: Object.keys(languageNames).map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										setLang(code);
										setLangOpen(false);
									},
									className: `w-full text-left px-3 py-2 text-sm hover:bg-accent ${lang === code ? "text-brand font-semibold" : "text-popover-foreground"}`,
									children: languageNames[code]
								}, code))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleTheme,
							className: "inline-flex items-center justify-center rounded-md border border-border bg-surface w-9 h-9 text-foreground hover:border-brand transition-colors",
							"aria-label": "Toggle theme",
							children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-4 h-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setOpen((v) => !v),
							className: "md:hidden inline-flex items-center justify-center rounded-md border border-border bg-surface w-9 h-9 text-foreground",
							"aria-label": "Toggle menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-4 h-4" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-border bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col px-4 py-3",
				children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${l.id}`,
					onClick: () => setOpen(false),
					className: "py-2 text-sm text-foreground hover:text-brand",
					children: l.label
				}, l.id))
			})
		})]
	});
}
var supabaseService = {
	async saveMessage(contact) {
		const { error } = await supabase.from("contacts").insert({
			name: contact.name.trim(),
			email: contact.email.trim().toLowerCase(),
			message: contact.message.trim()
		});
		if (error) throw error;
	},
	logVisit(event, path) {
		try {
			const payload = {
				event,
				path: path ?? (typeof window !== "undefined" ? window.location.pathname : null),
				user_agent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 512) : null,
				referrer: typeof document !== "undefined" ? document.referrer.slice(0, 512) : null
			};
			supabase.from("visit_logs").insert(payload).then(({ error }) => {
				if (error) console.warn("[visit-log]", error.message);
			});
		} catch (e) {
			console.warn("[visit-log] swallowed", e);
		}
	}
};
function Hero() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-x-0 -top-40 -z-10 h-[36rem] bg-[radial-gradient(60%_50%_at_50%_0%,var(--brand-soft)_0%,transparent_70%)]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-brand",
					children: t.hero.subroles
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground max-w-4xl",
					children: t.hero.greeting
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-wrap items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						onClick: () => supabaseService.logVisit("cta_hero_contact", "/#contact"),
						className: "inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-sm hover:opacity-90 transition-opacity",
						children: [t.hero.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#projects",
						className: "inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground hover:border-brand transition-colors",
						children: "Portfolio"
					})]
				})
			]
		})]
	});
}
var values = [
	"5+",
	"10+",
	"2x",
	"Top"
];
function Counters() {
	const { t } = useLanguage();
	const labels = [
		t.counters.years,
		t.counters.projects,
		t.counters.scholar,
		t.counters.rank
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-4",
			children: values.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-surface p-6 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-4xl sm:text-5xl font-bold text-brand",
					children: v
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-xs sm:text-sm text-muted-foreground",
					children: labels[i]
				})]
			}, i))
		})
	});
}
var icons = [
	Cpu,
	Brain,
	Cloud
];
function Services() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-bold text-foreground",
					children: t.services.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: t.services.subtitle
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-3",
				children: t.services.items.map((s, i) => {
					const Icon = icons[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-brand hover:-translate-y-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-11 h-11 rounded-lg bg-brand-soft flex items-center justify-center text-brand",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-lg font-semibold text-foreground",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: s.desc
							})
						]
					}, i);
				})
			})]
		})
	});
}
var profile_default = "/assets/profile-BAuu22Ta.png";
function About() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-20 sm:py-28 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-[auto_1fr_1fr] gap-12 lg:gap-16 items-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex lg:block justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "absolute -inset-3 rounded-full bg-[radial-gradient(circle,var(--brand-soft)_0%,transparent_70%)] blur-xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: profile_default,
							alt: "Jerson Salinas — Backend Developer & Data Science Engineer",
							width: 224,
							height: 224,
							loading: "lazy",
							className: "relative w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover ring-4 ring-background shadow-xl"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl font-bold text-foreground",
						children: t.about.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base leading-relaxed text-muted-foreground",
						children: t.about.bio
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-[0.18em] text-brand",
							children: t.about.languages
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-1.5 text-sm text-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", t.about.qu] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", t.about.pt] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", t.about.en] })
							]
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-semibold text-foreground",
					children: t.about.timelineTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 relative border-l border-border pl-6 space-y-8",
					children: t.about.timeline.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand ring-4 ring-background" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-wider text-brand",
								children: item.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-base font-semibold text-foreground",
								children: item.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: item.org
							})
						]
					}, i))
				})] })
			]
		})
	});
}
function Projects() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "py-20 sm:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-bold text-foreground",
					children: t.projects.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground",
					children: t.projects.subtitle
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: t.projects.items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:border-brand hover:shadow-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs font-mono text-brand",
								children: ["0", i + 1]
							}), p.status && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-brand animate-pulse" }), p.status]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-lg font-semibold text-foreground leading-snug",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 flex-1 text-sm text-muted-foreground leading-relaxed",
							children: p.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 pt-4 border-t border-border flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-foreground/80 font-mono",
								children: p.stack
							}), p.url && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: p.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline",
								children: ["Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3 h-3" })]
							})]
						})
					]
				}, i))
			})]
		})
	});
}
function Research() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "research",
		className: "py-20 sm:py-28 bg-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl sm:text-4xl font-bold text-foreground",
					children: t.research.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted-foreground max-w-2xl",
					children: t.research.intro
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 rounded-2xl border border-border bg-surface p-6 sm:p-8 flex gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden sm:flex w-12 h-12 shrink-0 rounded-lg bg-brand-soft items-center justify-center text-brand",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-wider text-brand",
							children: "Ponencia · 2024"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-lg sm:text-xl font-semibold text-foreground leading-snug",
							children: t.research.paper
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: t.research.venue
						})
					] })]
				})
			]
		})
	});
}
var CONTACT_EMAIL = "salinas171605@gmail.com";
function Contact() {
	const { t } = useLanguage();
	const [status, setStatus] = (0, import_react.useState)("idle");
	const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: u(objectType({
		name: stringType().trim().min(2, t.contact.nameError).max(120),
		email: stringType().trim().email(t.contact.emailError).max(255),
		message: stringType().trim().min(10, t.contact.messageError).max(4e3)
	})) });
	const onSubmit = async (values) => {
		setStatus("submitting");
		try {
			await supabaseService.saveMessage(values);
			supabaseService.logVisit("contact_form_submit", "/#contact");
			setStatus("success");
			reset();
		} catch (e) {
			console.error(e);
			setStatus("error");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-neutral-950 dark:bg-neutral-950 text-neutral-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-12 lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl sm:text-4xl font-bold",
						children: t.contact.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-neutral-400 max-w-md",
						children: t.contact.intro
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${CONTACT_EMAIL}`,
								onClick: () => supabaseService.logVisit("social_email"),
								className: "flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 text-brand" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "[direction:rtl] [unicode-bidi:bidi-override]",
										children: CONTACT_EMAIL.split("").reverse().join("")
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://linkedin.com/in/jer-sal-at",
								target: "_blank",
								rel: "noreferrer",
								onClick: () => supabaseService.logVisit("social_linkedin"),
								className: "flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-4 h-4 text-brand" }), " linkedin.com/in/jer-sal-at"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://github.com/salinas-jerson",
								target: "_blank",
								rel: "noreferrer",
								onClick: () => supabaseService.logVisit("social_github"),
								className: "flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-4 h-4 text-brand" }), " github.com/salinas-jerson"]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit(onSubmit),
					className: "rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 space-y-4",
					noValidate: true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold uppercase tracking-wider text-neutral-400",
								children: t.contact.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								...register("name"),
								className: "mt-2 w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2.5 text-sm text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
							}),
							errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-red-400",
								children: errors.name.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold uppercase tracking-wider text-neutral-400",
								children: t.contact.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								...register("email"),
								className: "mt-2 w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2.5 text-sm text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
							}),
							errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-red-400",
								children: errors.email.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-semibold uppercase tracking-wider text-neutral-400",
								children: t.contact.message
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 5,
								...register("message"),
								className: "mt-2 w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2.5 text-sm text-white focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand resize-none"
							}),
							errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-red-400",
								children: errors.message.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: status === "submitting",
							className: "w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90 disabled:opacity-60 transition-opacity",
							children: status === "submitting" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "w-4 h-4 animate-spin" }), t.contact.sending] }) : t.contact.send
						}),
						status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-md bg-emerald-500/10 border border-emerald-500/30 px-3 py-2.5 text-sm text-emerald-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-4 h-4" }),
								" ",
								t.contact.success
							]
						}),
						status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-md bg-red-500/10 border border-red-500/30 px-3 py-2.5 text-sm text-red-300",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-4 h-4" }),
								" ",
								t.contact.error
							]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Jerson Salinas Atausinchi · ",
					t.footer.rights
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Ingeniero Informático y de Sistemas — UNSAAC" })]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}) }) });
}
function Portfolio() {
	(0, import_react.useEffect)(() => {
		supabaseService.logVisit("page_view", "/");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counters, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Research, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] })]
	});
}
//#endregion
export { Index as component };
