import Theme from "./themes.js"
import Timer from "./timer.js"
import Events from "./events.js"
import {} from "./sounds.js"

import{
  body,
  themeLight,
  themeDark,
} from "./variables.js"

const timer = Timer()

const theme = Theme({
  themeLight,
  themeDark,
  body
})

const sounds = {}

const events = Events({
  theme,
})

timer.startAplication()








