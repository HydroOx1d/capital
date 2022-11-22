import * as flsFunctions from './modules/functions.js';
import slider from './modules/partners.js';
import servicesPage from './modules/services.js'
;
flsFunctions.isWebp()

try {
  slider()
} catch(e) {}

try {
  servicesPage()
} catch(e){}