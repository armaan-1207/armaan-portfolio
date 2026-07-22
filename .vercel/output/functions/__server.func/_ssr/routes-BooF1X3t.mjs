import { o as __toESM } from "../_runtime.mjs";
import { a as require_react, i as require_jsx_runtime, n as useFrame, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
import { n as motion, r as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { _ as FileDown, a as Shield, b as Calendar, c as Minus, d as MapPin, f as Mail, g as FileText, h as Github, i as Terminal, l as Menu, m as GraduationCap, n as X, o as ShieldCheck, p as Linkedin, r as Users, s as Send, t as Zap, u as Maximize2, v as Download, y as Cpu } from "../_libs/lucide-react.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BooF1X3t.js
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
	const bottomRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let currentLog = 0;
		const interval = setInterval(() => {
			if (currentLog < BOOT_LOGS.length) {
				setLogs((prev) => [...prev, BOOT_LOGS[currentLog]]);
				currentLog++;
				if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
			} else {
				clearInterval(interval);
				setTimeout(() => {
					if (containerRef.current) {
						containerRef.current.style.transition = "transform 0.8s cubic-bezier(0.85, 0, 0.15, 1)";
						containerRef.current.style.transform = "translateY(-100%)";
					}
					setTimeout(onDone, 800);
				}, 500);
			}
		}, 70);
		return () => clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: containerRef,
		className: "fixed inset-0 z-[100000] flex flex-col bg-[#05080c] font-mono p-4 sm:p-8 select-none overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,157,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 w-full h-full overflow-y-auto text-sm md:text-base text-foreground/90 font-mono scrollbar-none",
			children: [
				logs.map((log, index) => {
					if (log.startsWith("[  OK  ]")) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-white",
							children: [
								"[  ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-green-500 font-bold",
									children: "OK"
								}),
								"  ]"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gray-300",
							children: log.replace("[  OK  ] ", "")
						})]
					}, index);
					if (log.startsWith("==")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-green-500 font-bold text-center sm:text-left",
						children: log
					}, index);
					if (log.includes("SYSTEM STATUS")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-green-400 font-bold text-center sm:text-left animate-pulse",
						children: log
					}, index);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-gray-300",
						children: log
					}, index);
				}),
				logs.length < BOOT_LOGS.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-1 mt-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-4 w-2.5 bg-gray-400 animate-pulse" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: bottomRef })
			]
		})]
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
function PulseSphere() {
	const meshRef = (0, import_react.useRef)(null);
	const ring1Ref = (0, import_react.useRef)(null);
	const ring2Ref = (0, import_react.useRef)(null);
	const ring3Ref = (0, import_react.useRef)(null);
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		if (meshRef.current) {
			meshRef.current.rotation.y = t * .4;
			meshRef.current.rotation.x = t * .2;
		}
		if (ring1Ref.current) {
			const s1 = t * .8 % 2.5;
			ring1Ref.current.scale.set(s1, s1, s1);
			ring1Ref.current.material.opacity = Math.max(0, 1 - s1 / 2.5);
		}
		if (ring2Ref.current) {
			const s2 = (t * .8 + .8) % 2.5;
			ring2Ref.current.scale.set(s2, s2, s2);
			ring2Ref.current.material.opacity = Math.max(0, 1 - s2 / 2.5);
		}
		if (ring3Ref.current) {
			const s3 = (t * .8 + 1.6) % 2.5;
			ring3Ref.current.scale.set(s3, s3, s3);
			ring3Ref.current.material.opacity = Math.max(0, 1 - s3 / 2.5);
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: meshRef,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [1.3, 2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#00ff9d",
				wireframe: true,
				transparent: true,
				opacity: .85
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			.7,
			32,
			32
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
			color: "#00d9ff",
			transparent: true,
			opacity: .35
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: ring1Ref,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				1.2,
				1.25,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#00ff9d",
				side: 2,
				transparent: true,
				opacity: .8
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: ring2Ref,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				1.2,
				1.25,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#00d9ff",
				side: 2,
				transparent: true,
				opacity: .8
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: ring3Ref,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				1.2,
				1.25,
				64
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#00ff9d",
				side: 2,
				transparent: true,
				opacity: .8
			})]
		})
	] });
}
function PulseNode() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[380px] w-full sm:h-[450px] lg:h-[500px]" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[380px] w-full sm:h-[450px] lg:h-[500px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
			camera: {
				position: [
					0,
					0,
					4.5
				],
				fov: 50
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .5 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulseSphere, {})]
		})
	});
}
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
function useTypedString(text, speed = 55, startDelay = 1200) {
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
	const target = "Armaan";
	const idx = text.indexOf(target);
	if (idx === -1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: text });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		text.slice(0, idx),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-primary hero-name-glitch",
			style: { textShadow: "0 0 14px rgba(0,255,157,0.85)" },
			"data-text": target,
			children: text.slice(idx, idx + 6)
		}),
		text.slice(idx + 6)
	] });
}
function renderLine2(text) {
	const idx = text.indexOf("Breaking");
	if (idx === -1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: text });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		text.slice(0, idx),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				color: "#00d9ff",
				textShadow: "0 0 8px rgba(0,217,255,0.9), 0 0 18px rgba(0,217,255,0.55)"
			},
			children: text.slice(idx, idx + 8)
		}),
		text.slice(idx + 8)
	] });
}
function Hero() {
	const { out, done } = useTyped([LINE_1, LINE_2]);
	const scrollHint = useTypedString(SCROLL_HINT, 45, 1400);
	const heroContentRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (heroContentRef.current) gsapWithCSS.fromTo(heroContentRef.current, {
			opacity: 0,
			y: 20
		}, {
			opacity: 1,
			y: 0,
			duration: .8,
			ease: "power3.out"
		});
	}, []);
	const line1Active = out[0].length < 23;
	const line2Active = !line1Active && !done;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex flex-col w-full overflow-hidden rounded-lg border border-border/80 bg-[#0a0f18]/80 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border/60 bg-surface/80 px-4 py-2 relative z-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs font-bold text-primary",
						children: "[00]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-mono text-sm tracking-tight text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground/90",
							children: "dashboard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary/80",
							children: ".exe"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-muted-foreground/50",
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
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-[1] grid-bg opacity-20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#070b10]/50 to-[#070b10]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: heroContentRef,
				className: "relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] w-full flex-col justify-center px-6 lg:px-12 py-12 lg:flex-row lg:items-center lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-6 inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3.5 py-1.5 font-mono text-xs text-primary backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,157,0.2)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, {
								size: 14,
								className: "animate-pulse"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold tracking-wide",
								children: "ROLE: DEVSECOPS & PENTESTING"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mb-4 font-mono text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl",
							children: [renderLine1(out[0]), line1Active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "animate-blink text-primary",
								children: "_"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mb-8 min-h-[2.5em] font-mono text-base text-muted-foreground sm:text-lg lg:text-xl",
							children: [renderLine2(out[1]), (line2Active || done) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "animate-blink text-primary",
								children: "_"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 overflow-hidden rounded-lg border border-border/80 bg-[#0d131f]/80 p-4 font-mono text-xs shadow-xl backdrop-blur-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between border-b border-border/60 pb-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
										size: 12,
										className: "text-primary"
									}), "armaan@kali-rice ~"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] text-primary/70",
									children: "OS: Kali Linux 2026"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-2 text-foreground/80",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-secondary",
										children: "Uptime:"
									}), " 100% active"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-secondary",
										children: "Focus:"
									}), " Web Security / CTFs"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-secondary",
										children: "Shell:"
									}), " Zsh / Bash"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-secondary",
										children: "Status:"
									}), " Open to Security Roles"] })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-4 font-mono text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#projects",
								className: "glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded border border-primary bg-primary/10 px-5 py-3 text-primary transition-all hover:bg-primary/20 hover:glow-neon",
								"data-text": "View Projects",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative z-[2]",
									children: "View Projects"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/Resume.pdf",
								download: true,
								className: "glitch-btn scan-btn group relative inline-flex items-center gap-2 rounded border border-secondary bg-secondary/5 px-5 py-3 text-secondary transition-all hover:bg-secondary/15 hover:glow-cyan",
								"data-text": "Download Resume",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
									className: "social-icon text-muted-foreground hover:text-primary transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 20 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://linkedin.com/in/armaanmalhotra12/",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "LinkedIn",
									className: "social-icon text-muted-foreground hover:text-secondary transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size: 20 })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "mailto:amalhotra1be25@thapar.edu",
									"aria-label": "Email",
									className: "social-icon text-muted-foreground hover:text-primary transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 20 })
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex-1 lg:mt-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-2xl border border-primary/20 bg-card/40 p-2 shadow-[0_0_40px_rgba(0,255,157,0.08)] backdrop-blur-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-border/40 bg-surface/60 px-4 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/80" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-muted-foreground",
								children: "core_pulse_visualizer.3js"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PulseNode, {})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] text-muted-foreground",
				children: [scrollHint, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-blink text-primary",
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
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-10% 0px"
		},
		transition: {
			duration: .6,
			ease: "easeOut"
		},
		className: "relative flex flex-col scroll-mt-24 rounded-lg border border-border/80 bg-[#0a0f18]/80 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border/60 bg-surface/80 px-4 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs font-bold text-primary",
					children: [
						"[",
						index,
						"]"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-mono text-sm tracking-tight text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground/90",
						children: head
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary/80",
						children: tail
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-muted-foreground/50",
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
			className: "p-6 md:p-8",
			children
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "about",
		index: "01",
		title: "about.md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-5 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-3 space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-10% 0px"
						},
						transition: {
							duration: .6,
							ease: "easeOut"
						},
						className: "overflow-hidden rounded-lg border border-border bg-card/60 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 border-b border-border bg-surface/60 px-4 py-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-3 font-mono text-xs text-muted-foreground",
									children: "~/about.md"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 font-mono",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-3 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary/80",
									children: "$ "
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground/70",
									children: "cat about.md"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-l-2 border-primary/30 pl-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-sans text-sm leading-[1.85] text-muted-foreground",
									children: [
										"Engineering undergraduate building a foundation in cybersecurity through",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-medium",
											children: "self-directed, hands-on training"
										}),
										" and CTFs. Learning",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-medium",
											children: "web application security"
										}),
										",",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-medium",
											children: "network forensics"
										}),
										", and",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-primary font-medium",
											children: "Linux-based security tooling"
										}),
										" via structured platforms like",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-secondary",
											children: "TryHackMe"
										}),
										",",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-secondary",
											children: "PortSwigger Web Security Academy"
										}),
										", and",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-secondary",
											children: "OverTheWire"
										}),
										", with growing hands-on exposure to",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-secondary",
											children: "Burp Suite"
										}),
										",",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-secondary",
											children: "Wireshark"
										}),
										", and",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-secondary",
											children: "Metasploit"
										}),
										"."
									]
								})
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-10% 0px"
						},
						transition: {
							duration: .6,
							delay: .15,
							ease: "easeOut"
						},
						className: "rounded-lg border border-secondary/25 bg-card/60 p-5 transition-all hover:border-secondary/50 hover:shadow-[0_0_24px_rgba(0,217,255,0.07)] backdrop-blur-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded border border-secondary/30 bg-secondary/10 text-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 20 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[10px] uppercase tracking-[0.15em] text-secondary/70 mb-1",
										children: "education"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-sm font-semibold text-foreground leading-snug",
										children: "Thapar Institute of Engineering & Technology"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-xs text-muted-foreground",
										children: "B.E. Electronics and Computer Engineering"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2.5 flex flex-wrap items-center gap-3 font-mono text-[10px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
												size: 10,
												className: "text-primary"
											}), " Aug 2025 – Present"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
												size: 10,
												className: "text-secondary"
											}), " Patiala, India"]
										})]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-10% 0px"
						},
						transition: {
							duration: .6,
							delay: .25,
							ease: "easeOut"
						},
						className: "flex flex-wrap gap-2",
						children: [
							"Web AppSec",
							"Network Forensics",
							"Linux Security",
							"CTF Enthusiast",
							"Red Team Learner"
						].map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1 font-mono text-[10px] text-primary/80 transition-colors hover:bg-primary/20",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { size: 9 }),
								" ",
								tag
							]
						}, tag))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .85
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: {
					once: true,
					margin: "-10% 0px"
				},
				transition: {
					duration: .7,
					delay: .2,
					ease: "easeOut"
				},
				className: "md:col-span-2 flex justify-center items-center pt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative hex-glow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							width: "228",
							height: "264",
							viewBox: "0 0 228 264",
							className: "absolute inset-0 w-full h-full pointer-events-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "hexStrokeGrad",
									x1: "0%",
									y1: "0%",
									x2: "100%",
									y2: "100%",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "0%",
											stopColor: "#00ff9d",
											stopOpacity: "0.9"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "50%",
											stopColor: "#00d9ff",
											stopOpacity: "0.75"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
											offset: "100%",
											stopColor: "#00ff9d",
											stopOpacity: "0.9"
										})
									]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
									points: "114,6 220,63 220,201 114,258 8,201 8,63",
									fill: "none",
									stroke: "url(#hexStrokeGrad)",
									strokeWidth: "1.5",
									strokeDasharray: "6 3",
									opacity: "0.7"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
									points: "114,14 212,68 212,196 114,250 16,196 16,68",
									fill: "rgba(0,255,157,0.03)",
									stroke: "rgba(0,255,157,0.18)",
									strokeWidth: "0.8"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative z-10 flex items-center justify-center bg-card/85 backdrop-blur-sm",
							style: {
								width: 214,
								height: 248,
								clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center gap-2 select-none",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-6xl font-extrabold text-gradient-neon hero-name-glitch",
										style: { letterSpacing: "-0.04em" },
										children: "AM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground",
										children: "armaan.malhotra"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex gap-1.5 mt-1",
										children: [
											0,
											.5,
											1
										].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-1 w-1 rounded-full bg-primary animate-pulse",
											style: { animationDelay: `${d}s` }
										}, d))
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -bottom-3 -right-7 rounded border border-primary/35 bg-[#0a0e14]/90 px-2.5 py-1 font-mono text-[9px] text-primary backdrop-blur-sm shadow-[0_0_10px_rgba(0,255,157,0.2)]",
							children: "CTF_PLAYER"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-3 -left-7 rounded border border-secondary/35 bg-[#0a0e14]/90 px-2.5 py-1 font-mono text-[9px] text-secondary backdrop-blur-sm shadow-[0_0_10px_rgba(0,217,255,0.2)]",
							children: "SEC_LEARNER"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-1/2 -right-10 -translate-y-1/2 rounded border border-primary/20 bg-[#0a0e14]/90 px-2 py-0.5 font-mono text-[9px] text-primary/60 backdrop-blur-sm",
							children: "root@kali"
						})
					]
				})
			})]
		})
	});
}
var CMD = "$ cat skills.txt";
var LINES = [
	{
		type: "gap",
		text: ""
	},
	{
		type: "header",
		text: "[Languages]:"
	},
	{
		type: "item",
		text: "C"
	},
	{
		type: "item",
		text: "SQL"
	},
	{
		type: "gap",
		text: ""
	},
	{
		type: "header",
		text: "[Security Tools]:"
	},
	{
		type: "item",
		text: "Kali Linux"
	},
	{
		type: "item",
		text: "Burp Suite"
	},
	{
		type: "item",
		text: "Wireshark"
	},
	{
		type: "item",
		text: "Nmap"
	},
	{
		type: "item",
		text: "Metasploit"
	},
	{
		type: "item",
		text: "Nessus"
	},
	{
		type: "item",
		text: "Searchsploit"
	},
	{
		type: "item",
		text: "Ghidra"
	},
	{
		type: "item",
		text: "CyberChef"
	},
	{
		type: "item",
		text: "Steghide"
	},
	{
		type: "item",
		text: "John the Ripper"
	},
	{
		type: "item",
		text: "Cisco Packet Tracer"
	},
	{
		type: "gap",
		text: ""
	},
	{
		type: "header",
		text: "[Developer Tools]:"
	},
	{
		type: "item",
		text: "Git"
	},
	{
		type: "item",
		text: "GitHub"
	},
	{
		type: "item",
		text: "Docker"
	},
	{
		type: "item",
		text: "VS Code"
	},
	{
		type: "item",
		text: "Figma"
	},
	{
		type: "item",
		text: "Canva"
	},
	{
		type: "gap",
		text: ""
	},
	{
		type: "header",
		text: "[Concepts]:"
	},
	{
		type: "item",
		text: "Network Security, TCP/IP, DNS Resolution, Subnetting"
	},
	{
		type: "item",
		text: "Routing & Switching, Vulnerability Assessment"
	},
	{
		type: "item",
		text: "Web Application Security, OWASP Top 10, SQL Injection"
	},
	{
		type: "item",
		text: "WAF Bypass, Out-of-Band Exfiltration, SSTI, AES-ECB"
	},
	{
		type: "item",
		text: "Steganography, PCAP Analysis, Digital/Disk Forensics"
	},
	{
		type: "item",
		text: "XOR Cryptanalysis, Linux Privilege Escalation"
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
	const [visibleLines, setVisibleLines] = (0, import_react.useState)(0);
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
				setTimeout(() => setPhase("content"), 340);
			}
		}, 36);
		return () => clearInterval(id);
	}, [phase]);
	(0, import_react.useEffect)(() => {
		if (phase !== "content") return;
		let l = 0;
		const id = setInterval(() => {
			l += 1;
			setVisibleLines(l);
			if (l >= LINES.length) {
				clearInterval(id);
				setPhase("done");
			}
		}, 45);
		return () => clearInterval(id);
	}, [phase]);
	const renderLine = (ln, i) => {
		if (ln.type === "gap") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2" }, i);
		if (ln.type === "header") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-semibold text-secondary",
			children: ln.text
		}, i);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "pl-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary/60 mr-1.5 select-none",
				children: "›"
			}), ln.text]
		}, i);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "skills",
		index: "02",
		title: "skills.arsenal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: termRef,
			className: "mx-auto max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-hidden rounded-lg border border-border bg-card/60 shadow-[0_0_50px_rgba(0,255,157,0.04)] backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 border-b border-border bg-surface/60 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-3 font-mono text-xs text-muted-foreground",
							children: "skills.txt — bash"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-[420px] p-5 font-mono text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary/70 select-none",
									children: "$"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "ml-1 text-foreground/90",
									children: CMD.slice(0, cmdChars)
								}),
								phase === "cmd" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "term-cursor" })
							]
						}),
						(phase === "content" || phase === "done") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 space-y-0.5",
							children: LINES.slice(0, visibleLines).map((ln, i) => renderLine(ln, i))
						}),
						phase === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary/70 select-none",
								children: "$"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "term-cursor" })
							})]
						})
					]
				})]
			})
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
			className: "grid gap-6 md:grid-cols-2",
			children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-10% 0px"
				},
				transition: {
					duration: .6,
					delay: i * .15,
					ease: "easeOut"
				},
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "tilt-card-inner h-full overflow-hidden rounded-lg border border-border bg-card/60 transition-all hover:border-primary/55 hover:shadow-[0_0_36px_rgba(0,255,157,0.12)] backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 border-b border-border bg-surface/55 px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ml-3 flex min-w-0 flex-1 items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
										size: 12,
										className: "shrink-0 text-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "truncate font-mono text-xs text-muted-foreground",
										children: ["~/", p.name.toLowerCase().replace(/\s/g, "-")]
									})]
								}),
								p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 rounded-full border border-secondary/40 bg-secondary/10 px-2 py-0.5 font-mono text-[10px] text-secondary shadow-[0_0_8px_rgba(0,217,255,0.2)]",
									children: "featured"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: p.github,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": `${p.name} on GitHub`,
									className: "ml-1 shrink-0 text-muted-foreground transition-colors hover:text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size: 14 })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-4 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-mono text-xl font-bold text-foreground transition-colors",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 font-mono text-xs text-primary/70",
									children: p.subtitle
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-[1.8] text-muted-foreground",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-3",
									children: p.meta.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, {
											size: 9,
											className: "text-secondary"
										}), m]
									}, m))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-auto flex flex-wrap gap-1.5",
									children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded border border-border bg-surface/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary hover:bg-primary/10",
										children: t
									}, t))
								})
							]
						})]
					})
				})
			}, p.name))
		})
	});
}
var FILTERS = [
	{
		label: "All",
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
	easy: "text-[#28c840] border-[#28c840]/40 bg-[#28c840]/8",
	medium: "text-[#ffbd2e] border-[#ffbd2e]/40 bg-[#ffbd2e]/8",
	hard: "text-destructive border-destructive/40 bg-destructive/8"
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
			className: "mb-8 flex flex-wrap gap-2",
			children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				id: `ctf-filter-${f.value}`,
				onClick: () => setActive(f.value),
				className: `rounded border px-3.5 py-1.5 font-mono text-xs transition-all ${active === f.value ? "border-primary bg-primary/15 text-primary shadow-[0_0_14px_rgba(0,255,157,0.22)]" : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"}`,
				children: [f.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 opacity-50",
					children: filterCount(f.value)
				})]
			}, f.value))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				children: visible.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					layout: true,
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .95
					},
					transition: {
						duration: .42,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: i * .06
					},
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "tilt-card-inner flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card/60 transition-all hover:border-primary/45 hover:shadow-[0_0_28px_rgba(0,255,157,0.09)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 border-b border-border bg-surface/55 px-4 py-2.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#ff5f57]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#ffbd2e]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#28c840]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "ml-2 flex min-w-0 flex-1 items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
											size: 10,
											className: "shrink-0 text-primary"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "truncate font-mono text-[10px] text-muted-foreground",
											children: ["cruxhunt/", w.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `shrink-0 rounded border px-1.5 py-0.5 font-mono text-[9px] uppercase ${diffStyle[w.diff]}`,
										children: w.diff
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col gap-3 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-mono text-sm font-bold leading-snug text-foreground",
											children: w.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
											size: 13,
											className: "mt-0.5 shrink-0 text-primary/50"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 font-mono text-[10px] text-secondary/70",
										children: w.displayCat
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "flex-1 text-xs leading-[1.75] text-muted-foreground",
										children: w.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: w.pdf,
										target: "_blank",
										rel: "noreferrer",
										className: "mt-auto flex items-center justify-center gap-2 rounded border border-primary/30 bg-primary/5 px-3 py-2 font-mono text-[11px] text-primary transition-all hover:border-primary/60 hover:bg-primary/15 hover:glow-neon",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { size: 12 }), "Download Writeup (PDF)"]
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
		org: "Independent",
		period: "June 2026 – Present",
		accent: "primary",
		bullets: [
			"160+ hours of structured practice: completed TryHackMe rooms (DNS in Detail, HTTP in Detail, Linux Fundamentals, Linux Strength Training, Bash Scripting).",
			"Cracked hashes with John the Ripper; cleared 10 levels of OverTheWire's Bandit wargame.",
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
			"Exploited OWASP Juice Shop locally for hands-on web vulnerability practice."
		]
	},
	{
		Icon: Cpu,
		role: "Core Member",
		org: "Linux User Group, TIET",
		period: "Oct 2025 – Present",
		accent: "primary",
		bullets: ["Participated in Linux and open-source workshops focused on CLI tooling and system administration initiatives."]
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
			children: ACTIVITIES.map((a, i) => {
				const isPrimary = a.accent === "primary";
				const isLast = i === ACTIVITIES.length - 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5 md:gap-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: `relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border ${isPrimary ? "border-primary/55 bg-primary/10 text-primary" : "border-secondary/55 bg-secondary/10 text-secondary"}`,
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
							style: { boxShadow: isPrimary ? "0 0 14px rgba(0,255,157,0.25)" : "0 0 14px rgba(0,217,255,0.25)" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `node-ping absolute inset-0 rounded-full ${isPrimary ? "border border-primary/40" : "border border-secondary/40"}`,
								style: { animationDelay: `${i * .7}s` }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.Icon, { size: 15 })]
						}), !isLast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: `mt-1 w-px flex-1 min-h-[2rem] ${isPrimary ? "bg-gradient-to-b from-primary/40 to-secondary/20" : "bg-gradient-to-b from-secondary/40 to-primary/20"}`,
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
						className: `flex-1 min-w-0 ${isLast ? "pb-0" : "pb-10"}`,
						initial: {
							opacity: 0,
							x: -22
						},
						animate: inView ? {
							opacity: 1,
							x: 0
						} : {},
						transition: {
							duration: .6,
							ease: [
								.22,
								1,
								.36,
								1
							],
							delay: .25 + i * .22
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-lg border bg-card/60 p-5 transition-all hover:bg-card ${isPrimary ? "border-border hover:border-primary/30" : "border-border hover:border-secondary/30"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-foreground",
									children: a.role
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `font-mono text-sm ${isPrimary ? "text-primary" : "text-secondary"}`,
									children: ["@ ", a.org]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${isPrimary ? "border-primary/25 bg-primary/5 text-primary/80" : "border-secondary/25 bg-secondary/5 text-secondary/80"}`,
									children: a.period
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1.5",
								children: a.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-2 h-1 w-1 shrink-0 rounded-full ${isPrimary ? "bg-primary" : "bg-secondary"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
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
		label: "github",
		value: "github.com/armaan-1207",
		href: "https://github.com/armaan-1207",
		accent: "primary"
	},
	{
		Icon: Linkedin,
		label: "linkedin",
		value: "armaanmalhotra12",
		href: "https://linkedin.com/in/armaanmalhotra12/",
		accent: "secondary"
	},
	{
		Icon: Mail,
		label: "email",
		value: "amalhotra1be25@thapar.edu",
		href: "mailto:amalhotra1be25@thapar.edu",
		accent: "primary"
	}
];
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const [sending, setSending] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setSending(true);
		setError(null);
		setTimeout(() => {
			setSending(false);
			setSent(true);
		}, 700);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "contact",
		index: "07",
		title: "contact.init()",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "mb-12 text-center",
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .65,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
								size: 60,
								className: "text-primary",
								style: { filter: "drop-shadow(0 0 18px rgba(0,255,157,0.65))" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -right-0.5 -top-0.5 h-3 w-3 animate-pulse rounded-full bg-primary shadow-[0_0_8px_#00ff9d]" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "text-4xl font-bold tracking-tight text-foreground sm:text-5xl",
						children: [
							"Let's",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-secondary",
								style: { textShadow: "0 0 18px rgba(0,217,255,0.75), 0 0 40px rgba(0,217,255,0.3)" },
								children: "connect"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-lg text-muted-foreground",
						children: "Open to cybersecurity collaborations, CTF teams, mentorship, or just a good conversation about security research. Reach out below."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						x: -28
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: .1
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-lg border border-border bg-card/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 border-b border-border bg-surface/55 px-4 py-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ml-3 flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
										size: 11,
										className: "text-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-xs text-muted-foreground",
										children: "send_message.sh"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-5",
							children: !sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-4 font-mono text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1 block text-xs text-primary/70",
										children: "$ name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "contact-name",
										type: "text",
										required: true,
										value: form.name,
										onChange: (e) => setForm({
											...form,
											name: e.target.value
										}),
										placeholder: "your_name",
										className: "term-input w-full rounded border border-border bg-surface/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/35 transition-all"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1 block text-xs text-primary/70",
										children: "$ email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "contact-email",
										type: "email",
										required: true,
										value: form.email,
										onChange: (e) => setForm({
											...form,
											email: e.target.value
										}),
										placeholder: "you@domain.com",
										className: "term-input w-full rounded border border-border bg-surface/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/35 transition-all"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "mb-1 block text-xs text-primary/70",
										children: "$ message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "contact-message",
										required: true,
										rows: 4,
										value: form.message,
										onChange: (e) => setForm({
											...form,
											message: e.target.value
										}),
										placeholder: "your message here...",
										className: "term-input w-full resize-none rounded border border-border bg-surface/40 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/35 transition-all"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										id: "contact-submit",
										disabled: sending,
										className: "group flex w-full items-center justify-center gap-2 rounded border border-primary bg-primary/10 px-4 py-2.5 text-sm text-primary transition-all hover:bg-primary/20 hover:glow-neon disabled:opacity-60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
											size: 14,
											className: "transition-transform group-hover:translate-x-0.5"
										}), sending ? "sending..." : "./send_message"]
									}),
									error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-xs text-destructive border-l-2 border-destructive pl-2 py-1 bg-destructive/10 rounded",
										children: error
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "py-10 text-center font-mono",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-3xl text-primary",
										style: { textShadow: "0 0 16px rgba(0,255,157,0.8)" },
										children: "✓"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-primary",
										children: "Message sent successfully."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground",
										children: "I'll get back to you soon."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-5 text-[10px] text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary/60",
												children: "$"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "exit 0"
											})
										]
									})
								]
							})
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					className: "space-y-4",
					initial: {
						opacity: 0,
						x: 28
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: { once: true },
					transition: {
						duration: .6,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: .18
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary/80",
								children: "$"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground/60",
								children: "ls --links"
							})
						]
					}), SOCIALS.map(({ Icon, label, value, href, accent }) => {
						const isPrimary = accent === "primary";
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href,
							id: `social-${label}`,
							target: href.startsWith("http") ? "_blank" : void 0,
							rel: href.startsWith("http") ? "noreferrer" : void 0,
							className: `flex items-center gap-4 rounded-lg border bg-card/60 p-4 transition-all hover:bg-card ${isPrimary ? "border-border hover:border-primary/50 hover:shadow-[0_0_18px_rgba(0,255,157,0.08)]" : "border-border hover:border-secondary/50 hover:shadow-[0_0_18px_rgba(0,217,255,0.08)]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid h-10 w-10 shrink-0 place-items-center rounded border ${isPrimary ? "border-primary/30 bg-primary/10 text-primary" : "border-secondary/30 bg-secondary/10 text-secondary"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 18 })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground",
									children: label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `truncate font-mono text-sm ${isPrimary ? "text-primary" : "text-secondary"}`,
									children: value
								})]
							})]
						}, label);
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
				className: "flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground",
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
					" ",
					"— built with React, Spline & Framer Motion"
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
	const [time, setTime] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setTime(/* @__PURE__ */ new Date()), 1e3);
		return () => clearInterval(id);
	}, []);
	const hh = time.getHours().toString().padStart(2, "0");
	const mm = time.getMinutes().toString().padStart(2, "0");
	const ss = time.getSeconds().toString().padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed bottom-4 right-4 z-40 hidden items-center gap-2 rounded border border-primary/25 bg-[#0a0e14]/70 px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted-foreground backdrop-blur-md sm:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_#00ff9d] animate-pulse" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary/80",
				children: "SYSTEM:"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground/80",
				children: "ONLINE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-border",
				children: "|"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "tabular-nums text-foreground/80",
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
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setIsVisible(true);
		const cursor = cursorRef.current;
		const dot = dotRef.current;
		const onMouseMove = (e) => {
			gsapWithCSS.to(dot, {
				x: e.clientX,
				y: e.clientY,
				duration: .05,
				ease: "power2.out"
			});
			gsapWithCSS.to(cursor, {
				x: e.clientX,
				y: e.clientY,
				duration: .35,
				ease: "power3.out"
			});
		};
		const onMouseDown = () => {
			gsapWithCSS.to(cursor, {
				scale: .6,
				duration: .15
			});
			gsapWithCSS.to(dot, {
				scale: 1.8,
				duration: .15
			});
		};
		const onMouseUp = () => {
			gsapWithCSS.to(cursor, {
				scale: 1,
				duration: .15
			});
			gsapWithCSS.to(dot, {
				scale: 1,
				duration: .15
			});
		};
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mousedown", onMouseDown);
		window.addEventListener("mouseup", onMouseUp);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mousedown", onMouseDown);
			window.removeEventListener("mouseup", onMouseUp);
		};
	}, []);
	if (!isVisible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-[999999] overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: cursorRef,
			className: "pointer-events-none absolute top-0 left-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/80 bg-primary/10 shadow-[0_0_15px_rgba(0,255,157,0.5)] backdrop-blur-[1px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 left-0 h-[1px] w-1.5 -translate-y-1/2 bg-primary/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-1/2 right-0 h-[1px] w-1.5 -translate-y-1/2 bg-primary/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 h-1.5 w-[1px] -translate-x-1/2 bg-primary/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 left-1/2 h-1.5 w-[1px] -translate-x-1/2 bg-primary/80" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: dotRef,
			className: "pointer-events-none absolute top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_#00ff9d]"
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
					style: { background: "radial-gradient(ellipse at 50% 0%, rgba(0,255,157,0.06), transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(0,217,255,0.05), transparent 60%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
							className: "mx-auto max-w-[1600px] p-4 lg:p-6 flex flex-col lg:grid lg:grid-cols-12 gap-6 pt-24",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTFWriteups, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
								})
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
