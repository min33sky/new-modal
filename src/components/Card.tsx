import { useModal } from '../contexts/modalContext';
import { VisaIcon } from '../Visa';

export default function Card() {
  const { onOpenModal: onOpen } = useModal();

  return (
    <div className="w-5xl mx-auto mt-24 max-w-[90%]">
      <h1 className="text-3xl font-medium text-violet-100">Billing details</h1>

      {/* ⬇️ Dark Component */}
      <div className="mt-4 flex flex-col rounded-2xl bg-gray-900 p-8 text-xl text-white">
        <p>Premium plan</p>
        <p className="text-sm">Your plan renews on 01/01/2024</p>

        <div className="mt-4 flex items-center gap-3 self-start rounded-2xl bg-gray-800 px-4 py-8">
          <div className="w-20 rounded-xl bg-white px-3 py-1">
            <VisaIcon />
          </div>
          <div>•••• •••• •••• 1234</div>
          <button
            onClick={onOpen}
            className="ml-8 rounded-md bg-gray-600 px-4 py-2 text-sm text-white transition-colors hover:bg-gray-700"
          >
            Change payment method
          </button>
        </div>
      </div>
    </div>
  );
}
