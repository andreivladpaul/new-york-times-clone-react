import React from 'react';
import './loading.scss'

export const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
    )
}
