const form = document.getElementById('registrationForm')

form.addEventListener("submit",async(event)=>{

    event.preventDefault();
    const userName = document.getElementById("name").value
    const gMail = document.getElementById("email").value
    const password = document.getElementById("userPassword").value

    try{
      const data =  await fetch("http://localhost:8080/api/register-user",{
          method:"POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userName: userName,
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
