import React from "react"

const makeCall = (setText) => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            // console.log("Response: ", response)
            return response.json()
        })
        .then(parsedData => {
            // console.log("Stringy Response: ", JSON.stringify(parsedData))
            setText(JSON.stringify(parsedData[0]))
        })
        .then(users => {
            // console.log("Users: ", users)
        })
    return true
}

const getNameByIndex = (index, setName) => {
    setName("Loading...")
    if (index < 0) {
        setName("Invalid Index")
        return false
    }
    else {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json()
            })
            .then(parsedData => {
                setName(JSON.stringify(parsedData[index].name))
            })
        return true
    }
}

const Button = () => {
    const inputRef = React.useRef(null)
    const [receivedJson, setReceivedJson] = React.useState("");
    const [nameIndex, setNameIndex] = React.useState(-1);
    const [name, setName] = React.useState("");


    return (
        <div>
            {/* Input Stuff */}
            <textarea onChange={(e) => setNameIndex(e.target.value)} />
            {receivedJson}
            <div style={{
                backgroundColor: "grey",
                width: "300px",
                height: "150px",
                cursor: "pointer",
            }}
                onClick={() => { getNameByIndex(nameIndex, setName) }}
                ref={inputRef}
            >
                Get Name By Index
            </div>
            {name}
            {/* <div style={{
                backgroundColor: "grey",
                width: "200px",
                height: "50px",
                cursor: "pointer",
            }}
                onClick={() => { makeCall(setReceivedJson) }}
                ref={inputRef}
            >
                BUTTON
            </div> */}
        </div>
    )
}

export { makeCall, getNameByIndex };
export default Button; 
