fetch("data.json")
.then((response)=>{
     return response.json();
}).then((data)=>{
   //console.log(data);
     display_info(data.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info){
     let card=document.createElement("div");
     card.classList.add("card");

    let heading=document.createElement("h2");
    heading.textContent=info.name;

     bodyElement.append(card);
     card.append(heading);

    let line=document.createElement("hr");
    card.append(line);

    let line1=document.createElement("h2");line1.textContent=info.role;
    card.append(line1);
    
    let line3=document.createElement("a");
    line3.href="mailto:"+info.email;
    line3.textContent=info.email;
    card.append(line3);

    let br=document.createElement("br");
    card.append(br);

      let mobile=document.createElement("a");
      mobile.href="tel"+info.mobile;
      mobile.textContent=info.mobile;
     card.append(mobile);

      var button=document.createElement("a");
      button.textContent="View Profile";
      button.classList.add("btn");
      card.append(button);

    
     
}
