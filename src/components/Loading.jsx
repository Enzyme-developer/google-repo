import React from 'react';
import Loader from 'react-loader-spinner';

//create loader to show user data is being fetched
const Loading = () => {
  return (
    <div className='flex justify-center item-center'>
        <Loader type='Puff' color='#00Bfff' height='550' width='80' />
    </div>
  )
}

export default Loading;