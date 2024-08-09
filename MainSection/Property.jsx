import React from 'react'
import Homeprop from '../src/component-property/Home-Prop/Homepr'
import Propcards from '../src/component-property/Cards/Propcardss'
import Secpropcards from "../src/component-property/Sec-Cards/Secpropcards"
import Thirdpropcard from "../src/component-property/third-cards/Thirdcard"
import { BrowserRouter,Route,Router } from 'react-router-dom'
function Property(){
  return (
    <>
    <Homeprop />
    <Propcards />
    <Secpropcards />
    <Thirdpropcard />
    </>
  )
}

export default Property