import React from 'react'
import './home.css'
import FirstSection from './section/firstSection';
import SecondSection from './section/secondSection';
import ThirdSection from './section/thirdSection';
import FourthSection from './section/fourthSection';
export default function Home() {
    return (
        <>

            <div>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
            </div>
        </>
    );
}

