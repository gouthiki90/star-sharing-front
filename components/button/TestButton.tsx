"use client";

interface TestButtonProps {
  onClick: () => void;
  text: string;
  loading?: boolean;
  disabled?: boolean;
}

export default function TestButton(props: TestButtonProps) {
  return (
    <div className="flex bg-white">
      <button
        onClick={props.onClick}
        className="flex hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
      >
        {props.text}
      </button>
    </div>
  );
}
