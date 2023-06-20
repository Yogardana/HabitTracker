var checkboxes = document.querySelectorAll('.checkbox');
var streakCount = 0;

var pair1Container = document.getElementById('pair1-container');
var pair1CheckedCountElement = document.getElementById('pair1-checkedCount');
var pair1CheckedCount = 0;

var pair2Container = document.getElementById('pair2-container');
var pair2CheckedCountElement = document.getElementById('pair2-checkedCount');
var pair2CheckedCount = 0;

var pair3Container = document.getElementById('pair3-container');
var pair3CheckedCountElement = document.getElementById('pair3-checkedCount');
var pair3CheckedCount = 0;

var pair4Container = document.getElementById('pair4-container');
var pair4CheckedCountElement = document.getElementById('pair4-checkedCount');
var pair4CheckedCount = 0;

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', toggleCheckbox);
});

function toggleCheckbox() {
  this.classList.toggle('checked');
  var checkmark = this.querySelector('.checkmark');
  checkmark.style.display = this.classList.contains('checked') ? 'block' : 'none';
  updateStreakCount();
}

function updateStreakCount() {
    pair1CheckedCount = document.querySelectorAll('#pair1-container .checkbox.checked').length;
    pair1CheckedCountElement.textContent = pair1CheckedCount;

    pair2CheckedCount = document.querySelectorAll('#pair2-container .checkbox.checked').length;
    pair2CheckedCountElement.textContent = pair2CheckedCount;

    pair3CheckedCount = document.querySelectorAll('#pair3-container .checkbox.checked').length;
    pair3CheckedCountElement.textContent = pair3CheckedCount;

    pair4CheckedCount = document.querySelectorAll('#pair4-container .checkbox.checked').length;
    pair4CheckedCountElement.textContent = pair4CheckedCount;
}

function updateStatus() {
    var pair1StatusElement = document.getElementById('pair1-status');
    pair1StatusElement.textContent = pair1CheckedCount === pair1Items.length ? 'Complete' : 'Progress';
  
    var pair2StatusElement = document.getElementById('pair2-status');
    pair2StatusElement.textContent = pair2CheckedCount === pair2Items.length ? 'Complete' : 'Progress';
  }


  function submitForm(event) {
    event.preventDefault(); // Menghentikan pengiriman form secara default
    var usernameInput = document.getElementById("username");
    var username = usernameInput.value;
    localStorage.setItem("username", username); // Menyimpan username di localStorage
    window.location.href = "home.html"; // Pindah ke halaman 
  }
  
  var username = localStorage.getItem("username");
  var greeting = document.getElementById("greeting");
  greeting.textContent = "Halo, " + username + "!";


//button add
window.addEventListener('DOMContentLoaded', (event) => {
  const addButton = document.querySelector('button[type="button"]');
  const habitForm = document.getElementById("habitForm");

  addButton.addEventListener('click', () => {
    toggleFormVisibility();
  });

  function toggleFormVisibility() {
    if (habitForm.style.display === "none") {
      habitForm.style.display = "block";
    } else {
      habitForm.style.display = "none";
    }
  }
});
