validating=()=>{
    let text,text1;
    let boolean =true;
    let x = document.forms["Form"]["custname_First"].value;
    let z= document.forms["Form"]["custname_Last"].value;
    let input = x.toUpperCase();
    let input1 = z.toUpperCase();
    if (x === "" ) {
        text = "Name must be filled out";
    }
    else
        text ="";

    if (z === ""){
        text1 = "Name must be filled out";
    }
    else
        text1 ="";

    for (let i = 0; i < input.length; i++) {

        if (input.charAt(i) < "A" || input.charAt(i) > "Z") {
            text = "Invalid,Use the alphabetic character";
        }
        else
            text ="";
    }
    for (let i = 0; i < input1.length; i++) {
        if (input1.charAt(i) < "A" || input1.charAt(i) > "Z") {
            text1 = "Invalid,Use the alphabetic character";
        }
        else
        text1 ="";
    }

    document.getElementById("demo").innerHTML = text;
    document.getElementById("demo1").innerHTML = text1;
};


