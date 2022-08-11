export default function PredictModal(): JSX.Element {
  return (
    <>
      <label htmlFor='my-modal-6' className='btn modal-button'>
        Predict
      </label>

      <input type='checkbox' id='my-modal-6' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-6'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h3 className='text-lg font-bold'>
            Congratulations random Internet user!
          </h3>

          <div className='card mt-5 card-side bg-base-100 shadow-xl'>
            <figure>
              <img src='https://placeimg.com/200/280/arch' alt='Movie' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>New movie is released!</h2>
              <div className='form-control w-full max-w-xs'>
                <label className='label'>
                  <span className='label-text'>Add Title</span>
                </label>
                <input
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                />
                <label className='label'>
                  <span className='label-text'>Add Description</span>
                </label>
                <textarea
                  className='textarea textarea-bordered h-12'
                  placeholder='Bio'
                ></textarea>
              </div>
            </div>
          </div>

          <div className='modal-action'>
            <label htmlFor='my-modal-6' className='btn'>
              Submit
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
