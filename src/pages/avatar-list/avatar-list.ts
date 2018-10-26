import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GeneralProvider } from '../../providers/general/general';

/**
 * Generated class for the AvatarListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avatar-list',
  templateUrl: 'avatar-list.html',
})
export class AvatarListPage {
  comentarios;
  mensajeError: string;

  constructor(
    public navCtrl: NavController, 
    public general: GeneralProvider
    ) {
    this.general.get('comments').subscribe((data)=>{
      this.comentarios = data;
    },(err)=>{
      this.mensajeError ="Algo salio mal"
      if (err.message){
        this.mensajeError = err.message;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvatarListPage');
  }

  goToList(){
    this.navCtrl.push('ListMasterPage'); 

  }

}
