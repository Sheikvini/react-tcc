import './index.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Cabecalho from '../../components/cabecalho-semrotas'

const Loginadm = ({ onSearch }) => {
    const [valorInput1, setValorInput1] = useState('');
  const [valorInput2, setValorInput2] = useState('');

  // Funções para lidar com a mudança nos inputs
  const handleChangeInput1 = (e) => {
    setValorInput1(e.target.value);
  };

  const handleChangeInput2 = (e) => {
    setValorInput2(e.target.value);
    };


    

    return(
        <article className='cont-cadastro'>
            <Cabecalho/>
        <header className='cont-login-adm'>
            <Link to="/">
                <img className='botao-voltar2' src="/assets/img/icon/botao-voltar.png" alt="Voltar" />
            </Link>
            <section className='log-adm'>
                <div className='titulos-login-adm'>
                    <img className='logo' src='/assets/img/logo.png'/>
            

                
                    <h2>Colors Rain</h2>
                    <h3>Bem Vindo administrador </h3>
                </div>

                <span>
                    <h4 className='email-adm'>Email:</h4>
                    
                    <div className="caixa-text-adm">
                        
                        <input
                            placeholder="Insira seu email aqui..."
                            type="text"
                            value={valorInput1}
                            onChange={handleChangeInput1}
                        />
                            
                    </div>  

                    <h4>Senha:</h4>

                    <div className="caixa-text2-adm">
                        
                        <input
                            placeholder="Digite sua senha"
                            type="password"
                            value={valorInput2}
                            onChange={handleChangeInput2}
                        />
                    </div>

                    <a className='esq-senha-adm'>
                        Esqueci minha senha
                    </a>    
                </span>


            </section>
            
        </header>
        </article>
    );
}

export default Loginadm;