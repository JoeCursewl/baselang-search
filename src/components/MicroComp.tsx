export default function MicroComp({ children, props }) {
    const style= {
        div: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '1em',
            overflow: 'hidden',
            margin: '0.5em',
            boxShadow: '0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white',
            ...props
        }
    }
    return (
        <div style={style.div}>
            {children}
        </div>
    )
}