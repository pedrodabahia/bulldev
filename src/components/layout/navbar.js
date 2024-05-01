import style from './navbar.module.css'

function Navbar(){
	return(
		<nav className={style.navbar}>
          <div className={style.logo}>
            <h1>BULLDEV</h1>
          </div>
          <div className={style.links}>
            <ul>
              <li>HOME</li>
              <li>BLOG</li>
              <li>CONTATO</li>
            </ul>
          </div>
    </nav>

		)
}

export default Navbar;