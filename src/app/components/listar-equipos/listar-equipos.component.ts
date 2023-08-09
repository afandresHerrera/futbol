import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralServicesService } from 'src/app/services/general-services.service';

@Component({
  selector: 'app-listar-equipos',
  templateUrl: './listar-equipos.component.html',
  styleUrls: ['./listar-equipos.component.css']
})
export class ListarEquiposComponent implements OnInit {

  public personalFormGroupDebtor!: FormGroup
  public listTeam: any[] = []
  p: number = 1
  itemProPage: number = 8
  totalItems: number = 0
  public view: boolean = false
  public edit: string = ''
  public item: any



  constructor(private fb: FormBuilder, private generalService: GeneralServicesService) {
    this.personalFormGroupDebtor = this.fb.group({
      Nombre: [null, Validators.required],
      docuEstadio: [null, Validators.required],
      web: [null, Validators.required],
      nacionalidad: [null, Validators.required],
      anio_funcaion: [null, Validators.required],
      Entrenador: [null, Validators.required],
      Capacidad: [null, Validators.required],
      Valor: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.generalService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.listTeam = data.content;
      },
      error: (e) => console.error(e)
    });
  }

  changeValueEdit(accion: string, item: any) {
    console.log(item);

    this.item = item
    this.edit = accion;
      const maybeMyElement = document.getElementById('editRegister')
      maybeMyElement?.click()
  }

  receiveMessage($event: any) {
    // this.messageErrors = $event;
    this.edit = $event;
  }

}
