import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Navigation} from 'react-minimal-side-navigation';

import {DashboardLayout} from '../components/Layout';


export default function Home() {
    return (
        <DashboardLayout>
            <h2>Home Page</h2>
        </DashboardLayout>
    );
}
