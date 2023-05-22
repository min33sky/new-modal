import React from 'react';
import { useModal } from '../hooks/useModal';

interface ModalProps {
  content?: React.ReactNode; //? 모달 내용 바꿔치기할 때 사용하면 될 듯
}

const Modal = React.forwardRef<HTMLDialogElement, ModalProps>((props, ref) => {
  const { onCloseModal } = useModal();

  return (
    <dialog
      ref={ref}
      onSubmit={(e) => {
        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData.get('card-number'));
      }}
      onClose={(e) => {
        const target = e.target as HTMLDialogElement;
        console.log(target.returnValue);
      }}
      onClick={(e) => {
        const target = e.target as HTMLDialogElement;
        if (target.nodeName === 'DIALOG') target.close();
      }}
      className="text-md inset-0 block w-2/3 max-w-5xl translate-y-20 rounded-2xl p-0 opacity-0  transition-[opacity,transform] duration-300 backdrop:backdrop-blur-sm open:translate-y-0 open:opacity-100 [&:not([open])]:pointer-events-none "
    >
      <form method="dialog">
        <header className="relative rounded-t-2xl bg-white px-8 pt-6">
          <h1 className="text-2xl font-bold">Change your payment method</h1>
          <button
            type="button"
            onClick={onCloseModal}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 p-3 text-xl"
          >
            <span className="sr-only">close</span> &times;
          </button>
        </header>
        <main className="space-y-3 bg-white px-8 py-16">
          <div className="flex items-center">
            <label className="mr-auto w-1/3 text-gray-400">Card number</label>
            <input
              className="w-full rounded-lg border px-3 py-2"
              type="text"
              name="card-number"
            />
          </div>

          <div className="flex items-center">
            <label className="mr-auto w-1/3 text-gray-400">Expiration</label>
            <input
              className="w-full rounded-lg border px-3 py-2"
              type="text"
              name="expiration"
            />
          </div>

          <div className="flex items-center">
            <label className="mr-auto w-1/3 text-gray-400">CVC</label>
            <input
              className="w-full rounded-lg border px-3 py-2"
              type="password"
              name="cvc"
              placeholder="•••"
            />
          </div>
        </main>
        <footer className="flex justify-end gap-6 rounded-b-2xl bg-gray-100 px-8 py-4">
          <button className="text-gray-400" value="cancel">
            Cancel
          </button>
          <button
            className="rounded-xl bg-blue-500 px-5 py-3 text-white shadow-md transition-colors hover:bg-blue-600"
            value="submit"
          >
            Save changes
          </button>
        </footer>
      </form>
    </dialog>
  );
});

export default Modal;
