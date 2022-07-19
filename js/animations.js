import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ duration: 1 });

gsap.from('.summary', {
  opacity: 0,
  y: 20,
});
