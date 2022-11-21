import { markups } from "./services/contentMarkups.js"



export default function servicesPage() {
  const param = location.search
  const paramId = param.slice(-1)
  const servicesContent = document?.querySelector('.services__content')
  const servicesSidebar = document?.querySelector('.services__sidebar')

  servicesContent.innerHTML = markups[Number(paramId) - 1]
}
