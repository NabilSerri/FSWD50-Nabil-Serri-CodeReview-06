var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(place, city, ZipCode, address, image, Created, WebAddress) {
        this.place = place;
        this.city = city;
        this.ZipCode = ZipCode;
        this.address = address;
        this.image = image;
        this.Created = Created;
        this.WebAddress = WebAddress;
    }
    locations.prototype.render = function () {
        return "\n                <div class=\"card col-lg-3 col-md-6 col-xs-12 mb-2 wow fadeInUp\">\n                    <img id=\"img\" class=\"card-img-top\" src=\"" + this.image + "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.place + "</h5>\n                        <p class=\"card-text\"><address><i class=\"fas fa-map-marker-alt\"></i> " + this.address + ", " + this.ZipCode + "," + this.city + "</address></p>\n                    </div>\n                <div class=\"card-footer\">\n                    <small class=\"text-muted\">" + this.Created + "</small>\n                </div>\n                </div>\n         ";
    };
    return locations;
}());
var res1 = new locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/Church.jpg", "24.03.2018 12:45");
var res2 = new locations("Zoo Vienna", "Wien", 1130, "Maxingstraße", "img/Zoo.jpg", "27.07.2018 5:45");
var res3 = new locations("Wiener Rathaus", "Wien", 1010, " Friedrich-Schmidt-Platz 1", "img/6.jpg", "18.04.2018 04:00");
var res4 = new locations("Burggarten", "Vienna", 1010, "Josefsplatz", "img/1.jpg", "12.05.2018 12:00");
var res5 = new locations("Graben", "Vienna", 1010, "Graben", "img/2.jpg", "07.06.2018 14:10");
var res6 = new locations("Hofburg Imperial Palace", "Vienna", 1010, "Michaelerkuppel", "img/3.jpg", "25.12.2018 16:45");
var res7 = new locations("Hundertwasserhaus", "Vienna", 1010, "Kegelgasse", "img/4.jpg", "13.11.2018 18:15");
var res8 = new locations("Ringstrasse", "Vienna", 1010, "Ringstrasse", "img/5.jpg", "04.04.2018 04:45");
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(place, city, ZipCode, address, image, Created, TelephoneNumber, Type, WebAddress) {
        var _this = _super.call(this, place, city, ZipCode, address, image, WebAddress, Created) || this;
        _this.TelephoneNumber = TelephoneNumber;
        _this.Type = Type;
        return _this;
    }
    restaurant.prototype.render = function () {
        return "\n        <div class=\"card col-lg-3 col-md-6 col-xs-12 mb-2 wow fadeInUp\">\n            <img id=\"img\" class=\"card-img-top\" src=\"" + this.image + "\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">" + this.place + "</h5>\n                <p class=\"card-text\"><address><i class=\"fas fa-map-marker-alt\"></i> " + this.address + ", " + this.ZipCode + "," + this.city + "</address></p>\n                <p><a href=\"" + this.WebAddress + "\">" + this.WebAddress + "</a></p>\n                <p><a href=\"" + this.TelephoneNumber + "\"><i class=\"fas fa-phone\"></i>" + this.TelephoneNumber + "</a></p>\n                <p>" + this.Type + "</p>\n            </div>\n            <div class=\"card-footer\">\n                <small class=\"text-muted\">" + this.Created + "</small>\n            </div>\n        </div>\n        ";
    };
    return restaurant;
}(locations));
var res9 = new restaurant("Lemon Leaf Thai Restaurant", "Vienna", 1050, "Kettenbrückengasse", "img/Lemon.png", "www.lemonleaf.at", "+43(1)5812308", "Asian", "01.01.2017 8:45");
var res10 = new restaurant("SIXTA", "Wien", 1050, "Schönbrunner Straße 21 ", "img/SIXTA.png", "www.sixta-restaurant.at", "+43 1 58 528 56 l +43 1 58 528 56", "RESTAURANT - BAR", "07.01.2018 08:21");
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(EventDate, EventTime, TicketPrice, place, city, ZipCode, address, image, Created, WebAddress) {
        var _this = _super.call(this, place, city, ZipCode, address, image, WebAddress, Created) || this;
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.TicketPrice = TicketPrice;
        return _this;
    }
    events.prototype.render = function () {
        return "\n            <div class=\"card col-lg-3 col-md-6 col-xs-12 mb-2 wow fadeInUp\">\n                <img id=\"img\" class=\"card-img-top\" src=\"" + this.image + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.place + "</h5>\n                    <p><a href=\"" + this.WebAddress + "\">" + this.WebAddress + "</a></p>\n                    <p class=\"card-text\"><i class=\"fas fa-map-marker-alt\"></i><address>" + this.address + ", " + this.ZipCode + "," + this.city + "</address></p>\n                    <p>" + this.EventDate + " ," + this.EventTime + "</p>\n                    <p><i class=\"fas fa-euro-sign\"></i> " + this.TicketPrice + "</p>\n                </div>\n                <div class=\"card-footer\">\n                    <small class=\"text-muted\">" + this.Created + "</small>\n                </div>\n            </div>\n          ";
    };
    return events;
}(locations));
var res11 = new events("Fr., 15.11.2018", "20:00", "58,50", "Kris Kristofferson", "Wien", 1150, "Wiener Stadthalle - Halle F,Roland Rainer Platz 1", "img/Kris .jpg", "http://kriskristofferson.com/", "06.04.2018 09:30");
var res12 = new events("Sat, 09.12.2019", "19:30", "47,80", "Lenny Kravitz", "Wien", 1150, "Wiener Stadthalle - Halle D ,Roland Rainer Platz 1", "img/Lenny .jpg", "http://www.lennykravitz.com/", "11.11.2018 04:49");
var result = [res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12];
for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
    var res = result_1[_i];
    document.getElementById("demo").innerHTML += res.render();
}
function ascending(a, b) {
    var placeA = a.Created;
    var test1 = placeA.replace(/\./g, '').replace(/\ /g, '').replace(/\:/g, '').substring(2, 8);
    console.log(test1);
    var placeB = b.Created;
    var test2 = placeB.replace(/\./g, '').replace(/\ /g, '').replace(/\:/g, '').substring(2, 8);
    var comparison = 0;
    if (+test1 > +test2) {
        comparison = +1;
    }
    else if (+test1 < +test2) {
        comparison = -1;
    }
    return comparison;
}
$("#demo").text("");
var sorted = result.sort(ascending);
for (var k = 0; k < sorted.length; k++) {
    document.getElementById("demo").innerHTML += sorted[k].render();
}
