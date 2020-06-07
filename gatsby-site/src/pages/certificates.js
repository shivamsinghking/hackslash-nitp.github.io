import React,{useState} from 'react';
import Certificate from '../components/certificate';
import NavBar from '../components/NavBar';

const Certificates = () => {
    const [page, setPage] = useState('');

    return (
      <>
           <NavBar page={page}/> 
           <Certificate setPage={setPage}/>
        </>
    );
};

export default Certificates;