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
}
