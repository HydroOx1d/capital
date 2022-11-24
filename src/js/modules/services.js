import { markups } from "./services/contentMarkups.js"

export class Service {
  constructor() {
    this.paramId = location.search.slice(-1)
    this.$serviceContent = document?.querySelector('.services__content')
    this.$serviceSidebar = document?.querySelector('.services__sidebar')
    this.$serviceArrowBack = document?.querySelector('.services__arrow-back')
  }

  closeContentMenu() {
    this.$serviceContent.style.display = 'none'
    this.$serviceContent.classList.remove('_is-active')
    this.$serviceSidebar.classList.remove('_is-disable',)
    this.$serviceArrowBack.classList.add('d-none')
  }

  render() {
    if(!this.$serviceContent) return;
    this.$serviceContent.innerHTML = markups[Number(this.paramId) - 1]
  }
}