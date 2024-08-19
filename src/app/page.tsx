"use client"

import * as React from 'react';
import '@/styles/globals.css';
import {useRouter} from "next/navigation";
import {ENDPOINTS} from "@/constants";


function Home() {
    let router = useRouter();
    router.push(`/${ENDPOINTS.MOVIES}`)
    return (

        <>

        </>
    );
}

export default Home;
