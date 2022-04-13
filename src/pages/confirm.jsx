import React, {useEffect} from 'react';

const Confirm = ({match}) => {
  useEffect(() => {
    const {id} = match.params;
    console.log('Props ID ', id)
  }, [match.params]);

  return (
    <div>
      <h1>Confirm Email</h1>
    </div>
  )
}

export default Confirm;
