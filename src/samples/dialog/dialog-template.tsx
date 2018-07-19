import { DialogComponent} from '@syncfusion/ej2-react-popups'
import * as React from 'react';
import '../../App.css';
import './template.css';

export class DialogTemplate extends React.Component {
    
    private dialogInstance: DialogComponent;
    public header(data: any): JSX.Element {
        return (
        <div>
            <img className="img2" src="https://ej2.syncfusion.com/products/typescript/dialog/template/images/1.png"/>
            <div id="dlg-template" title="Nancy" className="e-icon-settings">Nancy</div>
        </div>
        )
    }
    public footerTemplate(data: any): JSX.Element {
        return (
            <div>
                <input id="inVal" className="e-input" type="text" placeholder="Enter your message here!"/>
                <button id="sendButton" className="e-control e-btn e-primary" data-ripple="true">Send</button>
            </div>
        )
    }
    public content(data: any): JSX.Element {
        return (
            <div className="dialogContent">
                <span className="dialogText">Greetings Nancy! When will you share me the source files of the project?</span>
            </div>
        )
    }
    public buttonClick() {
        this.dialogInstance.show();
    }
    public dialogClose() {
        (document.querySelectorAll('.dlgbtn')[0] as HTMLElement).style.display='inline-block';
    }
    public dialogOpen() {
        (document.querySelectorAll('.dlgbtn')[0] as HTMLElement).style.display='none';
    }

    public updateTextValue () : void {
        const enteredVal: HTMLInputElement = document.getElementById('inVal') as HTMLInputElement;
        const dialogTextElement: HTMLElement = document.getElementsByClassName('dialogText')[0] as HTMLElement;
        if ( enteredVal.value !== '') {
            dialogTextElement.innerHTML = enteredVal.value;
        }
        enteredVal.value = '';
    }
    public componentDidMount() {
        (document as any).getElementById('sendButton').onkeydown = (e: any) => {
                if (e.keyCode === 13) { this.updateTextValue(); }
        };

        (document as any).getElementById('inVal').onkeydown = (e: any) => {
            if (e.keyCode === 13) { this.updateTextValue(); }
        };

        (document as any).getElementById('sendButton').onclick = (): void => {
            this.updateTextValue();
        };
    }


  public render() {
    return (
      <div className="App">
    <div className='control-pane'>
        <div className='control-section row'>
            <div id='target' className='col-lg-12 target-element'>
            <button className="e-control e-btn dlgbtn" id='targetButton1' style={{position:'absolute'}} onClick={this.buttonClick = this.buttonClick.bind(this)}>Open</button>
            <DialogComponent header={this.header as any}
               footerTemplate= {this.footerTemplate as any}
               content= {this.content as any}
               showCloseIcon= {true}
               ref={dialog => this.dialogInstance = dialog! }
               target= '#target'
               width= {'437px'}
               open= {this.dialogOpen = this.dialogOpen.bind(this)}
               close= {this.dialogClose = this.dialogClose.bind(this)}
               height= {'255px'} />
            </div>
        </div>
    </div>
      </div>
    );
  }
}
