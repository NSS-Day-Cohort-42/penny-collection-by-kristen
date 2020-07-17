export const pennyAsHTML = (pennyObj) => {
    return `
    <section class="penny">
        <div class="penny__description">${pennyObj.description}</div>
        <div class="penny__obtained">Was obtained at ${pennyObj.location} in ${pennyObj.yearObtained}</div>
    </section>
    `
}