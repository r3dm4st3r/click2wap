import { Icon } from '@iconify/react';
import {useEffect, useState} from "react";

const Home = () => {
    const [data, setData] = useState(null);
    const [click2Message, setClick2Message] = useState('');

    const handleInput = (e) => {
        let name = e.target.name,
            value = e.target.value;
        setData({
            ...data,
            [name]: value
        });
    }


    let handleClick2Message;
    handleClick2Message = (phone, message) => {
        let redirectUrl = `https://api.whatsapp.com/send?phone=${phone}&text${data?.text ? `=${message}` : ''}&app_absent=0`;
        setClick2Message(redirectUrl)
    };

    useEffect(()=> {
        handleClick2Message(data?.phone, data?.text)
    },[data, handleClick2Message])

    return(
        <>
            <section className="bg-theme p-10 pb-52">
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="flex items-center justify-center p-10">
                            <div className="w-16">
                                <Icon width={50} icon="logos:whatsapp" />
                            </div>
                            <h1 className="text-2xl sm:text-4xl ml-4 text-white font-bold tracking-widest">Click2WhatsApp</h1>
                        </div>
                        <div className="text-center text-white mb-5">
                            <p>This is a simple tool for message anyone on whatsapp without saving their number in your phone</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5 sm:p-10">
                <div className="container">
                    <div className="grid grid-cols-1 -mt-52">
                        <div className="bg-white shadow-xl drop-shadow-xl p-10 max-w-[550px] w-full mx-auto">
                            <div className="content">
                                <div className="mb-5">
                                    <label htmlFor="phone" className="col-label">Mobile number</label>
                                    <input type="number" name="phone" className="form-control" onChange={handleInput} autoFocus={true}/>
                                    <span className="text-sm">Do not forget to add country code without +</span>
                                </div>
                                <div>
                                    <label htmlFor="text" className="col-label">Message</label>
                                    <input type="text" name="text" className="form-control" onChange={handleInput}/>
                                </div>
                                <div className="mt-8">
                                    <a
                                        href={click2Message}
                                        className="transition-colors bg-theme text-white px-5 py-3 block text-center sm:inline-block shadow-xl drop-shadow-sm uppercase tracking-widest"
                                    >
                                        Send Message
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;