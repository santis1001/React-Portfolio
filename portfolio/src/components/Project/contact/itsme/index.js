import React, { useState, useEffect } from 'react';
import { getData } from "../utils/apiData";
import ResultList from './resultList';

const MyPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                getData().then(data => setData(data))
            } catch (error) {
                console.error('Error:', error);
                // Handle error if needed
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Display the data here */}
            {data ? (
                <section class="Contact">
                    <div class="subtitle">
                        <h2 id="Contact">Contact</h2>
                    </div>
                    {(data)?<ResultList data={data} />:''}
                    

                </section>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default MyPage;
