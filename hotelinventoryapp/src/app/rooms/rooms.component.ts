import { Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './rooms';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})


export class RoomsComponent implements OnInit{
  hotelName = "Hilton";
  numberOfRooms = 12;
  roomsVisibility = false;
  message = "Your booking is confirmed!!";

  rooms: Rooms = {
    totalRooms: 20,
    bookedRooms: 10,
    availableRooms: 10,
    };

    roomsList: RoomsList[]=[];
selectedRoom: any;

  

  constructor(){
    
  }
  ngOnInit(): void {
    
    this.roomsList = [
      {
      roomNumber: 101,
      roomType: 'Delux room',
      amneties: 'Air conditioner, Free wi-fi, Tv, Bathroom, Kitchen',
      price: 5000,
      photos: "https://images.oyoroomscdn.com/uploads/hotel_image/1097/340ea5ee01acc37f.jpg",
      checkInTime: new Date('01-Feb-2023'),
      checkOutTime: new Date('03-Feb-2023'),
  },
  {
    roomNumber: 102,
    roomType: 'Standard room',
    amneties: 'Air conditioner, Free wi-fi, Tv, Bathroom',
    price: 3000,
    photos: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    checkInTime: new Date('07-Feb-2023'),
    checkOutTime: new Date('10-Feb-2023'),
},
{
  roomNumber: 103,
  roomType: 'Suite',
  amneties: 'Air conditioner, Free wi-fi, Tv, Bathroom, Kitchen, Jacuzzi',
  price: 1500,
  photos: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  checkInTime: new Date('21-Feb-2023'),
  checkOutTime: new Date('23-Feb-2023'),
},
]
  }
  toggle(){
    this.roomsVisibility = true;
  }

  selectRoom(room: RoomsList){
    this.selectedRoom = room;
   
  }

  confirmAlert(){
    alert(this.message);
  }
 
  addRoom(){
    const room: RoomsList={
      roomNumber: 104,
      roomType: 'Deluxe Suite',
      amneties: 'Air conditioner, Free wi-fi, Tv, Bathroom, Kitchen, Jacuzzi',
      price: 1500,
      photos: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      checkInTime: new Date('21-Feb-2023'),
      checkOutTime: new Date('23-Feb-2023'),
    };
    this.roomsList.push(room);
    alert("New Room added");
  }

}
