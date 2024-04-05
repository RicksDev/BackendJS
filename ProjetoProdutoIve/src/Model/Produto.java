package Model;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;


public class Produto {
	private int codUnico;
	private String nomeProd;
	private String descricao;
	private int quantidade;
	private double preco;
	
	public int getCodUnico() {
		return codUnico;
	}
	public void setCodUnico(int codUnico) {
		this.codUnico = codUnico;
	}
	public String getNomeProd() {
		return nomeProd;
	}
	public void setNomeProd(String nomeProd) {
		this.nomeProd = nomeProd;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public int getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	public double getPreco() {
		return preco;
	}
	public void setPreco(double preco) {
		this.preco = preco;
	}
	
	
	public Produto(int codUnico, String nomeProd, String descricao, int quantidade, double preco) {
		super();
		this.codUnico = codUnico;
		this.nomeProd = nomeProd;
		this.descricao = descricao;
		this.quantidade = quantidade;
		this.preco = preco;
	}
	
	public Produto() {};
	
	Scanner sc = new Scanner(System.in);
	
	
	
	
	public static void gravaEstoque(String fileName, int codUnico, String nomeProd, String descricao, int quantidade, double preco) {
	    try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true))) {
	    	String content = "Seu código é: " + codUnico + ".\nO Nomo do produto é: " + nomeProd + "\nA descrição do produto é: " + descricao  + "\nA quantidade do Produto é: " + quantidade + "\nO preço do produto é: " + preco;
	        writer.write("\n" + content);
	        //System.out.println("Conteúdo escrito no arquivo com sucesso");
	    } catch (IOException e) {
	        System.err.println("Erro ao escrever no arquivo: " + e.getMessage());
	    }
	}

	
	public static String exibirDetalhes(String fileName) {
		StringBuilder content = new StringBuilder();
		try(BufferedReader reader = new BufferedReader(new FileReader(fileName))){
			String line;

			while((line = reader.readLine()) != null) { 
				content.append(line).append("\n");
				System.out.println(" ");
			}
		} catch (IOException e) {
			System.out.println("Erro ao ler o arquivo " + e.getMessage());
		} 
		return content.toString();
	}
	
	public static boolean isName(String str) {
		boolean retorno = false;
		int contador = str.length();
		if (contador < 3) {
			System.err.println("*Digite um valor maior que 3(três) caracteres");
		} else {
			if (str != null && str.matches("[a-z]*")) {
				retorno = true;
			}
		}
 
		return retorno;
	}
	String nome;
	
	public void cadastrarProduto() {
		boolean validador = false;
		do {
			System.out.println("Qual é o seu nome?");
			nome = sc.next();
			try {
				if (Produto.isName(nome)) {
					validador = true;
				} else {
					System.err.println("Por favor, digite um valor válido. Números não são permitidos!!");
					nome = "";
				}
			} catch (Exception e) {
				System.err.println("Precisamos de um valor válido!!");
				System.err.println("[ERRO!!] Por favor, reinicie o Sistema e tente novamente :(");
				System.exit(0);
			}

		} while (validador == false);
		
		System.out.println("Seja bem-vindo " + nome + ". CADASTRO DE PRODUTO:");
		
		System.out.println("Digite o código do produto: ");
		int codProd = sc.nextInt();
		
		boolean validador1 = false;
		String nomeProd;
		do {
			System.out.println("Digite o nome do produto: ");
			nomeProd = sc.next();
			try {
				if (Produto.isName(nomeProd)) {
					validador1 = true;
				} else {
					System.err.println("Por favor, digite um valor válido. Números não são permitidos!!");
					nome = "";
				}
			} catch (Exception e) {
				System.err.println("Precisamos de um valor válido!!");
				System.err.println("[ERRO!!] Por favor, reinicie o Sistema e tente novamente :(");
				System.exit(0);
			}

		} while (validador1 == false);
		
		System.out.println("Digite a descrição do produto: ");
		String descProd = sc.next();
		
		System.out.println("Digite a quantidade: ");
		int quant = sc.nextInt();
		
		System.out.println("Digite o preço: ");
		double preco = sc.nextDouble();
		
		gravaEstoque("estoque.txt", codProd,nomeProd,descProd, quant, preco);
		String content = exibirDetalhes("estoque.txt");
		System.out.println("Conteúdo lido do arquivo: " + content);
	}
	
	public void menu() {
		System.out.println("==================================");
		System.out.println("Bem-vindo ao menu de opções. Digite a opção desejada.");
		System.out.println("==================================");
		System.out.println("");
		System.out.println("1 - Cadastrar produto");
		System.out.println("2 - Cadastrar Alimento");
		System.out.println("3 - Cadastrar Eletrônico");
		
		
		
	}
	
		
}
