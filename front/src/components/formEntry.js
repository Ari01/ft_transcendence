const FormEntry = ({ name, userEntry, setUserEntry }) => {
    return (
        <div className="formEntry">
            {name}
            <div className="entry">
                <input value={userEntry} onChange={setUserEntry} />
            </div>
        </div>
    )
}

export default FormEntry