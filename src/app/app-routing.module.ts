import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PginicioComponent } from './pginicio/pginicio.component';
import { PgqsComponent } from './pgqs/pgqs.component';



const routes: Routes = [
{path: 'pginicio', component:PginicioComponent },
{path: 'pgqs', component:PgqsComponent },



{path: '', component:PgqsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
