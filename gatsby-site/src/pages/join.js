
import React,{useState} from 'react';
import NavBar from '../components/NavBar';
import Join from '../components/Join'

const Joins = () => {
    const [page, setPage] = useState('');

    return (
      <>
           <NavBar page={page}/> 
           <Join setPage={setPage}/>
        </>
    );
};

export default Joins;