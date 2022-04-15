import React, {useEffect, useState} from 'react';
import { verifyUser } from '../services/auth';
import LoadingIndicator from '../components/loadingIndicator';

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

  return <LoadingIndicator visible={confirming} />
}

export default Confirm;
