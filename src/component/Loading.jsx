import React from 'react';
import { Spinner } from 'flowbite-react';

const Loading = () => {
    return (
        <>
            <div className="flex flex-wrap gap-2 pb-24">
                <Spinner color="info" aria-label="Info spinner example" />
                <Spinner color="success" aria-label="Success spinner example" />
                <Spinner color="failure" aria-label="Failure spinner example" />
                <Spinner color="warning" aria-label="Warning spinner example" />
                <Spinner color="pink" aria-label="Pink spinner example" />
                <Spinner color="purple" aria-label="Purple spinner example" />
            </div>
        </>
    )
}

export default Loading