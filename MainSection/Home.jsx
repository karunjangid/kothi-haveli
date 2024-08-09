import React from 'react'
import Upnav from '../src/components/upnav/Upnav'
import Nav from '../src/components/Nav/Nav'
import Hero from '../src/components/herosec/Hero'
import Featured from '../src/components/featured/Featured'
import Video from '../src/components/videoview/Video'
import Numbers from '../src/components/number/Numvbers'
import Bestdeal from '../src/components/bestdeal/Bestdeal'
import Cardss from '../src/components/cards/Cardss'
import Contact from '../src/components/Contact/Contact'
import Copyright from '../src/components/copyright/Cpright'
function Home() {
  return( 
    <>
    <Upnav />
    <Nav />
    <Hero/>
    <Featured/>
    <Video />
    <Numbers/>
    <Bestdeal/>
    <Cardss />
    <Contact/>
    <Copyright/>
    </>
  )
}

export default Home;
