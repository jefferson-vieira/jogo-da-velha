import { createContext } from 'react';

const ComputerContext = createContext({
  isComputerActive: true,
  toggleComputerActive: () => {}
});
ComputerContext.displayName = 'ComputerContext';

export default ComputerContext;
