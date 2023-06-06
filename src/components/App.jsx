import { Component } from 'react';
import { Layout } from './Layout';
import { BreedSelect } from './BreedSelect';

export class App extends Component {

  

  render(){
    return (
      <Layout>
      <BreedSelect/>
      </Layout>
    );
  };
};
