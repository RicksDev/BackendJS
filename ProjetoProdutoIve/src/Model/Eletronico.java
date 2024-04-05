package Model;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Eletronico extends Produto{
	private String marca;
	private String modelo;
	
	public Eletronico(int codUnico, String nomeProd, String descricao, int quantidade, double preco, String marca,
			String modelo) {
		super(codUnico, nomeProd, descricao, quantidade, preco);
		this.marca = marca;
		this.modelo = modelo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}
	
	Scanner sc = new Scanner(System.in);
	
	
	
	public static void gravaEstoque(String fileName, int codUnico, String nomeProd, String descricao, int quantidade, double preco, String marca, String modelo) {
	    try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName, true))) {
	    	String content = "Seu código é: " + codUnico + ".\nO Nome do produto é: " + nomeProd + "\nA descrição do produto é: " + descricao  + "\nA quantidade do Produto é: " + quantidade + "\nO preço do produto é: " + preco + "\nMarca é:" + marca + "\nModelo:" + modelo;
	        writer.write(content);
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
		
		public void cadastrarEletronico() {
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
		
		System.out.println("Digite a data de validade: ");
		String dataValidade = sc.next();
		
		System.out.println("Digite a marca do eletrônico: ");
		String marca = sc.next();
		
		System.out.println("Digite o modelo do eletrônico: ");
		String modelo = sc.next();
		
		gravaEstoque("estoque.txt", codProd,nomeProd,descProd, quant, preco, marca, modelo);
		String content = exibirDetalhes("estoque.txt");
		System.out.println("Conteúdo lido do arquivo: " + content);
	}
	public Eletronico() {};
	

	
	
}
	
