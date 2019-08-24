import Modal from 'configs/swal';

export default async function tie(action) {
  return Modal.fire('Empate!').then(result => result.value && action());
}
