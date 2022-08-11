interface props {
  name: String;
  type: 'primary' | 'secondary';
  trigger?: () => void;
  active: boolean;
}

const style = {
  primary: 'bg-red-500',
  secondary: 'bg-green-500',
};

export default function Button({
  name,
  type,
  trigger,
  active,
}: props): JSX.Element {
  return (
    <button
      onClick={trigger}
      className={` py-4 px-12 text-white rounded-md ${style[type]} ${
        active && 'bg-[black] border-2 border-slate-500'
      } `}
    >
      {name}
    </button>
  );
}
