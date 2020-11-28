import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [WrapperComponent, HeaderComponent, NavComponent, FooterComponent, ContentComponent],
  imports: [
    CommonModule
  ],
  exports:[WrapperComponent]
})
export class WrapperModule { }
