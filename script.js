document.getElementById("codeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredCode = document.getElementById("codeInput").value;

    const TEST      = "0000";
    const KATE      = "BigKittyQuishMe";
    const MEG       = "MilanoCookie";
    const MOM       = "SheIsAbroad";
    const DAD       = "BlooberTurtle";
    const GRANDAD   = "ButtonMan";
    const MEGHAN    = "Bubby<3";
    const MEME      = "IdkChangeThisLater";

    switch (enteredCode) {
        case TEST:
            window.location.href = "/chrimmas/test.html";
            break;
        case KATE: // done?
            window.location.href = "/chrimmas/kate.html";
            break;
        case MEG:
            window.location.href = "/chrimmas/meg.html";
            break;
        case MOM: // done
            window.location.href = "/chrimmas/mom.html";
            break;
        case DAD: // done
            window.location.href = "/chrimmas/dad.html";
            break;
        case GRANDAD:
            window.location.href = "/chrimmas/grandad.html";
            break;
        case MEGHAN: // done
            window.location.href = "/chrimmas/meghan.html";
            break;
        case MEME: // TODO: fix code and maybe add some stuff?
            window.location.href = "/chrimmas/meme.html";
            break;
        case "HINT1":
            window.location.href = "/hint1.html"
            break;
        case "HINT2":
            window.location.href = "/hint2.html"
            break;
        case "HINT3":
            window.location.href = "/hint3.html"
            break;
        default:
            break;
    }
});
