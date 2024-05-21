import React from 'react';
import Section from '@/components/Section';
import Section_2 from '@/components/Section_2';
import Contactus from '@/components/Contactus';
import Team from '@/components/Team';
import Menu from '@/components/Menu';
import Sentmate from '@/components/Sentmate';

export default function home() {
  return (
    
    <div className='container'>   
    <div>
          <Section></Section>
          </div>    
    <div>
      <Section_2></Section_2>
</div>  
<div>
    <Menu></Menu>
</div>  
<Sentmate></Sentmate>
     <Team></Team>
    </div>
  )
}
