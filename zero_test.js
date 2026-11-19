let i_apout = document.getElementById("i_apout")
let main = document.getElementById("main")
let cards = document.getElementById("cards")
let apoutt = document.getElementById("apout")
let navbar = document.getElementById("navbar")
let i_home = document.getElementById("i_home")
let contact_us = document.getElementById("contact_us")
let i_contact = document.getElementById("i_contact")
let currency_to = document.getElementById("currency_to")
let currency_from = document.getElementById("currency_from")
let value_to = document.getElementById("value_to")
let value_from = document.getElementById("value_from")
let hiden = document.getElementsByClassName("hiden")
let more = document.getElementById("more")
let ca_cny = document.getElementById("ca_cny")
let icon_repalse = document.getElementById("icon_repalse")

let contact_form = document.getElementById("contact-form");

let notfcation =document.getElementById("notfcation")



function apout(){
    main.style.display="none"
    contact_us.style.display="none"
    cards.style.display="none"
    apoutt.style.display="block"
    i_apout.style.background="#0606e4"
    i_home.style.background="none"
    i_contact.style.background="none"
    i_apout.style.borderRadius = "20px";
    
}

function Home(){
    main.style.display=""
    cards.style.display=""
    contact_us.style.display="none"
    apoutt.style.display="none"
    i_home.style.background="#0606e4"
    i_apout.style.background="none"
    i_contact.style.background = "none";
    i_home.style.borderRadius = "20px";

}

function contact(){
    main.style.display="none"
    contact_us.style.display="flex"
    cards.style.display="none"
    apoutt.style.display="none"
    i_apout.style.background="none"
    i_home.style.background="none"
    i_contact.style.borderRadius = "20px";
    i_contact.style.background="#0606e4"

}



async function get_prices(){
    try{
    const url = `https://api.frankfurter.dev/v2/rates?base=${currency_from.value}&quotes=${currency_to.value}`
    const res_price = await fetch(url)

    if(!res_price.ok){
        throw Error(`this price is not avalapel now ${res_price.status} `)
    }
    const data = await res_price.json()
    for(let i = 0; i<data.length;i++){
        
        value_to.value=(data[i].rate *value_from.value).toFixed(2)
       
    }



    }catch (error){
        console.log(error.message)

    }
    
}
get_prices()

function see_more(){
    for(let card of hiden){
        card.classList.toggle("remove")

        
    }
    if(ca_cny.classList.contains("remove")){
            more.innerHTML = "see less"
    }else{
        more.innerHTML = "see More"
    }

    

    
}


function replase(){
    let rep = currency_from.value
    currency_from.value=currency_to.value
    currency_to.value=rep
    get_prices()
   


    
}

emailjs.init({
    publicKey: "Ej1nuHg11gbk0lKAc"
});


contact_form.addEventListener("submit", function(e) {
    e.preventDefault()
    emailjs.sendForm(
        "service_np6euqi",
        "template_oulelga",
        contact_form
    )
    .then(function() {
        notfcation.style.display="block"

        

        setTimeout(function(){
            notfcation.style.display="none"

        },2000)
        
        contact_form.reset();
    })
    .catch(function(error) {
        console.log(error);
    });

    

});

