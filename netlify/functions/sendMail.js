
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
"🌸 Welcome to AstrovaFit 3-Day Yoga Wellness Workshop",

htmlContent:`

<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width, initial-scale=1.0"
/>

</head>

<body style="
margin:0;
padding:0;
background:#070b1a;
font-family:Arial,sans-serif;
">

<table
width="100%"
border="0"
cellspacing="0"
cellpadding="0"
style="
background:#070b1a;
padding:20px 10px;
"
>

<tr>

<td align="center">

<table
width="100%"
border="0"
cellspacing="0"
cellpadding="0"
style="
max-width:700px;
background:linear-gradient(135deg,#111827,#0f172a);
border-radius:28px;
overflow:hidden;
border:1px solid rgba(255,255,255,0.08);
"
>

<!-- IMAGE SECTION -->

<tr>

<td
align="center"
style="
padding:18px 18px 0;
background:#0f172a;
"
>

<table
border="0"
cellspacing="0"
cellpadding="0"
style="
width:100%;
max-width:340px;
margin:auto;
"
>

<tr>

<td align="center">

<img
src="https://saiel900.github.io/assets/workshop.jpg"
alt="AstrovaFit Workshop"
style="
width:100%;
max-width:340px;
height:auto;
display:block;
margin:auto;
border-radius:24px;
object-fit:contain;
box-shadow:0 15px 40px rgba(0,0,0,0.35);
border:1px solid rgba(255,255,255,0.08);
"
/>

</td>

</tr>

</table>

</td>

</tr>

<!-- CONTENT -->

<tr>

<td style="padding:38px 30px;">

<div style="
font-size:14px;
font-weight:700;
letter-spacing:3px;
color:#8b5cf6;
margin-bottom:18px;
text-transform:uppercase;
">

🌸 Yoga Wellness Workshop

</div>

<h1 style="
font-size:40px;
line-height:1.1;
margin:0 0 20px;
color:white;
font-weight:800;
">

✨ Welcome ${data.name}

</h1>

<p style="
font-size:17px;
line-height:1.9;
color:#d1d5db;
margin-bottom:25px;
">

Thank you for registering for the
<b style="color:#ffffff;">
3-Day Yoga Wellness Workshop
</b>
with AstrovaFit 🌿

</p>

<!-- DETAILS -->

<div style="
padding:24px;
border-radius:22px;
background:#131c31;
margin-bottom:24px;
border:1px solid rgba(255,255,255,0.08);
">

<h2 style="
margin-top:0;
margin-bottom:16px;
color:#ffffff;
font-size:24px;
">

📅 Workshop Details

</h2>

<p style="
color:#d1d5db;
line-height:2;
font-size:15px;
margin:0;
">

🗓 <b>Dates:</b> 17 June – 19 June<br>

🕖 <b>Time:</b> 7:00 PM – 7:30 PM<br>

💻 <b>Mode:</b> Online Live Workshop<br>

🌸 <b>Organized By:</b> AstrovaFit

</p>

</div>

<!-- BENEFITS -->

<div style="
padding:24px;
border-radius:22px;
background:#131c31;
margin-bottom:24px;
border:1px solid rgba(255,255,255,0.08);
">

<h2 style="
margin-top:0;
margin-bottom:16px;
color:#ffffff;
font-size:24px;
">

🌿 What You’ll Experience

</h2>

<table
width="100%"
cellspacing="0"
cellpadding="0"
>

<tr>

<td style="
padding:10px;
color:#e2e8f0;
font-size:15px;
line-height:1.8;
">

✅ Stress Relief & Relaxation

</td>

<td style="
padding:10px;
color:#e2e8f0;
font-size:15px;
line-height:1.8;
">

✅ Posture Improvement

</td>

</tr>

<tr>

<td style="
padding:10px;
color:#e2e8f0;
font-size:15px;
line-height:1.8;
">

✅ Mobility Exercises

</td>

<td style="
padding:10px;
color:#e2e8f0;
font-size:15px;
line-height:1.8;
">

✅ Meditation Session

</td>

</tr>

<tr>

<td style="
padding:10px;
color:#e2e8f0;
font-size:15px;
line-height:1.8;
">

✅ Full Body Yoga Flow

</td>

<td style="
padding:10px;
color:#e2e8f0;
font-size:15px;
line-height:1.8;
">

✅ Healthy Habit Building

</td>

</tr>

</table>

</div>

<!-- WHATSAPP BUTTON -->

<div style="
text-align:center;
margin:35px 0;
">

<a
href="https://chat.whatsapp.com/JVKChlSHJOB6nnuK80fnnY?s=sw&p=a&mlu=0"
style="
display:inline-block;
padding:18px 34px;
background:linear-gradient(90deg,#25D366,#128C7E);
color:white;
text-decoration:none;
font-size:18px;
font-weight:bold;
border-radius:18px;
box-shadow:0 10px 25px rgba(37,211,102,0.25);
"
>

💬 Join WhatsApp Community

</a>

</div>

<!-- IMPORTANT NOTE -->

<div style="
padding:22px;
border-radius:20px;
background:#1e1b4b;
margin-top:10px;
border:1px solid rgba(255,255,255,0.08);
">

<p style="
margin:0;
font-size:15px;
line-height:1.9;
color:#e2e8f0;
">

✨ Please join the WhatsApp community before the workshop starts.
All workshop updates, reminders, session links and announcements
will be shared there.

</p>

</div>

<!-- FOOTER -->

<div style="
margin-top:35px;
padding-top:25px;
border-top:1px solid rgba(255,255,255,0.08);
text-align:center;
">

<h3 style="
margin-bottom:12px;
color:#ffffff;
font-size:26px;
">

AstrovaFit

</h3>

<p style="
color:#94a3b8;
line-height:1.9;
font-size:14px;
margin:0;
">

The Power to Perform 🌸<br><br>

📧 contact.astrovafit@gmail.com

</p>

</div>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>

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

