import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0, 
        background: "#3E2723",
        color: "#fff",
        transform: "none",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor:  "#3E2723"
          },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

const CustomBtn = (props) => {
    return (
        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomBtn

