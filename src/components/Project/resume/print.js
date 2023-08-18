import React from 'react';
import logo from '../../../assets/images/profile_pic.jpg'

export const ContentPrint = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div class="header_title">
                <img src={logo} alt='logo'/>
                <h1>Santiago Valenzuela </h1>
            </div> 
            <section class="Skill" >
                <div class="subtitle">
                    <h2 id="Skill">Skills</h2>
                </div>
                <div class="container_skill">
                    <ul>
                        <li>
                            <h3>C#</h3>
                        </li>
                        <li>
                            <h3>C++</h3>
                        </li>
                        <li>
                            <h3>Unity</h3>
                        </li>
                        <li>
                            <h3>Python</h3>
                        </li>
                        <li>
                            <h3>Java</h3>
                        </li>
                        <li>
                            <h3>Android Studio</h3>
                        </li>
                    </ul>
                </div>
            </section>
            <br />
            <section class="Emp_History">
                <div class="subtitle">
                    <h2 id="Employment_History">Employment History</h2>
                </div>
                <ul class="emp_list">
                    <li>
                        <div>
                            <h3>Pharmacy Cashier</h3>
                            <p>Oct 2019 - Aug 2020</p>
                            <ul class="emp_card_list">
                                <li>Operating a cash register or other point-of-sale system to process customer transactions</li>
                                <li>Accepting payment from customers in the form of cash, credit cards, and other forms of payment</li>
                                <li>Counting cash in the drawer at the beginning and end of each shift</li>
                                <li>Balancing cash and sales receipts at the end of each shift</li>
                                <li>Answering customer questions about products, store policies, and procedures</li>
                            </ul>
                        </div>
                    </li>
                    <br />
                    <li>
                        <div>
                            <h3>System maintenance</h3>
                            <p>Aug 2020 - Dec 2022</p>
                            <ul class="emp_card_list">
                                <li>Cleaning and maintaining computer equipment, including desktops, laptops, and other hardware</li>
                                <li>Replacing components that are no longer functioning properly or have reached the end of their useful life</li>
                                <li>Monitoring the security camera system to ensure that it is functioning properly and providing clear and reliable footage</li>
                                <li>Checking the Wi-Fi and internet connection to ensure that the pharmacy's internet connection remains stable and reliable</li>
                                <li>Troubleshooting any issues that arise with the computer or technology systems(Computers, Printers, Phones, AC)</li>
                            </ul>
                        </div>
                    </li>
                    <br />
                    <li>
                        <div>
                            <h3>Design and Development of Digital Educational Resources</h3>
                            <p>2022 - 2023</p>
                            <ul class="emp_card_list">
                                <li>I specialize in the design and development of digital educational resources, constantly seeking to enhance my skills and knowledge in the field.</li>
                                <li>Utilizing technologies such as Unity, our team aims to create innovative and immersive virtual reality experiences for educational purposes.</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
});

export default ContentPrint;
