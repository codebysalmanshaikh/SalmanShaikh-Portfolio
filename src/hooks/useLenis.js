import { useEffect } from "react";
import Lenis from "lenis";

export default function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            autoRaf: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);
}