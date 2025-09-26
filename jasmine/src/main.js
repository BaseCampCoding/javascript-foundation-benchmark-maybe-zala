class Booking{
    constructor(travelerName, destination, date, type){
        this.travelerName=travelerName
        this.destination=destination
        this.date=date 
        this.type=type
    }

    describe(travelerName,type, destination, date){
        console.log(`${travelerName} booked a ${type} to ${destination} on ${date}`)
    }
}

class FlightBooking extends Booking{
    constructor(travelerName, destination, date, type, flightNumber){
        super(travelerName, destination, date, type)
        this.flightNumber=flightNumber
    }
    describe(travelerName,type, destination, date, flightNumber){
        console.log(`${travelerName} booked a ${type} to ${destination} on ${date} (Flight Number: ${flightNumber})`)

    }
}

bookings=[
    new Booking ("Andy Warhol", "California", "2025-3-15", "Plane"),
    new Booking ("Jimi Hendrix", "Louisana", "2025-10-13", "Train"),
    new Booking ("Michael Jackson", "Pennsylvania", "2025-5-27", "Bus")
]
console.log(bookings)
function addBooking(newPerson){
    bookings.push(newPerson)
}

function removeBooking(newPerson){
    bookings.splice(newPerson)
}

function displayBooking(bookingsArray){
    console.log("All bookings:")
  for (let i = 0; i < bookingsArray.length; i++) {
    const booking = bookingsArray[i]
    console.log(bookingsArray.describe())
  }
}

function bookingType(allBookings, getBookingsByType){
    console.log(`All ${bookingType} bookings:`);
  for(let b=0; b<bookingsArray.length; b++){
    return allBookings.filter(booking => booking.type == getBookingsByType);
}
}
