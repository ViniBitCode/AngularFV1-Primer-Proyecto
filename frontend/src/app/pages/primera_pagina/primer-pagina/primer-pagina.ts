import { Component } from '@angular/core';
import { Login } from '../../../components/login/login';
import { NextOrigin } from '../../../components/next-origin/next-origin';
import { Third } from '../../../components/third/third';
import { Fourth } from '../../../components/fourth/fourth';
import { Home } from "../../../components/home/home";

@Component({
  selector: 'app-primer-pagina',
  imports: [Login, NextOrigin, Fourth],
  templateUrl: './primer-pagina.html',
  styleUrl: './primer-pagina.scss',
})
export class PrimerPagina {

}
