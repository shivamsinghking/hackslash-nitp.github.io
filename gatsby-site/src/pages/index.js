import React,{useState} from 'react';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Layout from '../components/layout';
const Index = () => {
    const [page, setPage] = useState('');

    return (
      <>
       
           <NavBar page={page}/> 
          <Home setPage={setPage}/>
       
        </>
    );
};

export default Index;