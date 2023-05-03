import React, { useEffect } from 'react';

import Historia from './Historia.jsx';

const Caroussel = () => {
    useEffect(() => {
        $.ajax({
            url: 'https://randomuser.me/api/?results=15',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        });
    });

    return (
        <>
        </>
    );
};
export default Caroussel;