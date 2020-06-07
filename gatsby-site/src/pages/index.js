import React from 'react';
import Home from '../components/Home';
// import NavBar from '../components/NavBar';
import Layout from '../components/layout';

const Index = () => {
    // const [page, setPage] = useState('');

    return (

           <Layout page="home">
           <Home />
           </Layout>
       
    );
};

export default Index;