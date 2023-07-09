    import {React,useState} from 'react'
    import mentor from './image/logo_4_-removebg-preview.png'
    import logo from './image/favicon-3.png'
    import Form from './form.js'
    import "./App.css"
    import "./all.min.css"

    function App() {
        const[ state1 , setState1 ]=useState(true);
        const action=()=>{
            setState1(!state1)
        }
    return(
        <div>
            <div className='top'>
                <img src={mentor} alt='logo' className='logo'/>
                <img src={logo} alt='logo' className='slogo' />
                <div className='on'>
                    <div className={state1 ? "move" :"move2"} onClick={action}></div>
                </div>
            </div>
            <div className='main'>
                <div className='left'>
                    <p className='p1'>Get in Touch</p>
                    <p className='p2'>we'd Love to hear from you</p>
                </div>
                <Form />
            </div>
            <div className='foot'>
            <img src={mentor} alt='logo'/>
            <p className='txt'>Shorten the gap to reach your dream job by acquiring the knowledge and technical experience you need</p>
            <ul className='ul1'>
                <li>Overview</li>
                <li>Become a Mentor</li>
                <li>Become a Mentee</li>
                <li>VIP Mentors</li>
                <li>Privacy</li>
            </ul>
            <div className='ul2'>
                <p>@2023 EGYPT,ALL RIGHTS RESERVED</p>
                <ul>
                    <li><a href='http://localhost:3000/'><i class="fa-brands fa-facebook"></i></a></li>
                    <li><a href='http://localhost:3000/'><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href='http://localhost:3000/'><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href='http://localhost:3000/'><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            </div>
        </div>
    )

}

    export default App;
