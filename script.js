function create_label(tagname,attrname,attrvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
 
function create_break(){
    let ele1 = document.createElement("br");
    return ele1;
}

function create_input(tagname,attr1name,attr1value,attr2name,attr2value){
    let ele2 = document.createElement(tagname);
    ele2.setAttribute(attr1name,attr1value);
    ele2.setAttribute(attr2name,attr2value);
    return ele2;
}

function create_button(tagname,attr3name,attr3value,attr4name,attr4value,content){
   let ele3 = document.createElement(tagname);
   ele3.setAttribute(attr3name,attr3value);
   ele3.setAttribute(attr4name,attr4value);
   ele3.innerHTML=content;
   return ele3;
}


let first_label = create_label("label","for","firstname","FirstName");
let first_break = create_break();
let first_input = create_input("input","type","text","id","firstname");

let first1_break = create_break();

let middle_label = create_label("label","for","middlename","MiddleName");
let middle_break = create_break();
let middle_input = create_input("input","type","text","id","middlename");

let middle1_break = create_break();

let last_label = create_label("label","for","lastname","LastName");
let last_break = create_break();
let last_input = create_input("input","type","text","id","lastname");

let last1_break = create_break();

let email_label = create_label("label","for","email","Email");
let email_break = create_break();
let email_input = create_input("input","type","email","id","email");

let email1_break = create_break();

let password_label = create_label("label","for","password","Password");
let password_break = create_break();
let password_input = create_input("input","type","password","id","password");

let password1_break = create_break();

let button = create_button("button","type","button","onclick","foo()","Submit");

function foo(){
    
    let first = document.getElementById("firstname").value;
    console.log(`FirstName:${first}`)

    let middle = document.getElementById("middlename").value;
    console.log(`MiddleName:${middle}`)

    let last = document.getElementById("lastname").value;
    console.log(`LastName:${last}`)

    let gmail = document.getElementById("email").value;
    console.log(`Email:${gmail}`)
    
    let password = document.getElementById("password").value;
    console.log(`Password:${password}`)

    let first1 = document.createElement("div");
    first1.innerHTML = `FirstName:${first}`

    let middle1 = document.createElement("div");
    middle1.innerHTML = `MiddleName:${middle}`

    let last1 = document.createElement("div");
    last1.innerHTML = `LastName:${last}`

    let email1 = document.createElement("div");
    email1.innerHTML = `Email:${gmail}`

    let password1 = document.createElement("div");
    password1.innerHTML = `Password:${password}`

    
    document.body.append(first1,middle1,last1,email1,password1);

}

document.body.append(first_label,first_break,first_input,first1_break,middle_label,middle_break,middle_input,middle1_break,last_label,last_break,last_input,last1_break,email_label,email_break,email_input,email1_break,password_label,password_break,password_input,password1_break,button);

