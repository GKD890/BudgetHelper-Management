import React from 'react';
import { Container } from 'react-bootstrap';
import { INavbar } from '../components/navbar';
import { MemberView } from '../components/views/memberView';

export const MemberPage = ():React.ReactElement => {

    return (
        <>
            <INavbar />
            <Container>
                <MemberView />
            </Container>         
        </>
        
    );
  
}