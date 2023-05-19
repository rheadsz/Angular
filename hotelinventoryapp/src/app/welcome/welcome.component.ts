import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  my_img = "assets/t&i.jpg";
  heading = "Pushing the envelope ";
  content = "With more personalized, digital service, every stay feels unique to you and your preferences.";
  buttonClick = false;

  tech(){
    this.my_img = "assets/t&i.jpg";
    this.heading = "Pushing the envelope ";
    this.content = "With more personalized, digital service, every stay feels unique to you and your preferences.";
    this.buttonClick = true;
  }
  tb(){
    this.my_img = "assets/f&b.jpg";
    this.heading = "Raise your glass to bold local flavors";
    this.content = "Discover bold flavors at our energetic bars, buzzworthy restaurants, and convenient grab-and-go dining.";
    this.buttonClick = true;
  }
  im(){
    this.my_img = "assets/meet.jpg";
    this.heading = "Your meeting. Our mission.";
    this.content = "Uniquely designed spaces and seamlessly integrated technology for meetings that will wow and inspire.";
    this.buttonClick = true;
  }
  our_hotels(){
    this.my_img = "assets/hotel_img.jpg";
    this.heading = "Warmth of hospitality";
    this.content = "With passion, vibrancy, and pride from the Hilton name, we work to make each and every stay with us memorable.";
    this.buttonClick = true;
  }
  hh(){
    this.my_img = "assets/honors.jpg";
    this.heading = "Enhance the way you stay";
    this.content = "As a member, enjoy a more seamless and rewarding way to travel. Get more value from your stays with exclusive member rates, lowest price guaranteed, plus free WiFi. Enjoy more flexibility & control with our Hilton Honors app–check in, choose your room, and go straight to your door with Contactless Arrival. Earn Points on every stay and use towards Free Nights or redeem with our exclusive partners.";
    this.buttonClick = true;
  }
}
