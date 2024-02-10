import React from 'react';
import { Button } from '@mui/base/Button';
import Textarea from '@mui/joy/Textarea';

const MessageTerminal = () => {
    return (
        <>
            <div/>
            <h1>chat bot</h1>
            <Textarea minRows={1} />
            <Button>Submit</Button>
        </>
    );
};

export { MessageTerminal };
