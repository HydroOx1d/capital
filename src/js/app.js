import * as flsFunctions from './modules/functions.js';
import slider from './modules/partners.js';
import {Service} from './modules/services.js'
;
flsFunctions.isWebp()

try {
  slider()
} catch(e) {}


const servicePage = new Service()
servicePage.render()
servicePage.$serviceArrowBack.onclick = () => servicePage.closeContentMenu()