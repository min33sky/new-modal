import { VisaIcon } from '../Visa';
import { useModal } from '../hooks/useModal';

export default function Card() {
  const { onOpenModal } = useModal();

  return (
    <div className="w-5xl mx-auto max-w-[90%]">
      <div className="mt-4 flex flex-col rounded-2xl bg-gray-900 p-8 text-xl text-white">
        <p className="text-lg font-bold">Premium plan</p>
        <p className="mt-2 text-sm">Your plan renews on 01/01/2024</p>

        <div className="mt-4 flex items-center gap-3 self-start rounded-2xl bg-gray-800 px-4 py-8">
          <div className="w-16 rounded-xl bg-white px-3 py-1">
            <VisaIcon />
          </div>

          <div className="text-sm">•••• •••• •••• 1234</div>

          <button
            onClick={onOpenModal}
            className="ml-4 rounded-md bg-gray-600 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700"
          >
            Change Payment
          </button>
        </div>
      </div>
    </div>
  );
}
