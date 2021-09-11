import React from 'react'
import CustomBtn from './CustomBtn'
//import logo from '../logo.svg'
import meulogo from "../img/iplus.png"
//import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#a9a978",        
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "12%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#fff"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles()
    return (
            <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
                <img src={meulogo} className={classes.logo}/>
                {/*  className={classes.logo}
                <img src={logoMobile} className={classes.logoMobile}/>  */}
                <Typography variant="h6" className={classes.menuItem}>
                    Início
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Produtos
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Soluções Integradas
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Parceiros 
                </Typography>
                <Typography variant="h6" className={classes.menuItem}>
                    Fale Conosco 
                </Typography>
                <CustomBtn txt="Faça seu orçamento"/>
            </Toolbar>
    )
}

export default NavBar
