const form = document.getElementById('loginForm')

form.addEventListener("submit",async(event)=>{

    event.preventDefault();


    const password = document.getElementById("userPassword").value
    const gMail = document.getElementById("email").value

    try{
        const data =  await fetch("http://localhost:8080/api/login-user",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password:password ,
                email: gMail
            })
        })
        if(data.ok){
            const result = await data.json()
            alert(result.data.message)
        }
        else {
            const error  = await data;
            console.log("errror")
        }
    }catch (error) {
        alert(error.data.message)
    }
})