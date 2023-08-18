import React, { useState, useRef } from 'react';

import { useReactToPrint } from 'react-to-print';
import ContentPrint from './print';
import ContentResume from './Resume';
import skillList from "../../../assets/downloads/Santiago Valenzuela.pdf";
const Resume = () => {
    const componentRef = useRef();
    const [isVisibleForPrint, setIsVisibleForPrint] = useState(false);

    const handlePrint = useReactToPrint({

        content: () => componentRef.current,
        onBeforeGetContent: () => {
            // Make the component visible for printing
            setIsVisibleForPrint(true);
        },
        onAfterGetContent: () => {
            // Hide the component after printing is done
            onAfterPrint();
        },
        
    });

    const onAfterPrint = () => {
        // Hide the component after printing is done
        setIsVisibleForPrint(false);
    }
    return (
        <div class='scrollbar-morpheus-den'>
            {/* <h4 onClick={handlePrint} class='download'> Download Section </h4> */}
            <a href={skillList} class='download'> Download Section </a>
            <ContentResume />
            <div className={'hidden-print'}>
            <ContentPrint ref={componentRef} />
            </div>

        </div>
    );
}

export default Resume;