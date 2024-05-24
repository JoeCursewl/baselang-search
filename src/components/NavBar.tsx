

export default function NavBar({ props }) {
    const style = {
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5em 1em',
            color: 'black',
            border : '1px solid #e3e3e3',
            backgroundColor: 'white',
            height: '4em',
            width: '100%',
            paddingLeft: '10%',
            paddingRight: '10%',
            zIndex: '10',
            position: "sticky",
            top: 0,
            borderRadius: '0 0 1em 1em',
            ...props
        },
        ul: {
            display: 'flex',
            listStyle: 'none',
            gap: '0.5em',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0',
            padding: '0'
        }

    }
    return (
        <div style={{ marginRight: '0.5em', marginLeft: '0.5em', position: 'sticky', top: 0, zIndex: '10' }}>
            <nav style={style.nav}>
                <div id="Logo">
                    <span>BaseLang</span>
                </div>
                <ul style={style.ul}>
                    <li><a href="/" style={{ textDecoration: 'none', color: 'black' }}>Tsps</a></li>
                </ul>

            </nav>
        </div>
    )
}