export const modalService = {
    toggleModal
}

function toggleModal(state, elModal) {
    if (state) {
        elModal.classList.value = 'modal fade-in'
        document.body.classList.add('modal-open')
    } else {
        elModal.classList.value = 'modal fade-out'
        document.body.classList.remove('modal-open')
    }
}