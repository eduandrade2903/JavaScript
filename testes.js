function Name(name,sobreNome) {
    this.name = name;
    this.sobreNome = () => {
        const nomeCompleto = `${this.name} ${this.sobreNome} `;
        return this.sobreNome;
    }
}

const edu = new Name("Eduardo"," Andrade");

console.log(edu);