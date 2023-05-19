import { Component, Input ,Output, OnInit, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit{

  @Input() rooms: RoomsList[] = [];
//the child component will send data to parent component with the selected room data
  @Output() selectedRoom = new EventEmitter<RoomsList>();
  constructor(){

  }
  ngOnInit(): void {
    
  }
  selectRoom(room: RoomsList){
    //once room is selected, data is emitted back to parent
    this.selectedRoom.emit(room);
  }

}
