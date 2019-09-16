import Modal from 'configs/swal';

export default async function exit(action) {
  return Modal.fire({
    type: 'question',
    title: 'Espera...',
    text: 'Quer mesmo sair do jogo?',
    confirmButtonText: 'Quero!',
    cancelButtonText: 'Ops...'
  }).then(result => result.value && action());
}
