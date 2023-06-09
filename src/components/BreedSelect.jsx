import { fetchBreeds } from 'api';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { ErrorMessage } from './ErrorMessage';

const ERROR_MSG = 'Что то пошло не так, перезагрузите страницу😔';

export const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBreeds() {
      try {
        setIsLoading(true);
        setError(null);
        const fetchedBreeds = await fetchBreeds();
        // setBreeds(prevState => [...prevState, ...fetchedBreeds];
        setBreeds(fetchedBreeds);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
      }
    }
    getBreeds();
  }, []);

  const options = breeds.map(breed => ({
    value: breed.id,
    label: breed.name
  }));

  return (
    <div>
      <Select
        options={options}
        isLoading={isLoading}
        onChange={option => onSelect(option.value)}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

// export class BreedSelect extends Component {
//   state = {
//     breeds: [],
//     isLoading: false,
//     error: null
//   };

//   async componentDidMount() {
//     try {
//       this.setState({ isLoading: true, error: null });
//       const fetchedBreeds = await fetchBreeds();
//       this.setState({ breeds: fetchedBreeds });
//     } catch (error) {
//       this.setState({ error: ERROR_MSG });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   }
//   render() {
//     const { breeds, isLoading, error } = this.state;
//     const options = breeds.map(breed => ({
//       value: breed.id,
//       label: breed.name
//     }));

//     return (
//       <div>
//         <Select
//           options={options}
//           isLoading={isLoading}
//           onChange={option => this.props.onSelect(option.value)}
//         />
//         {error && <ErrorMessage>{error}</ErrorMessage>}
//       </div>
//     );
//   }
// }
