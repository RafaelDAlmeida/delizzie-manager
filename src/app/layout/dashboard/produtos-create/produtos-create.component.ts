import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.scss']
})
export class ProdutosCreateComponent implements OnInit {

  produtoFormGroup: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.produtoFormGroup = this.formBuilder.group({
      rota: new FormControl('', Validators.required),
      dataPlanejada: new FormControl('', Validators.required),
      /*condutor: new FormControl(''),
      fullCondutor: new FormControl(''),
      veiculo: new FormControl(''),
      residuoColetado: new FormControl('')*/
    });
  }

  executarServico(){
    console.log('salvar')
  }

  cancelar(){
    this.router.navigate(['/dashboard'])
  }

}
