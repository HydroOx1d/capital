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
if(servicePage.$serviceArrowBack !== null) {
  servicePage.$serviceArrowBack.onclick = () => servicePage.closeContentMenu()
}