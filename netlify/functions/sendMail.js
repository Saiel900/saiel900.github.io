
exports.handler = async function(event) {

const data = JSON.parse(event.body);

try {

await fetch(
"https://api.brevo.com/v3/smtp/email",
{

method:"POST",

headers:{
"Content-Type":"application/json",
"api-key":process.env.BREVO_API_KEY
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
margin-block-start:15px;
"
>

Join WhatsApp Community

</a>

</div>

`

})

});

return {

statusCode:200,

body:JSON.stringify({
message:"Email Sent"
})

};

}

catch(error){

return {

statusCode:500,

body:JSON.stringify({
error:error.message
})

};

}

};
