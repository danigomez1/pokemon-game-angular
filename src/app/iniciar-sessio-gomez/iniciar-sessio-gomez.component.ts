import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ServeiJugadorService} from "../servei-jugador.service";

@Component({
  selector: 'app-iniciar-sessio-gomez',
  templateUrl: './iniciar-sessio-gomez.component.html',
  styleUrls: ['./iniciar-sessio-gomez.component.css']
})
export class IniciarSessioGomezComponent implements OnInit {
  nomJugador:any
  puntsJugador:any
  constructor(private router: Router, private s : ServeiJugadorService) { }

  ngOnInit(): void {
  }

  enviarJuagador () {
    localStorage.setItem("usuariActual", this.nomJugador)
    localStorage.setItem("puntsActual", this.puntsJugador)
    this.s.nomJugador = this.nomJugador;
    this.s.puntsJugador = this.puntsJugador;
    this.router.navigate(['./game']);
  }
}
