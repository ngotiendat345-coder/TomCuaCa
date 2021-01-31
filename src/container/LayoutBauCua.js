import React from 'react';
import Header from '../component/Header';
import TomCuaCa from '../component/TomCuaCa';
import XucSacContainer from '../component/XucSacContainer';

function LayoutBauCua(){
    return(
        <>
            <Header/>
            <section className="container-xl d-flex my-5">
                <TomCuaCa/>
                <XucSacContainer/>
            </section>
        </>
    )
}

export default LayoutBauCua;