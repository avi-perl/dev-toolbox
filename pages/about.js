import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Navigation} from 'react-minimal-side-navigation';

import {DashboardLayout} from '../components/Layout';


export default function Home() {
    return (
        <DashboardLayout>
            <h1>About</h1>
        </DashboardLayout>
    );
}
