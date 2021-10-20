import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Banar from './Banar/Banar';
import Footer from './Footer/Footer';
import './Home.css'
import Serviceshome from './ServicesHome/Serviceshome';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>Welcome Mr {user.displayName}</h2>
        <Banar></Banar>
        <Serviceshome></Serviceshome>
        <Footer></Footer>



        </div>
    );
};

export default Home;