// test for object
var guest = {
    name: "John Doe",
    date : "oct 17 2025",
    room : 205,
    rate : 150.00,
    display: function() {return this.name + this.otherguest;}
};


// hotel registration
function reservation() {
// get  user reservation info
var guest = {
    guestname: document.getElementById("guestname").value,
    checkin : document.getElementById("checkin").value,
    guestgroup : document.getElementById("guestgroup").value,
    roomtype : document.getElementById("room").value,
};
guestgroup.push(guest);
consolwe.log(guestgroup);
}
// show reservation
function showbookings() { 
    // show the whole guestgroup
    var message= "";
    for(var i in guestgroup) {
        var guest = guestgroup[i];
        message += "<li>" + guest.guestname + " " + guest.checkin + " " + guest.roomtype + "</li>";
    }
    // display through alert or display on the page
    document.getElementById("listofbooking").innerHTML = message;

}

//register event
document.getElementById("register").addEventListener("click", reservation);
// put event listner
document.getElementById("lists").addEventListener("click", listbooking);
// click the list reservation button to show bookings
function listbooking() {
    var list = "<h2>Current Reservations</h2><ul>";}