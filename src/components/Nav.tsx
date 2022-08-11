import { Link } from 'react-router-dom';
import { useActive } from './../hooks/useActive';

export default function Nav(): JSX.Element {
  const { images, predict, activeImages, activePredict } = useActive();

  return (
    <header className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>
          👽 Encord Frontend Technical Challenge 👾
        </a>
      </div>

      <nav className='tabs'>
        <Link
          to='/'
          onClick={activeImages}
          className={`tab tab-lg tab-lifted ${images && 'tab-active'}`}
        >
          Images
        </Link>
        <Link
          onClick={activePredict}
          to='predictions'
          className={`tab tab-lg tab-lifted ${predict && 'tab-active'}`}
        >
          Predictions
        </Link>
      </nav>
    </header>
  );
}
