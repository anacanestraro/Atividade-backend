import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";
import { AlunoDisciplina } from "./AlunoDisciplina";

// Criando a relação de muitos-para-muitos

Aluno.belongsToMany(Disciplina, {
    through:AlunoDisciplina,
    foreignKey:"alunoId"
});

Disciplina.belongsToMany(Aluno, {
    through: AlunoDisciplina,
    foreignKey:"disciplinaId"
});

console.log("Relações entre models configuradas!");