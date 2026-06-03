
exports.handler = async function(event) {

try {

const data = JSON.parse(event.body);

const response = await fetch(
"https://api.brevo.com/v3/smtp/email",
{

method:"POST",

headers:{
"accept":"application/json",
"api-key":process.env.BREVO_API_KEY,
"content-type":"application/json"
},

body:JSON.stringify({

sender:{
name:"AstrovaFit",
email:"contact.astrovafit@gmail.com"
},

to:[
{
email:data.email,
name:data.name
}
],

subject:
"🌸 Welcome to AstrovaFit Yoga Challenge",

htmlContent:`

<div style="
font-family:Arial;
padding:30px;
background:#f7f3ff;
">

<h1 style="color:#7c3aed;">
✨ Welcome ${data.name}
</h1>

<p>
Thank you for joining the
5-Day Yoga Reset Challenge 🌿
</p>

<p>
🕖 Time:
7:00 PM – 7:40 PM
</p>

<a
href="https://chat.whatsapp.com/fake-link"
style="
display:inline-block;
padding:14px 24px;
background:#7c3aed;
color:white;
text-decoration:none;
border-radius:12px;
margin-top:15px;
"
>

Join WhatsApp Community

</a>

</div>

`

})

});

const result = await response.json();

console.log("BREVO RESPONSE:", result);

if(!response.ok){

return {

statusCode:500,

body:JSON.stringify({
error:result
})

};

}

return {

statusCode:200,

body:JSON.stringify({
success:true,
result
})

};

}

catch(error){

console.log("FUNCTION ERROR:", error);

return {

statusCode:500,

body:JSON.stringify({
error:error.message
})

};

}

};
