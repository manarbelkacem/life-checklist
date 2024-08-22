import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListType} from "./list.type";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  checklistItems:ListType[]=
    [
      { label: '👶 Be born', checked: true },
      { label: '🚶‍ Take first steps', checked: false },
      { label: '📣 Say first words', checked: false },
      { label: '📖 Learn to read', checked: false },
      { label: '🤗 Make a friend', checked: false },
      { label: '🚴‍ Learn to ride a bike', checked: false },
      { label: '📗 Read a book', checked: false },
      { label: '🏊‍ Learn to swim', checked: false },
      { label: '🏫 Finish elementary school', checked: false },
      { label: '⚽ Play a sport', checked: false },
      { label: '🛫 Fly in a plane', checked: false },
      { label: '🛥️ Ride a boat', checked: false },
      { label: '🚆 Ride in a train', checked: false },
      { label: '🚁 Ride a helicopter', checked: false },
      { label: '🌊 See the ocean', checked: false },
      { label: '❄️ See snow', checked: false },
      { label: '☃️ Make a snowman', checked: false },
      { label: '🏫 Finish middle school', checked: false },
      { label: '🎶 Go to a concert', checked: false },
      { label: '🏕️ Go camping', checked: false },
      { label: '🎢 Ride a roller coaster', checked: false },
      { label: '🎻 Play an instrument', checked: false },
      { label: '💋 Get kissed', checked: false },
      { label: '💳 Get a credit card', checked: false },
      { label: '🚘 Start driving', checked: false },
      { label: '🗺️ Go on a roadtrip', checked: false },
      { label: '🗾 Visit another country', checked: false },
      { label: '🎤 Give a speech', checked: false },
      { label: '🏫 Graduate high school', checked: false },
      { label: '🌐 Learn another language', checked: false },
      { label: '💸 Invest some money', checked: false },
      { label: '📷 Meet an idol', checked: false },
      { label: '😩 Make a terrible mistake', checked: false },
      { label: '🏆 Win a trophy', checked: false },
      { label: '⛰️ Climb a mountain', checked: false },
      { label: '🎽 Run a marathon', checked: false },
      { label: '🍳 Learn to cook', checked: false },
      { label: '🔦 Explore a cave', checked: false },
      { label: '🌋 See a volcano', checked: false },
      { label: '🎓 Graduate college', checked: false },
      { label: '💕 Have a long relationship', checked: false },
      { label: '🗑️ Get dumped', checked: false },
      { label: '🖊️ Sign a contract', checked: false },
      { label: '🏢 Get a job', checked: false },
      { label: '☝️ Get promoted', checked: false },
      { label: '💵 Get a paycheck', checked: false },
      { label: '🔥 Get fired', checked: false },
      { label: '📰 Get in the news', checked: false },
      { label: '🗳️ Vote in an election', checked: false },
      { label: '🔀 Switch careers', checked: false },
      { label: '🏠 Buy a house', checked: false },
      { label: '💍 Get engaged', checked: false },
      { label: '👰 Get married', checked: false },
      { label: '👶 Have a kid', checked: false },
      { label: '🚶‍ Teach your kid to walk', checked: false },
      { label: '📣 Teach your kid to talk', checked: false },
      { label: '🎓 Watch your kid graduate', checked: false },
      { label: '👰 Watch your kid get married', checked: false },
      { label: '👴 Become a grandparent', checked: false },
      { label: '🏖️ Retire', checked: false },
      { label: '📔 Tell your grandkid a story', checked: false },
      { label: '🌑 See a solar eclipse', checked: false },
      { label: '🌷 Plant a garden', checked: false },
      { label: '🌎 Travel the world', checked: false },
      { label: '🎂 Turn 100', checked: false },
      { label: '✔️ Complete Life Checklist', checked: false },
    ]

  getNumberOfCheckedItems():number{
    let totalChecked=0;
    for (let i = 0; i < this.checklistItems.length; i++) {
      if(this.checklistItems[i].checked==true){
        totalChecked++;
      }
    }
    return totalChecked;
  }
}
