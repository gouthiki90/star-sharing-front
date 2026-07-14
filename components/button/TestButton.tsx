interface TestButtonProps {
  onClick: () => void;
  text: string;
  loading?: boolean;
  disabled?: boolean;
}
export default function TestButton(props: TestButtonProps) {
  return (
    <div className="flex bg-white">
      <button onClick={props.onClick} className="flex hover:bg-gray-200">
        {props.text}
      </button>
    </div>
  );
}
