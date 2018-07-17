import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ScorePage } from '../score/score';
import { Alert } from 'ionic-angular/components/alert/alert';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }


     startButton = function(home,away){
      const confirm = this.alertCtrl.create({
        title: 'Do wanna contineu with these teams?',
        message: 'Home team name is '+ home + ' Away team name is ' + away,
        buttons: [
          {
          text: 'Disagree',
          handler: () => {
          console.log('Disagree clicked');
        }
        },
        {
          text: 'Agree',
          handler: () => {
            Teams[0] = home;
            Teams[1] = away;
            
            this.navCtrl.push(ScorePage);
          }
        }
      ]
    });
    confirm.present();
  }

}
var Teams = new Array();
export default Teams;
