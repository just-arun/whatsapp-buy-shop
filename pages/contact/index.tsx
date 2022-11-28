import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { CsvToJson } from "../../helpers";

import Head from 'next/head'

const Contact: NextPage = () => {
    const [data, setData] = useState([] as { type: string, value: any }[])
    useEffect(() => {
        axios.get(`${process.env.CONTACT_URL}`)
            .then(res => {
                setData(CsvToJson(res.data).body)
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const typeAction = (type: string, value: any) => {
        switch (type) {
            case "whatsapp":
                // window.open(`whatsapp://send?phone=+91${value}`)
                return `https://api.whatsapp.com/send?phone=+91${value}`
            case "mobile":
                // window.open(`tel:+91${value}`)
                return `tel:+91${value}`
            case "email":
                // window.open(`mailto:${value}`)
                return `mailto:${value}`
            default:
                return `#`;
        }
    }
    return (
        <div className='container mx-auto'>
            <Head>
                <title>Show Online</title>
                <meta name="description" content="sell, buy products online with your progressive web app which helps you reach you client easier" />
                <link rel="icon" href="/ico.svg" />
            </Head>
            <div className='-m-4 p-5 container mx-auto'>
                <h1 className='text-xl font-bold'>Contact</h1>
                <table style={{
                    width: '100%'
                }}>
                    <tbody>
                        {data.map((e, i) => (
                            <tr key={i}>
                                <td>{e.type}</td>
                                <td ><a href={typeAction(e.type, e.value)}>{e.value}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Contact;