// import { Component, OnInit, Input} from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';

// @Component({
//   selector: 'app-invoice',
//   templateUrl: './invoice.page.html',
//   styleUrls: ['./invoice.page.scss'],
// })
// export class InvoicePage implements OnInit {

//   @Input() order: any;
//   content!: string;
//   constructor(private modalContrller: ModalController, private pdfGenerator: PDFGenerator) {
//   }
//   closeModal() {
//     this.modalContrller.dismiss();
//   }
//   downloadInvoice() {
//     this.content = document.getElementById('PrintInvoice').innerHTML;
//     let options = {
//       documentSize: 'A4',
//       type: 'share',
//       // landscape: 'portrait',
//       fileName: 'Order-Invoice.pdf'
//     };
//     this.pdfGenerator.fromData(this.content, options)
//       .then((base64) => {
//         console.log('OK', base64);
//       }).catch((error) => {
//         console.log('error', error);
//       });

//   }
//   ngOnInit() {
//     console.log('Invoice Page2', this.order);
//   }
// }
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx'; // Correct import statement

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
})
export class InvoicePage implements OnInit {

  @Input() order: any;
  content!: string;
  
  constructor(private modalController: ModalController, private pdfGenerator: PDFGenerator) {
  }
  
  closeModal() {
    this.modalController.dismiss();
  }
  
  downloadInvoice() {
    this.content = document.getElementById('PrintInvoice')!.innerHTML; // Use ! to assert non-null
    let options = {
      documentSize: 'A4',
      type: 'share',
      // landscape: 'portrait',
      fileName: 'Order-Invoice.pdf'
    };
    this.pdfGenerator.fromData(this.content, options)
      .then((base64) => {
        console.log('OK', base64);
      }).catch((error) => {
        console.log('error', error);
      });
  }
  
  ngOnInit() {
    console.log('Invoice Page2', this.order);
  }
}

