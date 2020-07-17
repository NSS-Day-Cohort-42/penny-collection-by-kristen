import { usePennies, after2015Pennies } from "./PennyDataProvider.js";
import { pennyAsHTML } from "./Penny.js";

export const PennyList = () => {
    const arrayOfPennies = usePennies()
    const arrayOfRecentPennies = after2015Pennies()

    const contentTarget = document.querySelector(".container")

    let pennyHTMLRepresentations = ""

    for(const penny of arrayOfPennies){
        pennyHTMLRepresentations += pennyAsHTML(penny)
    }

    let recentPennyHTMLRepresentations = ""

    for(const penny of arrayOfRecentPennies){
        recentPennyHTMLRepresentations += pennyAsHTML(penny)
    }

    contentTarget.innerHTML += `
        <article class="pennyList">
            <h2>Kristen's Penny Collection</h2>
            ${pennyHTMLRepresentations}
            <h3>Recent Pennies</h3>
            ${recentPennyHTMLRepresentations}
        </article>
    `
}