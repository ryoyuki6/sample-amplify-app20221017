import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Header } from "./ui-components";


const content1 = <p>タブ1のコンテンツ</p>;  // ①
const content2 = <p>タブ2のコンテンツ</p>;  // ②
const content3 = <p>タブ3のコンテンツ</p>;  // ③
const content4 = <p>タブ4のコンテンツ</p>;  // ④


function App() {
  return (
    <div>
      <Header className="my-4"/>
      <p>※これは、UIコンポーネントを利用した表示です。</p>
      <ul className="nav nav-tabs">
        <li className="nav-item">
        <a href="#tab1" className="nav-link active" 
          data-bs-toggle="tab">List</a>
        </li>
        <li className="nav-item">
        <a href="#tab2" className="nav-link" 
          data-bs-toggle="tab">Create</a>
        </li>
        <li className="nav-item">
        <a href="#tab3" className="nav-link" 
          data-bs-toggle="tab">Update</a>
        </li>
        <li className="nav-item">
        <a href="#tab4" className="nav-link" 
          data-bs-toggle="tab">Delete</a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="tab1" className="my-2 tab-pane active">
          { content1 }
        </div>
        <div id="tab2" className="my-2 tab-pane">
          { content2 }
        </div>
        <div id="tab3" className="my-2 tab-pane">
          { content3 }
        </div>
        <div id="tab4" className="my-2 tab-pane">
          { content4 }
        </div>
      </div>
      <p className="my-2">
        <a className="btn btn-primary" href="."
        onClick={Auth.signOut}>
        Sign Out
      </a></p>
    </div>
  );
}


export default withAuthenticator(App);