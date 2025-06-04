import styles from './Settings.module.scss'
import { RiPencilFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { BiSolidPencil } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";


const Settings = () => {

  const [activeTab, setActiveTab] = useState('personal')

  const notificationData = [
   ' I’m mentioned in a message',
   'Someone replies to any message',
   'I’m assigned a task',
   'A task is overdue'
  ]

  const clickedDiv = (tab : string) => {
    setActiveTab(tab)
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <h2>Settings</h2>
        <button>Save</button>
      </div>
      <div className={styles.content}>
        <div className={styles.personalInfo}>
          <div className={styles.information}>
            <div onClick={()=>clickedDiv('personal')} className={`${styles.personal} ${activeTab === 'personal' ? styles.activeDiv : ' '}`}>
                <RiPencilFill />
                <p>Personal Information</p>
            </div>
            <div onClick={()=>clickedDiv('notifications')} className={`${styles.personal} ${activeTab === 'notifications' ? styles.activeDiv : ' '}`}>
                <IoIosNotifications />
                <p>Notifications</p>
            </div>
          </div>
        </div>
        {activeTab == 'personal' && (
            <div className={styles.changeInfo}>
              <div className={styles.contentInformation}>
                  <h2>Personal information</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing. </p>
               </div>
              <div className={styles.profileContent}>
                <div className={styles.profile}>
                  <div className={styles.name}>
                    <FaUser/>
                    <p>Full Name</p>
                  </div>
                  <div className={styles.inputName}>
                    <input type="text" placeholder='John Carter' />
                  </div>
                </div>
                <div className={styles.emailAddress}>
                   <div className={styles.name}>
                    <FaEnvelope/>
                    <p>Email Address</p>
                  </div>
                  <div className={styles.inputName}>
                    <input type="email" placeholder='Enter your email ' />
                  </div>
                </div>
                <div className={styles.photo}>
                  <div className={styles.name}>
                    <IoMdPhotos/>
                    <p>Photo</p>
                  </div>
                  <div className={styles.inputName}>
                    <IoMdPhotos className={styles.icon} />
                    <p><span>Click to upload</span> or drag and drop<br />SVG, PNG, JPG or GIF (max. 800 x 400px)</p>
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.name}>
                    <BiSolidPencil />
                    <p>Short description</p>
                  </div>
                  <div className={styles.inputName}>
                    <textarea placeholder='Write a short bio about you' name="" id=""></textarea>
                  </div>
                </div>
              </div>
            </div>
          )
        }



        {activeTab == 'notifications' && (
            <div className={styles.changeInfo}>
              <div className={styles.contentInformation}>
                  <h2>General notifications</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing. </p>
               </div>
              <div className={styles.profileContent}>
                <div className={styles.card}>
                  {notificationData.map((element, i) => {
                    return(
                      <div key={i} className={styles.cardData}>
                        <div className={styles.text}>
                          <div>{element}</div>
                          <FaInfoCircle />
                        </div>
                        <div className={styles.buttons}>
                          <button className={styles.appButton}><CiMobile2 />In-app</button>
                          <button className={styles.emailButton}><MdEmail />Email</button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className={styles.contentInformation}>
                  <h2>Summary notifications</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing. </p>
               </div>
              <div className={styles.profileContent}>
                <div className={styles.card}>
                  {notificationData.map((element, i) => {
                    return(
                      <div key={i} className={styles.cardData}>
                        <div className={styles.text}>
                          <div>{element}</div>
                          <FaInfoCircle />
                        </div>
                        <div className={styles.buttons}>
                          <button className={styles.appButton}><CiMobile2 />In-app</button>
                          <button className={styles.emailButton}><MdEmail />Email</button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Settings
