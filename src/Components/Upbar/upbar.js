import React from 'react'
import './upbar.css'
import { NavLink } from 'react-router-dom'

function Upbar (props){
    return (
        <div className="Upbar">
            <div id="upbar-links">
                <NavLink exact to='/o-que-sao-residuos?' className="main-nav" activeClassName="main-nav-active">O que são residuos?</NavLink>
                <NavLink to ='/quais-sao-os-tipos-de-residuos-solidos?'className= "main-nav" activeClassName="main-nav-active">Quais são os tipos de resíduos sólidos?</NavLink>
                <NavLink to ='/qual-a-importancia-de-descartar-corretamente?'className= "main-nav" activeClassName="main-nav-active">Qual a importância de descartar corretamente?</NavLink>
                <NavLink to ='/galeria'className= "main-nav" activeClassName="main-nav-active">Galeria</NavLink>
                <NavLink to ='/contatos'className= "main-nav" activeClassName="main-nav-active">Contatos</NavLink>
            </div>
        </div>
        )
    }

export default Upbar;