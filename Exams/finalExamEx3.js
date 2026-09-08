function messagesManager(input) {
    let capacity = Number(input.shift());
    let users = {};

    for (let command of input) {
        if (command === "Statistics") {
            break;
        }

        let [action, ...tokens] = command.split("=");

        if (action === "Add") {
            let [username, sent, received] = tokens;
            sent = Number(sent);
            received = Number(received);

            if (!(username in users)) {
                users[username] = {
                    sent,
                    received
                };
            }

        } else if (action === "Message") {
            let [sender, receiver] = tokens;

            if (sender in users && receiver in users) {
                users[sender].sent++;

                if (users[sender].sent + users[sender].received >= capacity) {
                    delete users[sender];
                    console.log(`${sender} reached the capacity!`);
                }

                users[receiver].received++;

                if (users[receiver] && users[receiver].sent + users[receiver].received >= capacity) {
                    delete users[receiver];
                    console.log(`${receiver} reached the capacity!`);
                }
            }

        } else if (action === "Empty") {
            let [username] = tokens;

            if (username === "All") {
                users = {};
            } else {
                delete users[username];
            }
        }
    }

    console.log(`Users count: ${Object.keys(users).length}`);

    for (let [username, stats] of Object.entries(users)) {
        console.log(`${username} - ${stats.sent + stats.received}`);
    }
}

messagesManager([
    "12",
    "Add=Bonnie=3=5",
    "Add=Johny=4=4",
    "Empty=All",
    "Add=Bonnie=3=3",
    "Statistics"
]);
