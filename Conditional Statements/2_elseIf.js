let userSubscription = "premium";

if(userSubscription == "unsubscribed") {
    console.log("Show pricing page");
} else if(userSubscription == "super") {
    console.log("Show hindi content only");
} else { //userSubscription == "premium"
    console.log("show all content");
}