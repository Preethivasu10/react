import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './task5.css'; 

export default function Notification() {
    return (
        <>
        <div className=" box justify-content-center">
        <h1 className='noti'>Notification</h1>
        
        <div className="p-3 mb-2 bg-primary text-white col-4 ">Information Message</div>
        <div className="p-3 mb-2 bg-success text-white col-4">Sucess Message</div>
        <div className="p-3 mb-2 bg-danger text-white col-4">Error Message</div>
        <div className="p-3 mb-2 bg-warning text-dark col-4">warning Message</div>
        <div className="p-3 mb-2 bg-info text-white col-4">.bg-info</div>
        </div>
        </>
    );
}