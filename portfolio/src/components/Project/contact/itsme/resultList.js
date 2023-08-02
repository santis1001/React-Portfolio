import React from 'react';

function ResultList(props) {
    return (
        <ul class="contact_list">
            {props.data.map((data, index) => (
                <li key={index}>
                        <div>
                            <h3>{data.name}</h3>
                            <p>{data.email}</p>
                            <p>{data.textcontent}</p>
                        </div>
                </li>
                
            ))
            }
        </ul >
    );
}

export default ResultList;
