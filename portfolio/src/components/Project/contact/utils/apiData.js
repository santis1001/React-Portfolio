export function sendData(json) {
    console.log(json)
}
export function getData() {
    const json = [
        {
            "name": "John Doe",
            "email": "john.doe@example.com",
            "textcontent": "Hello, this is a test message."
        },
        {
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "textcontent": "Testing the JSON data."
        },
        {
            "name": "Bob Johnson",
            "email": "bob.johnson@example.com",
            "textcontent": "This is another test entry."
        }
    ];

    return json;
}