
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

<div style="
margin:0;
padding:0;
background:#0b1020;
font-family:Arial,sans-serif;
">

<div style="
max-inline-size:700px;
margin:auto;
background:linear-gradient(135deg,#111827,#0f172a);
border-radius:24px;
overflow:hidden;
border:1px solid rgba(255,255,255,0.08);
">

<!-- TOP IMAGE -->

<img
src="./assets/1.jpg"
alt="AstrovaFit Workshop"
style="
inline-size:100%;
display:block;
object-fit:cover;
"
/>

<!-- CONTENT -->

<div style="padding:40px;">

<div style="
display:inline-block;
padding:10px 18px;
border-radius:50px;
background:linear-gradient(90deg,#ec4899,#8b5cf6);
color:white;
font-size:12px;
font-weight:bold;
letter-spacing:2px;
margin-block-end:25px;
">
ASTROVAFIT PRESENTS
</div>

<h1 style="
font-size:38px;
line-height:1.1;
margin:0 0 20px;
color:white;
">
✨ Welcome ${data.name}
</h1>

<p style="
font-size:17px;
line-height:1.8;
color:#d1d5db;
margin-block-end:22px;
">
Thank you for registering for the
<b style="color:#ffffff;">
3-Day Yoga Wellness Workshop
</b>
with AstrovaFit 🌿
</p>

<div style="
padding:22px;
border-radius:20px;
background:#131c31;
margin-block-end:24px;
border:1px solid rgba(255,255,255,0.08);
">

<h2 style="
margin-block-start:0;
color:#ffffff;
font-size:22px;
">
📅 Workshop Details
</h2>

<p style="color:#d1d5db;line-height:1.8;">
🗓 <b>Dates:</b> 17 June – 19 June<br>
🕖 <b>Time:</b> 7:00 PM – 7:30 PM<br>
💻 <b>Mode:</b> Online Live Workshop<br>
🌸 <b>Organized By:</b> AstrovaFit
</p>

</div>

<!-- BENEFITS -->

<div style="
padding:22px;
border-radius:20px;
background:#131c31;
margin-block-end:24px;
border:1px solid rgba(255,255,255,0.08);
">

<h2 style="
margin-block-start:0;
color:#ffffff;
font-size:22px;
">
🌿 What You’ll Experience
</h2>

<ul style="
padding-inline-start:20px;
color:#d1d5db;
line-height:2;
font-size:15px;
">

<li>Stress Relief & Relaxation</li>
<li>Posture & Mobility Improvement</li>
<li>Mindfulness & Breathing Practices</li>
<li>Full Body Yoga Flow</li>
<li>Meditation & Lifestyle Guidance</li>
<li>Healthy Habit Building</li>

</ul>

</div>

<!-- WHATSAPP BUTTON -->

<div style="text-align:center;margin:35px 0;">

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
margin-block-start:10px;
border:1px solid rgba(255,255,255,0.08);
">

<p style="
margin:0;
font-size:15px;
line-height:1.8;
color:#e2e8f0;
">

✨ Please join the WhatsApp community before the workshop starts.
All live session links, reminders, updates and workshop materials
will be shared there.

</p>

</div>

<!-- FOOTER -->

<div style="
margin-block-start:35px;
padding-block-start:25px;
border-block-start:1px solid rgba(255,255,255,0.08);
text-align:center;
">

<h3 style="
margin-block-end:12px;
color:#ffffff;
">
AstrovaFit
</h3>

<p style="
color:#94a3b8;
line-height:1.8;
font-size:14px;
">

The Power to Perform 🌸<br><br>

📧 contact.astrovafit@gmail.com

</p>

</div>

</div>

</div>

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
