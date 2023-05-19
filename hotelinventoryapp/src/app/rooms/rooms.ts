//interface is used to create a user defined data type
export interface Rooms{
    totalRooms: number;
    bookedRooms: number;
    availableRooms: number;
}

export interface RoomsList{
    roomNumber: number;
    roomType: string;
    amneties: string;
    price: number;
    photos: string;
    checkInTime: Date;
    checkOutTime: Date;
}