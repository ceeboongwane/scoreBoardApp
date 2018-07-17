import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import  Teams  from '../home/home';

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  homeScore:number = 0;
  awayScore:number = 0;
  teamChooser:any;
  hpenaltyCounter:number = 0;
  apenaltyCounter:number = 0;
  htryCounter:number = 0;
  atryCounter:number = 0;
  hconCounter:number = 0;
  aconCounter:number = 0;

  homeTeam = Teams[0];
  awayTeam = Teams[1];

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  choosed = function(name){
    if( name == 'home')
    {
      this.teamChooser = 'home';
    }
    else
    {
      this.teamChooser = 'away';
    }
    
    
  }

  

  try = function(){
    if(this.teamChooser == 'home'){
      this.homeScore = this.homeScore + 5;
      this.htryCounter += 1;
    } else if(this.teamChooser == 'away'){
      this.awayScore += 5;
      this.atryCounter += 1;
    } else {
      const toast = this.toastCtrl.create({
        message: 'You did not choose a team',
        showCloseButton: true,
        closeButtonText: 'Close',
        position: 'middle'
      });
      toast.present();
    }
    this.teamChooser = '';
  }

  penalty = function(){
    if(this.teamChooser == 'home'){
      this.homeScore = this.homeScore + 3;
      this.hpenaltyCounter += 1;
    } else if(this.teamChooser == 'away'){
      this.awayScore = this.awayScore + 3;
      this.apenaltyCounter += 1;
    } else {
      const toast = this.toastCtrl.create({
        message: 'You did not choose a team',
        showCloseButton: true,
        closeButtonText: 'Close',
        position: 'middle'
      });
      toast.present();
    }
    this.teamChooser = '';
  }

  conversion = function(){
    if(this.teamChooser == 'home'){
      this.homeScore = this.homeScore + 2;
      this.hconCounter += 1;
    } else if(this.teamChooser == 'away'){
      this.awayScore = this.awayScore + 2;
      this.aconCounter += 1;
    } else {
      const toast = this.toastCtrl.create({
        message: 'You did not choose a team',
        showCloseButton: true,
        closeButtonText: 'Close',
        position: 'middle'
      });
      toast.present();
    }
    this.teamChooser = '';
  }

  unDo = function() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your mistake',
      buttons: [
        {
          text: 'Conversion',
          handler: () => {
            if(this.teamChooser == 'home'){
              if(this.hconCounter >= 1){
                this.homeScore = this.homeScore - 2;
                this.hconCounter -= 1;
              } else {
                const toast = this.toastCtrl.create({
                  message: 'You did not add a convertion',
                  showCloseButton: true,
                  closeButtonText: 'Close',
                  position: 'middle'
                });
                toast.present();
              }
              
            } else if(this.teamChooser == 'away'){
              if(this.aconCounter >= 1){
                this.awayScore = this.awayScore - 2;
                this.aconCounter -= 1;
              } else {
                const toast = this.toastCtrl.create({
                  message: 'You did not add a convertion',
                  showCloseButton: true,
                  closeButtonText: 'Close',
                  position: 'middle'
                });
                toast.present();
              }
              
            } else {
              const toast = this.toastCtrl.create({
                message: 'You did not choose a team',
                showCloseButton: true,
                closeButtonText: 'Close',
                position: 'middle'
              });
              toast.present();
            }
            this.teamChooser = '';
          }
        },{
          text: 'Penalty',
          handler: () => {
            console.log('Archive clicked');
            if(this.teamChooser == 'home'){
              if(this.hpenaltyCounter >= 1){
                this.homeScore = this.homeScore - 3;
                this.hpenaltyCounter -= 1;
              } else {
                const toast = this.toastCtrl.create({
                  message: 'You did not add a penalty',
                  showCloseButton: true,
                  closeButtonText: 'Close',
                  position: 'middle'
                });
                toast.present();
              }
              
            } else if(this.teamChooser == 'away'){
              
              if(this.apenaltyCounter >= 1){
                this.awayScore = this.awayScore - 3;
                this.apenaltyCounter -= 1;
              } else {
                const toast = this.toastCtrl.create({
                  message: 'You did not add a penalty',
                  showCloseButton: true,
                  closeButtonText: 'Close',
                  position: 'middle'
                });
                toast.present();
              }

            } else {
              const toast = this.toastCtrl.create({
                message: 'You did not choose a team',
                showCloseButton: true,
                closeButtonText: 'Close',
                position: 'middle'
              });
              toast.present();
            }
            this.teamChooser = '';
          }
        },{
          text: 'Try',
          handler: () => {
            console.log('Archive clicked');
            if(this.teamChooser == 'home'){
              if(this.htryCounter >= 1){
                this.homeScore = this.homeScore - 5;
                this.htryCounter -= 1;
              } else {
                const toast = this.toastCtrl.create({
                  message: 'You did not add a try',
                  showCloseButton: true,
                  closeButtonText: 'Close',
                  position: 'middle'
                });
                toast.present();
              }
              
            } else if(this.teamChooser == 'away'){
              if(this.atryCounter >= 1){
                this.awayScore = this.awayScore - 5;
                this.atryCounter -= 1;
              } else {
                const toast = this.toastCtrl.create({
                message: 'You did not add a try',
                showCloseButton: true,
                closeButtonText: 'Close',
                position: 'middle'
              });
              toast.present();
              }
              
            } else {
              const toast = this.toastCtrl.create({
                message: 'You did not choose a team',
                showCloseButton: true,
                closeButtonText: 'Close',
                position: 'middle'
              });
              toast.present();
            }
            this.teamChooser = '';
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  reset(){
    this.navCtrl.pop();
  }

}
