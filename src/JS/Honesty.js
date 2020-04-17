let data=[
    {state:  "I declare that my assignment is in accordance with Seneca Academic Policy."},
    {name: "Kamyab Rouhifar"},
    {date: "2020-04-17"}
    ];
window.onload=()=>{
    document.getElementById("Button_honesty").addEventListener("click", function(){

           let p =document.createElement("pre");
           let text =document.createTextNode(" State: "+data[0].state+"\n");
            let text1 =document.createTextNode(" Name: "+data[1].name+"\n");
            let text2 =document.createTextNode(" Date: "+data[2].date+"\n");

            p.appendChild(text);
            p.appendChild(text1);
            p.appendChild(text2);
            p.style.backgroundColor="white";
            p.style.textAlign="left";
            p.style.border="5px outset yellow";
            document.getElementById("result").appendChild(p);

    });


};