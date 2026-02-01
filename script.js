const API = "http://localhost:3000";

function register() {
  fetch(API+"/register",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      name:name.value,
      email:email.value,
      password:password.value
    })
  }).then(res=>res.text()).then(alert);
}

function login() {
  fetch(API+"/login",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      email:email.value,
      password:password.value
    })
  }).then(res=>res.text()).then(msg=>{
    if(msg==="Login Success") location.href="dashboard.html";
    else alert(msg);
  });
}

function postAchievement(){
  fetch(API+"/achievement",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      user_id:1,
      title:title.value,
      description:description.value
    })
  }).then(res=>res.text()).then(alert);
}

function postJob(){
  fetch(API+"/job",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      posted_by:1,
      company:company.value,
      role:role.value,
      description:jobdesc.value
    })
  }).then(res=>res.text()).then(alert);
}
