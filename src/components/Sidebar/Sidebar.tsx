import styles from './Sidebar.module.scss'
import logo from '../../assets/logo.png'
import smallLogo from '../../assets/smallLogo.png'
import profilePhoto from '../../assets/profliePhoto.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { sidebarList } from './sidebarList'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
 
  const  [clicked, setClicked] = useState(false)

  const handleClick = () =>{
    setClicked(prev => !prev)
    
  }

  return (
    <>
      <nav aria-label='Sidebar Navigation' className={`${styles.sidebar} ${clicked ? styles.collapsed : ' '}`}>
        <div className={styles.logo}>
          <img src={clicked ? smallLogo : logo} alt="logo" />
          <FontAwesomeIcon
           onClick={handleClick} className={styles.logoIcon} icon={clicked ? faChevronRight : faChevronLeft}
          //  tabIndex={0}
           role="button"
           aria-label="Toggle Sidebar"
           aria-expanded={!clicked}
          />
        </div>
        <div className={styles.navigation}>
            <ul className={styles.navList}>
                {sidebarList.map(({label, path, icon: Icon})=>{
                  return(
                    <li key={path} className={styles.list}>
                      <NavLink
                        to={path}
                         className={({isActive})=>
                          `${styles.navlink} ${isActive ? styles.navlinkActive : ' '}`
                          }
                      >
                        <Icon className={styles.icon} />
                        <span className={styles.label}>{label}</span>
                      </NavLink>
                    </li>
                  )
                })}
            </ul>
        </div>

        <div className={styles.profile}>
          <div className={styles.info}>
            <div className={styles.image}>
              <img src={profilePhoto} alt="" />
            </div>
            <div className={`${styles.name} ${clicked ? styles.removeName : '' }`}>
              John Carter
            </div>
          </div>
          <div className={`${styles.goToProfile} ${clicked ? styles.removeName : ''}`}>
            <FontAwesomeIcon
            className={styles.profileicon}
           icon={faChevronRight} />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
