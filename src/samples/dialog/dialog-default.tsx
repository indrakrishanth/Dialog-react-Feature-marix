import { DialogComponent} from '@syncfusion/ej2-react-popups'
import * as React from 'react';
import '../../App.css';

export class Default extends React.Component {
  public dialogInstance: DialogComponent;
  public dialogInstance1: DialogComponent;
  public state: {[key: string]: boolean};
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
            this.dialogInstance.hide();
        }
    }];
    public handleClick() {
        this.dialogInstance.show();   
    }

    public render() {
        return (
        <div className="App">
        <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.handleClick=this.handleClick.bind(this)} >Open</button>

        <DialogComponent width='250px' buttons={this.buttons} header='Dialog' showCloseIcon={true} content='This is a default dialog rendering' 
        target='#container'  ref={dialog => this.dialogInstance = dialog!}/>

        </div>
        );
    }
}