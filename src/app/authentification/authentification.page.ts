import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  constructor( private authService:AuthentificationService,private router:Router,public alertController: AlertController) { }

  ngOnInit() {
  }

  onLogin(user){
    this.authService.login(user)
    .subscribe(resp=>{
      console.log(resp);
      let jwt=resp.body['token'];
        this.authService.saveToken(jwt);
        console.log(resp);
        if(this.isSuperAdmin()){
          this.presentAlert();
          this.logout();
          this.router.navigateByUrl('/authentification');
        }
        if(this.isCaissier()){
          this.presentAlert();
          this.logout();
          this.router.navigateByUrl('/authentification');
        }
        if(this.isAdmin()){this.router.navigate(['/lister-transaction']);}
        if(this.isUser()){this.router.navigate(['/transaction']);}
      },err=>{
        console.log(err); 
    })

  }

  isAdmin(){
    return this.authService.isAdmin();
  }

  isUser(){
    return this.authService.isUser();
  }

  isSuperAdmin(){
    return this.authService.isSuperAdmin();
  }

  isCaissier(){
    return this.authService.isCaissier();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  logout(){
    return this.authService.logout();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Info',
      message: 'Désolé!Cette plateforme ne vous est pas destinée, veuillez utiliser la plateforme web!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
