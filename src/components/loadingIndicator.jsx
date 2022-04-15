import React from 'react';
import Lottie from "lottie-react";
import Loading from '../assets/lf30_editor_jft5hqov.json';
import { useStyles } from '../assets/customStyles';

const LoadingIndicator = ({visible}) => {
  const classes = useStyles();

  if(!visible) return null;
  return (
    <div className={classes.overlay}>
      <Lottie animationData={Loading} loop autoPlay />
    </div>
  )
}

export default LoadingIndicator;
