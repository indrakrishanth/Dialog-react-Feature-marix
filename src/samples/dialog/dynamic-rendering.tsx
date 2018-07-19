import { DialogComponent} from '@syncfusion/ej2-react-popups'
import * as React from 'react';
import '../../App.css';


export class DynamicRendering extends React.Component {
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
        this.dialogInstance1.hide();
    }
}];
  constructor(props:any) {
    super(props);
    this.state = {
      inputLinkClicked: false
    }
  }

  public AddSecondComp() {
    this.setState({
      inputLinkClicked: true
    })
    if(this.dialogInstance1 !=null) {
      this.dialogInstance1.show();
    }
  }
  public render() {
    return (
      <div className="App">
    <button className='e-control e-btn' id='targetButton1' role='button' onClick={this.AddSecondComp=this.AddSecondComp.bind(this)} >Open</button>
      {
        this.state.inputLinkClicked? <DialogComponent showCloseIcon={true} buttons={this.buttons} header={'Dynamic rendering'}  width='300px' locale='fr-BE' content='The dialog is created dynamically!' 
        target='#container'  ref={dialog1 => this.dialogInstance1 = dialog1!} />: ''
      }
      </div>
    );
  }
}
