## useInput

Simple hook to avoid re-writting onChange handler for input again and again..

### Usage

```bash
 $ yarn add use-input-react
```

```javascript
import useInput from 'use-input-react';

const App = () => {
  const { value, handleChange } = useInput('');

  return <input value={value} onChange={handleChange} />;
};

export default App;
```
