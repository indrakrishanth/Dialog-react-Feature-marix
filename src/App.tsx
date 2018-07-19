import * as React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router,  Route } from "react-router-dom";
import './App.css';
// samples
import { ContentTemplate } from  './samples/dialog/content-template';
import { Default } from './samples/dialog/dialog-default';
import { DialogTemplate } from './samples/dialog/dialog-template';
import { DynamicRendering } from './samples/dialog/dynamic-rendering';

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 left-pane">
              <div>
                <div className='control-list'>
                  <div className="group-name"><h2>React Feature-matrix</h2></div>
                  <Link className='e-btn e-flat e-info items component' to="/content-template">Content-Template</Link>
                  <Link className='e-btn e-flat e-info items component' to="/dialog-default">Default</Link>
                  <Link className='e-btn e-flat e-info items component' to="/dynamic-rendering">Dynamic-Rendering</Link>
                  <Link className='e-btn e-flat e-info items component' to="/dialog-template">Dialog-Template</Link>
                </div>
                <div className="sample-section">
                  <Route path="/content-template" component={ContentTemplate} />
                  <Route path="/dialog-default" component={Default} />
                  <Route path="/dynamic-rendering" component={DynamicRendering} />
                  <Route path="/dialog-template" component={DialogTemplate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}