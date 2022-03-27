package com.projetospring.crud.controller;

import java.util.ArrayList;

import com.projetospring.crud.models.Pessoa;
import com.projetospring.crud.service.PessoaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pessoa")
public class PessoaController {
    
    @Autowired
    PessoaService pessoaService;

    @GetMapping
    public ResponseEntity<ArrayList<Pessoa>> findAll(){
        ArrayList<Pessoa> pessoas = pessoaService.findAll();
        
        return new ResponseEntity<ArrayList<Pessoa>>(pessoas, HttpStatus.OK);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<String> cadastrarPessoa(@RequestBody Pessoa pessoa){
        pessoaService.cadastrarPessoa(pessoa);
        return new ResponseEntity<String>("Criado", HttpStatus.CREATED);
    }
}
