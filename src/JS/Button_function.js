// This data is show the IP Button Functions.
// Utilizing from the JSON data to retrieve data.

let myObj = {
    Title: "Kamyab Perfume",
    text_t: [

        { text: "It has been established in 2006 "},
        { text: "selling different perfume as online purchasing"},
        { text: "including special discount if you register for a new account"}
        ]
};
let number=1;
if(number===1)
document.getElementById("function").addEventListener("click", ()=>{
    add_des();
    number++;
});
add_des =() => {
    let para = document.createElement("p");
    let listElement = document.createElement("ul");

    let title = document.createTextNode(myObj.Title);
    for (let i = 0; i < myObj.text_t.length; i++)
    {
        let listdetail = document.createElement("li");
        listdetail.innerText = myObj.text_t[i].text;
        listElement.appendChild(listdetail);
    }
    let a = document.getElementById("display");
    a.classList.add("input");
    para.style.textAlign="center";
    para.style.color="red";
    para.appendChild(title);
    a.appendChild(para);
    a.appendChild(listElement);


};
