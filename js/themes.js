export default function Theme({
  themeLight,
  themeDark,
  body
}) {

  function themeToggle() {
    themeLight.classList.toggle('hide')
    themeDark.classList.toggle('hide')
    body.classList.toggle('lightMode')
    body.classList.toggle('darkMode')
  }
  return {
    themeToggle
  }
}

