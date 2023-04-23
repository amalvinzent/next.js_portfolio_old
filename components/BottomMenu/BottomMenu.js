import { useState, useRef } from 'react'
import styles from './BottomMenu.module.css'
import { BiHome, BiUser, BiBookAlt, BiFolder, BiMessage } from 'react-icons/bi'
import Home from '../../pages/Home/Home'

export default function BottomMenu() {
  const [active, setActive] = useState({
    home: true,
    profile: false,
    experience: false,
    recent_work: false,
    contact: false
  })
  const homeSection = useRef(null)

  const scrollDown = () => {
    window.scrollTo({
      top: homeSection.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <nav className={styles.nav_container}>
        <a
          ref={homeSection}
          href="#"
          onClick={() => {
            setActive(() => ({
              home: true
            }))
            scrollDown()
          }}
          className={active.home ? styles.active : null}
        >
          <BiHome size={18} color={active.home ? 'black' : 'white'} />
        </a>
        <a
          href="#"
          onClick={() =>
            setActive(() => ({
              profile: true
            }))
          }
          className={active.profile ? styles.active : null}
        >
          <BiUser size={18} color={active.profile ? 'black' : 'white'} />
        </a>
        <a
          href="#"
          onClick={() =>
            setActive(() => ({
              experience: true
            }))
          }
          className={active.experience ? styles.active : null}
        >
          <BiBookAlt size={18} color={active.experience ? 'black' : 'white'} />
        </a>
        <a
          href="#"
          onClick={() =>
            setActive(() => ({
              recent_work: true
            }))
          }
          className={active.recent_work ? styles.active : null}
        >
          <BiFolder size={18} color={active.recent_work ? 'black' : 'white'} />
        </a>
        <a
          href="#"
          onClick={() =>
            setActive(() => ({
              contact: true
            }))
          }
          className={active.contact ? styles.active : null}
        >
          <BiMessage size={18} color={active.contact ? 'black' : 'white'} />
        </a>
      </nav>
    </div>
  )
}
