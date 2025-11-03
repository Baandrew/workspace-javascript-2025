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
    name: document.getElementById("guestname").value,
    checkin : document.getElementById("checkin").value,
    roomtype : document.getElementById("room").value,
};
guestgroup.push(guest);
consolwe.log(guestgroup);
}


//register event
document.getElementById("register").addEventListener("click", reservation);