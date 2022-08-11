import { useState } from 'react';
import ImageTable from '../components/ImageTable';
import ImageUploader from '../components/ImageUploader';

export default function ImageUploadContainer(): JSX.Element {
  const [images, setImages] = useState([]);

  return (
    <main className='flex justify-center items-center gap-10 min-h-screen'>
      <ImageUploader
        upload={(image: any) => setImages((prev) => [...prev, image])}
      />
      {images.length > 0 && <ImageTable rows={images} />}
    </main>
  );
}
