import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import { DialogComponent} from '@syncfusion/ej2-react-popups'
import * as React from 'react';
import '../../App.css';


export class ContentTemplate extends React.Component {
  public dialogInstance: DialogComponent;
  public dialogInstance1: DialogComponent;
  public state: {[key: string]: boolean};
  public path = {
    removeUrl: 'http://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
    saveUrl: 'http://aspnetmvc.syncfusion.com/services/api/uploadbox/Save'
  }
  public buttons: any = [{
        // Accessing button component properties by buttonModel property
    buttonModel: {
        // Enables the primary button
      content: 'OK',
      cssClass: 'e-flat',
      isPrimary: true,
        
    },
    // Click the footer buttons to hide the Dialog
    'click': () => {
        this.dialogInstance1.hide();
    }
}];

  public AddSecondComp() {
    this.dialogInstance1.show();
  }
  public render() {
    return (
      <div className="App">
    <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.AddSecondComp=this.AddSecondComp.bind(this)} >Open</button>
     <DialogComponent showCloseIcon={true} buttons={this.buttons} header={'Content template'}  width='300px' locale='fr-BE' content='Rendered a component inside dialog.' 
        target='#container'  ref={dialog1 => this.dialogInstance1 = dialog1!}><UploaderComponent autoUpload={false} asyncSettings={this.path} /></DialogComponent>
      </div>
    );
  }
}
