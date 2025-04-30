document.getElementById("designForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("Please fill all the required fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Form submitted successfully!");
  this.reset();
});

const dresses = [
  {
    image: "https://rooprekha.com/cdn/shop/files/3_2_42ec04e5-25f5-4223-a26d-73788f55ec18.jpg?v=1702811777&width=1445",
    title: "Half-saree",
    fabric: "Silk",
    meter: "8m",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3U5N9VFjS79KoZdSO3w724z3FohT-jOqH-A&s",
    title: "Elegant Wedding Gown",
    fabric: "Net",
    meter: "12m",
  }
];

const gallery = document.getElementById("gallery");

function renderGallery() {
  gallery.innerHTML = "";
  dresses.forEach((dress, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${dress.image}" alt="${dress.title}">
      <div class="details">
        <h3>${dress.title}</h3>
        <p><strong>Fabric:</strong> ${dress.fabric}</p>
        <p><strong>Meter:</strong> ${dress.meter}</p>
        <button class="btn">Request This Design</button>
        <button class="btn delete-btn" onclick="deleteDress(${index})">Delete</button>
      </div>
    `;
    gallery.appendChild(card);
  });
}

function deleteDress(index) {
  if (confirm("Are you sure you want to delete this dress?")) {
    dresses.splice(index, 1);
    renderGallery();
  }
}

document.getElementById("addDressForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const image = document.getElementById("imageUrl").value.trim();
  const title = document.getElementById("title").value.trim();
  const fabric = document.getElementById("fabric").value.trim();
  const meter = document.getElementById("meter").value.trim();

  if (!image || !title || !fabric || !meter) {
    alert("Please fill in all dress fields.");
    return;
  }

  dresses.push({ image, title, fabric, meter });
  renderGallery();
  this.reset();
});

