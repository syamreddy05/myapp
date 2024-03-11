import React from 'react'

import Coffee from './Coffee.css'


 const Coffe = () => {

    let Coffe= [
        { 
        name: "Espresso",
        price:300,
        image: "https://img.freepik.com/free-photo/view-3d-coffee-cup-with-roasted-beans_23-2151083732.jpg?size=626&ext=jpg"

    },

    {
        name: "Flat white",
        price:100,
        image: "https://w0.peakpx.com/wallpaper/872/53/HD-wallpaper-cup-coffee-coffee-beans-splash-steam-thumbnail.jpg"

    },
    {
        name: "Affogato",
        price:290,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSXEic2ZCv9wEXUA7KUsERVRvs4hUSQ3Lug&usqp=CAU"

    },
    {
        name: "Mocha",
        price:140,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_UcFOpn3msDo-qeKZ4kwsqGg7yccrm2sbDw&usqp=CAU"

    },
    {
        name: "Cold brew",
        price:90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfPHwjGXRRrm3jPeRUBN3L_f4huOt8p-sx6Q&usqp=CAU"

    },
    {
        name: "Doppio",
        price:350,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25WykRMaDVFW5xqeiRQkIBLGqgHOAmTOyPQ&usqp=CAU"

    },
    
     
    ]

    
  return (

    <div class="body">
        
             <div class="text"><h1>Coffee Shop</h1></div>

        {
            Coffe.map((value,index)=>(
                <div class="container">

                    <div> <img src={value.image} width={170} height={170} alt=""></img> </div>
                     <div>{value.name}</div>
                     <div> {value.price}</div>
                     <div> <button> ADD </button></div>
  
                </div>
            ))
        }

    </div>
  );
}

export default Coffe

