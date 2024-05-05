// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getPostByID = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
};

const handleResponse = (response) => {
    return response.json()
}

const onSuccess = (data) => {
    let newUser = data.map(user => user.name)  
    console.log(newUser)
}

getPostByID().then(handleResponse).then(onSuccess)



