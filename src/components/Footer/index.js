import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <section>
        <a href="https://www.instagram.com/krystiankymerson/">
        <h3>Krystian Kymerson</h3>
        </a>        
        <p>
          Professional athlete. Brazilian national champion of 2018.<br/>
          Competing at a high level surf on WQS, seeking a spot on the world tour. 
        </p>
      </section>      
      <section>             
        <p>
          <h3>Created by 
            {' '}
            <a href="https://www.linkedin.com/in/s%C3%A9rgio-schwartz-varej%C3%A3o-2a768528/">
            Sérgio Varejão
            </a> 
          </h3>       
          During the React immersion of {' '}
          <a href="https://www.alura.com.br/">Alura</a>
        </p>
      </section>     
    </FooterBase>
  );
}

export default Footer;
