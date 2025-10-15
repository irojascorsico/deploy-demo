import { Component, OnInit } from '@angular/core';
import { QuienesSomosService } from '../../services/quienes-somos.service';


@Component({
  selector: 'app-quienes-somos',
  imports: [],
  templateUrl: './quienes-somos.html',
  styleUrl: './quienes-somos.css'
})
export class QuienesSomos implements OnInit {

  profesionalList: { id: number, name: string; perfil: string, photo: string }[] = [];
  error:string="";

  btnColor: string = "btn btn-danger"

  constructor(private quienesSomosService: QuienesSomosService) {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("onInit")
    this.quienesSomosService.obtenerProfesionales().subscribe({
      next: (data) => {
        console.log(data);
        this.profesionalList = data;
      },
      error: (error) => {console.error(error);
      this.error="Ocurrió un error al cargar los datos";
      },
      complete: () => console.info('complete')
    });

  }

  crear() {
    const profesional = { id: "20", name: "Ana Pérez", perfil: "developer" };
    this.quienesSomosService.crearProfesional(profesional).subscribe(
      {
        next: (data) => {
          alert("Registro creado satisfactoriamente")
        },
        error: (error) => console.error(error),
        complete: () => console.info('complete')
      }
    )

  }
}
