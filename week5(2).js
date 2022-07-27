let p1 = document.querySelector("#password");
let p2 = document.querySelector("#retype_password");
let res = document.querySelector("#verification_status");

function verify() {
    let pass= p1.value;
    // check lenghth
    if (pass.length < 8 || pass.length >20) {
        res.innerText = "Password is too short or too long";
        res.classList.add('status-error');
        res.classList.remove('status-success');
    } else{
        res.innerText = "Password is OK";
        res.classList.add('status-success');
        res.classList.remove('status-error');
    }
}