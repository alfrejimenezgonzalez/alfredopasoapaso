import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { BecariosPageRoutingModule } from './becarios-routing.module';

import { BecariosPage } from './becarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BecariosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BecariosPage]
})
export class BecariosPageModule {}
