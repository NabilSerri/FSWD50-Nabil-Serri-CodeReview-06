class locations  {
    place:string;
    city:any;
    ZipCode:number;
    address:string;
    image:string;
    WebAddress:string;
    Created:string;

     constructor(place,city,ZipCode,address,image,Created,WebAddress?){
     this.place=place;    
     this.city=city;
     this.ZipCode=ZipCode;
     this.address=address;
     this.image=image;
     this.Created=Created;
     this.WebAddress=WebAddress;
}
     render(){
         return `
                <div class="card col-lg-3 col-md-6 col-xs-12 mb-2 wow fadeInUp">
                    <img id="img" class="card-img-top" src="${this.image}">
                    <div class="card-body">
                        <h5 class="card-title">${this.place}</h5>
                        <p class="card-text"><address><i class="fas fa-map-marker-alt"></i> ${this.address}, ${this.ZipCode},${this.city}</address></p>
                    </div>
                <div class="card-footer">
                    <small class="text-muted">${this.Created}</small>
                </div>
                </div>
         `;
     }
 }
 let res1 = new locations  ("St. Charles Church","Vienna",1010,"Karlsplatz 1","img/Church.jpg","24.03.2018 12:45");
 let res2 = new locations ("Zoo Vienna","Wien",1130,"Maxingstraße","img/Zoo.jpg","27.07.2018 5:45");
 let res3 = new locations  ("Wiener Rathaus","Wien",1010," Friedrich-Schmidt-Platz 1","img/6.jpg","18.04.2018 04:00");
 let res4 = new locations  ("Burggarten","Vienna",1010,"Josefsplatz","img/1.jpg","12.05.2018 12:00");
 let res5 = new locations  ("Graben","Vienna",1010,"Graben","img/2.jpg","07.06.2018 14:10");
 let res6 = new locations  ("Hofburg Imperial Palace","Vienna",1010,"Michaelerkuppel","img/3.jpg","25.12.2018 16:45");
 let res7 = new locations  ("Hundertwasserhaus","Vienna",1010,"Kegelgasse","img/4.jpg","13.11.2018 18:15");
 let res8 = new locations  ("Ringstrasse","Vienna",1010,"Ringstrasse","img/5.jpg","04.04.2018 04:45");
 
 class restaurant extends locations {
     TelephoneNumber;
     Type;
      constructor(place,city,ZipCode,address,image,Created,TelephoneNumber,Type,WebAddress?){
          super(place,city,ZipCode,address,image,WebAddress,Created);
          this.TelephoneNumber=TelephoneNumber;
          this.Type=Type;
}
      render(){
          return `
        <div class="card col-lg-3 col-md-6 col-xs-12 mb-2 wow fadeInUp">
            <img id="img" class="card-img-top" src="${this.image}">
            <div class="card-body">
                <h5 class="card-title">${this.place}</h5>
                <p class="card-text"><address><i class="fas fa-map-marker-alt"></i> ${this.address}, ${this.ZipCode},${this.city}</address></p>
                <p><a href="${this.WebAddress}">${this.WebAddress}</a></p>
                <p><a href="${this.TelephoneNumber}"><i class="fas fa-phone"></i>${this.TelephoneNumber}</a></p>
                <p>${this.Type}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">${this.Created}</small>
            </div>
        </div>
        `;
      }
 }
let res9 = new restaurant ("Lemon Leaf Thai Restaurant","Vienna",1050,"Kettenbrückengasse","img/Lemon.png","www.lemonleaf.at","+43(1)5812308","Asian","01.01.2017 8:45");
let res10 = new restaurant ("SIXTA","Wien",1050,"Schönbrunner Straße 21 ","img/SIXTA.png","www.sixta-restaurant.at","+43 1 58 528 56 l +43 1 58 528 56","RESTAURANT - BAR","07.01.2018 08:21");

class events extends locations {
    EventDate;
    EventTime;
    TicketPrice;
    constructor(EventDate,EventTime,TicketPrice,place,city,ZipCode,address,image,Created,WebAddress?){
        super(place,city,ZipCode,address,image,WebAddress,Created);
        this.EventDate=EventDate;
        this.EventTime=EventTime;
        this.TicketPrice=TicketPrice;
    }
    render(){
          return `
            <div class="card col-lg-3 col-md-6 col-xs-12 mb-2 wow fadeInUp">
                <img id="img" class="card-img-top" src="${this.image}">
                <div class="card-body">
                    <h5 class="card-title">${this.place}</h5>
                    <p><a href="${this.WebAddress}">${this.WebAddress}</a></p>
                    <p class="card-text"><i class="fas fa-map-marker-alt"></i><address>${this.address}, ${this.ZipCode},${this.city}</address></p>
                    <p>${this.EventDate} ,${this.EventTime}</p>
                    <p><i class="fas fa-euro-sign"></i> ${this.TicketPrice}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">${this.Created}</small>
                </div>
            </div>
          `;
      }
}
let res11 = new events ("Fr., 15.11.2018","20:00","58,50","Kris Kristofferson","Wien",1150,"Wiener Stadthalle - Halle F,Roland Rainer Platz 1","img/Kris .jpg","http://kriskristofferson.com/","06.04.2018 09:30");
let res12 = new events ("Sat, 09.12.2019","19:30","47,80","Lenny Kravitz","Wien",1150,"Wiener Stadthalle - Halle D ,Roland Rainer Platz 1","img/Lenny .jpg","http://www.lennykravitz.com/","11.11.2018 04:49");

let result=[res1,res2,res3,res4,res5,res6,res7,res8,res9,res10,res11,res12];
for (let res of result){
document.getElementById("demo").innerHTML+=res.render();
}
function ascending(a,b){
    const placeA = a.Created;
    let test1 = placeA.replace(/\./g, '').replace(/\ /g, '').replace(/\:/g, '').substring(2,8);
    console.log(test1);
    const placeB = b.Created;
    let test2 = placeB.replace(/\./g, '').replace(/\ /g, '').replace(/\:/g, '').substring(2,8);
    let comparison = 0;
    if (+test1 > +test2) {
    comparison = +1;
  } else if (+test1 < +test2) {
    comparison = -1;
  }
  return comparison;
}
 $("#demo").text("");
 var sorted= result.sort(ascending);
for (let k = 0; k< sorted.length ; k++) {
document.getElementById("demo").innerHTML+= sorted[k].render();
  
}

