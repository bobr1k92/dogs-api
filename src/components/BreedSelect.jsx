import { fetchBreeds } from 'api';
import { Component } from 'react';
import Select from 'react-select';

  
export class BreedSelect extends Component {
    state = {
        breeds: [],
        isLoading: false,
    };


    async componentDidMount() {
        try {
            this.setState({isLoading: true})
            const fetchedBreeds = await fetchBreeds();
            this.setState({breeds: fetchedBreeds});
        } catch (error) {

        } finally {
            this.setState({isLoading: false})
        }
     }
    render() {
        const options = this.state.breeds.map(breed => ({
            value: breed.id,
            label: breed.name,
        }));


        return (
            <div>
            <Select options={options} 
            isLoading={this.state.isLoading} 
            onChange={option => console.log(option)}/>
            </div>
        );
    };  
};
