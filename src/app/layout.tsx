"use client"



import { Provider } from 'react-redux';
import { Inter } from 'next/font/google';
import { HeaderComponent } from '@/components';
import '@/styles/globals.css';
import React from 'react';
import {store} from "@/redux/store";

const inter = Inter({ subsets: ['latin'] });



type PropType = { children: React.ReactNode };
export default function RootLayout({ children }: Readonly<PropType>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Provider store={store}>
            <HeaderComponent />
            {children}
        </Provider>
        </body>
        </html>
    );
}
