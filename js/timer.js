import{body, themeDark} from "./variables.js"

export default function Timer() {

  function startAplication() {
    body.classList.add('lightMode')
    themeDark.classList.add('hide')
  }

  return {
    startAplication
  }
}