const form = document.getElementById("form")



const customername = document.getElementById("name")

const email = document.getElementById("email")

const number = document.getElementById("number")

const model = document.getElementById("model")

const delership = document.getElementById("delership")

const terms = document.getElementById("terms")



form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    Validate()
})


let validate = ()=>{
    let customername_value  = customername .value.trim()
    let  email_value  =  email.value.trim()
    let number_value  =  number.value.trim()
    let model_value  =  model.value.trim()
    let delership_value  =  delership.value.trim()
    let terms_value  =  terms.value.trim()



//customer name validation or checking is exist or not

if(customername_value === "")
{
    setError(customername, "Name field cannot be empty !")
}
else if(customername_value.length<3)
{
setError(customername , "Name should be minimum 3 characters !")
}
else{
    setSuccess(customername)
}


//customer email validation or checking is exist or not

if(email_value === "")
{
    setError(email, "email field cannot be empty !")
}
else if(!emailChecking(email_value))
{
setError(email , "Enter a Valid Emil Id")
}
else{
    setSuccess(email)
}



//customer Number validation or checking is exist or not

if(number_value === "")
{
    setError(number, "Number field cannot be empty !")
}
else if(number_value.length>=11)
{
setError(number , "Enter a Valid Number")
}
else{
    setSuccess(number)
}



//customer Number validation or checking is exist or not

if(model_value === "")
{
    setError(model, "Please select a Bike Model !")
}
else{
    setSuccess(model)
}



//delership validation or checking is exist or not

if(delership_value === "")
{
    setError(delership, "Nearest/delership cannot be empty !")
}
else if(delership_value.length>=20)
{
setError(delership , "Nearest/delership should be minimum 20 characters !")
}
else{
    setSuccess(delership)
}





//term checkbox validation or checking is exist or not

if(!terms.checked)
{
    setError(terms, "Please agree with terms and conditions !")
}
else{
    setSuccess(terms)
}




function setError(parameter){ input: any
let parent = input.parentElement;
let small = parent.querySelector("small")
small.innerText = Message
parent.classList.add("error")
parent.classList.remove("success")
}


function setSuccess(input){
    let parent = input.parentElement;
    parent.classList.add("success")
    parent.classList.remove("error")
}


function emailChecking(input){
    let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let valid = emailReg.test(input)
    console.log(valid)
    return valid
}

}