import React from 'react';
import Section from '@/components/Section';
import Section_2 from '@/components/Section_2';
import Contactus from '@/components/Contactus';
import Team from '@/components/Team';
import Menu from '@/components/Menu';
import Sentmate from '@/components/Sentmate';
import About from '@/components/About';
// components/Menu.js
import SomeModule from 'next/document'; // Correct import example

export default function home() {
  return (
    
    <div className='container'>   
    <div className='row'>
          <Section></Section>
    </div>  
    <div className=''>
      <Section_2></Section_2>
      <About id='about'></About>
</div>  
<div>
    <Menu></Menu>
</div>  
<Sentmate></Sentmate>
     <Team></Team>
    </div>
  )
}
