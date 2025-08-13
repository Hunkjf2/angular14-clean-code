import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-cabecalho',
    templateUrl: 'cabecalho.component.html',
})
export class CabecalhoComponent  {

    @Input() public titulo: string | undefined = ''

}
