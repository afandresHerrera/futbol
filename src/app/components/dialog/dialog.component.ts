import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralServicesService } from 'src/app/services/general-services.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public usuario!: FormGroup
  @Input() edit!: string;
  @Input() item!: any;
  @Output() outputEmiter = new EventEmitter<string>();





  constructor(private fb: FormBuilder, private generalService: GeneralServicesService,
    private datepipe: DatePipe) {
    this.usuario = this.fb.group({
      capacidad: [null, Validators.required],
      entrenador: [null, Validators.required],
      estadio: [null, Validators.required],
      fundacion: [null, Validators.required],
      nacionalidad: [null, Validators.required],
      nombre: [null, Validators.required],
      sitioWeb: [null, Validators.required],
      valor: [null, Validators.required],
      id: [null]
    })
  }

  ngOnInit() {
    console.log(this.edit);
    console.log(this.item);
    if (this.edit == 'editar') {
      this.usuario.patchValue(this.item)
    }

  }


  agregarEditar() {
    if (this.usuario.valid) {
      if (this.edit == 'editar') {
        console.log(this.edit, 'entrando a editar');

      } else {
        console.log(this.edit, 'entrando a crear');
        // this.usuario.controls['fundacion'].setValue(this.datepipe.transform(this.usuario.controls['fundacion'].value, 'dd-MM-YYYY'));
        console.log(this.usuario.controls['fundacion'].value);

        this.generalService.create(this.usuario.value)
          .subscribe({
            next: (res) => {
              console.log(res);
            },
            error: (e) => console.error(e)
          });
      }
    }
  }


  emmitEvent() {
    this.outputEmiter.emit('');

  }

}
