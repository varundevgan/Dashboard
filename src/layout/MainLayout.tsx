import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'
import Sidebar from '../components/Sidebar/Sidebar'

const MainLayout = () => {
  return (
    <>
      <div className={styles.layoutWrapper}>
         <aside className={styles.sidebar}>
            <Sidebar />
          </aside>
          <main className={styles.content}>
            <Outlet />
          </main>
      </div>
    </>
  )
}

export default MainLayout
