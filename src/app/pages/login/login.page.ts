import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //CREAMOS LAS VARIABLES
  user: string;
  password: string;

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }
  //vamos a crear un método
  login(){
    if(this.user == 'admin' && this.password=='admin'){
      this.router.navigate(['/home'])
    }else{
      this.toastError();
    }
  }


  async toastError() {
    const toast = await this.toastController.create({
      message: 'USUARIO O CONTRASEÑA ERRONEO.',
      duration: 3000
    });
    toast.present();
  }
}
