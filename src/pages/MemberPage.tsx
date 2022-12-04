import React from 'react';
import { MemberView } from '../components/views/memberView';
import { RecordView } from '../components/views/recordsView';


export const MemberPage = ():React.ReactElement => {

    return (
        <>
            <MemberView />
            <RecordView />
        </>
        
    );
  
}