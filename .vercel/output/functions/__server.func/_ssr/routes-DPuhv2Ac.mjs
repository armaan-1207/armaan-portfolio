import { o as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, o as require_react } from "../_libs/@react-three/fiber+[...].mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { C as Download, E as Calendar, S as FastForward, T as CircleCheck, _ as GraduationCap, a as Sparkles, b as FileText, c as Send, d as Maximize2, f as MapPin, g as Layers, h as Linkedin, i as Terminal, l as Minus, m as Lock, n as X, o as Shield, p as Mail, r as Users, s as ShieldCheck, t as Zap, u as Menu, v as Github, w as Cpu, x as FileDown, y as Fingerprint } from "../_libs/lucide-react.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DPuhv2Ac.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BOOT_LOGS = [
	"Welcome to Kali GNU/Linux 2026.1",
	"",
	"[  OK  ] Started Initial Ramdisk System.",
	"[  OK  ] Reached target Local File Systems.",
	"[  OK  ] Starting Security Auditing Service...",
	"[  OK  ] Loaded Kernel Module: crypto_aes_ni",
	"[  OK  ] Initializing eBPF Packet Filter Engine...",
	"[  OK  ] Starting NetworkManager...",
	"[  OK  ] Reached target Network.",
	"[  OK  ] Mounted /dev/mapper/kali-root (LUKS Encrypted)",
	"[  OK  ] Loading BurpSuite Core Modules...",
	"[  OK  ] Initializing Hyprland Wayland Compositor...",
	"[  OK  ] Starting Security Subsystem (Armaan Malhotra DevSecOps)...",
	"[  OK  ] Started OpenBSD Secure Shell server.",
	"[  OK  ] Reached target Multi-User System.",
	"[  OK  ] Reached target Graphical Interface.",
	"",
	"============================================================",
	"               WELCOME TO KALI LINUX (2026.1)              ",
	"============================================================",
	"SYSTEM STATUS: ONLINE | SECURITY CLEARANCE: LEVEL 5 (ROOT)",
	"Starting display manager..."
];
function LoadingScreen({ onDone }) {
	const containerRef = (0, import_react.useRef)(null);
	const [logs, setLogs] = (0, import_react.useState)([]);
	const [percent, setPercent] = (0, import_react.useState)(0);
	const bottomRef = (0, import_react.useRef)(null);
	const isFinishedRef = (0, import_react.useRef)(false);
	const handleFinish = () => {
		if (isFinishedRef.current) return;
		isFinishedRef.current = true;
		if (containerRef.current) {
			containerRef.current.style.transition = "transform 0.6s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.5s ease";
			containerRef.current.style.transform = "translateY(-100%)";
			containerRef.current.style.opacity = "0";
		}
		setTimeout(onDone, 650);
	};
	(0, import_react.useEffect)(() => {
		let currentLog = 0;
		let timeoutId;
		const step = () => {
			if (currentLog < BOOT_LOGS.length) {
				const nextLog = BOOT_LOGS[currentLog];
				if (nextLog !== void 0) {
					setLogs((prev) => [...prev, nextLog]);
					setPercent(Math.min(100, Math.round((currentLog + 1) / BOOT_LOGS.length * 100)));
				}
				currentLog++;
				if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
				let delay = 110;
				if (nextLog?.includes("Security Auditing") || nextLog?.includes("LUKS Encrypted")) delay = 320;
				else if (nextLog?.includes("BurpSuite") || nextLog?.includes("Hyprland")) delay = 280;
				else if (nextLog?.includes("WELCOME TO KALI")) delay = 220;
				timeoutId = setTimeout(step, delay);
			} else timeoutId = setTimeout(handleFinish, 400);
		};
		step();
		const onKeyDown = (e) => {
			if (e.key === "Escape") {
				clearTimeout(timeoutId);
				handleFinish();
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener("keydown", onKeyDown);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "fixed inset-0 z-[100000] flex flex-col justify-between bg-[#05080c] font-mono p-4 sm:p-8 select-none overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex items-center justify-between border-b border-primary/20 pb-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary font-bold",
						children: "KALI_BOOT // KERNEL v6.8.0"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleFinish,
					className: "flex items-center gap-1.5 rounded border border-primary/40 bg-primary/10 px-2.5 py-1 text-primary hover:bg-primary/20 transition-all text-[11px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SKIP [ESC]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FastForward, { size: 12 })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 my-4 w-full flex-1 overflow-y-auto text-xs sm:text-sm md:text-base text-foreground/90 font-mono scrollbar-none",
				children: [
					logs.map((log, index) => {
						if (!log) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-3" }, index);
						if (log.startsWith("[  OK  ]")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-white",
								children: [
									"[ ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-bold",
										children: "OK"
									}),
									" ]"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gray-300",
								children: log.replace("[  OK  ] ", "")
							})]
						}, index);
						if (log.startsWith("==")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-primary font-bold text-center sm:text-left",
							children: log
						}, index);
						if (log.includes("SYSTEM STATUS")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-primary font-bold text-center sm:text-left animate-pulse",
							children: log
						}, index);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-gray-300",
							children: log
						}, index);
					}),
					logs.length < BOOT_LOGS.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-4 w-2.5 bg-primary animate-pulse" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: bottomRef })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 border-t border-primary/20 pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-xs text-muted-foreground font-mono mb-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary font-semibold",
						children: "INITIALIZING SYSTEM ENVIRONMENT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-primary",
						children: [percent, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-2 w-full overflow-hidden rounded bg-primary/10 border border-primary/30",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-primary shadow-[0_0_12px_#00ff9d] transition-all duration-150",
						style: { width: `${percent}%` }
					})
				})]
			})
		]
	});
}
var LINKS = [
	{
		href: "#about",
		id: "about",
		label: "about"
	},
	{
		href: "#skills",
		id: "skills",
		label: "skills"
	},
	{
		href: "#projects",
		id: "projects",
		label: "projects"
	},
	{
		href: "#writeups",
		id: "writeups",
		label: "writeups"
	},
	{
		href: "#certs",
		id: "certs",
		label: "certs"
	},
	{
		href: "#experience",
		id: "experience",
		label: "experience"
	},
	{
		href: "#contact",
		id: "contact",
		label: "contact"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const visible = /* @__PURE__ */ new Map();
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
			let bestId = "";
			let bestRatio = 0;
			for (const [id, ratio] of visible) if (ratio > bestRatio) {
				bestRatio = ratio;
				bestId = id;
			}
			if (bestRatio > 0) setActive(bestId);
		}, {
			rootMargin: "-40% 0px -50% 0px",
			threshold: [
				0,
				.25,
				.5,
				1
			]
		});
		for (const l of LINKS) {
			const el = document.getElementById(l.id);
			if (el) io.observe(el);
		}
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 nav-glow ${scrolled ? "backdrop-blur-xl bg-[#0a0e14]/85 nav-glow-active" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "font-mono text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "$"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "whoami"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-secondary",
							children: ".sh"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden gap-7 font-mono text-xs md:flex",
					children: LINKS.map((l, i) => {
						const isActive = active === l.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: l.href,
							className: `group relative flex items-center gap-1.5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: `inline-block h-1.5 w-1.5 rounded-full transition-all ${isActive ? "bg-primary shadow-[0_0_8px_#00ff9d] animate-pulse" : "bg-transparent"}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-primary/60",
									children: [
										"0",
										i + 1,
										"."
									]
								}),
								l.label
							]
						}, l.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "hidden md:inline-flex items-center rounded border border-primary/50 px-3.5 py-1.5 font-mono text-xs text-primary transition-all hover:bg-primary/10 hover:glow-neon",
					children: "./connect"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(!open),
					className: "md:hidden text-primary",
					"aria-label": "menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-[#0a0e14]/95 backdrop-blur-md md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-1 px-6 py-4 font-mono text-sm",
				children: LINKS.map((l, i) => {
					const isActive = active === l.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: l.href,
						onClick: () => setOpen(false),
						className: `flex items-center gap-2 py-2 ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: `inline-block h-1.5 w-1.5 rounded-full ${isActive ? "bg-primary shadow-[0_0_8px_#00ff9d]" : "bg-transparent"}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary/60",
								children: [
									"0",
									i + 1,
									"."
								]
							}),
							l.label
						]
					}, l.href);
				})
			})
		})]
	});
}
var PulseNode = (0, import_react.lazy)(() => import("./PulseNode-GUL5nMJP.mjs").then((m) => ({ default: m.PulseNode })));
var LINE_1 = "Hi, I'm Armaan Malhotra";
var LINE_2 = "Cybersecurity Enthusiast | Breaking Systems to Understand Them";
var SCROLL_HINT = "[ scroll to decrypt ↓ ]";
function useTyped(lines, speed = 40, linePause = 400) {
	const [out, setOut] = (0, import_react.useState)(lines.map(() => ""));
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let li = 0;
		let ci = 0;
		const tick = () => {
			if (cancelled) return;
			if (li >= lines.length) {
				setDone(true);
				return;
			}
			const line = lines[li];
			if (ci <= line.length) {
				setOut((prev) => {
					const next = [...prev];
					next[li] = line.slice(0, ci);
					return next;
				});
				ci++;
				setTimeout(tick, speed);
			} else {
				li++;
				ci = 0;
				setTimeout(tick, linePause);
			}
		};
		tick();
		return () => {
			cancelled = true;
		};
	}, []);
	return {
		out,
		done
	};
}
function useTypedString(text, speed = 45, startDelay = 1200) {
	const [out, setOut] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let i = 0;
		const start = setTimeout(function tick() {
			if (cancelled) return;
			i++;
			setOut(text.slice(0, i));
			if (i < text.length) setTimeout(tick, speed);
		}, startDelay);
		return () => {
			cancelled = true;
			clearTimeout(start);
		};
	}, [
		text,
		speed,
		startDelay
	]);
	return out;
}
function renderLine1(text) {
	const armaanTarget = "Armaan";
	const malhotraTarget = "Malhotra";
	const armaanIdx = text.indexOf(armaanTarget);
	const malhotraIdx = text.indexOf(malhotraTarget);
	if (armaanIdx === -1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: text });
	const prefix = text.slice(0, armaanIdx);
	if (malhotraIdx === -1) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [prefix, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "text-primary font-black",
		style: { textShadow: "0 0 25px rgba(0,255,157,0.9)" },
		children: text.slice(armaanIdx)
	})] });
	const spaceBetween = text.slice(armaanIdx + 6, malhotraIdx);
	const malhotraText = text.slice(malhotraIdx, malhotraIdx + 8);
	const suffix = text.slice(malhotraIdx + 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		prefix,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-primary font-black",
			style: { textShadow: "0 0 25px rgba(0,255,157,0.9)" },
			children: armaanTarget
		}),
		spaceBetween,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-secondary font-black",
			style: { textShadow: "0 0 25px rgba(0,217,255,0.9)" },
			children: malhotraText
		}),
		suffix
	] });
}
function Hero() {
	const { out, done } = useTyped([LINE_1, LINE_2]);
	const scrollHint = useTypedString(SCROLL_HINT, 45, 1400);
	const heroContentRef = (0, import_react.useRef)(null);
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (heroContentRef.current) gsapWithCSS.fromTo(heroContentRef.current, {
			opacity: 0,
			y: 35
		}, {
			opacity: 1,
			y: 0,
			duration: .95,
			ease: "power3.out"
		});
	}, []);
	const line1Active = out[0].length < 23;
	const line2Active = !line1Active && !done;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex flex-col w-full overflow-visible min-h-[85vh] justify-center py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-0 grid-bg opacity-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 right-0 z-0 h-96 w-96 rounded-full bg-secondary/5 blur-[140px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-0 left-0 z-0 h-96 w-96 rounded-full bg-secondary/5 blur-[140px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: heroContentRef,
				className: "relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .85,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "lg:col-span-7 flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 self-start rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 font-mono text-xs text-secondary shadow-[0_0_20px_rgba(0,217,255,0.25)] backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
								size: 14,
								className: "animate-pulse"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tracking-wide",
								children: "$ whoami --profile=\"Cybersecurity Enthusiast\""
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mb-4 font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl",
							children: [renderLine1(out[0]), line1Active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "animate-blink text-secondary",
								children: "_"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-8 min-h-[2.5em] font-mono text-base text-muted-foreground sm:text-lg lg:text-xl leading-relaxed",
							children: [out[1], (line2Active || done) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "animate-blink text-secondary",
								children: "_"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 font-mono text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#projects",
								className: "glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-7 py-4 text-primary font-bold transition-all hover:bg-primary/20 hover:glow-neon shadow-[0_0_20px_rgba(0,255,157,0.2)]",
								"data-text": "View Projects",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-[2]",
									children: "View Projects"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/Resume.pdf",
								download: true,
								className: "glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded-lg border border-secondary bg-secondary/10 px-7 py-4 text-secondary font-bold transition-all hover:bg-secondary/20 hover:glow-cyan shadow-[0_0_20px_rgba(0,217,255,0.2)]",
								"data-text": "Download Resume",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-[2]",
									children: "Download Resume"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center gap-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://github.com/armaan-1207",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "GitHub",
									className: "social-icon text-muted-foreground hover:text-primary transition-all p-2.5 rounded-xl border border-border/60 hover:border-primary/60 bg-card/50 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 21 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://linkedin.com/in/armaanmalhotra12/",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "LinkedIn",
									className: "social-icon text-muted-foreground hover:text-secondary transition-all p-2.5 rounded-xl border border-border/60 hover:border-secondary/60 bg-card/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 21 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:amalhotra1be25@thapar.edu",
									"aria-label": "Email",
									className: "social-icon text-muted-foreground hover:text-primary transition-all p-2.5 rounded-xl border border-border/60 hover:border-primary/60 bg-card/50 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 21 })
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5 flex justify-center items-center w-full relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-full",
						children: mounted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-[400px] sm:h-[480px] lg:h-[540px] w-full flex items-center justify-center font-mono text-xs text-secondary animate-pulse",
								children: "Initializing Holographic Core..."
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulseNode, {})
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none mt-12 flex justify-center font-mono text-[11px] text-muted-foreground",
				children: [scrollHint, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-blink text-secondary ml-1",
					children: "▋"
				})]
			})
		]
	});
}
function Section({ id, index, title, children }) {
	const dot = title.indexOf(".");
	const head = dot >= 0 ? title.slice(0, dot) : title;
	const tail = dot >= 0 ? title.slice(dot) : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		id,
		initial: {
			opacity: 0,
			y: 45,
			scale: .97
		},
		whileInView: {
			opacity: 1,
			y: 0,
			scale: 1
		},
		viewport: {
			once: true,
			amount: .12
		},
		transition: {
			duration: .75,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "relative flex flex-col scroll-mt-28 rounded-xl border border-border/80 bg-[#080d16]/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_60px_rgba(0,255,157,0.12)] w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border/60 bg-[#060a12]/95 px-5 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-6 px-2 place-items-center rounded bg-primary/10 border border-primary/30 font-mono text-xs font-bold text-primary shadow-[0_0_12px_rgba(0,255,157,0.25)]",
					children: index
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-mono text-sm sm:text-base tracking-tight font-bold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: head
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary/90",
						children: tail
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-muted-foreground/60",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
						size: 14,
						className: "hover:text-primary transition-colors cursor-pointer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, {
						size: 12,
						className: "hover:text-primary transition-colors cursor-pointer"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						size: 14,
						className: "hover:text-red-400 transition-colors cursor-pointer"
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-6 md:p-8 relative",
			children
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		index: "01",
		title: "whoami --verbose",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-6 w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 40,
					scale: .97
				},
				whileInView: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				whileHover: {
					y: -4,
					scale: 1.01
				},
				viewport: {
					once: true,
					amount: .15
				},
				transition: {
					duration: .75,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "lg:col-span-7 rounded-xl border border-secondary/30 bg-[#060a12]/95 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.75)] backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:border-secondary/70 hover:shadow-[0_15px_45px_rgba(0,217,255,0.18)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-16 -top-16 h-40 w-40 rounded-full bg-secondary/10 blur-3xl pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/50 pb-3 mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/80" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-2 font-mono text-xs font-semibold text-foreground/80",
									children: "armaan@kali:~/bio"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-secondary border border-secondary/30 px-2.5 py-0.5 rounded bg-secondary/10 font-bold tracking-wider",
							children: "CYBERSEC_ENTHUSIAST"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4 font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-secondary font-bold",
									children: "$ cat profile.summary"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"I am a dedicated ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary font-semibold",
									children: "Cybersecurity Enthusiast"
								}),
								" and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: "Electronics and Computer Engineering (ENC)"
								}),
								" undergraduate specializing in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-secondary font-semibold",
									children: "penetration testing, network defense, and vulnerability research"
								}),
								"."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Driven by an insatiable curiosity for breaking complex systems to understand how they truly operate beneath the surface, I spend countless hours dissecting network protocols, auditing web architectures, and solving intricate Capture The Flag (CTF) challenges." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "border-l-2 border-primary/60 pl-3.5 italic text-foreground/90 bg-primary/5 py-2.5 rounded-r shadow-inner",
								children: "\"Security is not a product, but a continuous process of adversarial thinking and relentless exploration.\""
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-2 flex flex-wrap gap-2",
								children: [
									"Penetration Testing",
									"Offensive Security",
									"Vulnerability Assessment",
									"CTF Player",
									"Network Defense",
									"Electronics & CSE"
								].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary transition-all hover:border-primary/60 hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { size: 11 }),
										" ",
										tag
									]
								}, tag))
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 40,
					scale: .97
				},
				whileInView: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				whileHover: {
					y: -4,
					scale: 1.01
				},
				viewport: {
					once: true,
					amount: .15
				},
				transition: {
					duration: .75,
					delay: .15,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "lg:col-span-5 flex flex-col justify-between rounded-xl border border-primary/30 bg-[#060a12]/95 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.75)] backdrop-blur-md relative overflow-hidden group hover:border-primary/70 hover:shadow-[0_15px_45px_rgba(0,255,157,0.18)] transition-all duration-300",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between border-b border-border/50 pb-3 mb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
								size: 18,
								className: "text-primary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs font-bold uppercase tracking-wider text-primary",
								children: "Academic Credentials"
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-mono text-base sm:text-lg font-bold text-foreground leading-snug",
							children: "Thapar Institute of Engineering & Technology"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs sm:text-[13px] text-secondary font-bold mt-1.5 leading-normal",
							children: "Bachelor of Engineering in Electronics and Computer Engineering (B.E. ENC)"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3 pt-3 border-t border-border/40 font-mono text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									size: 14,
									className: "text-primary shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-foreground/90",
									children: "Patiala, Punjab"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
									size: 14,
									className: "text-secondary shrink-0"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-foreground",
									children: "2025 — 2029"
								})]
							})]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 pt-4 border-t border-border/50 flex flex-col gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between font-mono text-[11px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fingerprint, {
									size: 13,
									className: "text-primary"
								}), "CREDENTIAL_STATUS:"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary font-bold flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00ff9d]" }), "VERIFIED_STUDENT"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-purple-500/50 bg-[#0c0517] p-3.5 shadow-[0_0_20px_rgba(168,85,247,0.25)] font-mono text-xs flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-purple-300 font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
									size: 14,
									className: "text-purple-400 animate-pulse"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "whoami@kali:~$" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-secondary font-bold",
								children: "root@armaan"
							})]
						})]
					})
				]
			})]
		})
	});
}
var CMD = "$ cat skills.txt";
var SKILL_CATEGORIES = [
	{
		title: "[ Languages & Developer Tools ]",
		icon: Layers,
		accent: "secondary",
		skills: [
			"C",
			"SQL",
			"Git",
			"GitHub",
			"Docker",
			"VS Code",
			"Figma",
			"Canva"
		]
	},
	{
		title: "[ Security & Penetration Tools ]",
		icon: Shield,
		accent: "primary",
		skills: [
			"Kali Linux",
			"Burp Suite",
			"Wireshark",
			"Nmap",
			"Metasploit",
			"Nessus",
			"Searchsploit",
			"Ghidra",
			"CyberChef",
			"Steghide",
			"John the Ripper",
			"Cisco Packet Tracer"
		]
	},
	{
		title: "[ Core Networking & Protocols ]",
		icon: Cpu,
		accent: "purple",
		skills: [
			"Network Security",
			"TCP/IP",
			"DNS Resolution",
			"Subnetting",
			"Routing & Switching",
			"Cisco Packet Tracer"
		]
	},
	{
		title: "[ Cyber Concepts & Forensics ]",
		icon: Terminal,
		accent: "slate",
		skills: [
			"Vulnerability Assessment",
			"Web Application Security",
			"OWASP Top 10",
			"SQL Injection",
			"WAF Bypass",
			"Out-of-Band Exfiltration",
			"SSTI",
			"AES-ECB",
			"Steganography",
			"PCAP Analysis",
			"Digital/Disk Forensics",
			"XOR Cryptanalysis",
			"Linux Privilege Escalation"
		]
	}
];
function Skills() {
	const termRef = (0, import_react.useRef)(null);
	const inView = useInView(termRef, {
		once: true,
		margin: "-10% 0px"
	});
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [cmdChars, setCmdChars] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (inView && phase === "idle") setPhase("cmd");
	}, [inView, phase]);
	(0, import_react.useEffect)(() => {
		if (phase !== "cmd") return;
		let i = cmdChars;
		const id = setInterval(() => {
			i += 1;
			setCmdChars(i);
			if (i >= 16) {
				clearInterval(id);
				setTimeout(() => setPhase("content"), 300);
			}
		}, 32);
		return () => clearInterval(id);
	}, [phase]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		index: "02",
		title: "skills.txt",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			style: { perspective: "1000px" },
			className: "flex flex-col gap-6 w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				ref: termRef,
				initial: {
					opacity: 0,
					y: 30,
					scale: .98
				},
				whileInView: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				viewport: {
					once: true,
					amount: .15
				},
				transition: {
					duration: .7,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "rounded-xl border border-secondary/30 bg-[#060a12]/95 p-4 font-mono text-sm shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border/50 pb-2.5 mb-3 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/80" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 font-semibold text-foreground/80",
							children: "skills.txt — bash"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs sm:text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-secondary font-bold",
						children: "$"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-foreground font-semibold tracking-wide",
						children: [CMD.slice(0, cmdChars), phase === "cmd" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "animate-blink text-secondary",
							children: "█"
						})]
					})]
				})]
			}), phase === "content" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-6 w-full",
				children: SKILL_CATEGORIES.map((cat, idx) => {
					const IconComp = cat.icon;
					let borderStyle = "border-primary/30 hover:border-primary/70 hover:shadow-[0_15px_40px_rgba(0,255,157,0.2)]";
					let iconStyle = "border-primary/40 bg-primary/10 text-primary shadow-[0_0_15px_rgba(0,255,157,0.25)]";
					let titleColor = "text-primary";
					let chipHoverStyle = "hover:border-primary/70 hover:bg-primary/15 hover:text-primary hover:shadow-[0_0_15px_rgba(0,255,157,0.3)]";
					let iconColor = "text-primary";
					if (cat.accent === "secondary") {
						borderStyle = "border-secondary/30 hover:border-secondary/70 hover:shadow-[0_15px_40px_rgba(0,217,255,0.2)]";
						iconStyle = "border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_15px_rgba(0,217,255,0.25)]";
						titleColor = "text-secondary";
						chipHoverStyle = "hover:border-secondary/70 hover:bg-secondary/15 hover:text-secondary hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]";
						iconColor = "text-secondary";
					} else if (cat.accent === "purple") {
						borderStyle = "border-purple-500/30 hover:border-purple-500/70 hover:shadow-[0_15px_40px_rgba(168,85,247,0.22)]";
						iconStyle = "border-purple-500/40 bg-purple-500/10 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.28)]";
						titleColor = "text-purple-400";
						chipHoverStyle = "hover:border-purple-500/70 hover:bg-purple-500/15 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]";
						iconColor = "text-purple-400";
					} else if (cat.accent === "slate") {
						borderStyle = "border-slate-500/30 hover:border-slate-400/70 hover:shadow-[0_15px_40px_rgba(226,232,240,0.14)]";
						iconStyle = "border-slate-400/40 bg-slate-500/10 text-slate-200 shadow-[0_0_15px_rgba(226,232,240,0.18)]";
						titleColor = "text-slate-200";
						chipHoverStyle = "hover:border-slate-300 hover:bg-slate-400/15 hover:text-white hover:shadow-[0_0_15px_rgba(226,232,240,0.25)]";
						iconColor = "text-slate-300";
					}
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 40,
							scale: .97
						},
						whileInView: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						whileHover: {
							y: -4,
							scale: 1.015
						},
						viewport: {
							once: true,
							amount: .1
						},
						transition: {
							duration: .7,
							delay: idx * .12,
							ease: [
								.16,
								1,
								.3,
								1
							]
						},
						className: `group relative overflow-hidden rounded-xl border bg-[#060a12]/95 p-6 transition-all duration-300 backdrop-blur-md ${borderStyle}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 border-b border-border/50 pb-3 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid h-10 w-10 shrink-0 place-items-center rounded-lg border ${iconStyle}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: `font-mono text-sm sm:text-base font-bold ${titleColor}`,
								children: cat.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-mono text-[11px] text-muted-foreground",
								children: [cat.skills.length, " verified technical items"]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2.5",
							children: cat.skills.map((skillName) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `group/chip relative flex items-center gap-2 rounded-lg border border-border/60 bg-surface/60 px-3 py-1.5 font-mono text-xs text-foreground transition-all duration-200 ${chipHoverStyle}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, {
									size: 12,
									className: `${iconColor} opacity-70 group-hover/chip:opacity-100 transition-opacity`
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: skillName
								})]
							}, skillName))
						})]
					}, cat.title);
				})
			})]
		})
	});
}
/**
* 3-D perspective tilt card — cursor-tracked rotateX/rotateY with smooth
* spring-back on mouse-leave.  Wraps any children; apply layout/size on
* the className prop (it forwards directly to the outer div).
*/
function TiltCard({ children, className = "", maxTilt = 13 }) {
	const ref = (0, import_react.useRef)(null);
	const [style, setStyle] = (0, import_react.useState)({});
	const onMouseMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - .5;
		const y = (e.clientY - rect.top) / rect.height - .5;
		setStyle({
			transform: `perspective(900px) rotateY(${x * maxTilt * 2}deg) rotateX(${-y * maxTilt * 2}deg) scale3d(1.025,1.025,1.025)`,
			transition: "transform 0.07s linear",
			willChange: "transform"
		});
	};
	const onMouseLeave = () => {
		setStyle({
			transform: "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)",
			transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style,
		onMouseMove,
		onMouseLeave,
		className,
		children
	});
}
var PROJECTS = [{
	name: "AURA",
	subtitle: "Autonomous Understanding & Response Agent",
	tags: [
		"Python",
		"FastAPI",
		"React",
		"XGBoost",
		"spaCy"
	],
	desc: "An 8-stage real-time AI emergency response system built by a 4-person team for ET GEN AI Hackathon 2026. Engineered FAM (spaCy-based medical entity extraction) and ECHO (19-dimensional panic scoring via XGBoost) to adapt responses to the user's cognitive state, plus a Medical Rule Engine validating AI-generated first-aid instructions against 30+ safety rules with a full audit-trail API.",
	meta: ["4-person team", "ET GEN AI Hackathon 2026"],
	github: "https://github.com/armaan-1207",
	featured: true
}, {
	name: "CruxHunt",
	subtitle: "Harry Potter–Themed CTF",
	tags: [
		"Python",
		"CTF Design",
		"Steganography",
		"Binary Analysis",
		"Git"
	],
	desc: "An original Harry Potter-themed CTF built for HackOWASP 8.0 (200+ participants). Designed binary reverse-engineering, PE/PCAP analysis, steganography, SSTI, and AES-ECB challenges, verified against a custom flag-validation pipeline.",
	meta: ["200+ participants", "HackOWASP 8.0"],
	github: "https://github.com/armaan-1207",
	featured: false
}];
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "projects",
		index: "03",
		title: "projects.build()",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-8 md:grid-cols-2 w-full",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 40,
					scale: .97
				},
				whileInView: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				viewport: {
					once: true,
					amount: .15
				},
				transition: {
					duration: .75,
					delay: i * .15,
					ease: [
						.16,
						1,
						.3,
						1
					]
				},
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "tilt-card-inner relative h-full flex flex-col overflow-hidden rounded-xl border border-border/80 bg-[#070b12]/90 transition-all hover:border-primary/60 hover:shadow-[0_0_40px_rgba(0,255,157,0.15)] backdrop-blur-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-primary/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-primary/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 border-b border-border/60 bg-surface/80 px-5 py-3.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "ml-3 flex min-w-0 flex-1 items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
											size: 14,
											className: "shrink-0 text-primary animate-pulse"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate font-mono text-xs font-semibold text-foreground/90",
											children: ["~/", p.name.toLowerCase().replace(/\s/g, "-")]
										})]
									}),
									p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 flex items-center gap-1 rounded-full border border-secondary/50 bg-secondary/15 px-2.5 py-0.5 font-mono text-[10px] font-bold text-secondary shadow-[0_0_12px_rgba(0,217,255,0.3)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 10 }), " FEATURED"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: p.github,
										target: "_blank",
										rel: "noreferrer",
										"aria-label": `${p.name} on GitHub`,
										className: "ml-2 shrink-0 rounded-lg p-1.5 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 16 })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-5 p-6 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-mono text-2xl font-bold text-foreground transition-colors group-hover:text-primary",
										children: p.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-xs font-semibold text-primary/80",
										children: p.subtitle
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm sm:text-base leading-[1.8] text-muted-foreground",
										children: p.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-4 pt-2",
										children: p.meta.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5 font-mono text-xs font-semibold text-secondary",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
												size: 12,
												className: "text-secondary animate-pulse"
											}), m]
										}, m))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-auto pt-4 flex flex-wrap gap-2 border-t border-border/40",
										children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md border border-border/70 bg-surface/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,255,157,0.15)]",
											children: t
										}, t))
									})
								]
							})
						]
					})
				})
			}, p.name))
		})
	});
}
var FILTERS = [
	{
		label: "All Writeups",
		value: "all"
	},
	{
		label: "Web Exploitation",
		value: "web"
	},
	{
		label: "Forensics",
		value: "forensics"
	},
	{
		label: "Steganography",
		value: "steganography"
	}
];
var WRITEUPS = [
	{
		name: "DOOMED",
		cats: ["web"],
		displayCat: "Web Exploitation / JWT / Cryptography",
		diff: "easy",
		summary: "Forged a JWT signed with a weak secret to escalate to admin access, then decoded a Base64 → XOR → Gzip encoded artifact to recover the flag.",
		pdf: "/Writeups/doomed.pdf"
	},
	{
		name: "Sorting Hat Blocks",
		cats: ["web"],
		displayCat: "Web Exploitation / AES-ECB",
		diff: "medium",
		summary: "Broke AES-ECB encryption using a byte-at-a-time attack, recovering a hidden flag character by character via a custom Python script.",
		pdf: "/Writeups/sorting-hat-blocks.pdf"
	},
	{
		name: "Riddle's Diary",
		cats: ["web"],
		displayCat: "Web Exploitation / SSTI",
		diff: "medium",
		summary: "Exploited a Jinja2 Server-Side Template Injection by bypassing a keyword blocklist, then decrypted a Vigenère-ciphered password to unlock a protected archive.",
		pdf: "/Writeups/riddles-diary.pdf"
	},
	{
		name: "Fragments of Truth",
		cats: ["forensics", "steganography"],
		displayCat: "Audio Forensics / Steganography",
		diff: "medium",
		summary: "Extracted three stacked layers of hidden data from an audio file — spectrogram text, Morse code, and an SSTV-encoded QR code — to reach the final flag.",
		pdf: "/Writeups/fragments-of-truth.pdf"
	},
	{
		name: "The Pensieve Does Not Forget",
		cats: ["forensics", "steganography"],
		displayCat: "Network Forensics / Steganography",
		diff: "hard",
		summary: "Carved a hidden ZIP from a raw packet capture, recovered a password from the file's own header, and decrypted a Beaufort cipher to uncover the buried flag.",
		pdf: "/Writeups/the-pensieve.pdf"
	}
];
var diffStyle = {
	easy: "text-[#28c840] border-[#28c840]/50 bg-[#28c840]/15 shadow-[0_0_10px_rgba(40,200,64,0.2)]",
	medium: "text-[#ffbd2e] border-[#ffbd2e]/50 bg-[#ffbd2e]/15 shadow-[0_0_10px_rgba(255,189,46,0.2)]",
	hard: "text-destructive border-destructive/50 bg-destructive/15 shadow-[0_0_10px_rgba(255,50,50,0.2)]"
};
var filterCount = (val) => val === "all" ? WRITEUPS.length : WRITEUPS.filter((w) => w.cats.includes(val)).length;
function CTFWriteups() {
	const [active, setActive] = (0, import_react.useState)("all");
	const visible = WRITEUPS.filter((w) => active === "all" || w.cats.includes(active));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "writeups",
		index: "04",
		title: "ctf.writeups[]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-8 flex flex-wrap gap-3",
			children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				id: `ctf-filter-${f.value}`,
				onClick: () => setActive(f.value),
				className: `rounded-lg border px-4 py-2 font-mono text-xs transition-all ${active === f.value ? "border-primary bg-primary/20 text-primary font-bold shadow-[0_0_18px_rgba(0,255,157,0.3)]" : "border-border/70 bg-surface/50 text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/10"}`,
				children: [f.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 rounded-full bg-card px-1.5 py-0.5 text-[10px] opacity-75 font-semibold",
					children: filterCount(f.value)
				})]
			}, f.value))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				children: visible.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					initial: {
						opacity: 0,
						y: 40,
						scale: .97
					},
					whileInView: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .95
					},
					viewport: {
						once: true,
						amount: .15
					},
					transition: {
						duration: .75,
						delay: i * .12,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "tilt-card-inner relative flex h-full flex-col overflow-hidden rounded-xl border border-border/80 bg-[#070b12]/90 transition-all hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,255,157,0.14)] backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 border-b border-border/60 bg-surface/80 px-4 py-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#ff5f57]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#ffbd2e]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#28c840]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "ml-2 flex min-w-0 flex-1 items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
											size: 12,
											className: "shrink-0 text-primary animate-pulse"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate font-mono text-xs text-foreground/80 font-semibold",
											children: ["cruxhunt/", w.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${diffStyle[w.diff]}`,
										children: w.diff
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-4 p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-mono text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors",
											children: w.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
											size: 16,
											className: "mt-0.5 shrink-0 text-primary/70"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-mono text-xs font-semibold text-secondary/90",
										children: w.displayCat
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "flex-1 text-xs sm:text-sm leading-[1.75] text-muted-foreground",
										children: w.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: w.pdf,
										target: "_blank",
										rel: "noreferrer",
										className: "mt-auto flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2.5 font-mono text-xs font-bold text-primary transition-all hover:border-primary hover:bg-primary/20 hover:glow-neon shadow-[0_0_12px_rgba(0,255,157,0.15)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 14 }), "Download Writeup (PDF)"]
									})
								]
							})]
						})
					})
				}, w.name))
			})
		})]
	});
}
var CERTS = [
	{
		emoji: "🎓",
		name: "Complete Ethical Hacking Bootcamp: Zero to Mastery",
		issuer: "Udemy",
		accent: "primary"
	},
	{
		emoji: "🛡",
		name: "EC-Council Cybersecurity Workshop: Steganography & Network Forensics",
		issuer: "EC-Council · 1 CPE Credit",
		accent: "secondary"
	},
	{
		emoji: "🏴",
		name: "XPLO(IT)2 CTF — Certificate of Participation",
		issuer: "OWASP · 2025",
		accent: "primary"
	}
];
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "certs",
		index: "05",
		title: "certifications.pem",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: CERTS.map((c, i) => {
				const isPrimary = c.accent === "primary";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-8% 0px"
					},
					transition: {
						duration: .55,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: i * .12
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `group flex h-full items-start gap-4 rounded-lg border bg-card/60 p-5 transition-all hover:bg-card ${isPrimary ? "border-border hover:border-primary/45 hover:shadow-[0_0_22px_rgba(0,255,157,0.08)]" : "border-border hover:border-secondary/45 hover:shadow-[0_0_22px_rgba(0,217,255,0.08)]"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-12 w-12 shrink-0 place-items-center rounded border text-2xl ${isPrimary ? "border-primary/30 bg-primary/10" : "border-secondary/30 bg-secondary/10"}`,
							children: c.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mb-1 font-mono text-[10px] uppercase tracking-[0.14em] ${isPrimary ? "text-primary/70" : "text-secondary/70"}`,
									children: "certification"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold leading-snug text-foreground",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 font-mono text-[10px] text-muted-foreground",
									children: c.issuer
								})
							]
						})]
					})
				}, c.name);
			})
		})
	});
}
var ACTIVITIES = [
	{
		Icon: Terminal,
		role: "Self-Directed Cybersecurity Foundations Program",
		org: "Independent Security Research",
		period: "June 2026 – Present",
		accent: "primary",
		bullets: [
			"160+ hours of structured practice: completed TryHackMe rooms (DNS in Detail, HTTP in Detail, Linux Fundamentals, Linux Strength Training, Bash Scripting).",
			"Cracked complex hashes with John the Ripper; cleared 10 levels of OverTheWire's Bandit wargame.",
			"Completed PortSwigger's 18-lab SQL Injection curriculum and TryHackMe's Burp Suite: Repeater room."
		]
	},
	{
		Icon: Users,
		role: "Executive Member",
		org: "OWASP Student Chapter TIET",
		period: "Nov 2025 – Present",
		accent: "secondary",
		bullets: [
			"Contributed across Cyber, Marketing, and Design departments for HackOWASP 8.0 — a 24-hour national hackathon.",
			"Solved 7+ PicoCTF challenges across web exploitation, cryptography, forensics, and reverse engineering.",
			"Exploited OWASP Juice Shop locally for hands-on web vulnerability testing and payload analysis."
		]
	},
	{
		Icon: Cpu,
		role: "Core Member",
		org: "Linux User Group, TIET",
		period: "Oct 2025 – Present",
		accent: "primary",
		bullets: ["Participated in Linux and open-source workshops focused on CLI tooling, kernel architecture, and system administration initiatives."]
	}
];
function Experience() {
	const containerRef = (0, import_react.useRef)(null);
	const inView = useInView(containerRef, {
		once: true,
		margin: "-18% 0px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "experience",
		index: "06",
		title: "activities.log",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: containerRef,
			className: "w-full pl-2 sm:pl-6",
			children: ACTIVITIES.map((a, i) => {
				const isPrimary = a.accent === "primary";
				const isLast = i === ACTIVITIES.length - 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6 md:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: `relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 ${isPrimary ? "border-primary bg-primary/15 text-primary shadow-[0_0_20px_rgba(0,255,157,0.4)]" : "border-secondary bg-secondary/15 text-secondary shadow-[0_0_20px_rgba(0,217,255,0.4)]"}`,
							initial: {
								scale: 0,
								opacity: 0
							},
							animate: inView ? {
								scale: 1,
								opacity: 1
							} : {},
							transition: {
								duration: .45,
								ease: [
									.22,
									1,
									.36,
									1
								],
								delay: .15 + i * .22
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `node-ping absolute inset-0 rounded-xl ${isPrimary ? "border border-primary" : "border border-secondary"}`,
								style: { animationDelay: `${i * .7}s` }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.Icon, { size: 20 })]
						}), !isLast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: `mt-2 w-[2px] flex-1 min-h-[3.5rem] rounded-full ${isPrimary ? "bg-gradient-to-b from-primary via-secondary/40 to-secondary" : "bg-gradient-to-b from-secondary via-primary/40 to-primary"} shadow-[0_0_8px_rgba(0,255,157,0.3)]`,
							style: { originY: 0 },
							initial: { scaleY: 0 },
							animate: inView ? { scaleY: 1 } : {},
							transition: {
								duration: .9,
								ease: [
									.22,
									1,
									.36,
									1
								],
								delay: .45 + i * .22
							}
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: `flex-1 min-w-0 ${isLast ? "pb-0" : "pb-12"}`,
						initial: {
							opacity: 0,
							x: -25,
							y: 35,
							scale: .97
						},
						whileInView: {
							opacity: 1,
							x: 0,
							y: 0,
							scale: 1
						},
						viewport: {
							once: true,
							amount: .15
						},
						transition: {
							duration: .75,
							ease: [
								.16,
								1,
								.3,
								1
							],
							delay: .15 + i * .18
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-xl border bg-[#070b12]/90 p-6 transition-all hover:bg-card/95 backdrop-blur-md ${isPrimary ? "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(0,255,157,0.12)]" : "border-secondary/30 hover:border-secondary/60 hover:shadow-[0_0_30px_rgba(0,217,255,0.12)]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-b border-border/50 pb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-mono text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors",
									children: a.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `font-mono text-sm font-semibold mt-0.5 ${isPrimary ? "text-primary" : "text-secondary"}`,
									children: ["@ ", a.org]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `flex items-center gap-1.5 rounded-md border px-3 py-1 font-mono text-xs font-bold ${isPrimary ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,255,157,0.2)]" : "border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_12px_rgba(0,217,255,0.2)]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
										size: 13,
										className: "animate-pulse"
									}), a.period]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2.5",
								children: a.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3 text-sm sm:text-base leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${isPrimary ? "bg-primary shadow-[0_0_6px_#00ff9d]" : "bg-secondary shadow-[0_0_6px_#00d9ff]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
								}, b))
							})]
						})
					})]
				}, a.role);
			})
		})
	});
}
var SOCIALS = [
	{
		Icon: Github,
		label: "GITHUB",
		value: "github.com/armaan-1207",
		url: "https://github.com/armaan-1207",
		color: "primary"
	},
	{
		Icon: Linkedin,
		label: "LINKEDIN",
		value: "armaanmalhotra12",
		url: "https://linkedin.com/in/armaanmalhotra12/",
		color: "secondary"
	},
	{
		Icon: Mail,
		label: "EMAIL",
		value: "armaanmalhotra25@thapar.edu",
		url: "mailto:amalhotra1be25@thapar.edu",
		color: "primary"
	}
];
function Contact() {
	const [formData, setFormData] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [statusMsg, setStatusMsg] = (0, import_react.useState)("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) {
			setStatus("error");
			setStatusMsg("ERR_EMPTY_FIELDS: All parameters are required.");
			return;
		}
		setStatus("sending");
		setStatusMsg("TLS_HANDSHAKE: Encrypting payload...");
		try {
			if ((await fetch("https://formspree.io/f/mqaevepq", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify(formData)
			})).ok) {
				setStatus("sent");
				setStatusMsg("PACKET_DELIVERED: Message transmitted successfully [200 OK].");
				setFormData({
					name: "",
					email: "",
					message: ""
				});
			} else throw new Error("Transmission failed");
		} catch {
			setStatus("error");
			setStatusMsg("ERR_CONNECTION_REFUSED: Formspree endpoint unreachable.");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		index: "07",
		title: "contact.init()",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 40,
				scale: .97
			},
			whileInView: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			viewport: {
				once: true,
				amount: .15
			},
			transition: {
				duration: .8,
				ease: [
					.16,
					1,
					.3,
					1
				]
			},
			className: "relative overflow-hidden rounded-xl border border-secondary/30 bg-[#070c14]/95 p-6 sm:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.8)] backdrop-blur-md w-full transition-all duration-300 hover:border-secondary/60 hover:shadow-[0_20px_55px_rgba(0,217,255,0.15)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto mb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl border border-primary/40 bg-primary/10 text-primary shadow-[0_0_20px_rgba(0,255,157,0.3)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
							size: 26,
							className: "animate-pulse"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: "INITIATE "
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-neon",
							children: "ENCRYPTED TRANSMISSION"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs sm:text-sm text-muted-foreground leading-relaxed",
						children: "Open to cybersecurity collaborations, CTF teams, mentorship, or just a good conversation about security research. Establish TLS channel below."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 rounded-xl border border-primary/30 bg-[#080d17]/90 p-6 backdrop-blur-md shadow-[0_0_25px_rgba(0,0,0,0.5)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border/50 pb-3 mb-6 font-mono text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-primary font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { size: 14 }), " tls_handshake.sh"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-primary/90 bg-primary/10 border border-primary/30 px-2.5 py-0.5 rounded font-semibold flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 12 }), " 256-BIT AES"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-5 font-mono",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name-sender",
								className: "block text-xs font-semibold text-primary mb-2",
								children: "$ name --sender"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name-sender",
								type: "text",
								placeholder: "your_name",
								value: formData.name,
								onChange: (e) => setFormData({
									...formData,
									name: e.target.value
								}),
								className: "term-input w-full rounded-lg border border-border/70 bg-[#04070d] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email-replyto",
								className: "block text-xs font-semibold text-primary mb-2",
								children: "$ email --reply-to"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email-replyto",
								type: "email",
								placeholder: "you@domain.com",
								value: formData.email,
								onChange: (e) => setFormData({
									...formData,
									email: e.target.value
								}),
								className: "term-input w-full rounded-lg border border-border/70 bg-[#04070d] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "message-payload",
								className: "block text-xs font-semibold text-primary mb-2",
								children: "$ message --payload"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "message-payload",
								rows: 4,
								placeholder: "enter encrypted message...",
								value: formData.message,
								onChange: (e) => setFormData({
									...formData,
									message: e.target.value
								}),
								className: "term-input w-full rounded-lg border border-border/70 bg-[#04070d] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all resize-none"
							})] }),
							statusMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `rounded-lg border p-3 text-xs font-mono ${status === "error" ? "border-red-500/50 bg-red-500/10 text-red-400" : status === "sent" ? "border-primary/50 bg-primary/10 text-primary" : "border-secondary/50 bg-secondary/10 text-secondary"}`,
								children: statusMsg
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: status === "sending",
								className: "glitch-btn scan-btn w-full flex items-center justify-center gap-2.5 rounded-lg border border-primary bg-primary/15 px-6 py-3.5 font-mono text-sm font-bold text-primary transition-all hover:bg-primary/25 shadow-[0_0_20px_rgba(0,255,157,0.25)]",
								"data-text": "./transmit_message --secure",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "./transmit_message --secure" })]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between border-b border-border/50 pb-3 mb-2 font-mono text-xs text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-secondary font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 14 }), " tls --links --verified"]
						})
					}), SOCIALS.map((soc) => {
						const IconComp = soc.Icon;
						const isPrimary = soc.color === "primary";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
							href: soc.url,
							target: "_blank",
							rel: "noreferrer",
							whileHover: { x: 4 },
							className: `flex items-center justify-between rounded-xl border bg-[#080d17]/90 p-5 transition-all backdrop-blur-md ${isPrimary ? "border-primary/30 hover:border-primary/60 hover:bg-primary/10 hover:shadow-[0_0_25px_rgba(0,255,157,0.15)]" : "border-secondary/30 hover:border-secondary/60 hover:bg-secondary/10 hover:shadow-[0_0_25px_rgba(0,217,255,0.15)]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid h-12 w-12 shrink-0 place-items-center rounded-xl border ${isPrimary ? "border-primary/40 bg-primary/10 text-primary shadow-[0_0_12px_rgba(0,255,157,0.2)]" : "border-secondary/40 bg-secondary/10 text-secondary shadow-[0_0_12px_rgba(0,217,255,0.2)]"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComp, { size: 22 })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `font-mono text-xs font-bold uppercase tracking-wider ${isPrimary ? "text-primary" : "text-secondary"}`,
									children: soc.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-xs sm:text-sm font-medium text-foreground/90 mt-0.5",
									children: soc.value
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
								size: 18,
								className: isPrimary ? "text-primary opacity-80" : "text-secondary opacity-80"
							})]
						}, soc.label);
					})]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "root@armaan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground/40",
						children: ":~$ "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-secondary",
						children: "exit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-[0.9em] w-[0.5em] animate-blink bg-primary align-middle opacity-80" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap  gap-4 font-mono text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 animate-blink rounded-full bg-primary" }), "all systems nominal"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© 2026",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "Armaan Malhotra"
					}),
					" "
				] })]
			})]
		})
	});
}
function ScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			const total = h.scrollHeight - h.clientHeight;
			setProgress(total > 0 ? h.scrollTop / total * 100 : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "fixed right-2 top-1/2 z-40 hidden h-[60vh] w-1 -translate-y-1/2 overflow-hidden rounded-full bg-white/5 sm:block",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-full rounded-full transition-[height] duration-100 ease-out",
			style: {
				height: `${progress}%`,
				background: "linear-gradient(to bottom, #00ff9d, #00d9ff)",
				boxShadow: "0 0 10px rgba(0,255,157,0.6), 0 0 20px rgba(0,217,255,0.4)"
			}
		})
	});
}
function StatusBar() {
	const [time, setTime] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setTime(/* @__PURE__ */ new Date());
		const id = setInterval(() => setTime(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	const hh = time ? time.getHours().toString().padStart(2, "0") : "--";
	const mm = time ? time.getMinutes().toString().padStart(2, "0") : "--";
	const ss = time ? time.getSeconds().toString().padStart(2, "0") : "--";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 z-40 hidden items-center gap-2.5 rounded-full border border-primary/30 bg-[#060a12]/85 px-4 py-1.5 font-mono text-[11px] tracking-wider text-muted-foreground shadow-[0_0_25px_rgba(0,0,0,0.8)] backdrop-blur-md sm:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_#00ff9d] animate-pulse" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary/90 font-bold",
				children: "SYSTEM:"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground font-semibold",
				children: "ONLINE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-border",
				children: "|"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums text-foreground/90 font-semibold",
				children: [
					hh,
					":",
					mm,
					":",
					ss
				]
			})
		]
	});
}
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
function SmoothScroll({ children }) {
	const lenisRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
		});
		lenisRef.current = lenis;
		lenis.on("scroll", ScrollTrigger.update);
		const updateTicker = (time) => {
			lenis.raf(time * 1e3);
		};
		gsapWithCSS.ticker.add(updateTicker);
		gsapWithCSS.ticker.lagSmoothing(0);
		return () => {
			gsapWithCSS.ticker.remove(updateTicker);
			lenis.destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function CustomCursor() {
	const cursorRef = (0, import_react.useRef)(null);
	const dotRef = (0, import_react.useRef)(null);
	const [hasMoved, setHasMoved] = (0, import_react.useState)(false);
	const [isHovering, setIsHovering] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onMouseMove = (e) => {
			if (!hasMoved) setHasMoved(true);
			if (dotRef.current) gsapWithCSS.to(dotRef.current, {
				x: e.clientX,
				y: e.clientY,
				duration: .04,
				ease: "power2.out"
			});
			if (cursorRef.current) gsapWithCSS.to(cursorRef.current, {
				x: e.clientX,
				y: e.clientY,
				duration: .22,
				ease: "power3.out"
			});
		};
		const onMouseDown = () => {
			if (cursorRef.current) gsapWithCSS.to(cursorRef.current, {
				scale: .8,
				duration: .12
			});
			if (dotRef.current) gsapWithCSS.to(dotRef.current, {
				scale: 1.8,
				duration: .12
			});
		};
		const onMouseUp = () => {
			if (cursorRef.current) gsapWithCSS.to(cursorRef.current, {
				scale: isHovering ? 1.25 : 1,
				duration: .2
			});
			if (dotRef.current) gsapWithCSS.to(dotRef.current, {
				scale: isHovering ? 1.2 : 1,
				duration: .2
			});
		};
		const onMouseOver = (e) => {
			const clickable = e.target.closest("a, button, input, textarea, select, [role=\"button\"], .tilt-card-inner, [data-cursor=\"hover\"], .glitch-btn");
			if (clickable && !isHovering) {
				setIsHovering(true);
				if (cursorRef.current) gsapWithCSS.to(cursorRef.current, {
					scale: 1.25,
					duration: .2,
					ease: "power2.out"
				});
				if (dotRef.current) gsapWithCSS.to(dotRef.current, {
					scale: 1.2,
					duration: .2,
					ease: "power2.out"
				});
			} else if (!clickable && isHovering) {
				setIsHovering(false);
				if (cursorRef.current) gsapWithCSS.to(cursorRef.current, {
					scale: 1,
					duration: .2,
					ease: "power2.out"
				});
				if (dotRef.current) gsapWithCSS.to(dotRef.current, {
					scale: 1,
					duration: .2,
					ease: "power2.out"
				});
			}
		};
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mouseup", onMouseUp);
		window.addEventListener("mouseover", onMouseOver);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("mouseover", onMouseOver);
		};
	}, [hasMoved, isHovering]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `pointer-events-none fixed inset-0 z-[999999] overflow-hidden transition-opacity duration-300 ${hasMoved ? "opacity-100" : "opacity-0"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: cursorRef,
			style: { transform: "translate3d(-200px, -200px, 0)" },
			className: `pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-200 ${isHovering ? "h-8 w-8 border border-secondary/90 bg-secondary/10 shadow-[0_0_16px_rgba(0,217,255,0.6)]" : "h-6 w-6 border border-primary/70 bg-primary/5 shadow-[0_0_10px_rgba(0,255,157,0.35)]"}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: dotRef,
			style: { transform: "translate3d(-200px, -200px, 0)" },
			className: `pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 ${isHovering ? "h-2 w-2 bg-secondary shadow-[0_0_10px_#00d9ff]" : "h-1.5 w-1.5 bg-primary shadow-[0_0_8px_#00ff9d]"}`
		})]
	});
}
function Home() {
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		if (sessionStorage.getItem("hasPlayedBootSequence") === "true") setLoading(false);
	}, []);
	const handleDone = () => {
		sessionStorage.setItem("hasPlayedBootSequence", "true");
		setLoading(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SmoothScroll, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
			mode: "wait",
			children: loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .96
				},
				transition: {
					duration: .7,
					ease: [
						.4,
						0,
						.2,
						1
					]
				},
				className: "fixed inset-0 z-[100]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingScreen, { onDone: handleDone })
			}, "boot")
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: !loading ? 1 : 0 },
			animate: { opacity: loading ? 0 : 1 },
			transition: {
				duration: .7,
				ease: "easeOut",
				delay: loading ? 0 : .15
			},
			className: "relative min-h-screen bg-[#0a0e14] text-foreground cursor-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none fixed inset-0 z-0 grid-bg opacity-[0.25]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none fixed inset-0 z-0 scanlines opacity-60"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none fixed inset-0 z-0",
					style: { background: "radial-gradient(ellipse at 50% 0%, rgba(0,217,255,0.035), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(168,85,247,0.03), transparent 60%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
							className: "mx-auto max-w-7xl px-4 sm:px-6 py-12 pt-28 flex flex-col gap-16 md:gap-24 w-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTFWriteups, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
					]
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
