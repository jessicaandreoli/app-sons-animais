import { 
  buttonPressAudio,
  playSound,
  soundBird,
  soundGiraffe,
  soundMonkey,
  soundOwl,
  soundLion,
  soundBear,
  soundDuck,
  soundElephant,
  soundFrog,
  soundHorse,
  soundCow,
  soundSnake,
  soundSheep,
  soundPig,
  soundHipoppotamus,
  soundZebra
} from "./sounds.js"

import{
  themeLight,
  themeDark,
  imgBird,
  imgGiraffe,
  imgMonkey,
  imgOwl,
  imgZebra,
  imgLion,
  imgBear,
  imgDuck,
  imgElephant,
  imgFrog,
  imgHorse,
  imgHipoppotamus,
  imgCow,
  imgSnake,
  imgSheep,
  imgPig
} from "./variables.js"

export default function Events({
  theme,
}) {
  themeLight.addEventListener('click',function(){
    theme.themeToggle()
    playSound(buttonPressAudio)
  })

  themeDark.addEventListener('click',function(){
    theme.themeToggle()
    playSound(buttonPressAudio)
  })

  imgBird.addEventListener('click', function() {
    playSound(soundBird)
  })

  imgGiraffe.addEventListener('click', function() {
    playSound(soundGiraffe)
  })

  imgMonkey.addEventListener('click', function() {
    playSound(soundMonkey)
  })

  imgOwl.addEventListener('click', function() {
    playSound(soundOwl)
  })

  imgZebra.addEventListener('click', function() {
    playSound(soundZebra)
  })

  imgLion.addEventListener('click', function() {
    playSound(soundLion)
  })

  imgBear.addEventListener('click', function() {
    playSound(soundBear)
  })

  imgDuck.addEventListener('click', function() {
    playSound(soundDuck)
  })

  imgElephant.addEventListener('click', function() {
    playSound(soundElephant)
  })

  imgFrog.addEventListener('click', function() {
    playSound(soundFrog)
  })

  imgHorse.addEventListener('click', function() {
    playSound(soundHorse)
  })

  imgHipoppotamus.addEventListener('click', function() {
    playSound(soundHipoppotamus)
  })

  imgCow.addEventListener('click', function() {
    playSound(soundCow)
  })

  imgSnake.addEventListener('click', function() {
    playSound(soundSnake)
  })

  imgSheep.addEventListener('click', function() {
    playSound(soundSheep)
  })

  imgPig.addEventListener('click', function() {
    playSound(soundPig)
  })

}


