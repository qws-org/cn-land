const pageWrapper = document.querySelector(".page-wrapper");
let currentModal = null;

// Функция для открытия новой модалки и закрытия старой
const openModal = (modalId) => {
  const newModal = document.getElementById(modalId);

  if (currentModal) {
    currentModal.style.display = "none";
  }

  newModal.style.display = "block";
  pageWrapper.classList.add("modal-open");
  document.body.style.overflow = 'hidden';

  currentModal = newModal;
};

// Логика закрытия модалки
const closeModal = () => {
  if (currentModal) {
    currentModal.style.display = "none";
    pageWrapper.classList.remove("modal-open");
    document.body.style.overflow = 'auto';
    currentModal = null;
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  }
};

// Обработчики кликов на кнопки/ссылки для открытия модалок
const buttons = document.querySelectorAll("[data-target]");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const targetModalId = button.getAttribute("data-target");

    openModal(targetModalId);

    const elements = document.querySelectorAll(`#${button.id}`);
    elements.forEach((el) => {
      el.classList.add("active");
    });
  });
});

document.addEventListener("click", (e) => {
  if (currentModal && currentModal.contains(e.target)) {
    closeModal();
  }
});
