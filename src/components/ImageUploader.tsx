export default function ImageUploader({ upload }): JSX.Element {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img
          src='https://placeimg.com/400/225/arch'
          alt='Shoes'
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Upload an Image</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions'>
          {/* <label htmlFor='image' className='btn btn-primary'>
            Upload
          </label> */}
          <input
            className='btn btn-primary'
            name='image'
            type='file'
            accept='image/png, image/jpeg'
            onChange={(e) =>
              upload({ data: e.target.files[0], timeAdded: Date.now() })
            }
          />
        </div>
      </div>
    </div>
  );
}
