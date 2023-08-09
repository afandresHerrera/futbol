import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralServicesService } from 'src/app/services/general-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario!: FormGroup

  constructor(private fb: FormBuilder, private generalService: GeneralServicesService, private router: Router) {
    this.usuario = this.fb.group({
      Usuario: [null, Validators.required],
      Password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }


  login() {
    console.log('login');
    console.log(this.usuario);

    if (this.usuario.valid) {
      this.router.navigate(['listarEquipos'])
      // this.generalService.login(this.usuario.value)
      //   .subscribe({
      //     next: (res) => {
      //       console.log(res);
      //     },
      //     error: (e) => console.error(e)
      //   });
    }
  }



}
