import style from './AppHeader.module.css';

const AppHeader = () => {
    return(
        <header className={style.header}>
            <div className='container'>
                <h1 className={style.title}>Il mio blog</h1>
            </div>
        </header>
    )
}

export default AppHeader;