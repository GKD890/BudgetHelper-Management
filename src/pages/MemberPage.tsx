import React from 'react';
import { Table } from '../components/table';
import { MemberView } from '../components/views/memberView';

const heading = ["name","id"]
const data = ['bfkp','di','sdf','sdjf']

export const MemberPage = ():React.ReactElement => {

    return (
        <MemberView />
    );
  
}