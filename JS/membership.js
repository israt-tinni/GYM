const membershipPlans = [
    {
        name: "Pass 'Trial'",
        cost: "$ 0",
        features: [
            "Access to the gym from 8:00 to 14:00",
            "The trainer on duty will introduce you to the gym"
        ]
    },
    {
        name: "Pass 'Easy Start'",
        cost: "$ 119",
        features: [
            "Visit without restrictions 24/7",
            "Individual training program",
            "Access to the VTRAINER application",
            "Trainer support"
        ]
    },
    {
        name: "Pass 'Free Time'",
        cost: "$ 49",
        features: [
            "The entrance time to the gym is from 14:00 to 16:00",
            "Without suspension of gym membership",
            "The trainer on duty will introduce you to the gym"
        ]
    },
    {
        name: "Pass '1 Month 24/7'",
        cost: "$ 85",
        features: [
            "Visit without restrictions 24/7",
            "The trainer on duty will introduce you to the gym"
        ]
    },
    {
        name: "Pass 'In Shape (AM)'",
        cost: "$ 165",
        features: [
            "Training in mini-groups until 14:00",
            "Without suspension of gym membership",
            "Classes with a trainer in a mini-group 3 times a week",
            "Trainer support"
        ]
    },
    {
        name: "Pass 'In Shape (PM)'",
        cost: "$ 195",
        features: [
            "Training in mini-groups until 17:00",
            "Without suspension of gym membership",
            "Classes with a trainer in a mini-group 3 times a week",
            "Trainer support"
        ]
    },
]

function renderMembershipPlan() {
    const memberBox = document.getElementById('member-box');
    memberBox.innerHTML = membershipPlans.map(val =>`
        <div class="member-item">
            <p class="pass">${val.name}</p>
            <p class="cost">${val.cost}</p>
            <div class="member-fasility">
                <ul class="fasility-item">
                    ${
                        val.features.map(feature=>`
                            <li>
                                <img src="./images/icons/check-icon.png">
                                <spam>${feature}</spam>
                            </li>
                            `).join('')
                    }
                </ul>
            </div>
            <button id="buy">BUY</button>
        </div>
    `).join('')
}

document.addEventListener("DOMContentLoaded",()=>{
    renderMembershipPlan();
})