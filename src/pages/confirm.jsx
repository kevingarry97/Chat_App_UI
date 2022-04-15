import Lottie from 'lottie-react';
import React, {useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { verifyUser } from '../services/auth';
import Loading from '../assets/lf20_2plouhmo.json';

const Confirm = ({match}) => {
  const [confirming, setConfirming] = useState(true); 
  useEffect(() => {
    const {id} = match.params;
    (async () => {
      const {status} = await verifyUser(id);

      if(status == 200) {
        setConfirming(false);

        window.location = '/auth';
      }
    })()
  }, [match.params]);

  return (
    <div>
      {confirming ? <Lottie animationData={Loading} /> : <h1>Confirmed Email</h1>}
    </div>
  )
}

export default Confirm;
