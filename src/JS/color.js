// Changing template of perfume


function change_color(color) {
    let Image = document.getElementById("Image_woman");


    if(color==='1') {

        Image.style.backgroundColor = null;
        Image.classList.remove("romantic");
        Image.style.backgroundColor = "pink";

    }
    else if (color==='2') {

        Image.style.backgroundColor = null;
        Image.classList.remove("romantic");
        Image.style.backgroundColor = "green";

    }
    else if (color==='3') {

        Image.style.backgroundColor = null;
        Image.classList.remove("romantic");
        Image.style.backgroundColor = "blue";

    }
    else if (color==='4') {

        Image.style.backgroundColor = null;
        Image.classList.remove("romantic");
        Image.style.backgroundColor = "black";

    }
    else if (color==='5') {

        Image.style.backgroundColor = null;
        Image.classList.add("romantic");
    }
    else {
        Image.classList.remove("romantic");
        Image.style.backgroundColor = null;
        Image.style.backgroundColor = "coral";

    }
}
//----------------------------------------------------------
function RESTART() {
    document.getElementsByClassName("image").style.backgroundColor = null;
    document.getElementsByClassName("image")[0].classList.toggle("Image_man");
    document.getElementsByClassName("romantic").style.backgroundColor = null;
    document.getElementsByClassName("romantic")[0].classList.toggle("Image_woman");
    document.getElementsByClassName("romantic")[0].classList.toggle("Image_man");
}
//----------------------------------------------------------
function changeColour(value)
{
    let data=document.getElementById("image1");
    data.style.backgroundColor=null;
    let color = data.style.backgroundColor;

    switch(value)
    {
        case 'y':
            data.classList.remove("romantic1");
            color = "#fff714";
            break;
        case 'r':
            data.classList.remove("romantic1");
            color = "#ff0a07";
            break;
        case 'b':
            data.classList.remove("romantic1");
            color = "#0504ff";
            break;
        case 'rom':
            data.classList.add("romantic1");
            break;
        default:
            data.classList.remove("romantic1");
            data.style.backgroundColor="darkslateblue";
            break;
    }
    data.style.backgroundColor = color;
}