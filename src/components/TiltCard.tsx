import { useRef, useState, type ReactNode, type MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

/**
 * 3-D perspective tilt card — cursor-tracked rotateX/rotateY with smooth
 * spring-back on mouse-leave.  Wraps any children; apply layout/size on
 * the className prop (it forwards directly to the outer div).
 */
export function TiltCard({ children, className = "", maxTilt = 13 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 … +0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    setStyle({
      transform: `perspective(900px) rotateY(${x * maxTilt * 2}deg) rotateX(${-y * maxTilt * 2}deg) scale3d(1.025,1.025,1.025)`,
      transition: "transform 0.07s linear",
      willChange: "transform",
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)",
      transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
    });
  };

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
}
