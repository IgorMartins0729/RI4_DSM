import { Telefone } from "./models";
import { Cliente } from "./models";
import { Endereco } from "./models";
import { Empresa } from "./models";

const enderecoClienteJailton = new Endereco("SP","SJC","Rua Dair", 541)
const clienteJailton = new Cliente("Jailton", "123", enderecoClienteJailton)

const tel1Jailton = new Telefone("11", "999991111")
clienteJailton.telefones.add(tel1Jailton)

console.log("Cliente Maiúsculo:", clienteJailton.getMaisculo())
console.log("Cliente Minúsculo:", clienteJailton.getMinusculo())
console.log("CPF:", clienteJailton.getCPF())

const enderecoEmpresa = new Endereco("PB","SJC","Rua rua", 41)
const EmpresaTwiiter = new Empresa("Twitter", "Twitter LTDA", 123, enderecoEmpresa)

const tel1Twitter = new Telefone("11", "54333")
const tel2Twitter = new Telefone("11", "24444")

EmpresaTwiiter.telefones.add(tel1Twitter)
EmpresaTwiiter.telefones.add(tel2Twitter)

console.log("Empresa Maiúsculo:", EmpresaTwiiter.getMaisculo())
console.log("Empresa Minúsculo:", EmpresaTwiiter.getMinusculo())
console.log("CNPJ:", EmpresaTwiiter.getCNPJ())

const enderecoCliente1 = new Endereco("SP", "SJC", "Rua A", 10)
const cliente1 = new Cliente("Jailton", "123.456.789-00", enderecoCliente1)
cliente1.telefones.add(new Telefone("11", "99999-1111"))
cliente1.telefones.add(new Telefone("11", "99999-2222"))

const enderecoCliente2 = new Endereco("SP", "SJC", "Rua B", 20)
const cliente2 = new Cliente("Ana", "987.654.321-00", enderecoCliente2)
cliente2.telefones.add(new Telefone("11", "98888-3333"))
cliente2.telefones.add(new Telefone("11", "98888-4444"))

const enderecoCliente3 = new Endereco("SP", "SJC", "Rua C", 30)
const cliente3 = new Cliente("Carlos", "111.222.333-44", enderecoCliente3)
cliente3.telefones.add(new Telefone("11", "97777-5555"))
cliente3.telefones.add(new Telefone("11", "97777-6666"))

const enderecoCliente4 = new Endereco("SP", "SJC", "Rua D", 40)
const cliente4 = new Cliente("Beatriz", "555.666.777-88", enderecoCliente4)
cliente4.telefones.add(new Telefone("11", "96666-7777"))
cliente4.telefones.add(new Telefone("11", "96666-8888"))

const enderecoCliente5 = new Endereco("SP", "SJC", "Rua E", 50)
const cliente5 = new Cliente("Felipe", "999.888.777-66", enderecoCliente5)
cliente5.telefones.add(new Telefone("11", "95555-9999"))
cliente5.telefones.add(new Telefone("11", "95555-0000"))

EmpresaTwiiter.clientes.add(cliente1)
EmpresaTwiiter.clientes.add(cliente2)
EmpresaTwiiter.clientes.add(cliente3)
EmpresaTwiiter.clientes.add(cliente4)
EmpresaTwiiter.clientes.add(cliente5)

console.log(EmpresaTwiiter.detalhes())
