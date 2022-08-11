import Button from './components/Button';
import { useActive } from './hooks/useActive';

import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import ImageUploadContainer from './containers/ImageUploadContainer';
import PredictionsContainer from './containers/PredictionsContainer';
import Footer from './components/Footer';

function App(): JSX.Element {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<ImageUploadContainer />} />
        <Route path='predictions' element={<PredictionsContainer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
