import React from 'react';
import Header from '../component/common/Header';
import Footer from '../component/common/Footer';




export default function MainLayout({children}) {
    return (
        <>
            <Header/>
                <div id="content">{children}</div>
            <Footer/>
        </>
    );
}

//export default MainLayout;