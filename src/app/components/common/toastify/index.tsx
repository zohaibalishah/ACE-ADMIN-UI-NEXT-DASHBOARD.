import React from 'react';
import { Toaster } from 'react-hot-toast';

export const Toastify = () => (
    <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
            className: 'text-sm',
            duration: 5000,
            style: {
                background: '#363636',
                color: '#fff',
                padding: '12px 16px',
                borderRadius: '12px',
            },
        }}
    />
);
