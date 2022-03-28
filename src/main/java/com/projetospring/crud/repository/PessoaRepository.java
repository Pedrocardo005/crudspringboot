package com.projetospring.crud.repository;

import java.util.ArrayList;

import com.projetospring.crud.models.Pessoa;

import org.springframework.stereotype.Repository;

@Repository
public class PessoaRepository {
    private ArrayList<Pessoa> pessoas = new ArrayList<Pessoa>();

    public void cadastrarPessoa(Pessoa pessoa) {
        this.pessoas.add(pessoa);
    }

    public ArrayList<Pessoa> findAll() {
        return this.pessoas;
    }

    public void deletar(String cpf) {
        for (int i = 0; i < pessoas.size(); i++) {
            Pessoa pessoa = pessoas.get(i);
            if(pessoa.getCpf().equals(cpf)) {
                pessoas.remove(i);
            }
        }
    }
}
