export default function NavPage(props) {
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <h4>Page: {props.page}</h4>
            <button className='btn btn-primary btn-sm'
                onClick={() => {
                    props.setPage(props.page + 1)
                    if (props.page == 42) {
                        props.setPage(1)
                    }
                }}>
                Page: {props.page + 1}
            </button>
        </header>
    )
};