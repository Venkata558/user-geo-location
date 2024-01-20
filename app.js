var showDetails = document.querySelector(".showDetails");
document.querySelector(".geo-btn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        showDetails.textContent = `The latitude ${latitude} & the longitude ${longitude}`;
        console.log(position);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
});
