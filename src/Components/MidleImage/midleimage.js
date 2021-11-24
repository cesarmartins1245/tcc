import React from 'react'
import './midleimage.css'
import { NavLink } from 'react-router-dom'
import imagem1 from '../../Images/imagem1.jpg'

function Midleimage (props){
    return (
        <div className="Midleimage">
                <img src={imagem1} alt="imagem1"></img>
        </div>
        )
    }

export default Midleimage;