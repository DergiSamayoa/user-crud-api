

//aun por probar 
//modal hecho con sweet alert 2


import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const ModalDeleteConfirmation = () => {
  const handleClick = () => {
    const swalWithTailwindButtons = MySwal.mixin({
      customClass: {
        cancelButton: 'bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md',
        confirmButton: 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md',
      },
      buttonsStyling: false,
    });

    swalWithTailwindButtons.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithTailwindButtons.fire({
          title: 'Eliminado!',
          text: 'Tu usuario ha sido eliminado.',
          icon: 'success',
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithTailwindButtons.fire({
          title: 'Cancelado',
          text: 'Tu usuario imaginario no ha sido eliminado. :)',
          icon: 'error',
        });
      }
    });
  };

  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Click me!
      </button>
    </div>
  );
};

export default ModalDeleteConfirmation;

