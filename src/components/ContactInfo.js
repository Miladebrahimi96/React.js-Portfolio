import React from 'react';

//styles
import styles from "./ContactInfo.module.css";

//icons
import {MdOutlineMail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";

//components
import Contact from './shared/Contact';
import SendMessage from './shared/SendMessage';

const ContactInfo = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.infoContainer}>
                <div>
                    <h1>Contact Me</h1>
                </div>
                <div>
                    <Contact 
                        icon={<MdOutlineMail/>} 
                        title="E-mail" 
                        content="milad.eb6868@gmail.com" 
                        link="mailto:milad.eb6868@gmail.com"
                        buttonTitle="Send E-mail"
                    />
                    <Contact 
                        icon={<BsWhatsapp/>} 
                        title="WhatsApp" 
                        content="+989373876611" 
                        link="https://wa.me/+989373876611/?text=urlencodedtext"
                        buttonTitle="Send Message"
                    />
                </div>
            </div>
            <SendMessage />
        </div>
    );
};

export default ContactInfo;