// Data for the "HTML Images"
let images = [
    {price:"200 \$",caption: "Christian Dior", alt: "Christian_Dior", url: "https://m.sephora.com/productimages/sku/s1599877-main-hero-300.jpg"},

    {price:"350 \$",caption:"fahrenheit perfume",alt:"Perfume_fahrenheit",url:"https://media3.giphy.com/media/14nPXIaNsc7Dtm/giphy.gif"},

    {price:"81 \$",caption:"calvin klein",alt:"Perfume_calvin_klein" ,url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQP2ITyjtLshBhtYJdMAdTVCN6uhoFLMJxuN1pfsCYkMt4CyouEuy_RtwBhiijDuD8fPjn9f9s&usqp=CAc"},
];

window.onload = ()=>
{
   let myImgs = document.getElementById("image");
    for(let i = 0; i<images.length; i++)
    {
      let  a = document.createElement('figure');
      let b  = document.createElement('figcaption');
     let c  = document.createTextNode(images[i].caption);
     let  d =document.createElement('img');
        decoration_1(d,b);
        d.setAttribute('src',images[i].url);
        d.setAttribute('alt',images[i].alt);
        a.appendChild(b);
        b.appendChild(c);
        a.appendChild(d);
        let para=document.createElement('p');
        let text2=document.createTextNode('Price:  '+images[i].price);

        decoration_2(para,text2);
       let div=document.createElement('div');
       div.setAttribute('style','border-top: 4px groove #D809D8;');
        myImgs.appendChild(div);
        a.appendChild(para);
        myImgs.appendChild(a);

    }

};

let decoration_1= function (img,figcaption){
    img.classList.add('Size_image');
    figcaption.classList.add('caption_1');
};

let decoration_2=(data_para,text_2)=>{
    data_para.style.color="red";
    data_para.style.textAlign="center";
    data_para.classList.add('Price');
    data_para.appendChild(text_2);
    data_para.appendChild(text_2);
    return data_para;
};

/*------------------------------------------------------------*/

