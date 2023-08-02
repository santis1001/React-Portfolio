import React from 'react';

function ResultList(props) {
    return (
        <ul class="contact_list scrollbar-morpheus-den">
            {props.data.map((data, index) => (
                <li key={index}>
                        <div>
                            <h3>{data.name}</h3>
                            <a href={'mailto:'+data.email}>{data.email}</a>
                            <p>{data.textcontent}</p>
                        </div>
                </li>
                
            ))
            }
        </ul >
    );
}

export default ResultList;
