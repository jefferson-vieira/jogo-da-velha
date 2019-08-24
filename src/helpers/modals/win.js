import Modal from 'configs/swal';

export default async function win(player, action) {
  return Modal.fire(`O jogador ${player} venceu!`).then(result => {
    return result.value && action();
  });
}
