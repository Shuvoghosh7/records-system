import React from 'react';
import Records from './Records/Records';
import UploadFile from './uploadFile.js/UploadFile';

const Home = () => {
    return (
        <div>
            <Records/>
            <UploadFile/>
        </div>
    );
};

export default Home;