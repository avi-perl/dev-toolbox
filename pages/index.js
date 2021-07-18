import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {Navigation} from 'react-minimal-side-navigation';

import {DashboardLayout} from '../components/Layout';


export default function Home() {
    return (
        <DashboardLayout>
            <div className={"text-center"}>
                <h1 className={"p-5"}>Something Big is Coming!</h1>
                <hr/>
                In the meantime, you can find me <a href={"https://aviperl.me/"}>here</a>.
            </div>
        </DashboardLayout>
    );
}
