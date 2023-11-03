document.addEventListener("DOMContentLoaded", function () {
    const roomTypesList = document.getElementById("roomTypesList");

    
    const roomTypesData = [
        {
            name: "Standard Room",
            capacity: 2,
            rate: "$100",
            features: "TV, AC"
        },
        {
            name: "Deluxe Suite",
            capacity: 4,
            rate: "$200",
            features: "TV, AC, Balcony"
        }
        
    ];

    
    roomTypesData.forEach(function (roomType) {
        const li = document.createElement("li");
        li.innerHTML = `
            <h3>${roomType.name}</h3>
            <p>Maximum Guest Capacity: ${roomType.capacity}</p>
            <p>Rate per Night: ${roomType.rate}</p>
            <p>Special Features: ${roomType.features}</p>
        `;
        roomTypesList.appendChild(li);
    });
});