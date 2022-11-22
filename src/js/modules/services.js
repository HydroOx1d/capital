import { markups } from "./services/contentMarkups.js"

export default function servicesPage() {
  const param = location.search
  const paramId = param.slice(-1)
  const servicesContent = document?.querySelector('.services__content')
  const servicesSidebar = document?.querySelector('.services__sidebar')
  const servicesArrowBack = document?.querySelector('.services__arrow-back')

  servicesArrowBack.onclick  = () => {
    servicesContent.style.display = 'none'
    servicesContent.classList.remove('_is-active')
    servicesSidebar.classList.remove('_is-disable',)
    servicesArrowBack.classList.add('d-none')
  }

  servicesContent.innerHTML = markups[Number(paramId) - 1]
}
