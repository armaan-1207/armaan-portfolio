import { o as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, i as MathUtils, n as useFrame, o as require_react, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PulseNode-GUL5nMJP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GyroCoreSphere() {
	const masterGroupRef = (0, import_react.useRef)(null);
	const coreRef = (0, import_react.useRef)(null);
	const innerSolidRef = (0, import_react.useRef)(null);
	const gyroRing1Ref = (0, import_react.useRef)(null);
	const gyroRing2Ref = (0, import_react.useRef)(null);
	const gyroRing3Ref = (0, import_react.useRef)(null);
	const particlesRef = (0, import_react.useRef)(null);
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		if (masterGroupRef.current) {
			const targetX = state.pointer.y * .48;
			const targetY = state.pointer.x * .65;
			masterGroupRef.current.rotation.x = MathUtils.lerp(masterGroupRef.current.rotation.x, targetX, .06);
			masterGroupRef.current.rotation.y = MathUtils.lerp(masterGroupRef.current.rotation.y, targetY, .06);
		}
		if (coreRef.current) {
			coreRef.current.rotation.y = t * .35;
			coreRef.current.rotation.x = t * .22;
			const pulse = 1 + Math.sin(t * 2.4) * .065 + Math.cos(t * 4.8) * .025;
			coreRef.current.scale.set(pulse, pulse, pulse);
		}
		if (innerSolidRef.current) {
			innerSolidRef.current.rotation.y = -t * .45;
			innerSolidRef.current.rotation.z = t * .15;
			const innerPulse = 1 + Math.cos(t * 3.1) * .05;
			innerSolidRef.current.scale.set(innerPulse, innerPulse, innerPulse);
		}
		if (gyroRing1Ref.current) {
			gyroRing1Ref.current.rotation.z = t * .45;
			gyroRing1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * .8) * .35;
			gyroRing1Ref.current.rotation.y = Math.cos(t * .6) * .25;
		}
		if (gyroRing2Ref.current) {
			gyroRing2Ref.current.rotation.z = -t * .55;
			gyroRing2Ref.current.rotation.y = -Math.PI / 4 + Math.cos(t * .9) * .35;
			gyroRing2Ref.current.rotation.x = Math.sin(t * .7) * .3;
		}
		if (gyroRing3Ref.current) {
			gyroRing3Ref.current.rotation.x = t * .6;
			gyroRing3Ref.current.rotation.y = Math.PI / 2 + Math.sin(t * 1.1) * .25;
			gyroRing3Ref.current.rotation.z = -t * .35;
		}
		if (particlesRef.current) {
			particlesRef.current.rotation.y = t * .08;
			particlesRef.current.rotation.z = Math.sin(t * .3) * .1;
			const particlePositions = particlesRef.current.geometry.attributes.position.array;
			for (let i = 0; i < particlePositions.length; i += 3) {
				const origR = 1.4 + i / 3 % 18 * .08;
				const wave = Math.sin(t * 1.8 + i) * .045;
				const currentR = Math.sqrt(particlePositions[i] * particlePositions[i] + particlePositions[i + 1] * particlePositions[i + 1] + particlePositions[i + 2] * particlePositions[i + 2]);
				if (currentR > .1) {
					const factor = (origR + wave) / currentR;
					particlePositions[i] *= factor;
					particlePositions[i + 1] *= factor;
					particlePositions[i + 2] *= factor;
				}
			}
			particlesRef.current.geometry.attributes.position.needsUpdate = true;
		}
	});
	const particleCount = 200;
	const positions = new Float32Array(particleCount * 3);
	for (let i = 0; i < particleCount * 3; i += 3) {
		const r = 1.45 + Math.random() * 1.65;
		const theta = Math.random() * Math.PI * 2;
		const phi = Math.acos(2 * Math.random() - 1);
		positions[i] = r * Math.sin(phi) * Math.cos(theta);
		positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
		positions[i + 2] = r * Math.cos(phi);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: masterGroupRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: coreRef,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [1.25, 2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#00ff9d",
					wireframe: true,
					transparent: true,
					opacity: .88
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: innerSolidRef,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.72,
					32,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#00d9ff",
					wireframe: false,
					transparent: true,
					opacity: .38
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: gyroRing1Ref,
				rotation: [
					Math.PI / 3,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					1.55,
					.012,
					16,
					100
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#00ff9d",
					transparent: true,
					opacity: .85
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: gyroRing2Ref,
				rotation: [
					-Math.PI / 4,
					Math.PI / 6,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					1.78,
					.015,
					16,
					100
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#00d9ff",
					transparent: true,
					opacity: .8
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: gyroRing3Ref,
				rotation: [
					0,
					Math.PI / 2,
					Math.PI / 4
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					2.02,
					.01,
					16,
					100
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#a855f7",
					transparent: true,
					opacity: .7
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
				ref: particlesRef,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
					attach: "attributes-position",
					args: [positions, 3]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
					size: .042,
					color: "#00d9ff",
					transparent: true,
					opacity: .8,
					sizeAttenuation: true
				})]
			})
		]
	});
}
function PulseNode() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setMounted(true), []);
	if (!mounted) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[400px] sm:h-[480px] lg:h-[540px] w-full" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative h-[400px] sm:h-[480px] lg:h-[540px] w-full [mask-image:radial-gradient(circle_at_center,black_62%,transparent_100%)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
			camera: {
				position: [
					0,
					0,
					6.4
				],
				fov: 46
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", { intensity: .65 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GyroCoreSphere, {})]
		})
	});
}
//#endregion
export { PulseNode };
