document.getElementById("codeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredCode = document.getElementById("codeInput").value;

    // TODO: add actual codes
    const TEST = "0000";
    const KATE = "BigKittyQuishMe";
    const MEG = "MilanoCookie"
    const MOM = "SheIsAbroad"
    const DAD = "BlooberTurtle"
    const GRANDAD = "ButtonMan";
    const MEGHAN = "Bubby<3"
    const MEME = "IdkChangeThisLater"

    switch (enteredCode) {
        case TEST:
            window.location.href = "/chrimmas/test.html"
            break
        case KATE:
            window.location.href = "/chrimmas/kate.html"
            break;
        case MEG:
            window.location.href = "/chrimmas/meg.html"
            break;
        case MOM:
            window.location.href = "/chrimmas/mom.html"
            break;
        case DAD:
            window.location.href = "/chrimmas/dad.html"
            break;
        case GRANDAD:
            window.location.href = "/chrimmas/grandad.html"
            break;
        case MEGHAN:
            window.location.href = "/chrimmas/meghan.html"
            break;
        case MEME:
            window.location.href = "/chrimmas/meme.html"
        default:
            break;
    }
});
