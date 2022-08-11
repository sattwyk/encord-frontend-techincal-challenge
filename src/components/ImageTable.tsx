import PredictModal from './PredictModal';

const bytesToMegaBytes = (bytes: number) => (bytes / 1024 ** 2).toFixed(2);

export default function ImageTable({ rows }: { rows: any[] }) {
  const tableRows = rows.map(
    ({ data, timeAdded }: { data: any; timeAdded: any }, index: number) => (
      <tr key={`Table Row: ${index + 1}`}>
        <th>{index + 1}</th>
        <td className='truncate'>{data.name}</td>
        <td>{bytesToMegaBytes(data.size)} mb</td>
        <td>{new Date(timeAdded).toLocaleTimeString()}</td>
        <td>
          <PredictModal />
        </td>
      </tr>
    )
  );

  return (
    <div>
      <table className='table table-zebra w-full'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Size</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}
