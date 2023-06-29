fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((data)=>{
                    data.map((element) => {
                    let container=document.getElementById("container1")
                    let div=document.createElement("div");
                    div.className="demo";
                    let image=document.createElement("img");
                    let Title=document.createElement("div");
                    let Id=document.createElement("div");
                    let button=document.createElement("button");
                    let Cards=document.querySelectorAll("addcard i");
                    button.innerText="Add Card";
                    container.append(div);
                    div.append(image);
                    div.append(Id);
                    div.append(Title);
                    div.append(button);
                    image.src=element.image;
                    Id.innerText=element.id
                    Title.innerText=element.title;
                   let Ccontainer=document.getElementById("container");
                   let CAbut=document.getElementById("cardbut");
                   Ccontainer.style.display="none";
                   CAbut.addEventListener('click',()=>{
                     Ccontainer.style.display="block";
                  })
                    let searchbox=document.getElementById("input");
                    searchbox.addEventListener('input',(e)=>{
                     let searchboxvalue=e.target.value.toLowerCase().trim();
                    if(element.title.toLowerCase().includes(searchboxvalue)){
                     div.style.display='block';
                  }
                  else{
                     div.style.display='none'
                  }

            });
            let array=[];
           
               button.addEventListener('click',()=>{
                 
                  array.push(element);
                  console.log(array);
                  let count1=document.getElementById("counter");
                  count1.innerText=array.length+1;
                  console.log(count1);
               let addcarditem=document.getElementById("carditem");
               let Citem=document.createElement("div");
               Citem.className="citem"; 
               let Cimg=document.createElement("img");
               let Ctitle=document.createElement("p");
               let Cprice=document.createElement("h3");
               let Cdelbut=document.createElement("div");
               addcarditem.append(Citem);
               Citem.append(Cimg);
               Citem.append(Ctitle);
               Citem.append(Cprice);
               Citem.append(Cdelbut);
               Cdelbut.innerHTML='<i class="fa-sharp fa-solid fa-trash"></i>'
               console.log();

               Cimg.src=element.image;
               Ctitle.innerText=element.title;
               Cprice.innerText="$: " + element.price;
               Cdelbut.addEventListener('click',()=>{
                  Citem.remove();
               });
                     });  
            });    
          });


      




