import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  

  {
    path : '',
    component :  RegisterComponent,
   
  } 
  ,{
    path : 'game',
    component : GameComponent
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
