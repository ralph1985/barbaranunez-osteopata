import * as anime from "animejs";

import { initHeroAnimation } from "./hero-animation.js";
import { initRevealAnimations } from "./reveal-animations.js";
import { initRightMenu } from "./right-menu.js";

initRightMenu();
initHeroAnimation({ anime });
initRevealAnimations({ anime });
