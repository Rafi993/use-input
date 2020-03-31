## useInput

Simple hook to avoid re-writting onChange handler for input again and again..

### To use

```javascript
import useInput from 'use-input';

const App = () => {
  const { value, handleChange } = useInput('');

  return <input value={value} onChange={handleChange} />;
};

export default App;
```
